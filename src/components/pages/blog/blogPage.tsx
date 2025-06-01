import { useContext } from 'react'
import styles from './blogPage.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import Title from '../../ui/title/title'

import stylesArticles from '../../blocks/helpfulArticles/helpfulArticles.module.scss';
import { Link } from 'react-router-dom'

function BlogPage () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()

    const text = textData[langValue as keyof typeof textData].blogPage

    const articles = textData[langValue as keyof typeof textData].articles

    return (
        <div className={styles.blogPage}>
            <Title text={text.header} isBlack></Title>
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
            </ul>
        </div>
    )
}

export default BlogPage