import { Parallax } from "react-parallax";
import { useBreakpointValue, Text } from "@chakra-ui/react";

import productsWhite from "../assets/productsWhite.png";
import mobileProducts from "../assets/mobile-products.png";
import { useTranslation } from "react-i18next";

const ParallaxBg2 = () => {
  const { t } = useTranslation();

  const bgImage = useBreakpointValue({
    base: mobileProducts,
    sm: mobileProducts,
    md: productsWhite,
    lg: productsWhite,
  });

  const sizetitle = useBreakpointValue({
    base: "1.5em",
    md: "2.375em",
  });

  const textconfig = {
    ml: useBreakpointValue({
      base: "3em",
      md: "36%",
    }),
    mr: useBreakpointValue({
      base: "3em",
      md: "0em",
    }),
  };

  const { ml, mr } = textconfig;

  return (
    <Parallax
      className="sfondo-2"
      bgImage={bgImage}
      bgImageStyle={{
        h: "1000px",
        objectFit: "cover",
      }}
      strength={800}
    >
      <div className="content-2">
        <Text
          lineHeight="1.4"
          fontFamily="Quicksand"
          fontSize={sizetitle}
          textAlign={{ base: "center", md: "right" }}
          ml={ml}
          mr={mr}
        >
          {t("titleProducts")}
        </Text>
        <Text textAlign={{ base: "center", md: "right" }} ml={ml} mr={mr} fontSize="1.25em" lineHeight="1.4">
          {t("subTitleProducts")}
        </Text>
      </div>
    </Parallax>
  );
};

export default ParallaxBg2;
