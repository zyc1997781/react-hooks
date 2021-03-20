import React, { useReducer, createContext } from "react"

export const PageContext = createContext({})

const reducer = (state, action) => {
  let data = {
    ...state,
    ...action.data,
    txt: "say hello"
  }
  switch (action.type) {
    case "main":
      return data
    default:
      return state
  }
}

export const Page = props => {

  const [data, dispatch] = useReducer(reducer, {})

  return (
    <PageContext.Provider value={{ data, dispatch }}>
      {props.children}
    </PageContext.Provider>
  )
}