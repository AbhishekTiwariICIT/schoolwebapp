import styles from '../../css/schResultsUpdate/topperStd.module.css';
import htp from '../../assets/Images/htp.jpg';
import itp from '../../assets/Images/itp.jpg';
function TopperStd({ data }) {

    const topperStdDetails = [
        {
            name: "Skashi",
            per: 98,
            rank: 1,
            disRank: 1,
            url: { itp }
        },
        {
            name: `KHUSHI SAHU`,
            per: 97,
            rank: 2,
            disRank: 3,
            url: { htp }
        }
    ];

    const linkdata = [
        {
            hyperef: "###",
            content: "iure aspernatur quis nihil"
        },
        {
            hyperef: "###",
            content: "iure aspernatur quis nihil"
        },
        {
            hyperef: "###",
            content: "iure aspernatur quis nihil"
        }
    ]



    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <span>SVN TOPPER</span>
                </div>
                <div className={styles.SectionSubTitleBox}>
                    {data.map((item) => (
                        <div className={styles.topperStdContent}>

                            <div className={styles.sectionSubTitle}>
                                <span>{item.SubTitle}</span>
                            </div>
                            <div className={styles.stdImgSection}>
                                <div className={`${styles.imgbox} ${styles.stdbox}`}>
                                    <img src={htp} alt="image not found" />
                                </div>
                                <div className={`${styles.stdDetails} ${styles.stdbox}`}>
                                    <table className={styles.stdTable}>
                                        {topperStdDetails.map((items) =>
                                        (
                                            <>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>{items.name}</td>
                                                </tr>
                                                
                                            </>
                                        ))}

                                    </table>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.latestNewsSection}>
                <div className={styles.title}>
                    <span>Latest News</span>
                </div>
                <div className={styles.latestNewsSectionContent}>
                    <div className={styles.linkContent}>
                        {linkdata.map((item, index) =>
                        (
                            <div className={styles.newsLinkChildSection}>
                                <div className={styles.NewsBullet}></div>
                                <div className={styles.Line}></div>
                                <div className={styles.newsContent}></div>
                                <span key={index}>{item.content}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>


    )
}

export default TopperStd;