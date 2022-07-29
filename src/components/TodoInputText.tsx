import React from 'react'

const TodoInputText = (props: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          props.handleChange(e)
        }}
        className="inputText"
      />
      <input type="submit" value="作成" className="submitButton" />
    </>
  )
}

export default TodoInputText
