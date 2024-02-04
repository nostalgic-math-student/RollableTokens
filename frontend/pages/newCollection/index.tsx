import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useAddress, useContract, useListings } from "@thirdweb-dev/react";
import type { Marketplace } from "@thirdweb-dev/sdk";
import Hero from "../../components/Hero/Index";
import GameOfLife from "../../components/GameOfLife";
import Loading from "../../components/Loading";

const Home: NextPage = () => {
    const isLoading = false;
    const address = useAddress() || "";

    return (
        <div>
            <Head>
                <title> Create collection </title>
                <link rel="icon" href="/RollableIcon.ico" />
            </Head>
            {/* Banner + Collection profile pic*/}
            <section>
                <Hero userAddress={address} />
            </section>
            <Loading open={isLoading} />
        </div>
    );
};

export default Home;
