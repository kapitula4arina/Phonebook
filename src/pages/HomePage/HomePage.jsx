import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={'background'}>
      <div className={'container'}>
        <div className={css.homeBack}>
          {isLoggedIn ? (
            <>
              <h1 className={css.homeTitle}>
                Welcome to Your Phonebook, {user.name}
              </h1>
              <p className={css.text}>
                Keep your contacts safe and organized by storing names and phone
                numbers in one place. Find the right person quickly when you
                need them and ensure your phonebook stays easily accessible.
              </p>
            </>
          ) : (
            <>
              <h1 className={css.homeTitle}>Welcome to Your Phonebook</h1>
              <p className={css.text}>
                Keep your contacts safe and organized by storing names and phone
                numbers in one place. Find the right person quickly when you
                need them and ensure your phonebook stays easily accessible.
              </p>
              <Link to="/login" className={css.linkGetStart}>
                Get Started!
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
