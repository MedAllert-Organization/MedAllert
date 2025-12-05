import { ok } from "assert";
import Sound from "react-native-sound";
import { error, t } from "try";
import z from "zod";
import { SoundFormatEnum } from "../infra/prisma/generated/prisma/index.js";
import type { SoundTypesRepository } from "../repositories/sound_types.js";

type playAlarmParams = {
  soundTypeId: string;
  volume?: number;
  loop?: boolean;
};

export const soundTypesID_SCHEMA = z.object({
  soundId: z.string().min(1)
})

export const soundtype_schema = z.object({
  name: z.string().min(1),
  duration: z.number().positive(),
  format: z.nativeEnum(SoundFormatEnum),
  sound: z.string().min(1)
});

export class AlarmService {
  constructor(private readonly soundType_repository: SoundTypesRepository) {}

  private currentSound: Sound | null = null;

  async createAlarm(
    payload:{name:string,duration:number,format:string,sound:string}
  ){
    return t(async () => {
    const createdAlarm = await this.soundType_repository.addSoundType(payload);

    if (!createdAlarm)
      throw new Error("Failed to create alarm in database");

    return createdAlarm;
  });
  }
  
  async deleteAlarm(soundTypeId: string){
    return t(async() => {
      const findAlarm = 
      await this.soundType_repository.findSoundType(soundTypeId);
    
      if(!findAlarm)
        return error("Alarm doesn't exist");
    
      const deletedSound = await 
      this.soundType_repository.deleteSoundType(soundTypeId)
    
      if(!deletedSound)
        return error("Failed to delete sound");
      return ok(deletedSound);
    });
  }

  async updateAlarm(
    soundTypeId:string,
    payload:{name:string,duration:number,format:SoundFormatEnum,sound:string}){
      return t(async () =>{
        const findAlarm = 
        await this.soundType_repository.findSoundType(soundTypeId);
      
        if(!findAlarm)
          return error("Alarm doesn't exist");
        
        const validation = soundtype_schema.safeParse({
          payload
        });

        const [updateOk,updateErr,updateAlarm] = await t(
          this.soundType_repository.updateSoundType(
            soundTypeId,payload
          )
        )
        if(!updateOk||!updateAlarm)
          return error("Failed in update sound");
        return ok(updateAlarm);
      });
  }

  async playAlarm({ soundTypeId, volume = 1.0, loop = true }: playAlarmParams) {
    const soundType = await this.soundType_repository.findSoundType(soundTypeId);

    if (!soundType) {
      throw new Error("Não foi possível encontrar o som");
    }

    const soundFile = soundType.sound;

    return new Promise<void>((resolve, reject) => {
      const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          reject(new Error("Erro ao carregar o arquivo de som: " + error.message));
          return;
        }

        sound.setVolume(volume);
        sound.setNumberOfLoops(loop ? -1 : 0);

        sound.play((success) => {
          if (!success) {
            reject(new Error("Falha ao reproduzir o som"));
            return;
          }

          this.currentSound = sound;
          resolve();
        });
      });
    });
  }

  stopAlarm() {
    if (this.currentSound) {
      this.currentSound.stop();
      this.currentSound.release();
      this.currentSound = null;
    }
  }
}
