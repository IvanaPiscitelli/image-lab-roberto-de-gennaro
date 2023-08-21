import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import "../styles/index.css";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  direction: string;
  moveSlide: () => void;
}

const BtnSlider = ({ direction, moveSlide }: Props) => {
  const iconSize = useBreakpointValue({ base: "30px", md: "70px" });
  const iconColor = useBreakpointValue({ base: "black", md: "white", xl: "black" });
  return (
    <Box onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      {direction === "next" ? (
        <IconButton
          aria-label="arrow-forward"
          icon={<MdOutlineArrowForwardIos size={iconSize} color={iconColor} />}
          bgColor="transparent"
          mr={{ base: "30px", sm: "50px", md: "30px", lg: "90px" }}
          _active={{ bgColor: "transparent" }}
          _hover={{ bgColor: "transparent" }}
          _focus={{ boxShadow: "none", bgColor: "transparent" }}
        />
      ) : (
        <IconButton
          aria-label="arrow-backward"
          icon={<MdOutlineArrowBackIos size={iconSize} color={iconColor} />}
          bgColor="transparent"
          ml={{ base: "30px", sm: "50px", md: "30px", lg: "90px" }}
          _active={{ bgColor: "transparent" }}
          _hover={{ bgColor: "transparent" }}
          _focus={{ boxShadow: "none", bgColor: "transparent" }}
        />
      )}
    </Box>
  );
};

export default BtnSlider;
