import tomrerImg from "@/assets/ydelser/tomrer.jpg";
import tomrer2 from "@/assets/ydelser/tomrer-2.jpg";
import tomrer3 from "@/assets/ydelser/tomrer-3.jpg";
import malerImg from "@/assets/ydelser/maler.jpg";
import maler2 from "@/assets/ydelser/maler-2.jpg";
import maler3 from "@/assets/ydelser/maler-3.jpg";
import facaderImg from "@/assets/ydelser/facader.jpg";
import facader2 from "@/assets/ydelser/facader-2.jpg";
import facader3 from "@/assets/ydelser/facader-3.jpg";

export type Ydelse = {
  slug: string;
  title: string;
  short: string;
  description: string[];
  highlights: string[];
  image: string;
  gallery: string[];
  faq: { q: string; a: string }[];
};

export const ydelser: Ydelse[] = [
  {
    slug: "tomrer",
    title: "Tømrerarbejde",
    short: "Indvendig tømrer- og snedkerarbejde – fra gipsvægge til trægulve.",
    description: [
      "Vores tømrere udfører alt indvendigt tømrer- og snedkerarbejde: opsætning af gipsvægge og lofter, montage af vinduer, døre og systemlofter samt lægning af trægulve.",
      "Vi har stor erfaring med store boligprojekter, plejecentre og erhvervsbyggeri, hvor præcision og tempo er afgørende. Vores hold arbejder struktureret og selvstændigt – og holder altid tæt dialog med projektledelsen for at sikre, at tidsplanen overholdes.",
    ],
    highlights: [
      "Gipsvægge & lofter",
      "Montage af vinduer og døre",
      "Systemlofter",
      "Indvendige døre",
      "Trægulve",
    ],
    image: tomrerImg,
    gallery: [tomrer2, tomrer3],
    faq: [
      {
        q: "Tager I store fag­entrepriser på flere hundrede lejligheder?",
        a: "Ja. Vi har bl.a. udført indvendigt tømrer- og snedkerarbejde i 135 lejligheder samt ca. 12.000 m² erhverv på Himmelbyen for CG Jensen A/S.",
      },
      {
        q: "Leverer I også materialer?",
        a: "Vi kan både arbejde efter bygherreleverede materialer og selv stå for indkøb. Det aftaler vi i forbindelse med tilbuddet.",
      },
      {
        q: "Hvordan sikrer I kvaliteten?",
        a: "Al kvalitetssikring kan håndteres i Dalux, Ajour, Byggeweb eller vores eget KS-system – afhængig af projektets krav.",
      },
    ],
  },
  {
    slug: "maler",
    title: "Malerarbejde",
    short: "Komplet malerarbejde – alle opgaver inden for faget.",
    description: [
      "Vi løser alle typer malerarbejde – fra nybyggeri og store boligprojekter til renovering og specialopgaver.",
      "Vores malere arbejder struktureret og effektivt, og vi leverer en ensartet finish, uanset projektets omfang. Vi har stor erfaring med fag­entrepriser i underentreprise for både total- og hovedentreprenører.",
    ],
    highlights: [
      "Nybyggeri",
      "Renovering",
      "Lejligheder & plejecentre",
      "Erhverv & institutioner",
    ],
    image: malerImg,
    gallery: [maler2, maler3],
    faq: [
      {
        q: "Hvor store opgaver har I udført?",
        a: "Vi har bl.a. malet 82 lejligheder på Hildis Have i Hillerød og 200 lejligheder på Den Grønne Fatning for Enemærke & Pedersen A/S.",
      },
      {
        q: "Kan I følge en stram tidsplan på store byggesager?",
        a: "Ja. Vores faste hold er vant til at koordinere med øvrige fag på store sager med daglig projektledelse og fast kontaktperson.",
      },
      {
        q: "Hvilke typer overflader maler I?",
        a: "Alt indvendigt malerarbejde i nybyggeri og renovering – vægge, lofter, træværk, døre og specialopgaver.",
      },
    ],
  },
  {
    slug: "facader",
    title: "Facader – Eternit, Træ & Aluminium",
    short: "Komplet facadebeklædning i eternit, træ eller aluminium.",
    description: [
      "Vi monterer facadebeklædning i eternit, træ og aluminium efter producentens forskrifter og leverer et professionelt færdigt udtryk.",
      "Fra enkeltstående facader til hele bygningskomplekser – vi sikrer korrekt opbygning, ventilation og detaljering, så facaden står stærkt i mange år frem.",
    ],
    highlights: [
      "Eternit-beklædning",
      "Træfacader",
      "Aluminiumsfacader",
      "Detaljering & inddækning",
    ],
    image: facaderImg,
    gallery: [facader2, facader3],
    faq: [
      {
        q: "Hvilke facadesystemer arbejder I med?",
        a: "Vi arbejder med alle gængse systemer i eternit, træ og aluminium og monterer efter producentens forskrifter.",
      },
      {
        q: "Tager I også detaljer som inddækning omkring vinduer?",
        a: "Ja – inddækning, sokkelafslutning og overgange er en integreret del af vores facadeentrepriser.",
      },
      {
        q: "Kan I koordinere med stillads og øvrige fag?",
        a: "Ja. Vores projektledere koordinerer dagligt med stillads, tømrer og øvrige fag for at sikre fremdrift.",
      },
    ],
  },
];
