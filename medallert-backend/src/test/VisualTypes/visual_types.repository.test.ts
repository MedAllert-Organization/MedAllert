
import { jest } from "@jest/globals";
import { PrismaVisualTypesRepository, VisualPatternEnum, VisualSizeEnum, VisualTypeEnum } from "../../repositories/visual_types.js";

const mockPrisma = {
  visualTypes: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

const mockTreatmentMedicationRepository = {
  updateTreatmentMedication: jest.fn(),
  findTreatmentMedicationById: jest.fn(),
  addTreatmentMedication: jest.fn(),
  deleteTreatmentMedication: jest.fn(),
  findTreatmentMedicationsByTreatmentId: jest.fn(),
};

describe("PrismaVisualTypesRepository", () => {
  let repository;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new PrismaVisualTypesRepository(mockPrisma, mockTreatmentMedicationRepository);
  });

  describe("findVisualType", () => {
    it("should return a visual type when found", async () => {
      const visualId = "visual-123";
      const expectedVisual = {
        visualId,
        visualType: VisualTypeEnum.CAPSULE,
        size: VisualSizeEnum.MEDIUM,
        color1: "#FF0000",
        pattern: VisualPatternEnum.SOLID,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrisma.visualTypes.findUnique.mockResolvedValue(expectedVisual);

      const result = await repository.findVisualType(visualId);

      expect(mockPrisma.visualTypes.findUnique).toHaveBeenCalledWith({
        where: { visualId },
      });
      expect(result).toEqual(expectedVisual);
    });

    it("should return null when not found", async () => {
      const visualId = "non-existent-id";
      mockPrisma.visualTypes.findUnique.mockResolvedValue(null);

      const result = await repository.findVisualType(visualId);

      expect(mockPrisma.visualTypes.findUnique).toHaveBeenCalledWith({
        where: { visualId },
      });
      expect(result).toBeNull();
    });
  });

  describe("findAllVisuals", () => {
    it("should return an array of visual types", async () => {
      const expectedVisuals = [
        { visualId: "1", visualType: VisualTypeEnum.PILL },
        { visualId: "2", visualType: VisualTypeEnum.TABLET },
      ];
      mockPrisma.visualTypes.findMany.mockResolvedValue(expectedVisuals);

      const result = await repository.findAllVisuals();

      expect(mockPrisma.visualTypes.findMany).toHaveBeenCalled();
      expect(result).toEqual(expectedVisuals);
    });

    it("should return null if prisma throws an error", async () => {
      mockPrisma.visualTypes.findMany.mockResolvedValue(null);

      const result = await repository.findAllVisuals();

      expect(result).toBeNull();
    });
  });

  describe("addVisualType", () => {
    it("should create a visual type and update the treatment medication", async () => {
      const createDto = {
        treatmentMedicationId: "tm-123",
        visualType: VisualTypeEnum.DROP,
        size: VisualSizeEnum.SMALL,
        color1: "#0000FF",
        pattern: VisualPatternEnum.DOTS,
      };
      const createdVisual = {
        visualId: "new-visual-id",
        ...createDto,
      };
      mockPrisma.visualTypes.create.mockResolvedValue(createdVisual);
      mockTreatmentMedicationRepository.updateTreatmentMedication.mockResolvedValue({});

      const result = await repository.addVisualType(createDto);

      expect(mockPrisma.visualTypes.create).toHaveBeenCalledWith({
        data: {
          visualType: createDto.visualType,
          size: createDto.size,
          color1: createDto.color1,
          color2: undefined,
          pattern: createDto.pattern,
          rotation: undefined,
          opacity: undefined,
        },
      });
      expect(mockTreatmentMedicationRepository.updateTreatmentMedication).toHaveBeenCalledWith(
        "tm-123",
        { visualTypeId: "new-visual-id" }
      );
      expect(result).toEqual(createdVisual);
    });
  });

  describe("updateVisualType", () => {
    it("should update a visual type", async () => {
      const visualId = "visual-to-update";
      const updateDto = { color1: "#FFFFFF", opacity: 0.5 };
      const updatedVisual = { visualId, ...updateDto };
      mockPrisma.visualTypes.update.mockResolvedValue(updatedVisual);

      const result = await repository.updateVisualType(visualId, updateDto);

      expect(mockPrisma.visualTypes.update).toHaveBeenCalledWith({
        where: { visualId },
        data: { ...updateDto },
      });
      expect(result).toEqual(updatedVisual);
    });

     it('should not include undefined fields in the update', async () => {
      const visualId = 'vt-1';
      const updateData = {
        color1: '#FFFFFF',
        size: undefined,
      };

      mockPrisma.visualTypes.update.mockResolvedValue({
        visualId,
        color1: '#FFFFFF',
      });

      await repository.updateVisualType(visualId, updateData);

      expect(mockPrisma.visualTypes.update).toHaveBeenCalledWith({
        where: { visualId },
        data: {
          color1: '#FFFFFF',
        },
      });
    });
  });

  describe("deleteVisualType", () => {
    it("should delete a visual type", async () => {
      const visualId = "visual-to-delete";
      const deletedVisual = { visualId };
      mockPrisma.visualTypes.delete.mockResolvedValue(deletedVisual);

      const result = await repository.deleteVisualType(visualId);

      expect(mockPrisma.visualTypes.delete).toHaveBeenCalledWith({
        where: { visualId },
      });
      expect(result).toEqual(deletedVisual);
    });
  });
});
