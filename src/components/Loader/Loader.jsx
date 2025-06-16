import { PuffLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = ({ size = 60 }) => {
  return (
    <div className={css.loaderContainer}>
      <PuffLoader
        color="#3c5994"
        loading={true}
        size={size}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default Loader;
