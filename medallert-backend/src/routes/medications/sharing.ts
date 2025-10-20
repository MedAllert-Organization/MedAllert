import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { z } from "zod";
import { sharingService } from "../../services/sharing-service.js";
import type { Env } from "../../common/type-helpers.js";

export const sharing = new Hono<Env>();

const ShareMedicationSchema = z.object({
  email: z.string().email(),
});

const RemoveShareSchema = z.object({
  userId: z.string(),
});

const MedicationIdParamSchema = z.object({
  medicationId: z.string(),
});

sharing.post(
  "/:medicationId/share",
  describeRoute({
    tags: ["Medication Sharing"],
    description: "Share a medication with another user",
    responses: {
      204: {
        description: "Medication shared successfully",
      },
      400: {
        description: "Bad request",
      },
      404: {
        description: "Medication not found or user to share with not found",
      },
    },
  }),
  validator("param", MedicationIdParamSchema),
  validator("json", ShareMedicationSchema),
  async (c) => {
    const userId = c.get("userId");
    if (!userId) {
      return c.json({ success: false }, 400);
    }

    const { medicationId } = c.req.valid("param");
    const { email } = c.req.valid("json");
    const [ok, error] = await sharingService.shareMedication(
      userId,
      medicationId,
      email,
    );

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }
    return c.body(null, 204);
  },
);

sharing.delete(
  "/:medicationId/share",
  describeRoute({
    tags: ["Medication Sharing"],
    description: "Remove a shared medication from a user",
    responses: {
      204: {
        description: "Medication sharing removed successfully",
      },
      400: {
        description: "Bad request",
      },
      404: {
        description: "Medication not found",
      },
    },
  }),
  validator("param", MedicationIdParamSchema),
  validator("json", RemoveShareSchema),
  async (c) => {
    const ownerId = c.get("userId");
    if (!ownerId) {
      return c.json({ success: false }, 400);
    }
    const { medicationId } = c.req.valid("param");
    const { userId } = c.req.valid("json");
    const [ok, error] = await sharingService.removeSharing(
      ownerId,
      medicationId,
      userId,
    );

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }
    return c.body(null, 204);
  },
);

sharing.get(
  "/:medicationId/share",
  describeRoute({
    tags: ["Medication Sharing"],
    description: "List all users a medication is shared with",
    responses: {
      200: {
        description: "A list of users the medication is shared with",
      },
      400: {
        description: "Bad request",
      },
      404: {
        description: "Medication not found",
      },
    },
  }),
  validator("param", MedicationIdParamSchema),
  async (c) => {
    const userId = c.get("userId");
    if (!userId) {
      return c.json({ success: false }, 400);
    }

    const { medicationId } = c.req.valid("param");
    const [ok, error, users] = await sharingService.listSharedUsers(
      userId,
      medicationId,
    );

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }
    return c.json({ success: true, users }, 200);
  },
);

sharing.get(
  "/shared-with-me",
  describeRoute({
    tags: ["Medication Sharing"],
    description: "List all medications shared with the current user",
    responses: {
      200: {
        description: "A list of medications shared with the current user",
      },
      400: {
        description: "Bad request",
      },
    },
  }),
  async (c) => {
    const userId = c.get("userId");
    if (!userId) {
      return c.json({ success: false }, 400);
    }

    const [ok, error, medications] =
      await sharingService.listSharedMedications(userId);

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }
    return c.json({ success: true, medications }, 200);
  },
);
