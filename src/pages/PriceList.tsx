import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { dummyPriceList } from "../utils/priceList";
import logo from "../assets/logo-roberto.png";

const PriceList = () => {
  return (
    <VStack bg="black" color="white" h="100%" pb="100px">
      <Breadcrumb my="7px">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Image src={logo} alt="logo" />
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text m="10px">LISTINO PREZZI</Text>

      <h1>
        {dummyPriceList.map((person) => {
          return (
            <VStack key={person.name}>
              <Heading mt={5}>{person.name}</Heading>
              <Box textAlign="center">
                {person.cuts.map((cut) => {
                  return (
                    <Text key={cut.id} lineHeight="32px">
                      {cut.name} : {cut.amount}
                    </Text>
                  );
                })}
              </Box>
            </VStack>
          );
        })}
      </h1>
    </VStack>
  );
};

export default PriceList;
