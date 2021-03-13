import { WrappedFieldProps } from "redux-form"
import classes from "./FormsControl.module.css"

// WrappedFieldProps from redux-form for type input, meta
export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return <div className={meta.touched && meta.error && classes.error}>
        <textarea  {...props} {...input} name="" id="" cols={60} rows={5}></textarea>
        <div>{meta.touched && meta.error}</div>
    </div>
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return <div className={meta.touched && meta.error && classes.error}>
        <input  {...props} {...input}></input>
        <div>{meta.touched && meta.error}</div>
    </div>
}
