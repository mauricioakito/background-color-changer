import {useState} from 'react'
import './Button.scss'
import classnames from 'classnames';

interface ButtonProps {
    setColor: (value: string) => void;
    colorName: string;
}

export const Button = ({setColor, colorName}: ButtonProps) => {

    return (
        <button className={
            classnames(
                'button'
            )
        }
        onClick={() => setColor(colorName)}>{colorName}</button>
    )
}
