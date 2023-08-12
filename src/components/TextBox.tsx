import { Container, Heading, Text } from "@chakra-ui/react";

interface Props {
  headingChildren?: string;
  textChildren?: string;
}

const TextBox = ({ headingChildren, textChildren }: Props) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100%"
      p={{ base: "35px 20px 35px 20px", md: "50px 0" }}
      color="black"
    >
      <Heading fontWeight={400} textAlign="center" fontStyle="normal">
        {headingChildren}
      </Heading>
      {textChildren && (
        <Text fontSize="1rem" textAlign="center" m="20px auto">
          {textChildren}
        </Text>
      )}
    </Container>
  );
};

export default TextBox;
