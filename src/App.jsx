import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Landing from "./components/landing";

function App() {
  const [account, setAccount] = useState("");
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box minH="100vh" bg="gray.950" color="white">
          <Header account={account} setAccount={setAccount} />
          <Routes>
            <Route path="/landing" element={<Landing account={account} />} />
            <Route path="/" element={<Main account={account} />} />
            <Route path="/:tokenId" element={<Detail />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
