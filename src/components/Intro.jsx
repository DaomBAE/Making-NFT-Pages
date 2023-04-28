import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ImWink } from "react-icons/im";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <Box bgGradient="linear(to-b, black, transparent)" pt={20}>
      <Box maxW="xl" mx="auto" textAlign="center" position="relative">
        <Text
          fontSize="9xl"
          fontWeight="bold"
          color="gray.300"
          opacity={0.5}
          pointerEvents="none"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)">
          Rice Ball
        </Text>
        <Box position="relative">
          <Image
            src={imgSrc}
            alt="NFT"
            boxSize="40"
            borderRadius="full"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          <Box
            bg="white"
            boxSize="40"
            borderRadius="full"
            color="gray.950"
            display="flex"
            justifyContent="center"
            alignItems="center">
            Loading...
          </Box>
        </Box>
        <Flex mt={4} alignItems="center" fontSize="2xl" fontWeight="bold">
          Rice Ball
          <Box
            bg="main"
            boxSize="6"
            borderRadius="full"
            color="gray.950"
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml={4}>
            <ImWink size={16} />
          </Box>
        </Flex>
        {/* 컨트랙주소랑 리믹스abi 입력 */}
        <Flex mt={2} alignItems="center" color="gray.300">
          by
          <Text ml={2} color="main">
            {CONTRACT_ADDRESS}
          </Text>
        </Flex>
        <Text mt={2} color="gray.300">
          주먹밥이란 주먹으로 쥔 밥이다. 조선시대 문학 작품 등지에서 나무꾼들이
          도시락으로 콩과 깨가 들어간 주먹밥을 만드는 장면이 묘사되어 있고,
          조선왕조실록에서도 콩을 삶아서 과반을 만들었다는 기록이 있다. 또한
          불경에서는 승려가 먹는 음식으로 단식이라는 게 나오는데 이것은 인간이
          먹는 물질과 형상으로 된 음식이란 의미 외에도 손으로 뭉쳐 먹는 밥, 즉
          주먹밥을 의미하기도 한다.
        </Text>
      </Box>
      <Flex py={4} alignItems="center" justifyContent="center">
        <Box textAlign="center" mx={4}>
          <Text fontWeight="bold">{totalNft}</Text>
          <Text color="gray.300">Total NFT</Text>
        </Box>
        <Box textAlign="center" mx={4}>
          <Text fontWeight="bold">{mintedNft}</Text>
          <Text color="gray.300">Minted NFT</Text>
        </Box>
        <Box textAlign="center" mx={4}>
          <Text fontWeight="bold">{myNft}</Text>
          <Text color="gray.300">My NFT</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;
