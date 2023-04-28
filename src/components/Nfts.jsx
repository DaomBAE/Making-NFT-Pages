import { useState, useEffect } from "react";
import axios from "axios";
import NftCard from "./NftCard";
import { Grid, GridItem } from "@chakra-ui/react";

const Nfts = ({ page }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);

    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-black ${
            i + 1 === selectedPage ? "text-black" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}>
          {i + 1} <span className="text-base">Page</span>
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  useEffect(() => {
    getNfts(1);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <div>{pageComp()}</div>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
        gap={8}
        mt={8}
        justifyItems="center">
        {nfts ? (
          nfts.map((v, i) => {
            return (
              <GridItem key={i}>
                <NftCard
                  tokenId={v.tokenId}
                  metadata={v.metadata}
                  mintedNft={v.mintedNft}
                />
              </GridItem>
            );
          })
        ) : (
          <div>Loading..</div>
        )}
      </Grid>
    </div>
  );
};

export default Nfts;
