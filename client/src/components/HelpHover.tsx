import React, { FC, useState } from 'react'

interface HelpHoverProps {
    className?: string
    text: string
}

const HelpHover: FC<HelpHoverProps> = ({ className, text }) => {
    const [hover, setHover] = useState(false)
    return (
        <div className={'relative' + ' ' + className}>
            <div
                className={
                    'dot flex justify-center items-center cursor-default select-none' +
                    ' ' +
                    (hover ? ' bg-orange' : ' bg-grey-light')
                }
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div
                    className={
                        'dot bg-grey-darker text-center flex justify-center items-center pointer-events-none' +
                        ' ' +
                        (hover ? 'text-orange' : 'text-grey-light')
                    }
                    style={{
                        width: '23px',
                        height: '23px',
                    }}
                >
                    ?
                </div>
            </div>
            <div
                className={
                    'absolute pin-b pin-r -ml-12 pointer-events-none mb-8 z-10 bg-grey p-2 rounded-sm text-xs shadow-md min-w-32'
                }
                style={{
                    transition: '.25s ease all',
                    transitionDelay: '.1s',
                    transformOrigin: 'bottom right',
                    transform: hover ? 'scale(1)' : 'scale(0)',
                }}
            >
                {text}
            </div>
        </div>
    )
}

export default HelpHover
