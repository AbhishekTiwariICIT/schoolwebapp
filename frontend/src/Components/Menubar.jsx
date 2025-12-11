import { Link } from "react-router-dom";
import styles from "../css/Menubar.module.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';


const Menubar = () => {
    const [showMenu, setShowMenu] = useState(true);


    useEffect(() => {
        console.log(showMenu);

    }, [])


    const showMenuButton = () => {
        setShowMenu(!showMenu);
        console.log(showMenu)
    }

    return (


        <nav className={styles.navSection}>
            <ul
                className={`${styles.ulList} ${showMenu ? styles.hidemenubox : styles.showmenubox}`}
            >

                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about Us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/courses">Rules & Regulation</Link></li>
                <li><Link to="/courses">Faculties</Link></li>
                <li><Link to="/courses">Student</Link></li>
                <li><Link to="/courses">Facilities</Link></li>
                <li><Link to="/courses">Gallary</Link></li>
                <li><Link to="/courses">Result</Link></li>
                <li><Link to="/courses">Contact Us</Link></li>
            </ul>
            <div className={styles.hummerberger}>
                {/* <button type="button" onClick={showMenuButton}>{showMenu ? <FiAlignJustify /> :<FiX />} </button> */}
                <div className={styles.menubtn}>
                    <button type="button" onClick={showMenuButton} className={showMenu ? styles.iconClosed : styles.iconOpened}>{showMenu ? <IoMenu /> : <IoCloseSharp />} </button>
                </div>

            </div>
        </nav>


    )
}

export default Menubar;

