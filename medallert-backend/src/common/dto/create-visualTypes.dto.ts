import type { VisualTypeEnum, VisualSizeEnum, VisualPatternEnum } from "../../repositories/visual_types.js";

export interface CreateVisualTypeDTO {
  visualType?: VisualTypeEnum;
  size?: VisualSizeEnum;
  color1: string;
  color2?: string;
  pattern?: VisualPatternEnum;
  rotation?: number;
  opacity?: number;
  treatmentMedicationId?: string;
}