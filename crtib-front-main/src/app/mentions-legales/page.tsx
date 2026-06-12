import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales – CRTI-B",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#2F3E46] py-10 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold uppercase tracking-[0.15em] text-white">Mentions légales</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 prose prose-sm prose-gray max-w-none">
        <h2>Éditeur du site</h2>
        <p>
          <strong>CRTI-B</strong> – Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment<br />
          2, Circuit de la Foire Internationale<br />
          L-1347 Luxembourg<br />
          BP 1604 – L-1016 Luxembourg<br />
          Tél. : <a href="tel:+35224527311">+352 24 52 73 11</a><br />
          Email : <a href="mailto:contact@crtib.lu">contact@crtib.lu</a>
        </p>

        <h2>Hébergement</h2>
        <p>Ce site est hébergé par EasyPanel.</p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, documents, graphismes) est la propriété exclusive du CRTI-B ou de ses partenaires. Toute reproduction, même partielle, est soumise à autorisation préalable.
        </p>

        <h2>Protection des données personnelles</h2>
        <p>
          Le CRTI-B s'engage à protéger la vie privée des utilisateurs de ce site. Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à vos demandes et ne sont pas transmises à des tiers.
        </p>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:contact@crtib.lu">contact@crtib.lu</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilisé.
        </p>

        <h2>Limitation de responsabilité</h2>
        <p>
          Le CRTI-B s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne peut garantir leur exhaustivité. Le CRTI-B se réserve le droit de modifier les contenus sans préavis.
        </p>
      </div>
    </div>
  );
}
