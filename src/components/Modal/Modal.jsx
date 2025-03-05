import css from './Modal.module.css';
import { motion } from 'framer-motion';

import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <motion.div
        className={css.modalContent}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <BsBoxArrowInUpRight
          onClick={onClose}
          className={css.closeIcon}
          size="25px"
        />
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
