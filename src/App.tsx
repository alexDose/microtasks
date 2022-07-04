import React, {useState} from "react";
import {Input} from "./input+button/Input";
import {Button} from "./input+button/Button";

export const App = () => {

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <>
            <Input setTitle={setTitle} title={title}/>
            <Button name={"add"} callback={callbackButtonHandler}/>
            <div>
                {message.map((el, index) => <div key={index}>{el.message}</div>)}
            </div>
        </>
    )
}
