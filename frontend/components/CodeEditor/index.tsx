"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link';

const CodeEditor = () => {

    const staticTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/p5/lib/p5.js"></script>
        <style>
          html, body {
      margin: 0;
      padding: 0;
    }
    canvas {
      display: block;
    }
    
        </style>
        <meta charset="utf-8" />
      </head>
      <body>
        <main>
        </main>
        <script>
        
        </script>
      </body>
    </html>
    `

    const [comp, setComp] = useState<any>();
    const [Code, setCode] = useState(staticTemplate);
    const [Snippet, setSnippet] = useState(staticTemplate);




    useEffect(() => {
        if (window) {
            import("@uiw/react-codemirror").then((obj) => {
                if (!comp) {
                    setComp(obj.default);
                }
            });
        }
    }, []);

    const handleInputChange = (event) => {
        setCode(event);
        setSnippet(event);
        localStorage.setItem('codeSnippet', event);

    };

    const Comps = comp;
    const iframeStyle = {
        resize: 'both',
        overflow: 'auto',
        width: '100%', // You can adjust this as needed
        height: '500px', // Let's start with a cute height, but it can grow!
        border: '1px solid #ccc',
        minHeight: '100px', // Minimum height so it's never too tiny
        minWidth: '100px',
        background: 'white', // Minimum width for the same reason
    };



    return (
        <div className=' grow grid grid-cols-2 gap-8 '>
            <div className='m-6 max-h-auto gap-6'>
                CodeEditor
                {Comps ? (
                    <Comps className='text-black overflow-y-auto '
                        value={staticTemplate}
                        maxHeight="100"
                        options={{
                            mode: "js",
                            editable: true,
                        }}
                        onChange={handleInputChange}
                    />
                ) : null}
            </div>

            <div className='m-6 h-auto gap-6 text-white'>
                Code preview:
                <iframe style={iframeStyle} srcDoc={Snippet} />
            </div>

            <Link href={'/newCollection'}>
                <button className='btn btn-outline btn-accent text-black'>
                    Continue
                </button>
            </Link>

        </div >
    )
}

export default CodeEditor