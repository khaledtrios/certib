import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales | CRTI-B",
  description: "Mentions légales, notice juridique et protection des données du Centre de Ressources des Technologies et de l'Innovation pour le Bâtiment (CRTI-B).",
};

const SECTIONS = [
  {
    id: "editeur",
    title: "Éditeur du site",
    content: (
      <div className="space-y-3 text-[14px] text-[#4a4a4a] leading-relaxed">
        <p>
          Ce site est édité par le <strong>Centre de Ressources des Technologies et de
          l'Innovation pour le Bâtiment</strong>, dénommé ci-après CRTI-B, qui est également
          responsable pour son suivi et son actualisation.
        </p>
        <div className="mt-4 pl-4 border-l-2 border-[#08AA86] space-y-1">
          <p className="font-semibold text-[#2F2F2F]">CRTI-B</p>
          <p>2, Circuit de la Foire Internationale</p>
          <p>L-1347 Luxembourg</p>
          <p>BP 1604 – L-1016 Luxembourg</p>
          <p>
            Tél. :{" "}
            <a href="tel:+35224527311" className="text-[#08AA86] hover:underline">
              +352 24 52 73 11
            </a>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:contact@crtib.lu" className="text-[#08AA86] hover:underline">
              contact@crtib.lu
            </a>
          </p>
        </div>
        <p className="mt-4">
          L'hébergement du site est assuré par <strong>NVision S.A.</strong>
        </p>
        <p>
          Le développement graphique et informatique a été réalisé par la société{" "}
          <strong>NVision S.A.</strong>
        </p>
        <p className="text-[13px] text-[#6b7280]">
          Pour toute question sur ce site et son contenu, veuillez nous communiquer vos remarques à{" "}
          <a href="mailto:contact@crtib.lu" className="text-[#08AA86] hover:underline">
            contact@crtib.lu
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "notice-legale",
    title: "Notice légale",
    content: (
      <div className="space-y-3 text-[14px] text-[#4a4a4a] leading-relaxed">
        <p>
          Le CRTI-B alimente ce site en vue de promouvoir l'accès du public aux informations
          relatives à la construction du Grand-Duché de Luxembourg et aux initiatives et services
          du CRTI-B. Notre objectif est de diffuser des informations actualisées. Nous nous
          efforcerons de corriger les erreurs qui nous seront signalées.
        </p>
        <p>Toutefois, les informations diffusées sur www.crtib.lu n'engagent pas la responsabilité du CRTI-B :</p>
        <ul className="list-none space-y-2 mt-3">
          {[
            "Le CRTI-B décline toute responsabilité pour l'utilisation de l'information contenue dans les pages publiées sur ce site. Le contenu est donné à titre indicatif. Il comporte des informations qui ne sont pas forcément complètes, exhaustives, exactes ou à jour. En cas de divergences entre les textes publiés sur ce site et les documents originaux, les documents originaux, tels qu'ils ont été publiés, e.a. au Mémorial, sont applicables.",
            "Le site renvoie parfois à des sites extérieurs sur lesquels le CRTI-B n'a aucun contrôle et pour lesquels il décline toute responsabilité pour leurs contenus ou produits ou services qui peuvent y être proposés. Pour le cas où vous estimez qu'un quelconque élément contenu sur le site du CRTI-B, ou sur d'autres sites internet vers lesquels le site fait des liens, porterait atteinte aux bonnes mœurs ou à l'intégrité morale de quiconque, nous vous invitons à prendre contact avec nous immédiatement. Les opinions qui peuvent être exprimées sur les sites vers lesquels le présent site fait des liens ne sauraient engager le CRTI-B.",
            "Le CRTI-B n'assume aucune responsabilité pour un dommage éventuel causé à votre installation informatique par l'utilisation de ce site.",
            "Le CRTI-B décline toute responsabilité en cas d'interruption, même temporaire, du service de ce site.",
            "Les présentes clauses de non responsabilité n'ont pas pour but de contourner les exigences posées dans les législations applicables, ni d'exclure la responsabilité dans les cas où elle ne peut être exclue en vertu desdites législations.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#08AA86]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "loi-applicable",
    title: "Loi applicable et Juridiction",
    content: (
      <div className="space-y-3 text-[14px] text-[#4a4a4a] leading-relaxed">
        <p>
          Le site Internet du CRTI-B est contrôlé par le CRTI-B à partir de ses bureaux sis et
          établis au Grand-Duché de Luxembourg. Il peut être accessible à partir de n'importe quel
          pays du monde. Comme chaque pays dispose de ses propres lois qui peuvent différer des lois
          en vigueur au Grand-Duché de Luxembourg, vous acceptez en accord avec le CRTI-B de choisir
          l'application des lois luxembourgeoises à tous différends ou litiges pouvant découler d'une
          connexion au présent site internet du CRTI-B.
        </p>
        <p>
          Les Tribunaux luxembourgeois sont exclusivement compétents en cas de différends ou litiges.
        </p>
      </div>
    ),
  },
  {
    id: "copyright",
    title: "Copyright",
    content: (
      <div className="text-[14px] text-[#4a4a4a] leading-relaxed">
        <p>
          En l'absence d'indication contraire, la reproduction des informations contenues sur ce site
          est autorisée à des fins non commerciales à condition que la source soit expressément
          mentionnée.
        </p>
      </div>
    ),
  },
  {
    id: "donnees-personnelles",
    title: "Protection des données",
    content: (
      <div className="space-y-3 text-[14px] text-[#4a4a4a] leading-relaxed">
        <p>
          Les données recueillies sur notre site ne peuvent parvenir que de l'enregistrement
          volontaire de vos données à caractère personnel, p.ex. en se souscrivant à la newsletter.
        </p>
        <p>
          Elles ne sont cédées à aucune société commerciale ou autre organisation luxembourgeoise ou
          étrangère.
        </p>
        <p>
          Conformément au chapitre VI de la Loi du 2 août 2002 relative à la protection des
          personnes à l'égard du traitement des données à caractère personnel (voir sous{" "}
          <a
            href="http://www.cnpd.lu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#08AA86] hover:underline"
          >
            http://www.cnpd.lu
          </a>
          ) vous disposez de certains droits, dont notamment le droit d'accès aux informations qui
          vous concernent et un droit de rectification des informations inexactes.
        </p>
        <p>
          Si vous entendez exercer ces droits, veuillez envoyer un message à{" "}
          <a href="mailto:contact@crtib.lu" className="text-[#08AA86] hover:underline">
            contact@crtib.lu
          </a>
          .
        </p>
      </div>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white py-4">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Breadcrumb slug="mentions-legales" currentTitle="Mentions légales" />
        </div>
      </div>

      {/* Header */}
      <section className="relative bg-white pb-10 pt-12 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="font-sans text-[28px] font-light uppercase tracking-[0.12em] text-[#2F2F2F] md:text-[34px]">
            Mentions légales
          </h1>
          <p className="mt-3 font-sans text-[14px] text-[#6B6B6B]">
            Informations légales et protection des données du CRTI-B
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
            <div className="h-6 w-6 rounded-full bg-[#08AA86]" />
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8 py-16 pb-20">
        {/* Quick nav */}
        <div className="mb-10 flex flex-wrap gap-2">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex items-center rounded-full border border-[#08AA86]/30 bg-white px-4 py-1.5 text-[12px] font-semibold text-[#08AA86] uppercase tracking-wide hover:bg-[#08AA86] hover:text-white transition-colors"
            >
              {section.title}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden scroll-mt-6"
            >
              <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
                <div className="h-4 w-1 rounded-full bg-[#08AA86] flex-shrink-0" />
                <h2 className="text-[15px] font-bold uppercase tracking-[0.06em] text-[#2F2F2F]">
                  {section.title}
                </h2>
              </div>
              <div className="px-6 py-5">{section.content}</div>
            </section>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#08AA86] hover:underline"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
