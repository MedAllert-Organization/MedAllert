
import type { Medication } from "../../repositories/medications.js";
import type { VisualTypes } from "../../repositories/visual_types.js";
import type { User } from "../../repositories/users.js";
import type { Timezone } from "../../infra/prisma/generated/prisma/index.js";

export class MockPrismaUsers {
  users: User[] = [];
  timezones: Timezone[] = [];

  constructor(timezones: Timezone[]) {
    this.timezones = timezones;
  }

  create(query: { data: any }) {
    const newUser: User = {
      userId: `new-user-${this.users.length + 1}`,
      ...query.data,
      acceptedTosAt: new Date(),
      accountConfirmedAt: null,
    };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  findFirst(query: {
    where: { email?: string; accountConfirmedAt?: { not: null } };
  }) {
    const user = this.users.find(
      (u) =>
        u.email === query.where.email &&
        (query.where.accountConfirmedAt?.not === null
          ? u.accountConfirmedAt !== null
          : true),
    );
    return Promise.resolve(user || null);
  }

  findUnique(query: {
    where: { email?: string; userId?: string };
    include?: { timezone?: boolean };
  }) {
    const foundUser = this.users.find(
      (u) =>
        (query.where.email && u.email === query.where.email) ||
        (query.where.userId && u.userId === query.where.userId),
    );

    if (!foundUser) {
      return Promise.resolve(null);
    }

    let user: (User & { timezone?: Timezone | null }) | null = foundUser;

    if (user && query.include?.timezone) {
      const timezone = this.timezones.find(
        (tz) => tz.id === user?.timezoneId,
      );
      user = { ...user, timezone: timezone || null };
    }
    return Promise.resolve(user || null);
  }

  update(query: { where: { email?: string; userId?: string }; data: any }) {
    const userIndex = this.users.findIndex(
      (u) =>
        (query.where.email && u.email === query.where.email) ||
        (query.where.userId && u.userId === query.where.userId),
    );
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...query.data };
      return Promise.resolve(this.users[userIndex]);
    }
    return Promise.resolve(null);
  }

  delete(query: { where: { userId: string } }) {
    const userIndex = this.users.findIndex(
      (u) => u.userId === query.where.userId,
    );
    if (userIndex > -1) {
      const deletedUser = this.users.splice(userIndex, 1);
      return Promise.resolve(deletedUser[0]);
    }
    return Promise.resolve(null);
  }

  deleteMany() {
    return Promise.resolve({ count: 0 });
  }

  reset() {
    this.users = [];
  }
}

export class MockPrismaVisualTypes {
  visuals: VisualTypes[] = [];
  updateCalledWith: any;

  findUnique(query: { where: { visualId: string } }) {
    return Promise.resolve(
      this.visuals.find((v) => v.visualId === query.where.visualId) || null,
    );
  }
  findMany() {
    return Promise.resolve(this.visuals);
  }
  create(query: { data: any }) {
    const newVisual = {
      visualId: `new-visual-${this.visuals.length + 1}`,
      ...query.data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.visuals.push(newVisual);
    return Promise.resolve(newVisual);
  }
  update(query: { where: { visualId: string }; data: any }) {
    this.updateCalledWith = query;
    const visual = this.visuals.find(
      (v) => v.visualId === query.where.visualId,
    );
    if (visual) {
      const updated = { ...visual, ...query.data, updatedAt: new Date() };
      this.visuals = this.visuals.map((v) =>
        v.visualId === query.where.visualId ? updated : v,
      );
      return Promise.resolve(updated);
    }
    return Promise.resolve(null);
  }
  delete(query: { where: { visualId: string } }) {
    const visual = this.visuals.find(
      (v) => v.visualId === query.where.visualId,
    );
    if (visual) {
      this.visuals = this.visuals.filter(
        (v) => v.visualId !== query.where.visualId,
      );
      return Promise.resolve(visual);
    }
    return Promise.resolve(null);
  }
  reset() {
    this.visuals = [];
    this.updateCalledWith = null;
  }
}

export class MockPrismaMedications {
  medications: Medication[] = [];

  findUnique(query: { where: { medicationId: string } }) {
    return Promise.resolve(
      this.medications.find((m) => m.medicationId === query.where.medicationId) || null,
    );
  }

  findMany(query?: { where: { medicationId?: string | { in: string[] }; userId?: string } }) {
    let filteredMedications = this.medications;

    if (query?.where?.medicationId) {
      if (typeof query.where.medicationId === 'string') {
        filteredMedications = filteredMedications.filter(m => m.medicationId === query.where.medicationId);
      } else if (typeof query.where.medicationId === 'object' && query.where.medicationId !== null && 'in' in query.where.medicationId && Array.isArray((query.where.medicationId as { in: string[] }).in)) {
        filteredMedications = filteredMedications.filter(m => (query.where.medicationId as { in: string[] }).in.includes(m.medicationId));
      }
    }
    
    if (query?.where?.userId) {
      filteredMedications = filteredMedications.filter(m => m.userId === query.where.userId);
    }
    return Promise.resolve(filteredMedications);
  }
  
  create(query: { data: any }) {
    const newMedication: Medication = {
      medicationId: `new-medication-${this.medications.length + 1}`,
      ...query.data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.medications.push(newMedication);
    return Promise.resolve(newMedication);
  }

  update(query: { where: { medicationId: string }; data: any }) {
    const medicationIndex = this.medications.findIndex(
      (m) => m.medicationId === query.where.medicationId,
    );
    if (medicationIndex > -1) {
      this.medications[medicationIndex] = { ...this.medications[medicationIndex], ...query.data, updatedAt: new Date() };
      return Promise.resolve(this.medications[medicationIndex]);
    }
    return Promise.resolve(null);
  }

  delete(query: { where: { medicationId: string } }) {
    const medicationIndex = this.medications.findIndex(
      (m) => m.medicationId === query.where.medicationId,
    );
    if (medicationIndex > -1) {
      const deleted = this.medications.splice(medicationIndex, 1);
      return Promise.resolve(deleted[0]);
    }
    return Promise.resolve(null);
  }

  deleteMany() {
    const count = this.medications.length;
    this.medications = [];
    return Promise.resolve({ count });
  }

  reset() {
    this.medications = [];
  }
}


export class MockPrisma {
  timezones: Timezone[] = [];
  users = new MockPrismaUsers(this.timezones);
  visualTypes = new MockPrismaVisualTypes();
  medications = new MockPrismaMedications();

  $transaction(promises: any[]) {
    return Promise.all(promises);
  }
  annotations = {
    deleteMany: () => Promise.resolve({ count: 0 }),
  };
  notifications = {
    deleteMany: () => Promise.resolve({ count: 0 }),
  };
  treatmentShares = {
    deleteMany: () => Promise.resolve({ count: 0 }),
  };
  treatments = {
    deleteMany: () => Promise.resolve({ count: 0 }),
  };
  verificationCodes = {
    deleteMany: () => Promise.resolve({ count: 0 }),
  };
  reset() {
    this.users.reset();
    this.visualTypes.reset();
    this.medications.reset();
    this.timezones = [];
  }
}
