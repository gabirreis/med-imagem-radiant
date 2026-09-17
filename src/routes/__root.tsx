import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { SITE_DESCRIPTION } from "@/config/site";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

const GTM_ID = "GTM-TWRVN6K7";
const ADOPT_WEBSITE_ID = "65429042-7dc4-4be1-9cae-8b1607a873ce";

// ported from index.html — Google Tag Manager bootstrap
const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // Fallback title/description — each route overrides via its own head()
      { title: "Med Imagem São Mateus – Diagnóstico por Imagem" },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Med Imagem São Mateus" },
      // Adopt – cookie consent management
      { name: "adopt-website-id", content: ADOPT_WEBSITE_ID },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      { children: gtmScript },
      {
        src: `//tag.goadopt.io/injector.js?website_code=${ADOPT_WEBSITE_ID}`,
        className: "adopt-injector",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — ported from index.html */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="mb-2 text-2xl font-bold text-foreground">Esta página não carregou</h1>
        <p className="mb-6 text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar novamente ou voltar para o início.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Tentar novamente
          </button>
          <a className="rounded-md border border-border bg-card px-4 py-2 text-foreground" href="/">
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}
