import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FcChargeBattery } from "react-icons/fc";
import { AiFillHeart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import axios from "axios";

const Header = ({ account, setAccount }) => {
  const [coinPrice, setCoinPrice] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );

      setCoinPrice([
        { symbol: "BTC", price: response.data[0].trade_price },
        { symbol: "ETH", price: response.data[1].trade_price },
        { symbol: "MATIC", price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <Flex
      as="header"
      maxW="screen.xl"
      mx="auto"
      px={4}
      color="blackAlpha.800"
      justify="space-between"
      align="center"
      fontWeight="semibold">
      <Link to="/">
        <Flex align="center" color="main">
          <Heading
            as="h1"
            size="2xl"
            mr={1}
            ml={5}
            mt={5}
            mb={5}
            style={{ flexShrink: 0 }}>
            Rice Ball World
          </Heading>
          <FcChargeBattery size={46} />
        </Flex>
      </Link>
      <Flex mr={4} align="center">
        {coinPrice && (
          <List display="flex" color="gray.400" fontSize="sm">
            {coinPrice.map((v, i) => {
              return (
                <ListItem key={i} ml={2}>
                  {v.symbol}: {(v.price / 1000).toLocaleString()}K₩
                </ListItem>
              );
            })}
          </List>
        )}
        {account ? (
          <Flex align="center" p={2} bg="gray.800" borderRadius="full" ml={4}>
            <Box
              bg="main"
              w={6}
              h={6}
              borderRadius="full"
              display="flex"
              justifyContent="center"
              alignItems="center">
              <AiFillHeart />
            </Box>
            <Text ml={1}>
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </Text>
          </Flex>
        ) : (
          <Button
            colorScheme="yellow"
            color="blackAlpha.800"
            px="3"
            py="3"
            _hover={{ bg: "gray.300", color: "white" }}
            borderRadius="full"
            transition="box-shadow 0.3s ease-in-out"
            boxShadow="sm"
            ml={4}
            onClick={onClickAccount}>
            <Flex align="center">
              <Box
                w={5}
                h={5}
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <BiWallet />
              </Box>
              <Text ml={1}>Connect</Text>
            </Flex>
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
