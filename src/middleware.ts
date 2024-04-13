import { authMiddleware } from "@clerk/nextjs";
import { minify } from "next/dist/build/swc";

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
