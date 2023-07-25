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
      width="100%"
      padding={{ base: "35px 20px 0px 20px", md: "50px 0" }}
    >
      <Heading fontWeight={400} textAlign="center" fontStyle="normal">
        {headingChildren}
      </Heading>
      <Text fontSize="1rem" textAlign="center" margin="20px auto">
        {textChildren}
      </Text>
    </Container>
  );
};

export default TextBox;
