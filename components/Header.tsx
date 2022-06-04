import { DetailedHTMLProps, HTMLAttributes } from "react"

const Header: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => {
    return <h1 {...props} className={props.className + ` font-bold text-2xl text-center p-lg`} />
}
export default Header