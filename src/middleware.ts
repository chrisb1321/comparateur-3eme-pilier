import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { WP_IDS } from "@/lib/wp-ids";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const url = request.nextUrl.clone();

  if (host === "www.comparateur-3eme-pilier.ch") {
    url.hostname = "comparateur-3eme-pilier.ch";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const rawId =
    url.searchParams.get("p") ?? url.searchParams.get("page_id") ?? "";
  if (rawId && WP_IDS[rawId]) {
    url.pathname = WP_IDS[rawId];
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
