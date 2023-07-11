import { Parallax } from "react-parallax";
import sfondo1 from "../assets/sfondo1.jpg";

const ParallaBg1 = () => (
  <Parallax className="sfondo" bgImage={sfondo1} strength={800}>
    <div className="content">
      <span className="img-txt">Welcome to [IMAGE LAB]</span>
    </div>
  </Parallax>
);

export default ParallaBg1;
