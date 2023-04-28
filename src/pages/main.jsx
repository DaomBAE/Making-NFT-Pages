// ** 온스크롤 + NFT 구매
import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Nfts from "../components/Nfts";

const web3 = new Web3(window.ethereum);

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Main = ({ account }) => {
  const [totalNft, setTotalNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [page, setPage] = useState(1);
  const [nfts, setNfts] = useState([]);
  const [buyNftAmount, setBuyNftAmount] = useState(1);

  const updateBuyNftAmount = (e) => {
    setBuyNftAmount(parseInt(e.target.value));
  };

  // 스크롤
  const pageSize = 10;

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNft(response);
      setPage(parseInt((parseInt(response) - 1) / pageSize) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getNfts = async () => {
    try {
      if (!contract) return;

      const fromIndex = (page - 1) * pageSize;
      const toIndex =
        fromIndex + pageSize > mintedNft ? mintedNft : fromIndex + pageSize;

      const ids = [...Array(toIndex - fromIndex).keys()].map(
        (i) => i + fromIndex + 1
      );
      const response = await Promise.all(
        ids.map((id) => contract.methods.nft(id).call())
      );

      setNfts((prev) => [...prev, ...response]);
    } catch (error) {
      console.error(error);
    }
  };
  //****** 또다른 리믹스 컨트랙트 코드필요 (지금 불가능)
  // const buyNft = async (nftAmount) => {
  //   try {
  //     if (!contract || !account) return;

  //     // 사용자 계정 잔액 확인
  //     const balance = await web3.eth.getBalance(account);
  //     const price = await contract.methods.price().call();

  //     // 충분한 자금 확인
  //     if (parseInt(balance) < parseInt(price) * parseInt(nftAmount)) {
  //       alert("잔액이 부족합니다.");
  //       return;
  //     }

  //     // NFT 구매
  //     await contract.methods.buy(nftAmount).send({
  //       from: account,
  //       value: parseInt(price) * parseInt(nftAmount),
  //     });

  //     getMyNft();
  //     getMintedNft();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  useEffect(() => {
    setNfts([]);
    getNfts();
  }, [page]);

  useEffect(() => {
    getMyNft();
  }, [account]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (
      scrollHeight - (scrollTop + clientHeight) < 200 &&
      mintedNft > nfts.length
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Intro
        totalNft={totalNft}
        mintedNft={mintedNft}
        myNft={myNft}
        // buyNft={buyNft}
      />
      <Nfts
        nfts={nfts}
        age={page}
        mintedNft={mintedNft}
        onScroll={handleScroll}
      />
      <div>
        <input
          type="number"
          value={buyNftAmount}
          onChange={updateBuyNftAmount}
        />
        {/* <button onClick={() => buyNft(buyNftAmount)}>Buy</button> */}
      </div>
    </>
  );
};

export default Main;
