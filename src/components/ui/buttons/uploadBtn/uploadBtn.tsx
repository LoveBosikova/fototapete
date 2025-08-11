// import { useContext } from 'react';
// import style from './uploadBtn.module.scss';
// import { LangContext } from '../../../../context/LangContext';
// import textData from '../../../../texts';

// // type ISubscribeBtnProps = {
// //     link: string;
// // }

// function UploadBtn () {

//     const { lang } = useContext(LangContext)
//     const langValue = lang.value.toLowerCase()
//     const textBtn = textData[langValue as keyof typeof textData].btns

//     // const { link } = props;
    
// return (
//     <button className={style.linkBtn}>
//         <div className={style.link}>
//             {textBtn.uploadImg}
//         </div>
//     </button>
//     )
// }

// export default UploadBtn;

import { useContext, useRef, ChangeEvent } from 'react';
import style from './uploadBtn.module.scss';
import { LangContext } from '../../../../context/LangContext';
import textData from '../../../../texts';

export type TAllowedFile = {
    name: string;
    type: string;
    size: number;
    data: string | ArrayBuffer | null;
};

type UploadBtnProps = {
    onFileUpload: (file: TAllowedFile) => void;
    maxFileSize?: number; // в байтах (например, 5MB = 5 * 1024 * 1024)
};

function UploadBtn({ onFileUpload, maxFileSize = 5 * 1024 * 1024 }: UploadBtnProps) {
    const { lang } = useContext(LangContext);
    const langValue = lang.value.toLowerCase();
    const textBtn = textData[langValue as keyof typeof textData].btns;
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const ALLOWED_TYPES = [
        'image/jpeg',
        'image/png',
        'application/pdf',
        'application/eps',
        'image/eps',
    ];

    const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.eps', '.pdf'];

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Валидация типа файла
        if (!ALLOWED_TYPES.includes(file.type) && 
            !ALLOWED_EXTENSIONS.some(ext => file.name.toLowerCase().endsWith(ext))) {
            alert(`Формат файла не поддерживается. Разрешены: ${ALLOWED_EXTENSIONS.join(', ')}`);
            return;
        }

        // Валидация размера файла
        if (file.size > maxFileSize) {
            alert(`Файл слишком большой. Максимальный размер: ${maxFileSize / 1024 / 1024}MB`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData: TAllowedFile = {
                name: file.name,
                type: file.type,
                size: file.size,
                data: event.target?.result ?? null,
            };
            onFileUpload(fileData);
        };
        reader.readAsDataURL(file); // или reader.readAsArrayBuffer(file)

        // Сброс input для возможности повторной загрузки того же файла
        e.target.value = '';
    };

    return (
        <>
            <button 
                type="button" 
                className={style.linkBtn} 
                onClick={handleButtonClick}
            >
                <div className={style.link}>
                    {textBtn.uploadImg}
                </div>
            </button>
            
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={ALLOWED_TYPES.join(',') + ',' + ALLOWED_EXTENSIONS.join(',')}
                style={{ display: 'none' }}
            />
        </>
    );
}

export default UploadBtn;