// components/Modal.tsx
import { useUnit } from 'effector-react';
import { ReactNode, useEffect } from 'react';
import { $activeModal, closeModal } from './model';
import styles from './Modal.module.scss';

interface ModalProps {
    modalName: string;
    children: ReactNode;
}

export const Modal = ({ modalName, children }: ModalProps) => {
    const [activeModal, handleClose] = useUnit([$activeModal, closeModal]);

    const isOpen = activeModal === modalName;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={handleClose}>×</button>
            {children}
        </div>
        </div>
    );
};

