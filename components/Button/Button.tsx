import { roboto_mono } from '@/app/fonts';
import styles from './button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  clickHandler?: (event?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  type,
  text,
  clickHandler,
  className,
  disabled,
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) => {
    if (clickHandler) {
      clickHandler(e);
    }
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${roboto_mono.className} ${className}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
