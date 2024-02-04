"use client"
import { NextPage } from "next";
import MintComponent from "../../components/MintComponent";

const factoryCallback: NextPage = () => {



    return (
        <div> Nice! You just generated a Dynamic Collection ;)

            <div>
                <MintComponent />
            </div>


        </div>
    )
}

export default factoryCallback