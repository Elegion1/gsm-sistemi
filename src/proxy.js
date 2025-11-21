import { NextResponse } from "next/server";

export function proxy(req) {
  const { pathname } = req.nextUrl;

  console.log("Middleware attivato per:", pathname);
  console.log("Modalità manutenzione:", process.env.MAINTENANCE_MODE);

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
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
