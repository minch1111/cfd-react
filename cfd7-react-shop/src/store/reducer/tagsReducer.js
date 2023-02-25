const initialState ={
    tags:[]
}

export const tagsReducer =(state= initialState,action)=>{
    switch(action.type){
        case "GET_TAGS":
            return{
                ...state,
                ...action.payload
            }
    }
    return state
}
