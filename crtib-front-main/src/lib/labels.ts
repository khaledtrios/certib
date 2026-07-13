import { getCollection } from "./payload";

// ── Default labels (French) ─────────────────────────────────────────────────
// Used when the CMS has no document for the requested language, or the API is
// unreachable. Keep in sync with the `defaultValue` fields in UiLabels.ts.

export const DEFAULT_LABELS = {
  // General
  breadcrumb_home: "Accueil",
  download: "Télécharger",
  language_label: "Langue",
  no_translation: "pas de traduction disponible",

  // Newsletter
  newsletter_subscribe: "S'abonner",
  newsletter_sending: "Envoi…",
  newsletter_email_placeholder: "Votre adresse e-mail",
  newsletter_email_label: "Adresse e-mail",
  newsletter_success: "Merci ! Vous êtes maintenant abonné(e) à notre newsletter.",
  newsletter_error: "Une erreur est survenue. Veuillez réessayer.",
  newsletter_duplicate: "Cette adresse e-mail est déjà abonnée à notre newsletter.",

  // Calculator
  calc_trade_label: "Corps de métier",
  calc_trade_tooltip: "Tous les corps de métiers ne sont pas repris dans cette liste.",
  calc_market_label: "Valeur du marché",
  calc_market_unit: "en mio. d'€",
  calc_market_tooltip: "La valeur du marché doit être estimée aussi précisément que possible.",
  calc_duration_label: "Durée du marché",
  calc_duration_unit: "mois",
  calc_duration_tooltip: "La durée du marché doit être estimée aussi précisément que possible.",
  calc_submit: "VALIDER",

  // Formations
  formations_back: "Toutes les formations",
  formations_date: "Date",
  formations_duration: "Durée",
  formations_location: "Lieu",
  formations_participants: "Participants",
  formations_price: "Prix",
  formations_register_heading: "S'inscrire à cette formation",
  formations_register_online: "Inscription en ligne",
  formations_register_email: "Contacter",
  formations_see_detail: "Voir le détail →",
  formations_empty: "Aucune formation disponible dans cette langue.",
  formations_max_participants: "Max {n} participants",

  // News
  news_page_title: "Actualités",
  news_page_subtitle: "Retrouvez toutes les actualités, communiqués et événements du CRTI-B",
  news_filter_all: "Tout",
  news_read_article: "LIRE L'ARTICLE",
  news_read_all: "LIRE TOUTE L'ACTUALITÉ ›",
  news_other_title: "AUTRES ACTUALITÉS",
  news_empty: "Aucun contenu disponible dans cette langue",
  news_article_count_single: "article",
  news_article_count_plural: "articles",

  // Navigation
  see_pdf: "Voir le PDF",
  open: "Ouvrir",
  close: "Fermer",
  search: "Rechercher",
  previous: "Précédent",
  next: "Suivant",
  page_label: "Page",

  // Contact
  contact_coordinates_heading: "Nos coordonnées",
  contact_form_heading: "Envoyer un message",
  contact_name: "Nom",
  contact_name_placeholder: "Votre nom",
  contact_email_label: "Email",
  contact_subject: "Sujet",
  contact_subject_placeholder: "Choisir un sujet…",
  contact_message: "Message",
  contact_message_placeholder: "Votre message…",
  contact_submit: "Envoyer le message",
  contact_sending: "Envoi en cours…",
  contact_success_heading: "Message envoyé !",
  contact_success_body: "Nous vous répondrons dans les meilleurs délais.",
  contact_success_reset: "Envoyer un autre message",
  contact_error: "Une erreur est survenue. Veuillez réessayer ou nous contacter par email.",

  // Footer
  footer_contact_heading: "Contact",
  footer_links_heading: "Liens utiles",
  footer_rights: "Tous droits réservés",

  // Tables & Downloads
  table_number: "N°",
  table_title: "Titre",
  table_date: "Date",
  table_version: "Version",
  table_download: "Télécharger",
  table_search_placeholder: "N° ou titre du document...",
  table_search_label: "Rechercher un document",
  table_empty: "Aucun document trouvé.",
  table_of: "sur",
  table_documents: "documents",

  // Newsletter unsubscribe
  unsub_success_heading: "Désabonnement confirmé",
  unsub_success_body: "Vous avez été désabonné(e) avec succès de notre newsletter. Vous ne recevrez plus nos e-mails.",
  unsub_error_heading: "Lien invalide ou expiré",
  unsub_error_body: "Ce lien de désabonnement est invalide ou a déjà été utilisé. Si vous souhaitez vous désabonner, veuillez nous contacter directement.",
  unsub_back_home: "← Retour à l'accueil",
} as const;

export type Labels = typeof DEFAULT_LABELS;

// In-memory cache — keyed by lang slug, resets on cold start / redeploy.
const cache = new Map<string, Labels>();

/**
 * Fetch UI labels for the given language from the CMS.
 * Falls back to DEFAULT_LABELS when the document is not found or the API fails.
 * Results are cached per language for the lifetime of the process.
 */
export async function getLabels(lang: string): Promise<Labels> {
  if (cache.has(lang)) return cache.get(lang)!;

  try {
    const result = await getCollection<any>("ui-labels", {
      limit: 1,
      depth: 0,
      where: { "lang.slug": { equals: lang } },
    });
    const doc = result.docs[0];
    if (doc) {
      // Merge CMS values over defaults so missing fields always have a fallback.
      const merged = { ...DEFAULT_LABELS } as Record<string, string>;
      for (const key of Object.keys(DEFAULT_LABELS)) {
        if (typeof doc[key] === "string" && doc[key].length > 0) {
          merged[key] = doc[key];
        }
      }
      const labels = merged as Labels;
      cache.set(lang, labels);
      return labels;
    }
  } catch {
    // Silently fall through to defaults.
  }

  cache.set(lang, DEFAULT_LABELS as Labels);
  return DEFAULT_LABELS as Labels;
}

/**
 * Tiny helper: replace `{n}` placeholder with a value.
 * Example: interpolate(labels.formations_max_participants, 20) → "Max 20 participants"
 */
export function interpolate(template: string, value: string | number): string {
  return template.replace("{n}", String(value));
}
