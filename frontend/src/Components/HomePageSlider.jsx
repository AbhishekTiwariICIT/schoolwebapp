import styles from '../css/HomePageSlider.module.css';
import Carousel from './Carousel';
import { Homepagemessage } from './Homepagmessage';
import pic1 from '../assets/Images/pic1.jpg';
import pic2 from '../assets/Images/pic2.jpg';
import pic3 from '../assets/Images/pic3.jpg';
import pic4 from '../assets/Images/pic4.jpg';
import messageimg from '../assets/Images/img.jpeg';

export default function HomePageSlider() {
    return (
        <div className={styles.heroSection}>
            <Carousel>
                <img src={pic1} alt="image 1 not found" />
                <img src={pic2} alt="image 2 not found" />
                <img src={pic3} alt="image 3 not found" />
                <img src={pic4} alt="image 4 not found" />
            </Carousel>

        <Homepagemessage messageimg={`${messageimg} `}/>
        </div>


    );
}
