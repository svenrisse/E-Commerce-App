import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  getAllItems: protectedProcedure.query(({ ctx }) => {
    return ctx.db.item.findMany();
  }),
});
