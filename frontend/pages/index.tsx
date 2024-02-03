import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useContract, useListings } from "@thirdweb-dev/react";
import type { Marketplace } from "@thirdweb-dev/sdk";

import { MARKETPLACE_CONTRACT_ADDRESS } from "../constant/app.constant";
import NfcCard, { INfcCard } from "../components/NftCard";
import Loading from "../components/Loading";

const Home: NextPage = () => {
    const [nftList, setNftList] = useState<INfcCard[]>([]);

    const { contract: marketContract } = useContract<Marketplace>(
        MARKETPLACE_CONTRACT_ADDRESS
    );
    const { data: nfts, isLoading } = useListings(marketContract, {
        start: 0,
        count: 25,
    });

    useEffect(() => {
        if (Array.isArray(nfts)) {
            const nftListViewData = nfts.map((nft) => ({
                imageUrl: nft.asset.image || "",
                name: nft.asset.name ? nft.asset.name.toString() : "",
                price: nft.buyoutCurrencyValuePerToken.displayValue,
                tokenId: nft.id,
                qty: +nft.quantity.toString(),
            }));

            console.log(nfts);
            setNftList(nftListViewData);
        }
    }, [nfts]);

    return (
        <div>
            <Head>
                <title>Main Page</title>
                <link rel="icon" href="/favicon.ico" className="rounded-full" />
            </Head>
            {/* Banner + Collection profile pic*/}

            <section>
                {/* Body section : Main Skeleton + NFT Display */}
            </section>
            <Loading open={isLoading} />
        </div>
    );
};

export default Home;
