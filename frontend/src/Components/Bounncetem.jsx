import styles from '../css/bouncetemp.module.css';
import { IoClose } from "react-icons/io5";
import sch from "../assets/Images/sch.jpeg";


function Bouncetemp ({ onClose }){
    return(

        <div className={styles.container}>
            <div className={styles.main}>
                
                    <img src={sch} alt="image not found" />
                
            </div>
            <button onClick={onClose} className={styles.btn}><IoClose /></button>
        </div>

    )
}

export default Bouncetemp;
