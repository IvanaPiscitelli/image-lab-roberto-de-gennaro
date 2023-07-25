import { Box, Button, Flex, Image } from "@chakra-ui/react";
import capelli0 from "../assets/capelli0.png";
import capelli1 from "../assets/capelli1.png";
import capelli2 from "../assets/capelli2.png";
import capelli3 from "../assets/capelli3.png";
import capelli4 from "../assets/capelli4.png";
import { useState } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const SlideHeroImage = () => {
  const images = [capelli0, capelli1, capelli2, capelli3, capelli4];
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };
  return (
    <Box bg="#F5F5F5" width="100%" height="43em" position="relative" overflow="hidden">
      <Flex alignItems="center" height="100%">
        <Button
          onClick={handlePrevImage}
          position="absolute"
          bg="none"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          rightIcon={<MdOutlineArrowBackIos size="50px" color="#d0d0d0" />}
          padding={0}
        />

        <Flex width="100%" height="100%" flexDirection={{ base: "column", md: "row" }}>
          <Box flex="1">
            {/* TODO: aumentare il width in modalità tablet */}
            <Image
              src={images[currentImage]}
              alt={`Immagine ${currentImage + 1}`}
              width={{ base: "50%", md: "90%" }}
              height={{ base: "68%", md: "100%" }}
              margin={{ base: "15% 25%", md: "0" }}
              objectFit="cover"
            />
          </Box>
          <Box flex="1">
            <Image
              src={images[currentImage + 1]}
              alt={`Immagine ${currentImage + 2}`}
              width={{ base: "50%", md: "50%" }}
              height={{ base: "68%", md: "auto" }}
              margin={{ base: "5% 25%", md: "54% 22%", lg: "37% 21%", xl: "17% 22%" }}
              objectFit="cover"
            />
          </Box>
        </Flex>

        <Button
          onClick={handleNextImage}
          bg="none"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          rightIcon={<MdOutlineArrowForwardIos size="50px" color="#d0d0d0" />}
          padding={0}
        />
      </Flex>
    </Box>
  );
};

export default SlideHeroImage;
