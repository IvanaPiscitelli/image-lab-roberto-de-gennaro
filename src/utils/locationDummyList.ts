import location from "../assets/location0.png";
import location1 from "../assets/location1.png";
import location2 from "../assets/location2.png";
import location3 from "../assets/location3mod.png";
import location4 from "../assets/location4.png";
import location5 from "../assets/location5.png";

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
