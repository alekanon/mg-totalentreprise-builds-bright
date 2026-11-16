import spektrumHotel from "@/assets/projects/Spectrum hotel.jpeg";
import himmelbyen from "@/assets/projects/Himmelbyen.jpg";
import skolenStrand from "@/assets/projects/skolen-paa-strandboulevarden-sommer-2018-13.jpg";
import oeresyd from "@/assets/projects/øresyd.jpg";
import bigHerlev from "@/assets/projects/big herlev.jpeg";
import majatta from "@/assets/projects/Majatta næstved.jpg";
import multicenter from "@/assets/projects/praestoe-multicenter-foto-soeren-aargaard-3.jpg";
import hildisHave from "@/assets/projects/Hildis have.jpeg";
import oerbygaard from "@/assets/projects/Ørbygaard Pleje center.jpg";
import groenneFatning from "@/assets/projects/Den_gronne_fatning_850.jpg";
import referenceLetter from "@/assets/projects/Referance letter.pdf?url";
import novoKoege from "@/assets/projects/novokøge-UPSCALED.png";
import hq27 from "@/assets/projects/Novo fonden hovedkontor.jpeg";

export type Trade = "Tømrer" | "Maler";

export type Reference = {
  title: string;
  client: string;
  scope: string;
  description: string;
  trades: Trade[];
  /** Primary trade used for filtering category badge */
  category: Trade;
  cover: string;
  gallery: string[];
  /** Optional downloadable document shown in the project popup. */
  document?: { label: string; url: string; filename: string };
};

export const referencer: Reference[] = [
  {
    title: "Maler og Tømrerarbejdet på nyopførelse af fabrik i Køge",
    client: "Phil & Søn",
    scope: "Maler- og tømrerarbejde på fabriksbyggeri.",
    description:
      "Komplet maler- og tømrerentreprise på nyopførelse af fabriksbyggeri til et større dansk medicinalfirma, med høje krav til renhed og dokumentation.",
    trades: ["Maler", "Tømrer"],
    category: "Maler",
    cover: novoKoege,
    gallery: [novoKoege],
    document: {
      label: "Download referencebrev",
      url: referenceLetter,
      filename: "Referencebrev-MG-T.pdf",
    },
  },
  {
    title: "Hovedkontor for større dansk medicinalfirma",
    client: "LM Byg",
    scope: "Isolering af hele kælderen, montering af rør og beton finish.",
    description:
      "Isolering af hele kælderen, montering af rør og beton finish på hovedkontoret for et større dansk medicinalfirma. Udført med fast hold under høje krav til dokumentation og koordinering med øvrige fag.",
    trades: ["Tømrer"],
    category: "Tømrer",
    cover: hq27,
    gallery: [hq27],
  },
  {
    title: "Spektrum Hotel",
    client: "Phil & Søn",
    scope: "Malerarbejde på nyt hotelbyggeri.",
    description:
      "Komplet malerentreprise på Spektrum Hotel — værelser, korridorer og fællesarealer. Leveret med fast hold og tæt koordinering med øvrige fag.",
    trades: ["Maler"],
    category: "Maler",
    cover: spektrumHotel,
    gallery: [spektrumHotel],
  },
  {
    title: "Himmelbyen",
    client: "CG Jensen A/S",
    scope: "Indvendig tømrer- og snedkerarbejde i 135 lejligheder og ca. 12.000 m² erhverv.",
    description:
      "Stor indvendig tømrer- og snedkerentreprise på Himmelbyen med 135 boliger samt ca. 12.000 m² erhvervsareal. Omfatter gipsvægge, lofter, døre og komplet aptering.",
    trades: ["Tømrer"],
    category: "Tømrer",
    cover: himmelbyen,
    gallery: [himmelbyen],
  },
  {
    title: "Skolen på Strandboulevarden",
    client: "B. Nygaard Sørensen A/S",
    scope: "Tømrer-, snedker- og malerarbejde på renoverings- og nybygningsdelen.",
    description:
      "Tømrer- og snedkerarbejde samt komplet malerentreprise på både renoverings- og nybygningsdelen af skolen på Strandboulevarden i København.",
    trades: ["Tømrer", "Maler"],
    category: "Tømrer",
    cover: skolenStrand,
    gallery: [skolenStrand],
  },
  {
    title: "Øresyd",
    client: "CG Jensen A/S",
    scope:
      "Montering af vinduer, døre, trapperum og taghuse på lejlighedskompleks med 100 boliger samt malerarbejde.",
    description:
      "Montage af vinduer, døre, trapperum og taghuse på lejlighedskompleks med 100 boliger. Vi leverede desuden malerarbejde i boligerne.",
    trades: ["Tømrer", "Maler"],
    category: "Tømrer",
    cover: oeresyd,
    gallery: [oeresyd],
  },
  {
    title: "BIG Shoppingcenter Herlev",
    client: "NPV A/S",
    scope: "Skillevægge, indskudte dæk, apteringer og malerarbejde i 8 lejemål.",
    description:
      "Tømrerentreprise med skillevægge, indskudte dæk og komplet aptering i 8 lejemål — samt malerarbejde i alle lejemål.",
    trades: ["Tømrer", "Maler"],
    category: "Tømrer",
    cover: bigHerlev,
    gallery: [bigHerlev],
  },
  {
    title: "Majatta Næstved",
    client: "B. Nygaard Sørensen A/S",
    scope:
      "Tømrer- og snedkerarbejde. Montage af trækassetter som ydervægge, indervægge og tag samt komplet indvendig aptering.",
    description:
      "Komplet tømrer- og snedkerentreprise med montage af trækassetter til ydervægge, indervægge og tag, efterfulgt af fuld indvendig aptering.",
    trades: ["Tømrer"],
    category: "Tømrer",
    cover: majatta,
    gallery: [majatta],
  },
  {
    title: "Multicenter Præstø",
    client: "CG Jensen A/S",
    scope:
      "Tømrer-, snedker- og malerarbejde på plejecenter, multicenterdel samt renovering af eksisterende hal.",
    description:
      "Tømrer- og snedkerentreprise på plejecenter, multicenterdelen samt renovering af eksisterende hal — inkl. fuldt malerarbejde.",
    trades: ["Tømrer", "Maler"],
    category: "Tømrer",
    cover: multicenter,
    gallery: [multicenter],
  },
  {
    title: "Hildis Have, Hillerød",
    client: "RG2 Development ApS",
    scope: "Malerarbejde i 85 boliger og fælleshus.",
    description:
      "Komplet malerentreprise i 85 boliger samt fælleshus på Hildis Have i Hillerød — leveret med fast hold fra start til slut.",
    trades: ["Maler"],
    category: "Maler",
    cover: hildisHave,
    gallery: [hildisHave],
  },
  {
    title: "Ørbygård Plejecenter",
    client: "Ole Jepsen A/S",
    scope: "Malerarbejde på plejecenter med 82 lejligheder.",
    description:
      "Malerentreprise på plejecenter med 82 lejligheder samt fællesarealer. Tæt koordinering med driften under udførelsen.",
    trades: ["Maler"],
    category: "Maler",
    cover: oerbygaard,
    gallery: [oerbygaard],
  },
  {
    title: "Den Grønne Fatning",
    client: "Enemærke & Pedersen A/S",
    scope: "Malerarbejde i 200 lejligheder.",
    description:
      "Stor malerentreprise med komplet behandling af 200 lejligheder. Bemandet med fast hold gennem hele projektet.",
    trades: ["Maler"],
    category: "Maler",
    cover: groenneFatning,
    gallery: [groenneFatning],
  },
];
