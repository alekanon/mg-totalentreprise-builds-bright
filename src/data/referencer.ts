export type Reference = {
  title: string;
  client: string;
  scope: string;
  category: "Tømrer" | "Maler" | "Betonfinish";
};

export const referencer: Reference[] = [
  {
    title: "Himmelbyen",
    client: "CG Jensen A/S",
    scope: "Indvendig tømrer- og snedkerarbejde i 135 lejligheder og ca. 12.000 m² erhverv.",
    category: "Tømrer",
  },
  {
    title: "Skolen på Strandboulevarden",
    client: "B. Nygaard Sørensen A/S",
    scope: "Tømrer- og snedkerarbejde på renoverings- og nybygningsdelen.",
    category: "Tømrer",
  },
  {
    title: "Øresyd",
    client: "CG Jensen A/S",
    scope: "Montering af vinduer, døre, trapperum og taghuse på lejlighedskompleks med 100 boliger.",
    category: "Tømrer",
  },
  {
    title: "BIG Shoppingcenter Herlev",
    client: "NPV A/S",
    scope: "Skillevægge, indskudte dæk og apteringer i 8 lejemål.",
    category: "Tømrer",
  },
  {
    title: "Majatta Næstved",
    client: "B. Nygaard Sørensen A/S",
    scope:
      "Tømrer- og snedkerarbejde. Montage af trækassetter som ydervægge, indervægge og tag samt komplet indvendig aptering.",
    category: "Tømrer",
  },
  {
    title: "Multicenter Præstø",
    client: "CG Jensen A/S",
    scope: "Tømrer- og snedkerarbejde på plejecenter, multicenterdel samt renovering af eksisterende hal.",
    category: "Tømrer",
  },
  {
    title: "Hildis Have, Hillerød",
    client: "RG2 Development ApS",
    scope: "Malerarbejde i 85 boliger og fælleshus.",
    category: "Maler",
  },
  {
    title: "Ørbygård Plejecenter",
    client: "Ole Jepsen A/S",
    scope: "Malerarbejde på plejecenter med 82 lejligheder.",
    category: "Maler",
  },
  {
    title: "Den Grønne Fatning",
    client: "Enemærke & Pedersen A/S",
    scope: "Malerarbejde i 200 lejligheder.",
    category: "Maler",
  },
  {
    title: "Arenakvarteret Sind & Multi",
    client: "B. Nygaard Sørensen A/S",
    scope: "Malerarbejde i 2 plejecentre med hhv. 45 og 53 boliger.",
    category: "Maler",
  },
  {
    title: "Skolen på Strandboulevarden",
    client: "B. Nygaard Sørensen A/S",
    scope: "Malerarbejde på nyetableret skole i København.",
    category: "Maler",
  },
  {
    title: "Nyt Hospital Nordsjælland",
    client: "GAP Entreprise ApS / MT Højgaard",
    scope: "10 mand på betonfinish-arbejder i underentreprise.",
    category: "Betonfinish",
  },
];
