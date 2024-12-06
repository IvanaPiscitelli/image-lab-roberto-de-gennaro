import { Box, Image as ChakraImage, SimpleGrid, Text, Link, Show, AspectRatio, Skeleton } from "@chakra-ui/react";
import { locationDummyList } from "../utils/locationDummyList";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight } from "react-icons/fa";
import hero from "../assets/hero.webp";
import { useState, useEffect } from "react";

const LocationComp = () => {
  const { t } = useTranslation();
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    // Precarichiamo tutte le immagini
    locationDummyList.forEach((location) => {
      const img = new Image();
      img.src = location.url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === locationDummyList.length) {
          // Tutte le immagini sono caricate
          setAllImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Anche in caso di errore, conta come "tentato caricamento"
        // Potresti gestire diversamente se vuoi garantire che tutte le immagini esistano
        loadedCount++;
        if (loadedCount === locationDummyList.length) {
          setAllImagesLoaded(true);
        }
      };
    });
  }, []);

  return (
    <Box pt={{ base: "50px", md: "130px" }} pb={{ base: "50px", md: "25px" }}>
      <Text textAlign="center" pt="45px" px="25px" fontFamily="Quicksand" fontSize={{ base: "30px", md: "40px" }}>
        {t("titleLocation")}
      </Text>

      <Show above="md">
        <Box maxW="1400px" mx="auto" overflow="hidden" p="40px">
          <AspectRatio ratio={16 / 9}>
            {allImagesLoaded ? (
              <ChakraImage src={hero} alt="main photo of location" objectFit="cover" w="100%" h="100%" loading="lazy" />
            ) : (
              <Skeleton w="100%" h="100%" />
            )}
          </AspectRatio>
        </Box>
      </Show>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        p="40px"
        spacing={6}
        maxWidth={{ base: "100vw", lg: "1170px" }}
        mx="auto"
      >
        {locationDummyList.map((location) => (
          <Box
            key={location.id}
            bg="teal.500"
            transition="all 0.2s"
            _hover={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)", transform: "scale(1.01)" }}
          >
            <AspectRatio ratio={4 / 3}>
              {allImagesLoaded ? (
                <ChakraImage src={location.url} alt="location photos" loading="lazy" objectFit="cover" />
              ) : (
                <Skeleton w="100%" h="100%" />
              )}
            </AspectRatio>
          </Box>
        ))}
      </SimpleGrid>

      <Box mx="auto" maxWidth={{ base: "100vw", md: "1170px" }}>
        <Link href="/" p="50px 15px" display="flex" justifyContent="center" alignItems="center" alignContent="center">
          <Box
            textAlign="center"
            fontSize="50px"
            fontWeight={700}
            fontFamily="Quicksand"
            mr={{ base: "0px", md: "30px" }}
          >
            {t("backHome")}
          </Box>
          <FaLongArrowAltRight size={48} />
        </Link>
      </Box>
    </Box>
  );
};

export default LocationComp;
