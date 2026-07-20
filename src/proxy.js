import { NextResponse } from "next/server";

export function proxy(req) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host");
  const domain= "gsm-sistemi.it"

  console.log("Middleware attivato per:", pathname);
  console.log("Modalità manutenzione:", process.env.MAINTENANCE_MODE);

  if (host === domain) {
    const url = req.nextUrl.clone();
    url.host = "www."+domain;
    return NextResponse.redirect(url, 301); // 301 = Permanente
  }

  // Se la manutenzione NON è attiva, lascia passare tutto
  if (process.env.MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  // Evita loop sulla pagina di manutenzione e su risorse statiche
  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Reindirizza tutto il traffico alla pagina provvisoria
  return NextResponse.redirect(new URL("/maintenance", req.url));
}

// Applica il middleware a tutte le route
export const config = {
  matcher: ["/((?!manifest.json|icons|_next/static|_next/image|favicon.ico|images|api).*)"],
};
