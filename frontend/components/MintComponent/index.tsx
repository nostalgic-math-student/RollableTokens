
import { useState } from "react";
import { ethers } from 'ethers';
import { useSigner } from "@thirdweb-dev/react";
import { getFactoryContractInstance, getTokenContractInstance } from './createToken';

const MintComponent = () => {
    const [Payload, setPayload] = useState({});
    const signer = useSigner();

    const signMessage = async ({ contractAddress, tokenId }) => {

        if (!signer) {
            console.error("Signer not found. Please connect to a wallet.");
            return;
        }
        signer.connect

        const messageHash = ethers.utils.keccak256(ethers.utils.solidityPack(["address", "uint256"], [contractAddress, tokenId]));
        // Sign the string message
        const arrayfied = ethers.utils.arrayify(messageHash);

        const signature = await signer.signMessage(arrayfied);

        // console.log("aqui");
        // const signature = await signer.signMessage(ethers.utils.arrayify(messageHash));
        console.log("signature,", signature);
        return signature;
    }

    const createTokenContract = async () => {
        const factoryInstance = getFactoryContractInstance();

        if (!signer) {
            console.error("Signer not found. Please connect to a wallet.");
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const avax_rpc = `https://avalanche.public-rpc.com`;


        const rep = factoryInstance.newDynamicTokenContract();




    }

    return (
        <div>MintComponent

            <button className="btn btn-primary" onClick={() => signMessage({ contractAddress: "0xd3a673E51189EE48aD58992F0517A03C695AfBD6", tokenId: "1" })}>

            </button>
        </div>
    )
}

export default MintComponent