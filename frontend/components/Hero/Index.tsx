
export interface CollectionInfo {
    contractName: string,
    contractSymbol: string,
    litPKP: string,
    unpopulatedTokenURI: string,
    cost: BigNumber,
    rerollCost: BigNumber,
}

export interface HeroInfo {
    userAddress: string,
}

import { BigNumber } from 'ethers'
import { NextPage } from 'next'


const Hero: NextPage<HeroInfo> = ({ userAddress }) => {
    return (
        <div className='hero min-h-screen bg-base-200'>Hero! hello {userAddress} </div>
    )
}

export default Hero