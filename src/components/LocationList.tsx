const regions = [
  {
    region: "Storkøbenhavn",
    hubs: [
      { city: "København", nearby: ["Frederiksberg", "Amager", "Valby"] },
      { city: "Lyngby", nearby: ["Gentofte", "Gladsaxe", "Søborg"] },
      { city: "Ballerup", nearby: ["Herlev", "Rødovre", "Glostrup"] },
    ],
  },
  {
    region: "Nordsjælland",
    hubs: [
      { city: "Hillerød", nearby: ["Allerød", "Farum", "Fredensborg"] },
      { city: "Helsingør", nearby: ["Espergærde", "Humlebæk"] },
      { city: "Hørsholm", nearby: ["Rungsted", "Kokkedal"] },
    ],
  },
  {
    region: "Midt- og Vestsjælland",
    hubs: [
      { city: "Roskilde", nearby: ["Hedehusene", "Viby Sj.", "Lejre"] },
      { city: "Holbæk", nearby: ["Tølløse", "Jyderup"] },
      { city: "Slagelse", nearby: ["Korsør", "Skælskør"] },
      { city: "Kalundborg", nearby: ["Høng", "Gørlev"] },
      { city: "Ringsted", nearby: ["Sorø", "Haslev"] },
    ],
  },
  {
    region: "Sydsjælland",
    hubs: [
      { city: "Køge", nearby: ["Greve", "Solrød Strand"] },
      { city: "Næstved", nearby: ["Fensmark", "Karrebæksminde"] },
      { city: "Vordingborg", nearby: ["Præstø", "Stege"] },
    ],
  },
];

export function LocationList({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {regions.map((group) => (
        <div key={group.region}>
          <h4 className="text-[11px] font-bold uppercase text-accent">{group.region}</h4>
          <ul className="mt-1 space-y-0.5 text-xs leading-relaxed text-foreground/70">
            {group.hubs.map((hub) => (
              <li key={hub.city}>
                <span className="font-semibold text-foreground">{hub.city}</span>
                {" – "}
                {hub.nearby.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
