import Sound from "react-native-sound";
import type { SoundTypes, SoundTypesRepository } from "../repositories/sound_types.js";
import { resolve } from "node:path";
import { rejects } from "node:assert";
import { error } from "node:console";
import { success } from "zod/v4";

type playAlarmParams = {
    soundTypeId: string;
    volume?: number;
    loop?: boolean;
};

export class alarmService{
    constructor(private readonly soundType_repository: SoundTypesRepository){}
    private currentSound: Sound | null = null;

    async playAlarm({soundTypeId,volume=1.0,loop=true}:playAlarmParams){
        const soundType = await this.soundType_repository.findSoundType(soundTypeId);
        if(!soundType) throw new Error("Não foi possivel encontrar o som");

        const soundFile = soundType.sound;
        return new Promise<void>((resolve,rejects)=>{
            
            // Create sound object
            const sound = new Sound(soundFile);
            
            // Audio controls
            sound.setVolume(volume);
            sound.setPan(1);
            sound.setNumberOfLoops(loop ?-1:0);

            // Control what Sound do
            sound.play((success)=>{
                if(!success){
                    rejects(new Error("Falha ao tocar o som"));
                }
                this.currentSound = sound;
                resolve();
            }); // Android: raw IOS: Buddle
        });
    }
}