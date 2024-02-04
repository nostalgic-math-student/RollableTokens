import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { setup, draw } from './gameoflife';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const GameOfLife = () => {
    const isMounted = useRef(true);

    useEffect(() => {
        // Only initialize the sketch once
        if (!isMounted.current) {
            isMounted.current = true;
        }

        return () => {
            // Cleanup if necessary when component unmounts
            // Add any cleanup logic here if needed
        };
    }, []);


    return isMounted.current ? (
        <Sketch setup={setup} draw={draw} />
    ) : null;
};

export default GameOfLife;
