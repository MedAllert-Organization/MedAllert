import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { z } from "zod";
import type { Env } from "../../common/type-helpers.js";
import { sharingService } from "../../services/sharing-service.js";

export const sharing = new Hono<Env>();

const ShareTreatmentSchema = z.object({
  email: z.string().email(),
});

const RemoveShareSchema = z.object({
  userId: z.string(),
});

const TreatmentIdParamSchema = z.object({
  treatmentId: z.string(),
});

sharing.post(
  "/:treatmentId/share",
  describeRoute({
    tags: ["Treatment Sharing"],
    description: "Share a treatment with another user",
    responses: {
      204: {
        description: "Treatment shared successfully",
      },
      400: {
        description: "Bad request",
      },
      404: {
        description: "Treatment not found or user to share with not found",
      },
    },
  }),
  validator("param", TreatmentIdParamSchema),
  validator("json", ShareTreatmentSchema),
  async (c) => {
    const userId = c.get("userId");
    if (!userId) {
      return c.json({ success: false }, 400);
    }

    const { treatmentId } = c.req.valid("param");
    const { email } = c.req.valid("json");
    const result = await sharingService.shareTreatment(
      userId,
      treatmentId,
      email,
    );

    if (!result.ok) {
      return c.json(
        { success: false, error: (result.error as Error).message },
        400,
      );
    }
    return c.body(null, 204);
  },
);

sharing.delete(
  "/:treatmentId/share",
  describeRoute({
    tags: ["Treatment Sharing"],
    description: "Remove a shared treatment from a user",
    responses: {
      204: {
        description: "Treatment sharing removed successfully",
      },
      400: {
        description: "Bad request",
      },
      404: {
        description: "Treatment not found",
      },
    },
  }),
  validator("param", TreatmentIdParamSchema),
  validator("json", RemoveShareSchema),
  async (c) => {
    const ownerId = c.get("userId");
    if (!ownerId) {
      return c.json({ success: false }, 400);
    }
    const { treatmentId } = c.req.valid("param");
    const { userId } = c.req.valid("json");
    const result = await sharingService.removeSharing(
      ownerId,
      treatmentId,
      userId,
    );

    if (!result.ok) {
      return c.json(
        { success: false, error: (result.error as Error).message },
        400,
      );
    }
    return c.body(null, 204);
  },
);

sharing.get(
  "/:treatmentId/share",
  describeRoute({
    tags: ["Treatment Sharing"],
    description: "List all users a treatment is shared with",
    responses: {
      200: {
        description: "A list of users the treatment is shared with",
      },
      400: {
        description: "Bad request",
      },
      404: {
        description: "Treatment not found",
      },
    },
  }),
  validator("param", TreatmentIdParamSchema),
  async (c) => {
    const userId = c.get("userId");
    if (!userId) {
      return c.json({ success: false }, 400);
    }

    const { treatmentId } = c.req.valid("param");
    const result = await sharingService.listSharedUsers(userId, treatmentId);

    if (!result.ok) {
      return c.json(
        { success: false, error: (result.error as Error).message },
        400,
      );
    }
    return c.json({ success: true, users: result.value }, 200);
  },
);

sharing.get(
  "/shared-with-me",
  describeRoute({
    tags: ["Treatment Sharing"],
    description: "List all treatments shared with the current user",
    responses: {
      200: {
        description: "A list of treatments shared with the current user",
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

    const result = await sharingService.listSharedTreatments(userId);

    if (!result.ok) {
      return c.json(
        { success: false, error: (result.error as Error).message },
        400,
      );
    }
    return c.json({ success: true, treatments: result.value }, 200);
  },
);

sharing.delete(
  "/shared",
  describeRoute({
    tags: ["Treatment Sharing"],
    description: "Remove all sharings for all treatments of the current user",
    responses: {
      204: {
        description:
          "All treatment sharings from the user removed successfully",
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

    const result = await sharingService.removeAllSharingsFromOwner(userId);

    if (!result.ok) {
      return c.json(
        { success: false, error: (result.error as Error).message },
        400,
      );
    }
    return c.body(null, 204);
  },
);
