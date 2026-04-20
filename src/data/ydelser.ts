export type Ydelse = {
  slug: string;
  title: string;
  short: string;
  description: string[];
  highlights: string[];
};

export const ydelser: Ydelse[] = [
  {
    slug: "facadepuds",
    title: "Facadepuds",
    short: "Systempuds udført af erfarne fagfolk med fokus på holdbarhed og finish.",
    description: [
      "Vi udfører facadepuds med anerkendte systempudser, der sikrer en holdbar og æstetisk overflade på både nybyggeri og renoveringsopgaver.",
      "Vores team har mange års erfaring med systempuds og leverer et ensartet resultat – også på store facader med komplekse detaljer.",
    ],
    highlights: ["Systempuds", "Reparation & renovering", "Nybyggeri", "Større facadeprojekter"],
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
  },
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
  },
  {
    slug: "betonfinish",
    title: "Betonfinish",
    short: "Betonfinish ved elementmontage – udført som underentreprise.",
    description: [
      "Vi udfører betonfinish-arbejder i forbindelse med elementmontage. Aktuelt har vi 10 mand på betonfinish som underentreprise til GAP Entreprise ApS på Nyt Hospital Nordsjælland for MT Højgaard.",
      "Vi sætter holdene fast på opgaven fra start til slut for at sikre kontinuitet og kvalitet.",
    ],
    highlights: ["Elementmontage", "Underentreprise", "Faste hold", "Stort hospitalsbyggeri"],
  },
  {
    slug: "mandskabsudlejning",
    title: "Mandskabsudlejning",
    short: "Faste fagfolk til din byggeplads – med kassevogn og kørsel inkluderet.",
    description: [
      "Vi udlejer mandskab inden for vores fagområder. Ved min. 3 mand pr. byggeplads afregnes 320 kr./time inkl. kassevogn og kørsel indtil 30 km fra København.",
      "Vi sørger så vidt muligt for, at det er de samme faste medarbejdere fra start til slut, og der er altid kun én kontaktperson på sagen.",
    ],
    highlights: ["320 kr./time", "Min. 3 mand", "Kassevogn inkl.", "Kørsel inkl. op til 30 km"],
  },
];
