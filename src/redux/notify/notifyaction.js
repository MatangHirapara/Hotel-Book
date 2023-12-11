
export const incnotify = () => {
  return { type: "INCREMENTAL" }
}

export const decnotify = () => {
  return { type: "DECREMENTAL" }
}


export const email = (data) => {
  return {
    type: "INBOX",
    payload: data
  }
}