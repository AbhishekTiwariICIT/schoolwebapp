import styles from '../../css/messagecardCSS/message.module.css';
import Messagecard from  '../MessageCard/Messagecard'
import messageimg from '../../assets/Images/img.jpeg';
function Message(){
    return(
        <div className={styles.wrapper}>
            <Messagecard messageimg={`${messageimg}`}/>            
            <Messagecard messageimg={`${messageimg}`}/>            
                       
                   
       
        </div>
    )
}

export default Message;