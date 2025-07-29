import { useContext, useState } from 'react'
import Title from '../../ui/title/title'
import style from './imMedia.module.scss'
import { LangContext } from '../../../context/LangContext'
import textData from '../../../texts'
import back from '../../../assets/media_bacground.png'

type IImMediaProps = {
    title?: string 
}

function ImMedia (props: IImMediaProps) {
    const { lang } = useContext(LangContext)
    const langValue = lang.value.toLowerCase()
    const text = textData[langValue as keyof typeof textData].infoPage

    const { title } = props

    const [isPlaying, setIsPlaying] = useState(false)
    const videoId = "X3V0F9najIE"
    
    return (
        <section className={style.imMedia}>
            <Title isBlack={true} text={ title ? title : text.in_media_title}/>
            <div className={style.videoWrap}>
                {isPlaying ? (
                    <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    />
                ) : (
                    <div className={style.video_placeholder} onClick={() => setIsPlaying(true)}>
                    <img
                    className={style.img}
                        src={back}
                        alt="Видео превью"
                    />
                    </div>
                )}
            </div>
        </section>
    )
}

export default ImMedia