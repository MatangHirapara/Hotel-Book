
export const incnotify = () => {
  return { type: "INCREMENTION" }
}

export const decnotify = () => {
  return { type: "DECREMENTION" }
}


export const email = (data) => {
  return {
    type: "INBOX",
    payload: data
  }
}