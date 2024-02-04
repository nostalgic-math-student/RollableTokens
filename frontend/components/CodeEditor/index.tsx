"use client"
import { useEffect, useState } from 'react'
import React from 'react'

const CodeEditor = () => {
    const [comp, setComp] = useState<any>();
    const [Code, setCode] = useState('');

    useEffect(() => {
        if (window) {
            import("@uiw/react-codemirror").then((obj) => {
                if (!comp) {
                    setComp(obj.default);
                }
            });
        }
    }, []);

    const Comps = comp;

    return (
        <div className='w-auto h-auto'>CodeEditor
            {Comps && (
                <Comps className='text-black  '
                    value="const a = 0;"
                    options={{
                        mode: "js",
                    }}
                />
            )}


        </div>
    )
}

export default CodeEditor