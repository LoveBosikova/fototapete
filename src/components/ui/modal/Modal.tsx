// components/Modal.tsx
import { useUnit } from 'effector-react';
import { ReactNode, useEffect } from 'react';
import { $activeModal, closeModal } from './model';
import styles from './Modal.module.scss';
import classNames from 'classnames';

interface ModalProps {
    modalName: string;
    children: ReactNode;
    modalClassName?: string;
    className?:string;
    onClose?: () => void;
}

export const Modal = ({ modalName, children, modalClassName, className, onClose }: ModalProps) => {
    const [activeModal, handleClose] = useUnit([$activeModal, closeModal]);

    const isOpen = activeModal === modalName;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
            if (onClose) onClose()
        } 
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
        <div className={classNames(styles.modal,className, modalClassName)} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => {
                handleClose()
                if (onClose) onClose()
            }}>×</button>
            {children}
        </div>
        </div>
    );
};

