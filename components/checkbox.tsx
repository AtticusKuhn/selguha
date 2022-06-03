
const CheckBox: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
    return <>
        <input
            {...props}
            className={props.className + `form-check-input appearance-none h-4 w-4 border 
        border-primary-300 rounded-sm bg-white checked:bg-primary-600 
        checked:border-primary-600 focus:outline-none 
        transition duration-200 mt-1 
        align-top bg-no-repeat 
        bg-center bg-contain 
        float-left mr-2 cursor-pointer`}
            type="checkbox"
        />

    </>;
}
export default CheckBox