import { type GetServerSidePropsContext } from "next";
import { supabase } from "~/lib/supabase";
import { createServerSideClient } from "~/lib/supabase-server";

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  const { auth } = createServerSideClient(ctx);

  const currentUser = await auth.getUser();

  return currentUser.data.user;
};
