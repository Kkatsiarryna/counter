import * as React from "react";
import {ButtonHTMLAttributes} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
    const{ disabled, onClick, title, className} = props
    return (
        <button title = {title} className = {className} onClick={onClick} disabled={disabled}>{title}</button>
    )
}