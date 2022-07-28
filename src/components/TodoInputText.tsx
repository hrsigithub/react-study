import React  from "react"

const TodoInputText = (props: any) => {
  return (
    <>
      <input type="text" onChange={(e) => {props.handleChange(e)}} className="inputText" />
      <input type="submit" value="作成" className="submitButton" />
    </>
  )
}

export default TodoInputText
