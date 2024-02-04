export type CollectionInfo = {
    contractName: string,
    contractSymbol: string,
    cost: number,
    description: string,
    external_url: string,
}

export interface HeroInfo {
    userAddress: string,
}

import Image from 'next/image'
import { BigNumber } from 'ethers'
import { NextPage } from 'next'
import GameOfLife from '../GameOfLife'
import { useState, useEffect } from 'react'
import { uploadIPFSFormData } from './uploadMetadata';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { error } from 'console'

type templateMetadata = {
    name: string,
    description: string,
    image: string,
    external_url: string,
    animation_url: string,
}

const Hero: NextPage<HeroInfo> = ({ userAddress }) => {

    const [formData, setFormData] = useState({
        contractName: "",
        contractSymbol: "",
        description: "",
        cost: 0,
        external_url: "",
    });
    const [Snippet, setSnippet] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [Loader, setLoader] = useState(false);

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        try {
            const imageURLForm = new FormData()
            if (selectedImage) {
                imageURLForm.append("file", selectedImage);
            }

            const imageURL: string = await uploadIPFSFormData(imageURLForm);


            const metadata: templateMetadata = await {
                name: formData.contractName,
                description: formData.description,
                image: imageURL,
                external_url: formData.external_url,
                animation_url: "",
            }
            setLoader(false);
            router.push("/factoryCallback");
        }
        catch (error) {
            setLoader(false);
            console.log(error)
        }

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(name, value);
    };


    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const iframeStyle = {
        resize: 'both',
        overflow: 'auto',
        width: '100%', // You can adjust this as needed
        height: '500px', // Let's start with a cute height, but it can grow!
        border: '1px solid #ccc',
        minHeight: '100px', // Minimum height so it's never too tiny
        minWidth: '15px', // Minimum width for the same reason
    };

    useEffect(() => {
        if (localStorage.getItem('codeSnippet')) {

            setSnippet(localStorage.getItem('codeSnippet'));
        }
    }
        , [Snippet])


    return (
        <div className='hero min-h-screen bg-base-200 flex-grow' >
            <div className="hero-content gap-6 flex">
                {/* <GameOfLife /> */}
                <div className="card flex-grow bg-accent shadow-xl max-w-max">
                    <h1 className="card-title card-body mx-auto text-black">Create your own generative collection!</h1>
                    <iframe srcDoc={Snippet} style={iframeStyle} className='place-content-center display-grid' />
                </div>


                <form className="card justify-normal gap-4 flex-grow" onSubmit={handleSubmit}>
                    <div className="card flex-grow bg-base-100 shadow-xl max-w-max">
                        <h1 className="card-title card-body mx-auto rounded-lg">Create your own generative collection!</h1>
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

                            <p> What is the <b>DESCRIPTION</b> ?  </p>
                            <input name="description"
                                value={formData ? formData.description : ""}
                                onChange={handleInputChange}
                                className='rounded-lg text-white text-center'
                            />
                        </div>
                    </div>

                    <div className='card flex-grow bg-secondary shadow-xl'>
                        <div className='card-body grow grid grid-cols-2 gap-8 text-xl '>
                            <p> How much will each mint <b>COST</b> ?  </p>
                            <input name="cost"
                                value={formData ? formData.cost : ""}
                                onChange={handleInputChange}
                                className='rounded-lg text-white text-center'
                            />
                        </div>

                        <div className='card flex-grow bg-accent text-black shadow-xl'>
                            <div className='card-body grow grid grid-cols-2 gap-8 text-xl '>

                                <p> What is your project <b>URL</b> ?  </p>
                                <input name="external_url"
                                    value={formData ? formData.external_url : ""}
                                    onChange={handleInputChange}
                                    className='rounded-lg text-white text-center'
                                />
                            </div>
                        </div>

                    </div>
                    <div className='card flex-grow bg-secondary shadow-xl'>
                        <div className='card-body grow grid grid-cols-2 gap-8 text-xl '>
                            <input type="file" onChange={handleFileChange} className='rounded-lg text-center' />
                        </div>

                    </div>



                    <div className="card-actions justify-end">

                        {!Loader ? (<button type='submit' className="btn btn-outline btn-accent btn-wide text-bold"> GENERATE </button>) :
                            (<button className="btn btn-outline btn-accent btn-wide text-bold">
                                <span className='loading loading-spinner'>
                                    Fetching IPFS...
                                </span>
                            </button>)


                        }

                    </div>

                </form>
            </div>

        </div >
    )
}

export default Hero