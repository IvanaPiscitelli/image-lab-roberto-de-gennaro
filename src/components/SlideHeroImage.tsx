import { Box } from "@chakra-ui/react";

const SlideHeroImage = () => {
  return (
    <Box>
      <Carousel>
        <CarouselItem>
          <Image src="immagine1.jpg" />
        </CarouselItem>
        <CarouselItem>
          <Image src="immagine2.jpg" />
        </CarouselItem>
        <CarouselItem>
          <Image src="immagine3.jpg" />
        </CarouselItem>
      </Carousel>
    </Box>
  );
};

export default SlideHeroImage;
