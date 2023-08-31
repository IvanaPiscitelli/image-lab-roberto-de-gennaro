import location from "../assets/salone0.jpeg";
import location1 from "../assets/salone1.jpeg";
import location2 from "../assets/salone2.jpeg";
import location3 from "../assets/salone3.jpeg";
import location4 from "../assets/salone4.jpeg";
import location5 from "../assets/salone5.jpeg";

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
