import React from "react";
import { IMessage } from "../dataschema/IMessage";  

const MessageParentComponent =()=>{
  const message:IMessage = {
    id:101,
    content:"Hello from Parent",
    characters:["James","Ethan","Indiana", "Jack", "Jason"]
  }
  const showSelectedValue = (val:string) => {
    alert(`Selected character: ${val}`);
  }
  return (
    <div className="container alert-info">
        <MessageChildComponent id={message.id} content={message.content} characters={message.characters}
        onSelectValue={showSelectedValue}
        ></MessageChildComponent>
    </div>
  )
}

const MessageChildComponent =(props:IMessage)=>{
    const onSelectionChange=(evt:any)=>{
        if(props.onSelectValue){
            props.onSelectValue(evt.target.value);
        }
    }
    return (
        <div className="container alert-info">
            <strong>
                {props.id} - {props.content}
            </strong>
            <br />
            <select className="form-select" name="dd"
                onChange={onSelectionChange}
            >
                {props.characters.map((character, index) => (
                    <option key={index} value={character}>
                        {character}
                    </option>
                ))}
            </select>
        </div>
    )
}


export default MessageParentComponent;
