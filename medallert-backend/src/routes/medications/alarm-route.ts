import { AlarmService } from "../../services/alarm-service.ts";
import { describeRoute } from "hono-openapi";
import { Hono } from "hono";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.ts";

const alarmRoute = new Hono();
const alarmService = new AlarmService(defaultSoundTypesRepository);

// get usado para um alarme
alarmRoute.get(
    "/:id",
    describeRoute({
    tags: ["Sound Types"],
    description:"Play the alarm",
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

// get usado para para o alarme
alarmRoute.get(
    "/:id",
    describeRoute({
    tags: ["Sound Types"],
    description:"Stop alarm",
    responses:{
        201: {
            description:"Successful stop alarm"
        },
        400:{
            description:"Failed to stop alarm"
        },
    },
}),
    async(c)=>{
        const soundId = c.req.param("id");
        try{
            const stopAlarm = await alarmService.stopAlarm();
            return c.json({success: true},200);
        }catch(error){
            return c.json({ error: (error as Error).message }, 400);
        }
    }
);

// get usado pra criar um alarme
alarmRoute.post(
    "/",
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
        const soundId = c.get("soundId" as any);
        try{
            
        }catch(error){
            return c.json({ error: (error as Error).message }, 400);
        }
    }
);