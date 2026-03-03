import styles from '../../css/schResultsUpdate/topperStd.module.css';

function TopperStd({ data }) {

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
                        <div className={styles.sectionSubTitle}>
                            <span>{item.SubTitle}</span>
                        </div>

                    ))}
                </div>
                <div className={styles.grid}>
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