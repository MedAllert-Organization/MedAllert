import { defaultTimezoneRepository, type TimezoneRepository } from "../repositories/timezone.ts";

class TimezoneService {
    constructor(private readonly timezoneRepository: TimezoneRepository) {}

    async getAllTimezones(){
        return await this.timezoneRepository.getAll();
    }
}

export const defaultTimezoneService = new TimezoneService(defaultTimezoneRepository);