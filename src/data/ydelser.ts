import tomrerImg from "@/assets/ydelser/tomrer.jpg";
import tomrer2 from "@/assets/ydelser/tomrer-2.jpg";
import tomrer3 from "@/assets/ydelser/tomrer-3.jpg";
import malerImg from "@/assets/ydelser/maler.jpg";
import maler2 from "@/assets/ydelser/maler-2.jpg";
import maler3 from "@/assets/ydelser/maler-3.jpg";
import facaderImg from "@/assets/ydelser/facader.jpg";
import facader2 from "@/assets/ydelser/facader-2.jpg";
import facader3 from "@/assets/ydelser/facader-3.jpg";
import renoveringImg from "@/assets/ydelser/renovering.jpg";
import projektledelseImg from "@/assets/ydelser/projektledelse.jpg";
import erhvervsbyggeriImg from "@/assets/ydelser/erhvervsbyggeri.jpg";
import totalentrepriseImg from "@/assets/ydelser/totalentreprise.jpg";
import isoleringImg from "@/assets/ydelser/isolering.jpg";

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
  {
    slug: "renovering",
    title: "Renovering",
    short: "Renovering af boliger, plejecentre og erhverv – i drift eller tomt byggeri.",
    description: [
      "Vi renoverer boliger, plejecentre, skoler og erhvervslejemål – fra enkelte lejligheder til hele bebyggelser med flere hundrede boliger.",
      "Renovering kræver planlægning, hensyn til beboere og drift samt håndværkere, der kan improvisere uden at gå på kompromis med kvaliteten. Vores faste hold er vant til begge dele og koordinerer tæt med bygherre og øvrige fag hele vejen.",
    ],
    highlights: [
      "Beboede renoveringer",
      "Lejligheder & plejecentre",
      "Skoler & institutioner",
      "Nedrivning & genopbygning",
      "Overflader & aptering",
    ],
    image: renoveringImg,
    gallery: [renoveringImg, maler2],
    faq: [
      {
        q: "Kan I arbejde, mens beboerne bor der?",
        a: "Ja. Vi har stor erfaring med beboede renoveringer og planlægger arbejdet i etaper med tydelig information og hensyn til hverdagen på stedet.",
      },
      {
        q: "Tager I både store og små renoveringssager?",
        a: "Ja – fra enkelte lejligheder til projekter med flere hundrede boliger som Den Grønne Fatning med 200 lejligheder.",
      },
      {
        q: "Håndterer I flere fag i samme renovering?",
        a: "Ja. Vi kan levere tømrer, maler, flisemurer og facadearbejde i én samlet entreprise med én fast kontaktperson.",
      },
    ],
  },
  {
    slug: "projektledelse",
    title: "Projektledelse",
    short: "Daglig projektledelse, koordinering og opfølgning på byggesagen.",
    description: [
      "Vores projektledere fører dagligt tilsyn med byggesagerne og sikrer, at tidsplan, bemanding og kvalitet hænger sammen hele vejen.",
      "Du har altid én fast kontaktperson på sagen. Det betyder hurtige svar på projektspørgsmål, tæt koordinering med øvrige fag og løbende dokumentation, så der ikke opstår tvivl om hvad der er aftalt.",
    ],
    highlights: [
      "Én fast kontaktperson pr. sag",
      "Dagligt tilsyn på pladsen",
      "Tidsplan & bemandingsstyring",
      "Koordinering med øvrige fag",
      "Løbende dokumentation & KS",
    ],
    image: projektledelseImg,
    gallery: [projektledelseImg, tomrer2],
    faq: [
      {
        q: "Hvem er min kontaktperson?",
        a: "Du får tilknyttet én projektleder, som følger sagen fra tilbud til aflevering – samme person hele vejen.",
      },
      {
        q: "Hvor ofte er projektlederen på pladsen?",
        a: "Vores projektledere fører dagligt tilsyn, så spørgsmål og uklarheder bliver håndteret med det samme.",
      },
      {
        q: "Kan I overtage koordineringen af flere fag?",
        a: "Ja. Vi koordinerer gerne vores egne fag samt underleverandører, så du kun har én at tale med.",
      },
    ],
  },
  {
    slug: "erhvervsbyggeri",
    title: "Erhvervsbyggeri",
    short: "Kontorer, butikker, lejemål og industri – fra råhus til indflytningsklar.",
    description: [
      "Vi udfører fagentrepriser på erhvervsbyggeri: kontorer, butikslejemål, lager og industri – både nybyggeri og ombygning af eksisterende lejemål.",
      "Erhvervssager kører ofte på stramme tidsplaner med krav om, at lejemålet er klar til en aftalt dato. Vi bemander med faste hold og styrer fremdriften tæt, så afleveringen holder.",
    ],
    highlights: [
      "Kontor- & butikslejemål",
      "Skillevægge & indskudte dæk",
      "Komplet aptering",
      "Industri & produktion",
      "Aflevering til fast dato",
    ],
    image: erhvervsbyggeriImg,
    gallery: [erhvervsbyggeriImg, facader2],
    faq: [
      {
        q: "Har I erfaring med butikslejemål?",
        a: "Ja. Vi har bl.a. udført skillevægge, indskudte dæk, aptering og malerarbejde i 8 lejemål i BIG Shoppingcenter Herlev for NPV A/S.",
      },
      {
        q: "Kan I arbejde i et center eller kontorhus i drift?",
        a: "Ja – vi tilpasser arbejdstider og støjende arbejde til driften på stedet.",
      },
      {
        q: "Løser I også pharma- og produktionsbyggeri?",
        a: "Ja. Vi har udført arbejde på Novo Nordisks anlæg, hvor krav til renhed og dokumentation er høje.",
      },
    ],
  },
  {
    slug: "totalentreprise",
    title: "Totalentreprise",
    short: "Én aftale, én kontaktperson – vi står for hele opgaven.",
    description: [
      "Som totalentreprenør tager vi ansvaret for hele opgaven: planlægning, bemanding, koordinering af fag og aflevering af det færdige resultat.",
      "Du får én aftale, én pris og én kontaktperson i stedet for at skulle styre en række håndværkere. Vi bruger vores egne håndværkere, hvor vi kan, og trækker på faste samarbejdspartnere til resten.",
    ],
    highlights: [
      "Én samlet aftale og pris",
      "Egne håndværkere i flere fag",
      "Fast projektledelse",
      "Faste samarbejdspartnere",
      "Mangelfri aflevering",
    ],
    image: totalentrepriseImg,
    gallery: [totalentrepriseImg, tomrer3],
    faq: [
      {
        q: "Hvad er forskellen på fagentreprise og totalentreprise?",
        a: "I en fagentreprise løser vi ét fag i et større projekt. I en totalentreprise står vi for hele opgaven inkl. koordinering af de øvrige fag.",
      },
      {
        q: "Hvor store totalentrepriser tager I?",
        a: "Vi tilpasser os opgaven – fra enkeltstående ombygninger til større bolig- og erhvervsprojekter.",
      },
      {
        q: "Får jeg en fast pris?",
        a: "Ja. Vi gennemgår projektet og leverer et klart, detaljeret tilbud, inden vi går i gang.",
      },
    ],
  },
  {
    slug: "isolering",
    title: "Isolering",
    short: "Isolering af vægge, lofter, kældre og teknik – korrekt udført og tæt.",
    description: [
      "Vi udfører isoleringsarbejde i nybyggeri og renovering: vægge, lofter, etageadskillelser, kældre samt isolering af rør og tekniske installationer.",
      "Korrekt isolering handler om mere end at fylde hulrum ud. Vi sikrer tæthed, dampspærre og detaljer omkring gennemføringer, så konstruktionen holder – både energimæssigt og fugtteknisk.",
    ],
    highlights: [
      "Vægge, lofter & etagedæk",
      "Kælder- & krybekælderisolering",
      "Rør- & teknikisolering",
      "Dampspærre & tætning",
      "Detaljer ved gennemføringer",
    ],
    image: isoleringImg,
    gallery: [isoleringImg, tomrer3],
    faq: [
      {
        q: "Isolerer I også rør og installationer?",
        a: "Ja. Vi har bl.a. isoleret hele kælderen og monteret rør på Novo Nordisk HQ27 for LM Byg.",
      },
      {
        q: "Håndterer I dampspærre og tæthed?",
        a: "Ja – dampspærre, tætning og detaljering omkring gennemføringer er en fast del af vores isoleringsarbejde.",
      },
      {
        q: "Kan I kombinere isolering med tømrerarbejde?",
        a: "Ja. Vores tømrere udfører både isolering og efterfølgende lukning med gips eller beklædning i samme entreprise.",
      },
    ],
  },
];
