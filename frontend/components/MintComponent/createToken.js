import {ethers} from 'ethers';
import DynamicContractFactoryABI from '../../ABI/DynamicContractFactoryABI.json';
import DynamicTokenABI from '../../ABI/DynamicTokenABI.json';

export async function getFactoryContractInstance  () {
    const avax_rpc = `https://avalanche.public-rpc.com`;
    const avax_provider = new ethers.providers.JsonRpcProvider(avax_rpc);

    return new ethers.Contract('0xd3a673E51189EE48aD58992F0517A03C695AfBD6', DynamicContractFactoryABI, avax_provider);
    }
    

export async function getTokenContractInstance () {

    const avax_rpc = process.env.RPC;
    const avax_provider = new ethers.providers.JsonRpcProvider(avax_rpc);
    
    const getTokenContractInstance = async (contractAddress) =>{
        return new ethers.Contract(contractAddress, DynamicTokenABI, avax_provider);
    }
}
    