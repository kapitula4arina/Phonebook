import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import css from './Contact.module.css';
import { openModal, openModalContactDelete } from '../../redux/modal/slice';

import { BiUser } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const maxLength = 15;
  const formattedNumber = number.replace(/-/g, '');

  const handleOpenModal = () => {
    dispatch(
      openModal({
        id,
        name,
        number,
      })
    );
    document.body.style.overflow = 'hidden';
  };

  const handleOpenModalContactDelete = () => {
    dispatch(
      openModalContactDelete({
        id,
        name,
        number,
      })
    );
    document.body.style.overflow = 'hidden';
  };

  return (
    <motion.div className={css.contact} layout>
      <div className={css.contactGroup}>
        <div className={css.contactItem}>
          <BiUser className={css.icon} size="20" />
          <p className={css.contactDescription}>
            {name.length <= maxLength
              ? name
              : `${name.substring(0, maxLength)}...`}
          </p>
        </div>
        <div className={css.contactItem}>
          <AiOutlinePhone className={css.icon} size="20" />
          <p className={css.contactDescription}>
            <a href={`tel:+38${formattedNumber}`} className={css.phoneLink}>
              +38-{number}
            </a>
          </p>
        </div>
      </div>
      <div className={css.blockBtn}>
        <button className={css.button} onClick={handleOpenModal}>
          Edit
        </button>
        <button className={css.button} onClick={handleOpenModalContactDelete}>
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;
