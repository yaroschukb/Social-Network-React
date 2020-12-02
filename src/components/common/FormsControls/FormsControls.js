import React from 'react'
import style from './FormsControls.module.css'



export const Textarea = Element => ({input, meta, ...props}) => {
    return (
        <div className={style.formControl+' '+ (meta.touched && meta.error ? style.error: '')} >
            <Element {...input} {...props} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
};