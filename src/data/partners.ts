import type { Partner } from "@/types";
import { assets } from "./assets";

// The design uses "Logoipsum" placeholder logos.
export const partners: Partner[] = assets.partners.map((logo, index) => ({
  id: `partner-${index + 1}`,
  name: "Logoipsum",
  logo,
}));
