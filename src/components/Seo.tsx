import { useEffect } from "react";
import { SITE_NAME, SITE_URL, SITE_SOCIAL_IMAGE } from "@/config/site";

interface SeoProps {
  title: string;
  description: string;
  /** Caminho da página, ex: "/blog/outubro-rosa-2026". Vazio = home. */
  path?: string;
  /** Imagem de compartilhamento (absoluta ou relativa). */
  image?: string;
  type?: "website" | "article";
  /** Dados estruturados schema.org (um objeto ou vários). */
  jsonLd?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Define título, meta tags (description, Open Graph, Twitter), canonical e
 * dados estruturados (JSON-LD) por página. Implementação própria via DOM,
 * confiável para SPA client-side.
 */
const Seo = ({ title, description, path = "", image, type = "website", jsonLd }: SeoProps) => {
  const jsonLdStr = jsonLd ? JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : "";

  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : SITE_SOCIAL_IMAGE;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", url);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", img);

    // JSON-LD (remove os anteriores desta página e injeta os atuais)
    document.head.querySelectorAll('script[data-seo="jsonld"]').forEach((s) => s.remove());
    if (jsonLdStr) {
      const blocks: object[] = JSON.parse(jsonLdStr);
      blocks.forEach((block) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.setAttribute("data-seo", "jsonld");
        s.textContent = JSON.stringify(block);
        document.head.appendChild(s);
      });
    }

    return () => {
      document.head.querySelectorAll('script[data-seo="jsonld"]').forEach((s) => s.remove());
    };
  }, [title, description, path, image, type, jsonLdStr]);

  return null;
};

export default Seo;
