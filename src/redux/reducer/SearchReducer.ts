const initialState = {  
    data:{
        stateCode: "",
        city: "",
        status: "",
        furnishedStatus: "",
        type: "",
        bhk: "",
        lookingTo: "", 
        price: "",
        parking:"",   
    } ,
   
};

interface searchdata{
    key:
    |"stateCode"
    |"city"
    |"status"
    |"furnishedStatus"
    |"type"
    |"bhk"
    |"lookingTo"
    |"price"
    |"parking"
    value: string;
}

interface search {
    type:"search_property_data",
    payload:any,
}

interface SearchingFilter{
    type:"searching_filter",
    payload:searchdata,
}

type action = search | SearchingFilter;

const  SearchReducer = (state= initialState, action: action) => {
    switch (action.type) {
        case "search_property_data":
            return{ 
                ...state, data: { ...action.payload } 
                }
        case "searching_filter":
            return{
                ...state, data:{ ...state.data, [action.payload.key]: action.payload.value}
            }
    default:
      return state;
    }
};

export default SearchReducer;

export const searchingdata = (data: searchdata): search => {
    return {
      type: "search_property_data",
      payload: data,
    };
  };

 export const SearchingFilter = (data: searchdata): SearchingFilter =>{
    return{
        type: "searching_filter",
        payload: data,
    };
 };