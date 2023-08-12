import { useEffect } from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";

const CookieBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");

    if (!acceptedCookies) {
      onOpen();
    }
  }, [onOpen]);

  const acceptCookies = () => {
    localStorage.setItem("acceptedCookies", "true");
    onClose();
  };

  return (
    <Box position="fixed" bottom="0" w="100%" p="6" bg="black" color="white" display={isOpen ? "block" : "none"}>
      This website uses cookies to ensure you get the best experience. Learn more
      <Button ml="3" mt={{ base: "13px", md: "0px" }} onClick={acceptCookies}>
        Accetto
      </Button>
    </Box>
  );
};

export default CookieBanner;
