import { NextRequest, NextResponse } from "next/server";
import constants from "@/lib/Constants";

const isUuid = /^[\da-f-]+$/i;

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const res = NextResponse.rewrite(url);

  let userId = req.cookies.get(constants.uuid_cookie);
  let hasUserId = !!userId;

  if (!hasUserId) {
    res?.cookies?.set(constants.uuid_cookie, crypto.randomUUID(), {
      maxAge: 60 * 60 * 24 * 30, // 1 month
    });
  }

  return res;
}
