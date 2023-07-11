import { Parallax } from "react-parallax";
import sfondo2 from "../assets/prodotti.png";

const ParallaBg2 = () => (
  <Parallax className="sfondo-2" bgImage={sfondo2} strength={800}>
    <div className="content-2">
      <span className="img-txt">Con Prodotti di ultima tecnologia</span>
    </div>
  </Parallax>
);

export default ParallaBg2;
