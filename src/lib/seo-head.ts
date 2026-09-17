import { SITE_NAME, SITE_URL, SITE_SOCIAL_IMAGE } from "@/config/site";

interface SeoHeadOptions {
  title: string;
  description: string;
  /** Page path, e.g. "/blog/outubro-rosa-2026". Empty = home. */
  path?: string;
  /** Share image (absolute or relative). */
  image?: string;
  type?: "website" | "article";
  /** schema.org structured data (one object or several). */
  jsonLd?: object | object[];
}

/**
 * Builds a TanStack Start route `head()` result mirroring the client-side
 * <Seo> component, so titles/descriptions/OG tags are server-rendered too.
 */
export function seoHead({ title, description, path = "", image, type = "website", jsonLd }: SeoHeadOptions) {
  const url = `${SITE_URL}${path}`;
  const img = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : SITE_SOCIAL_IMAGE;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: blocks.map((block) => ({
      type: "application/ld+json",
      children: JSON.stringify(block),
    })),
  };
}
