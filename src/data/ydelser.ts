import tomrerImg from "@/assets/ydelser/tomrer.jpg";
import malerImg from "@/assets/ydelser/maler.jpg";
import facaderImg from "@/assets/ydelser/facader.jpg";

export type Ydelse = {
  slug: string;
  title: string;
  short: string;
  description: string[];
  highlights: string[];
  image: string;
};

export const ydelser: Ydelse[] = [
  {
    slug: "tomrer",
    title: "Tømrerarbejde",
    short: "Indvendig tømrer- og snedkerarbejde – fra gipsvægge til trægulve.",
    description: [
      "Vores tømrere udfører alt indvendigt tømrer- og snedkerarbejde: opsætning af gipsvægge og lofter, montage af vinduer, døre og systemlofter samt lægning af trægulve.",
      "Vi har stor erfaring med store boligprojekter, plejecentre og erhvervsbyggeri, hvor præcision og tempo er afgørende.",
    ],
    highlights: [
      "Gipsvægge & lofter",
      "Montage af vinduer og døre",
      "Systemlofter",
      "Indvendige døre",
      "Trægulve",
    ],
    image: tomrerImg,
  },
  {
    slug: "maler",
    title: "Malerarbejde",
    short: "Komplet malerarbejde – alle opgaver inden for faget.",
    description: [
      "Vi løser alle typer malerarbejde – fra nybyggeri og store boligprojekter til renovering og specialopgaver.",
      "Vores malere arbejder struktureret og effektivt, og vi leverer en ensartet finish, uanset projektets omfang.",
    ],
    highlights: ["Nybyggeri", "Renovering", "Lejligheder & plejecentre", "Erhverv & institutioner"],
    image: malerImg,
  },
  {
    slug: "facader",
    title: "Facader – Eternit, Træ & Aluminium",
    short: "Komplet facadebeklædning i eternit, træ eller aluminium.",
    description: [
      "Vi monterer facadebeklædning i eternit, træ og aluminium efter producentens forskrifter og leverer et professionelt færdigt udtryk.",
      "Fra enkeltstående facader til hele bygningskomplekser – vi sikrer korrekt opbygning, ventilation og detaljering.",
    ],
    highlights: ["Eternit-beklædning", "Træfacader", "Aluminiumsfacader", "Detaljering & inddækning"],
    image: facaderImg,
  },
];
