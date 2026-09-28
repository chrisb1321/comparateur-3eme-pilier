import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SCHEDULED_REDIRECTS } from "@/lib/indexing";
import { isPublicPostDate } from "@/lib/publication";
import { WP_IDS } from "@/lib/wp-ids";

function barePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const url = request.nextUrl.clone();

  if (host === "www.comparateur-3eme-pilier.ch") {
    url.hostname = "comparateur-3eme-pilier.ch";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const path = barePath(url.pathname);
  if (path === "/category/prevoyance") {
    url.pathname = "/actualite-3eme-pilier/";
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  const scheduled = SCHEDULED_REDIRECTS.find((item) => item.from === path);
  if (scheduled) {
    url.pathname = isPublicPostDate(scheduled.published) ? scheduled.to : scheduled.fallback;
    url.search = "";
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
