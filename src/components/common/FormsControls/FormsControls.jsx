import classes from "./FormsControl.module.css"



export const Textarea = ({input, meta, ...props}) => {
    return <div className={meta.touched && meta.error && classes.error}>
        <textarea  {...props} {...input} name="" id=""  cols="80" rows="5"></textarea>
        <div>{meta.touched && meta.error}</div>
    </div>
}

export const Input = ({input, meta, ...props}) => {
    return <div className={meta.touched && meta.error && classes.error}>
        <input  {...props} {...input}></input>
        <div>{meta.touched && meta.error}</div>
    </div>
}
