import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultMedicationRepository } from "../../repositories/medications.js";
import { defaultNotificationRepository } from "../../repositories/notification.js";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.js";
import {
  NotificationIdParamSchema,
  NotificationSchema,
  NotificationService,
  NotificationUpdateSchema,
} from "../../services/notification-service.js";

export const notification = new Hono();

const notificationService = new NotificationService(
  defaultNotificationRepository,
  defaultMedicationRepository,
  defaultSoundTypesRepository,
);

notification.post(
  "/",
  describeRoute({
    tags: ["Notifications"],
    description: "Add a new notification",
    responses: {
      201: {
        description: "Successful notification creation",
      },
      400: {
        description: "failed to create notification",
      },
    },
  }),
  validator("json", NotificationSchema),
  async (c) => {
    const notificationCandidate = c.req.valid("json");
    const [ok, error, notification] = await notificationService.create(
      notificationCandidate,
    );

    if (!ok || !notification) return c.json({ success: false, error }, 400);

    return c.json({ success: true, notification: notification }, 201);
  },
);

notification.get(
  "/",
  describeRoute({
    tags: ["Notifications"],
    description: "List notifications",
    responses: {
      201: {
        description: "Successful notifications list",
      },
      400: {
        description: "failed list notifications",
      },
    },
  }),
  async (c) => {
    const [ok, error, notification] = await notificationService.getAll();

    if (!ok || !notification) return c.json({ success: false, error }, 400);

    return c.json({ success: true, notification: notification }, 201);
  },
);

notification.get(
  "/:id",
  describeRoute({
    tags: ["Notifications"],
    description: "Get a notification by ID",
    responses: {
      200: { description: "Notification found" },
      404: { description: "Notification not found" },
    },
  }),
  validator("param", NotificationIdParamSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const [ok, error, notification] = await notificationService.get(id);

    if (!ok || !notification) return c.json({ success: false, error }, 404);
    return c.json({ success: true, notification }, 200);
  },
);

notification.put(
  "/:id",
  describeRoute({
    tags: ["Notifications"],
    description: "Update a notification",
    responses: {
      200: { description: "Notification updated successfully" },
      400: { description: "Failed to update notification" },
      404: { description: "Notification not found" },
    },
  }),
  validator("param", NotificationIdParamSchema),
  validator("json", NotificationUpdateSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const updateData = c.req.valid("json");
    const [ok, error, updatedNotification] = await notificationService.update(
      id,
      updateData,
    );

    if (!ok || !updatedNotification)
      return c.json({ success: false, error }, 404);
    return c.json({ success: true, notification: updatedNotification }, 200);
  },
);

notification.delete(
  "/:id",
  describeRoute({
    tags: ["Notifications"],
    description: "Delete a notification",
    responses: {
      200: { description: "Notification deleted successfully" },
      404: { description: "Notification not found" },
    },
  }),
  validator("param", NotificationIdParamSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const [ok, error, deletedNotification] =
      await notificationService.delete(id);
    if (!ok || !deletedNotification)
      return c.json({ success: false, error }, 404);
    return c.json({ success: true, notification: deletedNotification }, 200);
  },
);
