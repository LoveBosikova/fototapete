import { useContext, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { LangContext } from "../../../context/LangContext"
import textData from "../../../texts"

import styles from './BlogArticlePage.module.scss'
import Title from "../../ui/title/title"
import LinkButtonOrange from "../../ui/buttons/linkButton/linkBurronOrangeWhite"

function BlogArticlePage () {
    const { id } = useParams()

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const articles = textData[langValue as keyof typeof textData].articles

    const article = textData[langValue as keyof typeof textData].articles.find((a) => Number(a.id) === Number(id))
    const textBtn = textData[langValue as keyof typeof textData].btns

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
        <article className={styles.blogArticlePage} ref={containerRef}>
            {article?.title ?  <Title isBlack={true} text={article?.title}></Title> : null}
            {article?.subtitle? <p className={styles.subtitle}>{article.subtitle}</p> : null}
            {article?.text && article?.text.length > 0 ? 
            article?.text.map((a) => {
                return (<li className={styles.paragraph} key={a.header}>
                    {
                        a.header 
                        ? 
                        <h2 className={styles.textSubtitle}>{a.header}</h2> 
                        : 
                        null
                    }
                    {
                        a.photoBefore 
                        ? 
                        <div className={styles.imgWrap}>
                            <img className={styles.img} src={a.photoBefore} alt=''>
                            </img>
                        </div> 
                        : 
                        null
                    }
                    {
                        a.text ?
                        <p className={styles.text}>{a.text}</p>
                        : null
                    }
                    {
                        a.photoAfter 
                        ? 
                        <div className={styles.imgWrap}>
                            <img className={styles.img} src={a.photoAfter} alt=''>
                            </img>
                        </div> 
                        : 
                        null
                    }
                </li>)
            })
            
            : 
            null}
            <div className={styles.btnWrap}>
                <LinkButtonOrange 
                text={textBtn.nextArticle} 
                link={id && articles.find((i) => +i.id === +(+id + 1) ) ? `/blog/${+id + 1}`: `/blog/0`}
                onClick={() => {
                    setTimeout(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }, 0);
                }}  
                />
            </div>
        </article>
    )
} 

export default BlogArticlePage