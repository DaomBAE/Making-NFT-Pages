import { Box, Flex, Text, Button, Image, Spacer } from "@chakra-ui/react";
import Header from "./Header";

function Landing() {
  return (
    <Box bg="gray.50" minHeight="100vh">
      <Box maxW="7xl" mx="auto">
        <Header />
        <Flex as="main" mt="12">
          <Box flex="1">
            <Text fontSize="4xl" fontWeight="bold">
              NFT Market Place
            </Text>
            <Text mt="6" fontSize="xl" color="gray.600">
              수백만 개의 NFT 아트를 탐색하고 구매하세요
            </Text>
            <Button mt="8" colorScheme="blue">
              Let's Start!
            </Button>
          </Box>
        </Flex>
        <Box as="footer" py="12">
          <Text textAlign="center" color="gray.500">
            © 2023 Chiki Chiki Boom Site. All rights reserved by Daom.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
