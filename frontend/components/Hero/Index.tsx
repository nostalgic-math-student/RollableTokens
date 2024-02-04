export type CollectionInfo = {
    contractName: string,
    contractSymbol: string,
    litPKP: string,
    unpopulatedTokenURI: string,
    cost: number,
    rerollCost: number,
}

export interface HeroInfo {
    userAddress: string,
}

import Image from 'next/image'
import { BigNumber } from 'ethers'
import { NextPage } from 'next'
import GameOfLife from '../GameOfLife'
import { useState } from 'react'

const Hero: NextPage<HeroInfo> = ({ userAddress }) => {

    const [formData, setFormData] = useState<CollectionInfo>();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Step1 init");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='hero min-h-screen bg-base-200 flex-grow' >
            <div className="hero-content gap-6 flex">
                <GameOfLife />

                <form className="card justify-normal gap-4 flex-grow" onSubmit={handleSubmit}>
                    <div className="card flex-grow bg-base-100 shadow-xl max-w-max">
                        <h1 className="card-title card-body mx-auto">Create your own generative collection!</h1>
                    </div>

                    <div className='card flex-grow bg-primary shadow-xl'>
                        <div className='card-body grow grid grid-cols-2 gap-8 text-xl '>
                            <p> Set name for <b>YOUR COLLECTION</b> </p>
                            <input name="contractName"
                                value={formData ? formData.contractName : ""}
                                onChange={handleInputChange}
                                className='rounded-lg text-center'
                            />
                            <p> Set a name for <b>YOUR SYMBOL</b> </p>
                            <input name="contractSymbol"
                                value={formData ? formData.contractSymbol : ""}
                                onChange={handleInputChange}
                                className='rounded-lg text-center'
                            />
                        </div>
                    </div>
                    <div className='card flex-grow bg-accent text-black shadow-xl'>
                        <div className='card-body grow grid grid-cols-2 gap-8 text-xl '>

                            <p> How much will it <b>COST</b> ?  </p>
                            <input name="cost"
                                value={formData ? formData.cost : ""}
                                onChange={handleInputChange}
                                className='rounded-lg text-white text-center'
                            />
                        </div>
                    </div>

                    <div className='card flex-grow bg-secondary shadow-xl'>
                        <div className='card-body grow grid grid-cols-2 gap-8 text-xl '>
                            <p> How much will rerolls <b>COST</b> ?  </p>
                            <input name="rerollCost"
                                value={formData ? formData.rerollCost : ""}
                                onChange={handleInputChange}
                                className='rounded-lg text-white text-center'
                            />
                        </div>
                    </div>



                    <div className="card-actions justify-end">
                        <button type='submit' className="btn btn-outline btn-wide text-bold"> GENERATE </button>
                    </div>
                </form>
            </div>


            Hero! hello {userAddress}


        </div >
    )
}

export default Hero