
export interface CollectionInfo {
    contractName: string,
    contractSymbol: string,
    litPKP: string,
    unpopulatedTokenURI: string,
    cost: BigNumber,
    rerollCost: BigNumber,
}

import { BigNumber } from 'ethers'
import { FC } from 'react'

const Hero: FC = ({ userAddress }) => {
    return (
        <div className='hero min-h-screen bg-base-200'>Hero! hello {userAddress} </div>
    )
}

export default Hero