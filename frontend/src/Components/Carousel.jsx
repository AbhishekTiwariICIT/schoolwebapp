import { useState } from 'react';
import styles from '../css/Carousel.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Carousel({ children }) {

    const CarouselBoxRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
        
        const CarouselBox = CarouselBoxRef.current;
            const slides=CarouselBox.children;
            console.log(slides)
            const count = slides.length;
            console.log(count)
        
        setCurrentIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);   // cleanup
}, []);



    return (
        <>

            {currentIndex}
            <div className={styles.imagebox} ref={CarouselBoxRef}>
                {children}
            </div>
        </>
    )
}

