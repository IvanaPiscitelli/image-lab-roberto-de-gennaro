import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import { dummyPriceList } from "../utils/priceList";
import { useTranslation } from "react-i18next";

const PriceListComp = () => {
  const { t } = useTranslation();
  return (
    <Box>
      {dummyPriceList.map((person) => {
        return (
          <VStack key={person.name}>
            <Heading mt={5}>{t(`categories.${person.name}`)}</Heading>
            <Box textAlign="center">
              {person.cuts.map((cut) => {
                return (
                  <Text key={cut.id} lineHeight="32px">
                    {t(`cuts.${cut.name}`)} : {t(`cuts.${cut.amount}`)}
                  </Text>
                );
              })}
            </Box>
          </VStack>
        );
      })}
    </Box>
  );
};

export default PriceListComp;
