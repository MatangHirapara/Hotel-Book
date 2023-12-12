import React from "react"
import toorData from "./toorData.json"

// const data = toorData.find((e) => {
//  return e.id === id
// })
const email = (state = { data: toorData, selectedToor: {} }, action) => {
  switch (action.type) {
    case "INBOX":
      return {
        ...state,
        selectedToor: action.payload,
      };
    default:
      return state
  }
}

export default email