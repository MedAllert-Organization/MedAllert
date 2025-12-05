import { AlarmService, soundtype_schema, soundTypesID_SCHEMA } from "../../services/alarm-service.ts";
import { describeRoute } from "hono-openapi";
import { Hono } from "hono";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.ts";
import { validator } from "hono-openapi/zod";

const alarmRoute = new Hono();
const alarmService = new AlarmService(defaultSoundTypesRepository);

alarmRoute.get(
    "play/:id",
    describeRoute({
        tags: ["Sound Types"],
        description: "Play the alarm",
        responses: {
            201: {
                description: "Successful play alarm"
            },
            400: {
                description: "Failed to play alarm"
            },
        },
    }),
    validator("param",soundTypesID_SCHEMA),
    async (c) => {
        try{
            const soundId = c.req.param("id");
            await alarmService.playAlarm({soundTypeId: soundId});
            return c.json({message: "Alarm started sucessfully"},201);
        }catch(err:any){
            return c.json({message:"Alarm Failed sucessfully"},400);
        }
    }
);

alarmRoute.get(
    "stop/:id",
    describeRoute({
        tags: ["Sound Types"],
        description: "Stop alarm",
        responses: {
            201: {
                description: "Successful stop alarm"
            },
            400: {
                description: "Failed to stop alarm"
            },
        },
    }),
    validator("param", soundTypesID_SCHEMA),
    async (c) => {
        try{
            alarmService.stopAlarm();
            return c.json({message:"Alarm stop Sucessfully"},201);
        }catch(err:any){
            return c.json({message:"Alarm stop Failed"},400);
        }
    }
);

alarmRoute.post(
    "/",
    describeRoute({
        tags: ["Sound Type"],
        description: "Post a new alarm",
        responses: {
            201: {
                description: "Successful post alarm"
            },
            400: {
                description: "Failed to post alarm"
            },
        },
    }),
    validator("json",soundtype_schema),
    async (c) => {
        const soundVar = c.req.valid("json");
        const [ok,error,createSound] = await alarmService.createAlarm(soundVar);
        if(!ok||!createSound) return c.json({success:false,error},400);
        return c.json({success:true,createSound},200);
    }
);

alarmRoute.put(
    "/:id",
    describeRoute({
        tags: ["Sound Type"],
        description: "Update Sound",
        responses: {
            201: {
                description: "Successful update alarm"
            },
            400: {
                description: "Failed to update alarm"
            },
        },
    }),
    validator("param",soundTypesID_SCHEMA),
    validator("json",soundtype_schema),
    async (c) => {
        const soundId = c.req.param("id");
        const soundVar = c.req.valid("json");
        const [ok,error,updateAlarm] = await alarmService.updateAlarm(soundId,soundVar);
        if(!ok||!updateAlarm) return c.json({success:false,error},400);
        return c.json({success:true,updateAlarm},200);  
    }
);

alarmRoute.delete(
    "/:id",
    describeRoute({
        tags: ["Sound Type"],
        description: "Delete Sound",
        responses: {
            201: {
                description: "Successful delete alarm"
            },
            400: {
                description: "Failed to delete alarm"
            },
        },
    }),
    validator("param",soundTypesID_SCHEMA),
    async(c)=>{
        const soundId = c.req.param("id");
        const [ok,error,deleteAlarm] = await alarmService.deleteAlarm(soundId);
        if(!ok||!deleteAlarm) return c.json({success:false,error},400);
        return c.json({sucess:true,deleteAlarm},200);
    }
);