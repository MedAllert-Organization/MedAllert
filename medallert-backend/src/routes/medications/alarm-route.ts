import { AlarmService } from "../../services/alarm-service.ts";
import { describeRoute } from "hono-openapi";
import { Hono } from "hono";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.ts";

const alarmRoute = new Hono();
const alarmService = new AlarmService(defaultSoundTypesRepository);

alarmRoute.get(
    
);