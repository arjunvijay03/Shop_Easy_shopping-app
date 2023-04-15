export const addressReducer = (state, action)=>{
    switch(action.type){
        case 'changeName':
            return state = {
                ...state,
                name:action.payload.target.value
            }
            break;
        case 'changePhone':
            return state = {
                ...state,
                phone:action.payload.target.value
            }
            break;
        case 'changePinCode':
            return state = {
                ...state,
                pinCode:action.payload.target.value
            }
            break;
        case 'changeLocality':
            return state = {
                ...state,
                locality:action.payload.target.value
            }
            break;  
        case 'changeAddress':
            return state = {
                ...state,
                address:action.payload.target.value
            }
            break;
        case 'changeCity':
            return state = {
                ...state,
                city:action.payload.target.value
            }
            break;
        case 'changeStateName':
            return state = {
                ...state,
                stateName:action.payload.target.value
            }
            break; 
        case 'changeLandmark':
            return state = {
                ...state,
                landmark:action.payload.target.value
            }
            break; 
        case 'changeAltNumber':
            return state = {
                ...state,
                altNumber:action.payload.target.value
            }
            break;  
        case 'changeType':
            return state = {
                ...state,
                type:action.payload.target.value
            }
            break;
        case 'clearAll':
            return state = {
                id:'',
                name:'',
                phone:'',
                pinCode:'',
                locality:'',
                address:'',
                city:'',
                stateName:'',
                landmark:'',
                altNumber:'',
                type:''
            }
            break;
        case 'updateAll':
            return state = {
                id:action.payload.id,
                name:action.payload.name,
                phone:action.payload.phone,
                pinCode:action.payload.pinCode,
                locality:action.payload.locality,
                address:action.payload.address,
                city:action.payload.city,
                stateName:action.payload.stateName,
                landmark:action.payload.landmark,
                altNumber:action.payload.altNumber,
                type:action.payload.type
            }
            break;
               

    }
}