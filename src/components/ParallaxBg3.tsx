import { Parallax } from "react-parallax";
import sfondo3 from "../assets/sfondo3.jpg";

const ParallaBg3 = () => (
  <Parallax className="sfondo" bgImage={sfondo3} strength={800}>
    <div className="content">
      <span className="img-txt">Contact Me</span>
    </div>
  </Parallax>
);

export default ParallaBg3;
