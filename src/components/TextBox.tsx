import { Container, Heading, Text } from "@chakra-ui/react";

interface Props {
  headingChildren?: React.ReactNode;
  textChildren?: React.ReactNode;
}

const TextBox = ({ headingChildren, textChildren }: Props) => {
  return (
    <Container className="text-box" width="100%" padding="50px 0" justifyContent={"center"}>
      <Heading fontWeight={400} textAlign="left" fontStyle="normal">
        {headingChildren}
      </Heading>
      <Text className="text-label" fontSize="1rem" textAlign="left">
        {textChildren}
      </Text>
    </Container>
  );
};

export default TextBox;
