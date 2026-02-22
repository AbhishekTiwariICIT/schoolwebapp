import styles from '../css/HomePageSlider.module.css';
import { useState, useEffect } from 'react';
import Message from './MessageCard/Message';
import Carousel from './Carousel';
import SectionCard from '../Components/schResultsUpdate/SectionCard.jsx';
import { Homepagemessage } from './Homepagmessage';
import Bouncetemp from './Bounncetem';
import pic1 from '../assets/Images/pic1.jpg';
import pic2 from '../assets/Images/pic2.jpg';
import pic3 from '../assets/Images/pic3.jpg';
import pic4 from '../assets/Images/pic4.jpg';
import messageimg from '../assets/Images/img.jpeg';

export default function HomePageSlider() {

    const boxes = [
        { id: 1, titleName: "1st PHASE ENTRANCE EXAM RESULTS 2025" },
        { id: 2, titleName: "2nd PHASE ENTRANCE EXAM RESULTS 2025" },
        { id: 3, titleName: "3rd PHASE ENTRANCE EXAM RESULTS 2025" },
        { id: 4, titleName: "4th PHASE ENTRANCE EXAM RESULTS 2025" }
    ];



    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        setShowPopup(true);
    }, []); // Empty dependency array = run only once


    const handleClosePopup = () => {
        setShowPopup(false);
    };


    return (
        <>
            {showPopup && (
                <>

                    <Bouncetemp onClose={handleClosePopup} />

                </>
            )}
            <div className={styles.heroSection}>
                <Carousel>
                    <img src={pic1} alt="image 1 not found" />
                    <img src={pic2} alt="image 2 not found" />
                    <img src={pic3} alt="image 3 not found" />
                    <img src={pic4} alt="image 4 not found" />
                </Carousel>

                {/* <Homepagemessage messageimg={`${messageimg} `}/> */}
                <Message />


            </div>

            {boxes.map((item) => (
                <SectionCard key={item.id} title={item.titleName} />
            ))}

        </>


    );
}
