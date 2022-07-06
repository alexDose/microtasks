import React, {ChangeEvent, useState} from "react";
import "./../App.css"

type MessageType ={
    message: string
}
type FullInputType = {
    message: Array<MessageType>
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {

    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle("")
    }

    return (
        <div className={"App"}>
            <div>
                <input value={title} onChange={onChangeInputHandler} type="text"/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
            <div>
                {props.message.map((el, index) => <div key={index}>{el.message}</div>)}
            </div>
        </div>
    )
}