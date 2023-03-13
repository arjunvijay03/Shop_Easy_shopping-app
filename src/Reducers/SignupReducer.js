export const signupDataReducer = (state, action)=>{

    switch(action.type){
      case 'changeName':
        return state = {
          ...state,
          name:action.payload.target.value
        }
        break;
        case 'changeEmail':
          return state ={
            ...state,
            email:action.payload.target.value
          }
          break;
        case 'changePassword':
          return state ={
            ...state,
            password:action.payload.target.value
          }
          break;
      }
  }