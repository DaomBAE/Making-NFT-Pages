import { ImWink } from "react-icons/im";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  const isMinted = parseInt(mintedNft) >= tokenId;

  return (
    <Box rounded="2xl" bg="gray.800" pb="4" position="relative">
      {!isMinted && (
        <Flex
          position="absolute"
          bg="blackAlpha.600"
          w="full"
          h="full"
          rounded="2xl"
          display="flex"
          justify="center"
          alignItems="center"
          fontWeight="bold"
          color="whiteAlpha.800"
          flexDirection="column"
          top="0"
          left="0">
          <Box fontSize="6xl">Not Minted</Box>
          <Box fontSize="xl">This NFT has not been minted yet</Box>
        </Flex>
      )}
      <Image roundedTop="2xl" src={metadata.image} alt={metadata.name} />
      <Flex
        mt="4"
        align="center"
        px="10"
        pt="4"
        mb="-3"
        fontSize="xl"
        fontWeight="bold"
        color="gray.300">
        <Box fontSize="4xl">Onigiri? Rice Ball.</Box>
        <Box
          bg="main"
          w="6"
          h="6"
          rounded="full"
          display="flex"
          justify="center"
          alignItems="center"
          ml="2"
          color="gray.950"></Box>
      </Flex>
      <Text
        mt="2"
        mb="-9"
        px="9"
        justify="center"
        fontSize="3xl"
        fontWeight="bold"
        color="gray.300">
        # {tokenId}
      </Text>
      <Flex mb="4" justify="flex-end" px="6">
        <Link to={`/${tokenId}`}>
          <Button
            disabled={!isMinted}
            colorScheme="yellow"
            color="blackAlpha.700"
            px="4"
            py="2"
            rounded="xl"
            _hover={{ bg: "gray.500", color: "white" }}>
            Detail
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default NftCard;
