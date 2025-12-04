import { AlarmService } from "../../services/alarm-service.ts";
import { describeRoute } from "hono-openapi";
import { Hono } from "hono";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.ts";

const alarmRoute = new Hono();
const alarmService = new AlarmService(defaultSoundTypesRepository);

alarmRoute.get("/:id",
    describeRoute({
    tags: ["Sound Types"],
    description:"Bring the alarm",
    responses:{
        201: {
            description:"Successful play alarm"
        },
        400:{
            description:"Failed to play alarm"
        },
    },
}),
    async(c)=>{
        
    }
);

alarmRoute.post("/",
    describeRoute({
        tags: ["Sound Type"],
        description:"Post a new alarm",
        responses:{
            200:{
                description:"Successful post alarm"
            },
            400:{
                description:"Failed to post alarm"
            },
        },
    }),
    async(c)=>{
        
    }
);