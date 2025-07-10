import { useContext, useEffect, useRef } from 'react'
import styles from './faq.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import CommonQuestions from '../../blocks/commonQuestions/commonQuestions'


function FaqPage () {

    // const { lang } = useContext(LangContext)
    // const langValue = lang.value.toLowerCase()

    // const text = textData[langValue as keyof typeof textData].blogPage

    // const articles = textData[langValue as keyof typeof textData].articles

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
    }, []);

    return (
        <div className={styles.faqPage} ref={containerRef}>
            <CommonQuestions />
            {/* <Title text={text.header} isBlack></Title>
            <ul className={stylesArticles.articlesWrap}>
                {articles.map((article) => {
                    return (
                        <li className={stylesArticles.article} key={article.id}>
                            <Link to={`/blog/${article.id}`}>
                            <div className={stylesArticles.card}>
                                <div className={stylesArticles.imgWrap}>
                                <img className={stylesArticles.img} src={article.titleImg} alt={article.title} />
                                </div>
                                <h3 className={stylesArticles.articleTitle}>{article.title}</h3>
                            </div>
                            </Link>
                        </li>
                    )
                })}
            </ul> */}
        </div>
    )
}

export default FaqPage