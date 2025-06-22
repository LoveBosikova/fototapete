import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

import Title from '../../ui/title/title';
import Handwriting from '../../ui/handwriting/handwriting';
import LinkButtonWhite from '../../ui/buttons/linkButton/linkBurronWhite';

import textData from '../../../texts';

import style from './helpfulArticles.module.scss';
import { NavLink } from 'react-router-dom';

function HelpfulArticles () {

    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].helpfulArticles
    const textBtn = textData[langValue as keyof typeof textData].btns

    return (
        <section className={style.helpfulArticles}>
            <div className={style.titleWrap}>
                <Title text={text.title} isBlack={true}></Title>
                <div className={style.handwritingWrap}>
                    <Handwriting text={text.handwrite} color={'orange'}></Handwriting>
                </div>
            </div>
            <div className={style.contentWrap}>
                <div className={style.btnWrap}>
                    <LinkButtonWhite text={textBtn.viewAllArticles} link={'/blog'}></LinkButtonWhite>
                </div>
                <ul className={style.articlesWrap}>
                    {text.articles.map((article) => {
                        return (
                            <li className={style.article} key={article.text}>
                                <NavLink to={`/blog/${article.link}`}>
                                    <div className={style.imgWrap}>
                                        <img className={style.img} src={`${article.img}`}></img>
                                    </div>
                                    <h3 className={style.articleTitle}>{article.text}</h3>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default HelpfulArticles