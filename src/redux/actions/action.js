export const ADD_PARAMS ='ADD_PARAMS'
export const SELECTED_USER ='SELECTED_USER'

export function addParams(title, content) {
    return { type: ADD_PARAMS, title: title, content: content };
  }
  
  export function selectedUser(user) {
    return { type: SELECTED_USER, user: user };
  }