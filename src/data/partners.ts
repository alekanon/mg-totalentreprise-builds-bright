import mthLogo from "@/assets/logos/mth.png";
import lmBygLogo from "@/assets/logos/LMbyg.png";
import pihlLogo from "@/assets/logos/Pihl.png";
import cgJensenLogo from "@/assets/logos/cg.png";

export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: "MT Højgaard", logo: mthLogo },
  { name: "LM Byg A/S", logo: lmBygLogo },
  { name: "Pihl", logo: pihlLogo },
  { name: "CG Jensen", logo: cgJensenLogo },
];
