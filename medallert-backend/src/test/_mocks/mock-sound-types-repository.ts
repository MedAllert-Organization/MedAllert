import { jest } from "@jest/globals";
import type {
  SoundTypes,
  SoundTypesRepository,
} from "../../repositories/sound_types.js";

export class MockSoundTypesRepository implements SoundTypesRepository {

  public soundTypes: (SoundTypes & { soundId: string })[] = [];

  findSoundType = jest.fn(
    async (id: string): Promise<SoundTypes | null> => {
      return (
        this.soundTypes.find((soundType) => soundType.soundId === id) ||
        null
      );
    },
  );

  findAllSounds = jest.fn(async (): Promise<SoundTypes[] | null> => {
    return this.soundTypes;
  });

  addSoundType = jest.fn(
    async (newSoundType: { sound: string }): Promise<SoundTypes | null> => {
      const soundType = {
        soundId: `sound-type-${this.soundTypes.length + 1}`,
        ...newSoundType,
      };
      this.soundTypes.push(soundType);
      return soundType;
    },
  );

  updateSoundType = jest.fn(
    async (
      id: string,
      updateSoundType: {
        sound?: string | null;
      },
    ): Promise<SoundTypes | null> => {
      const soundTypeIndex = this.soundTypes.findIndex(
        (soundType) => soundType.soundId === id,
      );
      if (soundTypeIndex === -1) {
        return null;
      }
      
      const currentSoundType = this.soundTypes[soundTypeIndex];
      const updatedSoundType = { ...currentSoundType };

      if (updateSoundType.sound) {
        updatedSoundType.sound = updateSoundType.sound;
      }

      this.soundTypes[soundTypeIndex] = updatedSoundType;
      return updatedSoundType;
    },
  );

  deleteSoundType = jest.fn(
    async (id: string): Promise<SoundTypes | null> => {
      const soundTypeIndex = this.soundTypes.findIndex(
        (soundType) => soundType.soundId === id,
      );
      if (soundTypeIndex === -1) {
        return null;
      }
      const [deletedSoundType] = this.soundTypes.splice(soundTypeIndex, 1);
      return deletedSoundType;
    },
  );
}
