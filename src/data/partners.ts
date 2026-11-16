import lmBygLogo from "@/assets/logos/LMbyg.png";
import pihlLogo from "@/assets/logos/Pihl.png";
import cgJensenLogo from "@/assets/logos/cg.png";
import enemaerkeLogo from "@/assets/logos/ene.png";
import cabinnLogo from "@/assets/logos/cabinn.png";

export type Partner = {
  name: string;
  logo: string;
  /** Optional size tweak for logos that look too big/small in the carousel. */
  scale?: number;
};

export const partners: Partner[] = [
  { name: "LM Byg A/S", logo: lmBygLogo },
  { name: "Pihl", logo: pihlLogo },
  { name: "CG Jensen", logo: cgJensenLogo },
  { name: "Enemærke & Petersen", logo: enemaerkeLogo },
  { name: "Cabinn", logo: cabinnLogo, scale: 0.85 },
];
