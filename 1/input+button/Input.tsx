import React, {ChangeEvent} from "react";

type InputType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={props.title}/>
    )
}