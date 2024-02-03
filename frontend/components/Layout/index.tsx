import type { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAddress, useMetamask } from "@thirdweb-dev/react";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    const connectMetamask = useMetamask();
    const userAddress = useAddress();

    const handelConnect = () => {
        connectMetamask();
    };

    return (
        <div className="flex min-h-screen w-full flex-col overflow-hidden">
            <header className="border-b-2 bg-white">
                <div className="container mx-auto flex justify-between py-4 px-4 sm:px-0">
                    <Link href={"/"}>
                        <h1 className="flex cursor-pointer items-center font-extrabold">
                            <Image src="/RollableIcon.png" width={64} height={64} className="rounded-full" />
                            <span className="pl-2 text-xl sm:pl-4 sm:text-2xl">
                                Rollable Tokens
                            </span>
                        </h1>
                    </Link>
                    <button
                        className="max-w-[120px] truncate  rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 py-15 px-5 text-white hover:opacity-80 sm:max-w-[200px] h-12 my-auto"
                        onClick={handelConnect}
                    >
                        {userAddress ? userAddress : "Connect MetaMask"}
                    </button>
                </div>
            </header>
            <main className="grow">{children}</main>
            <footer className="bg-primary">
                <div className="container mx-auto">
                    <p className="py-4 text-center text-white">
                        ETH Cinco de Mayo project | 2024
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
