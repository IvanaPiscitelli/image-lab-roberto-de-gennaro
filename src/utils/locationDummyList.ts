import location from "../assets/salone0.webp";
import location1 from "../assets/salone1.webp";
import location2 from "../assets/salone2.webp";
import location3 from "../assets/salone3.webp";
import location4 from "../assets/salone4.webp";
import location5 from "../assets/salone5.webp";

interface Location {
  id: number;
  name: string;
  url: string;
}

export const locationDummyList: Location[] = [
  {
    id: 1,
    name: "Salone",
    url: location,
  },
  {
    id: 2,
    name: "Salone",
    url: location1,
  },
  {
    id: 3,
    name: "Salone",
    url: location2,
  },
  {
    id: 4,
    name: "Salone",
    url: location3,
  },
  {
    id: 5,
    name: "Salone",
    url: location4,
  },
  {
    id: 6,
    name: "Salone",
    url: location5,
  },
];
