import type { CollectionConfig } from 'payload'

/**
 * UI Labels — one document per language.
 * Stores every translatable interface string so non-technical admins
 * can fully localise the front-end without touching code.
 */
export const UiLabels: CollectionConfig = {
  slug: 'ui-labels',
  labels: { singular: { fr: 'Traductions UI', en: 'UI Labels' }, plural: { fr: 'Traductions UI', en: 'UI Labels' } },
  admin: {
    useAsTitle: 'lang',
    description: { fr: 'Textes de l\'interface par langue. Créez un document par langue active.', en: 'Interface strings per language. Create one document per active language.' },
    group: 'Configuration',
    defaultColumns: ['lang', 'updatedAt'],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'lang',
      type: 'relationship',
      relationTo: 'site-languages',
      required: true,
      unique: true,
      label: { fr: 'Langue', en: 'Language' },
    },

    // ── Général ────────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Général', en: 'General' },
      fields: [
        { name: 'breadcrumb_home', type: 'text', label: { fr: 'Fil d\'Ariane — Accueil', en: 'Breadcrumb — Home' }, defaultValue: 'Accueil' },
        { name: 'download',        type: 'text', label: { fr: 'Télécharger', en: 'Download label' },                 defaultValue: 'Télécharger' },
        { name: 'language_label',  type: 'text', label: { fr: 'Titre section langue (mobile)', en: 'Language section title (mobile)' }, defaultValue: 'Langue' },
        { name: 'no_translation',  type: 'text', label: { fr: 'Pas de traduction disponible (tooltip)', en: 'No translation available (tooltip)' }, defaultValue: 'pas de traduction disponible' },
      ],
    },

    // ── Newsletter ──────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Newsletter', en: 'Newsletter' },
      fields: [
        { name: 'newsletter_subscribe',  type: 'text', label: { fr: 'Bouton S\'abonner',    en: 'Subscribe button' },    defaultValue: 'S\'abonner' },
        { name: 'newsletter_sending',    type: 'text', label: { fr: 'Bouton — envoi en cours', en: 'Button — sending' }, defaultValue: 'Envoi…' },
        { name: 'newsletter_email_placeholder', type: 'text', label: { fr: 'Placeholder email', en: 'Email placeholder' }, defaultValue: 'Votre adresse e-mail' },
        { name: 'newsletter_email_label',       type: 'text', label: { fr: 'Label sr-only email', en: 'Email sr-only label' }, defaultValue: 'Adresse e-mail' },
        { name: 'newsletter_success',   type: 'textarea', label: { fr: 'Message succès',    en: 'Success message' },    defaultValue: 'Merci ! Vous êtes maintenant abonné(e) à notre newsletter.' },
        { name: 'newsletter_error',     type: 'textarea', label: { fr: 'Message erreur',    en: 'Error message' },      defaultValue: 'Une erreur est survenue. Veuillez réessayer.' },
        { name: 'newsletter_duplicate', type: 'textarea', label: { fr: 'Message déjà abonné', en: 'Already subscribed message' }, defaultValue: 'Cette adresse e-mail est déjà abonnée à notre newsletter.' },
      ],
    },

    // ── Calculateur ─────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Calculateur', en: 'Calculator' },
      fields: [
        { name: 'calc_trade_label',        type: 'text', label: { fr: 'Label Corps de métier',      en: 'Trade label' },           defaultValue: 'Corps de métier' },
        { name: 'calc_trade_tooltip',      type: 'textarea', label: { fr: 'Tooltip Corps de métier', en: 'Trade tooltip' },        defaultValue: 'Tous les corps de métiers ne sont pas repris dans cette liste.' },
        { name: 'calc_market_label',       type: 'text', label: { fr: 'Label Valeur du marché',     en: 'Market value label' },    defaultValue: 'Valeur du marché' },
        { name: 'calc_market_unit',        type: 'text', label: { fr: 'Unité valeur du marché',     en: 'Market value unit' },     defaultValue: 'en mio. d\'€' },
        { name: 'calc_market_tooltip',     type: 'textarea', label: { fr: 'Tooltip Valeur du marché', en: 'Market value tooltip' }, defaultValue: 'La valeur du marché doit être estimée aussi précisément que possible.' },
        { name: 'calc_duration_label',     type: 'text', label: { fr: 'Label Durée du marché',      en: 'Duration label' },        defaultValue: 'Durée du marché' },
        { name: 'calc_duration_unit',      type: 'text', label: { fr: 'Unité durée',                en: 'Duration unit' },         defaultValue: 'mois' },
        { name: 'calc_duration_tooltip',   type: 'textarea', label: { fr: 'Tooltip Durée',          en: 'Duration tooltip' },      defaultValue: 'La durée du marché doit être estimée aussi précisément que possible.' },
        { name: 'calc_submit',             type: 'text', label: { fr: 'Bouton Valider',             en: 'Submit button' },         defaultValue: 'VALIDER' },
      ],
    },

    // ── Formations ──────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Formations', en: 'Formations' },
      fields: [
        { name: 'formations_back',          type: 'text', label: { fr: 'Lien retour',               en: 'Back link' },                 defaultValue: 'Toutes les formations' },
        { name: 'formations_date',          type: 'text', label: { fr: 'Label Date',                en: 'Date label' },                defaultValue: 'Date' },
        { name: 'formations_duration',      type: 'text', label: { fr: 'Label Durée',              en: 'Duration label' },            defaultValue: 'Durée' },
        { name: 'formations_location',      type: 'text', label: { fr: 'Label Lieu',               en: 'Location label' },            defaultValue: 'Lieu' },
        { name: 'formations_participants',  type: 'text', label: { fr: 'Label Participants',       en: 'Participants label' },        defaultValue: 'Participants' },
        { name: 'formations_price',         type: 'text', label: { fr: 'Label Prix',               en: 'Price label' },               defaultValue: 'Prix' },
        { name: 'formations_register_heading', type: 'text', label: { fr: 'Titre inscription',    en: 'Register heading' },          defaultValue: 'S\'inscrire à cette formation' },
        { name: 'formations_register_online', type: 'text', label: { fr: 'Bouton inscription en ligne', en: 'Online register button' }, defaultValue: 'Inscription en ligne' },
        { name: 'formations_register_email',  type: 'text', label: { fr: 'Bouton contacter',      en: 'Contact button' },            defaultValue: 'Contacter' },
        { name: 'formations_see_detail',    type: 'text', label: { fr: 'Lien voir le détail',     en: 'See detail link' },           defaultValue: 'Voir le détail →' },
        { name: 'formations_empty',         type: 'text', label: { fr: 'Message aucune formation', en: 'No formations message' },     defaultValue: 'Aucune formation disponible dans cette langue.' },
        { name: 'formations_max_participants', type: 'text', label: { fr: 'Texte max participants (utilise {n})', en: 'Max participants text (use {n})' }, defaultValue: 'Max {n} participants' },
      ],
    },

    // ── Actualités ──────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Actualités', en: 'News' },
      fields: [
        { name: 'news_page_title',    type: 'text', label: { fr: 'Titre de la page',         en: 'Page title' },          defaultValue: 'Actualités' },
        { name: 'news_page_subtitle', type: 'text', label: { fr: 'Sous-titre de la page',    en: 'Page subtitle' },       defaultValue: 'Retrouvez toutes les actualités, communiqués et événements du CRTI-B' },
        { name: 'news_filter_all',    type: 'text', label: { fr: 'Filtre Tout',              en: 'All filter' },          defaultValue: 'Tout' },
        { name: 'news_read_article',  type: 'text', label: { fr: 'Lire l\'article',          en: 'Read article' },        defaultValue: 'LIRE L\'ARTICLE' },
        { name: 'news_read_all',      type: 'text', label: { fr: 'Lire toute l\'actualité', en: 'Read all news' },       defaultValue: 'LIRE TOUTE L\'ACTUALITÉ ›' },
        { name: 'news_other_title',   type: 'text', label: { fr: 'Titre autres actualités',  en: 'Other news title' },    defaultValue: 'AUTRES ACTUALITÉS' },
        { name: 'news_empty',         type: 'text', label: { fr: 'Aucun contenu disponible', en: 'No content available' }, defaultValue: 'Aucun contenu disponible dans cette langue' },
        { name: 'news_article_count_single', type: 'text', label: { fr: 'Mot article (sing.)', en: 'Article word (sing.)' }, defaultValue: 'article' },
        { name: 'news_article_count_plural', type: 'text', label: { fr: 'Mot article (plur.)', en: 'Article word (plur.)' }, defaultValue: 'articles' },
      ],
    },

    // ── Fil d'Ariane & Navigation ───────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Navigation', en: 'Navigation' },
      fields: [
        { name: 'see_pdf',    type: 'text', label: { fr: 'Voir le PDF',   en: 'See PDF' },   defaultValue: 'Voir le PDF' },
        { name: 'open',       type: 'text', label: { fr: 'Ouvrir',        en: 'Open' },       defaultValue: 'Ouvrir' },
        { name: 'close',      type: 'text', label: { fr: 'Fermer',        en: 'Close' },      defaultValue: 'Fermer' },
        { name: 'search',     type: 'text', label: { fr: 'Rechercher',    en: 'Search' },     defaultValue: 'Rechercher' },
        { name: 'previous',   type: 'text', label: { fr: 'Précédent',     en: 'Previous' },   defaultValue: 'Précédent' },
        { name: 'next',       type: 'text', label: { fr: 'Suivant',       en: 'Next' },       defaultValue: 'Suivant' },
        { name: 'page_label', type: 'text', label: { fr: 'Page (pagination)', en: 'Page (pagination)' }, defaultValue: 'Page' },
      ],
    },

    // ── Contact ─────────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Contact', en: 'Contact' },
      fields: [
        { name: 'contact_coordinates_heading', type: 'text', label: { fr: 'Titre Coordonnées',     en: 'Coordinates heading' }, defaultValue: 'Nos coordonnées' },
        { name: 'contact_form_heading',        type: 'text', label: { fr: 'Titre Formulaire',       en: 'Form heading' },       defaultValue: 'Envoyer un message' },
        { name: 'contact_name',                type: 'text', label: { fr: 'Label Nom',              en: 'Name label' },          defaultValue: 'Nom' },
        { name: 'contact_name_placeholder',    type: 'text', label: { fr: 'Placeholder Nom',        en: 'Name placeholder' },    defaultValue: 'Votre nom' },
        { name: 'contact_email_label',         type: 'text', label: { fr: 'Label Email',            en: 'Email label' },         defaultValue: 'Email' },
        { name: 'contact_subject',             type: 'text', label: { fr: 'Label Sujet',            en: 'Subject label' },       defaultValue: 'Sujet' },
        { name: 'contact_subject_placeholder', type: 'text', label: { fr: 'Placeholder Sujet',      en: 'Subject placeholder' }, defaultValue: 'Choisir un sujet…' },
        { name: 'contact_message',             type: 'text', label: { fr: 'Label Message',          en: 'Message label' },       defaultValue: 'Message' },
        { name: 'contact_message_placeholder', type: 'text', label: { fr: 'Placeholder Message',    en: 'Message placeholder' }, defaultValue: 'Votre message…' },
        { name: 'contact_submit',              type: 'text', label: { fr: 'Bouton Envoyer',          en: 'Submit button' },       defaultValue: 'Envoyer le message' },
        { name: 'contact_sending',             type: 'text', label: { fr: 'Bouton envoi en cours',  en: 'Sending button' },      defaultValue: 'Envoi en cours…' },
        { name: 'contact_success_heading',     type: 'text', label: { fr: 'Succès — Titre',          en: 'Success heading' },     defaultValue: 'Message envoyé !' },
        { name: 'contact_success_body',        type: 'textarea', label: { fr: 'Succès — Corps',      en: 'Success body' },        defaultValue: 'Nous vous répondrons dans les meilleurs délais.' },
        { name: 'contact_success_reset',       type: 'text', label: { fr: 'Succès — Lien reset',    en: 'Success reset link' },  defaultValue: 'Envoyer un autre message' },
        { name: 'contact_error',               type: 'textarea', label: { fr: 'Message d\'erreur', en: 'Error message' },        defaultValue: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email.' },
      ],
    },

    // ── Footer ──────────────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Pied de page', en: 'Footer' },
      fields: [
        { name: 'footer_contact_heading', type: 'text', label: { fr: 'Titre Contact',       en: 'Contact heading' },    defaultValue: 'Contact' },
        { name: 'footer_links_heading',   type: 'text', label: { fr: 'Titre Liens utiles',  en: 'Useful links heading' }, defaultValue: 'Liens utiles' },
        { name: 'footer_rights',          type: 'text', label: { fr: 'Tous droits réservés', en: 'Rights reserved' },   defaultValue: 'Tous droits réservés' },
      ],
    },

    // ── Téléchargements / Tableaux ───────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Tableaux & Téléchargements', en: 'Tables & Downloads' },
      fields: [
        { name: 'table_number',   type: 'text', label: { fr: 'Colonne N°',          en: 'Number column' },    defaultValue: 'N°' },
        { name: 'table_title',    type: 'text', label: { fr: 'Colonne Titre',        en: 'Title column' },     defaultValue: 'Titre' },
        { name: 'table_date',     type: 'text', label: { fr: 'Colonne Date',         en: 'Date column' },      defaultValue: 'Date' },
        { name: 'table_version',  type: 'text', label: { fr: 'Colonne Version',      en: 'Version column' },   defaultValue: 'Version' },
        { name: 'table_download', type: 'text', label: { fr: 'Colonne Télécharger', en: 'Download column' },  defaultValue: 'Télécharger' },
        { name: 'table_search_placeholder', type: 'text', label: { fr: 'Placeholder recherche doc', en: 'Doc search placeholder' }, defaultValue: 'N° ou titre du document...' },
        { name: 'table_search_label',       type: 'text', label: { fr: 'Label recherche doc',       en: 'Doc search label' },       defaultValue: 'Rechercher un document' },
        { name: 'table_empty',              type: 'text', label: { fr: 'Aucun document trouvé',     en: 'No document found' },      defaultValue: 'Aucun document trouvé.' },
        { name: 'table_of',                 type: 'text', label: { fr: 'Mot "sur" (pagination)',    en: '"of" word (pagination)' }, defaultValue: 'sur' },
        { name: 'table_documents',          type: 'text', label: { fr: 'Mot documents (pagination)', en: 'Documents word (pagination)' }, defaultValue: 'documents' },
      ],
    },

    // ── Newsletter désabonnement ─────────────────────────────────────────────
    {
      type: 'collapsible',
      label: { fr: 'Désabonnement newsletter', en: 'Newsletter unsubscribe' },
      fields: [
        { name: 'unsub_success_heading', type: 'text',     label: { fr: 'Succès — Titre',  en: 'Success heading' }, defaultValue: 'Désabonnement confirmé' },
        { name: 'unsub_success_body',    type: 'textarea', label: { fr: 'Succès — Corps',  en: 'Success body' },   defaultValue: 'Vous avez été désabonné(e) avec succès de notre newsletter. Vous ne recevrez plus nos e-mails.' },
        { name: 'unsub_error_heading',   type: 'text',     label: { fr: 'Erreur — Titre',  en: 'Error heading' },  defaultValue: 'Lien invalide ou expiré' },
        { name: 'unsub_error_body',      type: 'textarea', label: { fr: 'Erreur — Corps',  en: 'Error body' },     defaultValue: 'Ce lien de désabonnement est invalide ou a déjà été utilisé. Si vous souhaitez vous désabonner, veuillez nous contacter directement.' },
        { name: 'unsub_back_home',       type: 'text',     label: { fr: 'Lien retour accueil', en: 'Back home link' }, defaultValue: '← Retour à l\'accueil' },
      ],
    },
  ],
}
