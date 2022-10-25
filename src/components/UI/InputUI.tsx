import React from "react";

interface InputUIProps {
    type: string
    value: string
    onClick?: () => void
}

const InputUI: React.FC<InputUIProps> = React.memo(({type, value, onClick}) =>  {
    return (
        <>
            <input
                type={type}
                value={value}
                onClick={onClick}
            />
        </>
    )
})

export default InputUI