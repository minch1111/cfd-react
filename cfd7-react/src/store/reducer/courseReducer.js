const initialCourse = {
    online:null,
    offline:null
}

export const courseReducer = (state= initialCourse,action)=>{
    switch(action.type){
        case "GET_COURSE":
            return {
                ...state,
                ...action.payload
            }
    }
    return state;
}