import { createPortal } from 'react-dom';

const ModalRoot = ({ children, show, onClick }: any) => {

    return createPortal((
        <div
            className={`fixed top-0 left-0 z-10 w-full h-full bg-black/[0.5] backdrop-blur-sm ltr overflow-hidden duration-200
            ${show ? 'opacity-100 visible ' : 'opacity-0 invisible delay-300'}`}
            onClick={(e) => (e.target === e.currentTarget && onClick(false))}
        >
            {children}
        </div>
    ), document.querySelector("#modal-root")!);
}

export default ModalRoot