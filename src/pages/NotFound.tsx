import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box textAlign="center" pt="35vh" pb="48vh" bgColor="#CCC9C4">
      <Heading display="inline-block" as="h2" size="2xl" bgClip="text" color="black">
        404
      </Heading>
      <Text fontSize="24px" fontWeight="extrabold" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text mb={6}>The page you&apos;re looking for does not seem to exist</Text>

      <Button color="white" variant="solid" bgColor="black">
        <Link href="/">Go to Home</Link>
      </Button>
    </Box>
  );
};

export default NotFound;
