import { Field, FieldAttributes } from "formik"
import React from "react"

const MyInput: React.FC<any> = ({ field, form, ...props }) => {
    return <input
        {...field} {...props}
        className={props.className + ` bg-primary-200 border-2 border-primary-800 focus:bg-primary-300 transition rounded`}
    />
}

const MyField: React.FC<FieldAttributes<{}>> = (props) => {
    return <Field {...props} component={MyInput} />


}
export default MyField