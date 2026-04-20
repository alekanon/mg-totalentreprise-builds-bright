import novoNordisk from "@/assets/projects/novo-nordisk.jpg";
import spektrumHotel from "@/assets/projects/spektrum-hotel.jpg";
import himmelbyen from "@/assets/projects/himmelbyen.jpg";
import skolenStrand from "@/assets/projects/skolen-strandboulevarden.jpg";
import oeresyd from "@/assets/projects/oeresyd.jpg";
import bigHerlev from "@/assets/projects/big-herlev.jpg";
import majatta from "@/assets/projects/majatta.jpg";
import multicenter from "@/assets/projects/multicenter-praestoe.jpg";
import hildisHave from "@/assets/projects/hildis-have.jpg";
import oerbygaard from "@/assets/projects/oerbygaard.jpg";
import groenneFatning from "@/assets/projects/groenne-fatning.jpg";
import arenakvarteret from "@/assets/projects/arenakvarteret.jpg";
import nytHospital from "@/assets/projects/nyt-hospital-nordsjaelland.jpg";
import interiorDetail from "@/assets/projects/interior-detail.jpg";

export type Trade = "Tømrer" | "Maler" | "Betonfinish";

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
};

export const referencer: Reference[] = [
  {
    title: "Novo Nordisk Fabrik",
    client: "Phil & Søn",
    scope: "Maler- og tømrerarbejde på fabriksbyggeri.",
    description:
      "Komplet maler- og tømrerentreprise på et af Novo Nordisks fabriksbyggerier. Opgaven omfatter både indvendige overflader, montage og finish-arbejder under høje krav til renhed og dokumentation.",
    trades: ["Maler", "Tømrer"],
    category: "Maler",
    cover: novoNordisk,
    gallery: [novoNordisk, interiorDetail],
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
    gallery: [spektrumHotel, interiorDetail],
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
    gallery: [himmelbyen, interiorDetail],
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
    gallery: [skolenStrand, interiorDetail],
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
    gallery: [oeresyd, interiorDetail],
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
    gallery: [bigHerlev, interiorDetail],
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
    gallery: [majatta, interiorDetail],
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
    gallery: [multicenter, interiorDetail],
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
    gallery: [hildisHave, interiorDetail],
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
    gallery: [oerbygaard, interiorDetail],
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
    gallery: [groenneFatning, interiorDetail],
  },
  {
    title: "Arenakvarteret Sind & Multi",
    client: "B. Nygaard Sørensen A/S",
    scope: "Malerarbejde i 2 plejecentre med hhv. 45 og 53 boliger.",
    description:
      "Malerentreprise på to plejecentre i Arenakvarteret med hhv. 45 og 53 boliger samt fællesarealer.",
    trades: ["Maler"],
    category: "Maler",
    cover: arenakvarteret,
    gallery: [arenakvarteret, interiorDetail],
  },
  {
    title: "Nyt Hospital Nordsjælland",
    client: "GAP Entreprise ApS / MT Højgaard",
    scope: "10 mand på betonfinish-arbejder i underentreprise.",
    description:
      "10 mand på betonfinish-arbejder ved elementmontage som underentreprise til GAP Entreprise ApS for MT Højgaard på Nyt Hospital Nordsjælland.",
    trades: ["Betonfinish"],
    category: "Betonfinish",
    cover: nytHospital,
    gallery: [nytHospital, interiorDetail],
  },
];
