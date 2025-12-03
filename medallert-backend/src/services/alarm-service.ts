import Sound from "react-native-sound";
import type { SoundTypesRepository } from "../repositories/sound_types.js";

type playAlarmParams = {
  soundTypeId: string;
  volume?: number;
  loop?: boolean;
};

export class AlarmService {
  constructor(private readonly soundType_repository: SoundTypesRepository) {}

  private currentSound: Sound | null = null;

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
