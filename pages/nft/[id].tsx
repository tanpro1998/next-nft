import React from "react";

import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";

const NFTDropPage = () => {
  const connectWithMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <div className=" bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className=" flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className=" bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">FLASH Apes</h1>
            <h2 className="text-xl text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <h1 className=" w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The FLASH NFT Market Place
          </h1>
          <button
            className=" rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            onClick={() => (address ? disconnect() : connectWithMetaMask())}
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className=" text-teal-500 text-center text-sm">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        <div className=" mt-10 flex flex-col flex-1 items-center space-x-6 text-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className=" w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className=" text-4xl font-bold lg:text-5xl lg:font-extrabold">
            The FLASH Ape Coding Club | NFT Drop
          </h1>
          <p className=" pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>
        <button className="h-16 w-full bg-orange-500 text-white rounded-full">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
