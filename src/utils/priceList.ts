interface CutHair {
  id: number;
  name: string;
  amount: string;
}

interface PriceList {
  name: string;
  cuts: CutHair[];
}

export const dummyPriceList: PriceList[] = [
  {
    name: "MEN",
    cuts: [
      { id: 1, name: "TAGLIO", amount: "15€" },
      { id: 2, name: "VAPOR TOTAL SHAVE RELAX", amount: "10€" },
      { id: 3, name: "VAPOR DEFINITION", amount: "5€" },
      { id: 4, name: "BARBER MASK", amount: "5€" },
      { id: 5, name: "COLORE", amount: "15€" },
      { id: 6, name: "MECHES/SCHIARITURE", amount: "50€" },
      { id: 7, name: "TOTAL BLONDE (ICE, PLATINUM)", amount: "da 60€ a 80€" },
      { id: 8, name: "HAIR TATTOO", amount: "da 5€ a 40€" },
    ],
  },
  {
    name: "WOMEN",
    cuts: [
      { id: 9, name: "PIEGA LISCIA", amount: "10€" },
      { id: 10, name: "PIEGA MOSSA", amount: "15€" },
      { id: 11, name: "PIASTRA/FERRO", amount: "5€" },
      { id: 12, name: "TAGLIO", amount: "30€" },
      { id: 13, name: "TAGLIO CORTO", amount: "20/25€" },
      { id: 14, name: "RITOCCO COLORE", amount: "35€" },
      { id: 15, name: "RITOCCO SENZA AMMONIACA", amount: "40€" },
      { id: 16, name: "COLORE INTERO", amount: "50€" },
      { id: 17, name: "COLORE INTERO SENZA AMMONIACA", amount: "55€" },
      { id: 18, name: "TONALIZZAZIONE", amount: "45€" },
      { id: 19, name: "MECHES", amount: "85€" },
      { id: 20, name: "BALAYAGE", amount: "da 100€ a 150€" },
      { id: 21, name: "RICOSTRUZIONE", amount: "35€" },
      { id: 22, name: "PERMANENTE", amount: "50€" },
      { id: 23, name: "STIRATURA", amount: "2€ al grammo" },
    ],
  },
];
