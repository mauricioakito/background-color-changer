import { useState } from 'react'
import { Button } from '../Button/Button'
import './Wrapper.scss'
import classnames from 'classnames';

export const Wrapper = () => {

    const colors = ['orange', 'blue', 'red', 'pink', 'green']

    const [color, setColor] = useState<string>(colors[0])

    return (

        <div className={
            classnames(
                'default', color
            )
        }>
            <h1 className='title'>BACKGROUND COLOR CHANGER</h1>
            <div className='buttonContainer'>
                {
                    colors.map(
                        (colorName: string, key: number) => <Button key={key} setColor={setColor} colorName={colorName} />
                    )
                }
            </div>
        </div>
    )
}
