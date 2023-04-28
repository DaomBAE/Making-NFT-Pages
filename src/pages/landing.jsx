import { Box, Flex, Text, Button, Image, Spacer } from "@chakra-ui/react";
import Header from "../components/Header";

function Landing() {
  return (
    <Box bg="gray.50" minHeight="100vh">
      <Box maxW="7xl" mx="auto">
        <Header />
        <Flex
          as="header"
          align="center"
          justify="space-between"
          py="6"
          px="8"
          bg="white"
          borderBottomWidth="1px"
          borderBottomColor="gray.200">
          <Text fontSize="xl" fontWeight="bold" color="gray.700">
            Chiki Chiki Boom
          </Text>
          <Button colorScheme="blue">Login</Button>
        </Flex>

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
          <Spacer />
          <Image
            maxW="500px"
            src="https://gateway.pinata.cloud/ipfs/QmZv1d2Jq33CLpeFfnxb1vcdQKK1k6oj79dZEtgGGKq5XJ?_gl=1*qkj3tg*rs_ga*MWExYzNkN2EtYTViMi00NjVmLWFiM2UtZDUyNzE5MDc2YzQ5*rs_ga_5RMPXG14TE*MTY4MjY0ODIwMS4xLjEuMTY4MjY0ODIxOC40My4wLjA."
            alt="NFT"
          />
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
