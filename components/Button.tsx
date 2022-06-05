import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

const Button: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
    return <button  {...props}
        className={props.className + " p-tiny bg-primary-300 rounded cursor-pointer disabled:cursor-not-allowed " + props.className}
    />
}
export default Button