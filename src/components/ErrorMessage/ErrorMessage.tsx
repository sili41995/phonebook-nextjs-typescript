import LogOutBtn from '@/components/LogOutBtn';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.message}>
        Oops, something went wrong! You need to re-login!
      </p>
      <LogOutBtn />
    </div>
  );
};

export default ErrorMessage;
