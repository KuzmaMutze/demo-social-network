import { WrappedFieldProps, Field } from "redux-form"
import { FieldValidatorType } from "../../../utils/validators/validatirs"
import classes from "./FormsControl.module.css"

// WrappedFieldProps from redux-form for type input, meta
export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return <div className={meta.touched && meta.error && classes.error}>
        <textarea  {...props} {...input} name="" id="" cols={60} rows={5}></textarea>
        <div className={classes.errorMessage}>{meta.touched && meta.error}</div>
    </div>
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return <div className={meta.touched && meta.error && classes.error}>
        <input  {...props} {...input}></input>
        <div className={classes.errorMessage}>{meta.touched && meta.error}</div>
    </div>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {
    return <div>
    <Field  placeholder={placeholder} name={name}
            validate={validators}
            component={component}
            {...props}
            /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>