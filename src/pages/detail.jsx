import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";

const Detail = () => {
  const [metadata, setMetadata] = useState();
  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );
      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);

  if (!metadata) {
    return <Spinner />;
  }

  const { name, image, attributes, description } = metadata;

  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      justify="center"
      align="center"
      py={20}
      bg="gray.900">
      <Box maxW="512px">
        <Image borderRadius="full" src={image} alt="NFT" />
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={3}
          py={8}
          bg="gray.500"
          borderRadius="2xl"
          mt={10}
          textAlign="center">
          {attributes.map((v, i) => (
            <GridItem key={i} mx={4}>
              <Text>{v.trait_type}</Text>
              <Text
                borderTop="2px"
                borderColor="gray.300"
                fontWeight="bold"
                mt={1}>
                {v.value}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box m={8}>
        <Flex alignItems="center">
          <Text ml={10} fontSize="6xl" fontWeight="bold">
            {name}
          </Text>
          <Box
            bg="main"
            w={1}
            h={1}
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml={2}
            color="gray.950"></Box>
        </Flex>
        <Text ml={10} mt={8} fontSize="4xl">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default Detail;
