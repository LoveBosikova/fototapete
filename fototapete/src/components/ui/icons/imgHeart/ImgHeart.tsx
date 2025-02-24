import style from './ImgHeart.module.scss';

function ImgHeart () {
    return (
        <svg className={style.svg}  width="100%" height="100%" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <path className={style.path} fillRule="evenodd" clipRule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM11.9476 12.8989C12.4295 12.4166 12.9909 12.1236 13.6401 12.0171C13.7337 12.0023 13.9832 11.9963 14.193 12.0023C14.7062 12.0171 15.1116 12.1236 15.5992 12.3692C16.0245 12.5852 16.3534 12.816 16.7333 13.1652L17.0168 13.4286L17.2039 13.2422C17.8276 12.6267 18.6356 12.1946 19.3926 12.0733C19.7045 12.023 20.3963 12.0555 20.6713 12.1354C21.2099 12.2893 21.6437 12.5468 22.0378 12.9433C22.3326 13.2422 22.5368 13.5322 22.6984 13.8873C23.2541 15.1094 23.0358 16.521 22.0945 17.7875C22.0151 17.894 20.8867 19.0955 19.5826 20.4567C17.8702 22.25 17.1869 22.9454 17.1189 22.9691C17.0854 22.9804 17.0595 22.9927 17.0322 22.9977C16.8671 23.0279 16.6537 22.7939 14.4595 20.5011C12.0071 17.9384 11.8427 17.749 11.5308 17.1809C10.6945 15.6569 10.8561 13.9938 11.9476 12.8989Z"/>
        </svg>
    )
}

export default ImgHeart