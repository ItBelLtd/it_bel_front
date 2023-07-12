
import { roboto_mono } from '@/app/fonts'
import styles from './button.module.css'

const Button = ({ type, text, className, disabled }:
    {
        type: "button" | "submit" | "reset" | undefined,
        text: string,
        className?: string,
        disabled: boolean
    }) => {

    return (
        <button type={type}
            className={`${styles.button} ${roboto_mono.className}  ${typeof className === 'string' ? className : null}`}
            disabled={disabled}>
            {text}
        </button>
    )
}
export default Button;