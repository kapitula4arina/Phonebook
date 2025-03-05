import css from './LogoPanel.module.css';
import { FaAddressBook } from 'react-icons/fa6';

const LogoPanel = () => {
  return (
    <div className={css.containerLogo}>
      <a className={css.brandLogo} href="/">
        Phonebook
        <FaAddressBook />
      </a>
    </div>
  );
};

export default LogoPanel;
