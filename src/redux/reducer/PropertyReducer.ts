const initialNewListingData = {
  title: "",
  type: "Residential-property",
  description: "",
  bhk: "1BHK",
  furnishedStatus: "Unfurnished",
  images: [],
  location: "",
  area: "",
  price: "",
  propertyOnFloor: "",
  totalFloor: "",
  amenities: "",
  status: "",
  lookingTo: "Sell",
  propertyType: [],
  ownerPhoneNumber: "",
  ownerName: "",
  parking: "",
  userId: "",
};

const selectedPropertyData = {
  ageOfProperty: "",
  amenities: "",
  area: "",
  bhk: "",
  city: "",
  description: "",
  furnishedStatus: "",
  id: "",
  images: [""],
  lookingTo: "",
  ownerName: "",
  ownerPhoneNumber: "",
  parking: "",
  price: "",
  propertyOnFloor: "",
  propertyType: "",
  state: "",
  status: "",
  street: "",
  title: "",
  totalFloor: "",
  type: "",
  userId: "",
};

const initialState = {
  newListing: { ...initialNewListingData },
  selectedPropertyList: { ...selectedPropertyData },
};
interface newListingData {
  key:
    | "title"
    | "type"
    | "description"
    | "bhk"
    | "furnishedStatus"
    | "images"
    | "location"
    | "area"
    | "price"
    | "propertyOnFloor"
    | "totalFloor"
    | "amenities"
    | "status"
    | "lookingTo"
    | "propertyType"
    | "ownerName"
    | "ownerPhoneNumber"
    | "parking"
    | "userId";
  value: string | Array<string>;
}

interface selectedProperty {
  key:
    | "title"
    | "type"
    | "description"
    | "bhk"
    | "furnishedStatus"
    | "images"
    | "location"
    | "area"
    | "price"
    | "propertyOnFloor"
    | "totalFloor"
    | "amenities"
    | "status"
    | "lookingTo"
    | "propertyType"
    | "ownerName"
    | "ownerPhoneNumber"
    | "parking"
    | "userId"
    | "ageOfProperty"
    | "amenities"
    | "city"
    | "id"
    | "state"
    | "street"
    | "userId";

  value: string | Array<string>;
}
interface updateNewListing {
  type: "UPDATE_NEW_LISTING";
  payload: newListingData;
}
interface resetNewListing {
  type: "RESET_NEW_LISTING";
}
interface updatePostProperty {
  type: "UPDATE_POST_PROPERTY";
  payload: any;
}

interface updateSelectedList {
  type: "UPDATE_SELECTED_LIST";
  payload: selectedProperty;
}

type action =
  | updateNewListing
  | resetNewListing
  | updatePostProperty
  | updateSelectedList;
const PropertyReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "UPDATE_NEW_LISTING": {
      return {
        ...state,
        newListing: {
          ...state.newListing,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    case "RESET_NEW_LISTING": {
      return {
        ...state,
        newListing: {
          ...initialNewListingData,
        },
      };
    }
    case "UPDATE_POST_PROPERTY": {
      return {
        ...state,
        newListing: {
          ...action.payload,
        },
      };
    }
    case "UPDATE_SELECTED_LIST": {
      return {
        ...state,
        selectedPropertyList: {
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export default PropertyReducer;
export const UpdateNewListing = (data: newListingData): updateNewListing => {
  return {
    type: "UPDATE_NEW_LISTING",
    payload: data,
  };
};
export const ResetNewListing = (): resetNewListing => {
  return {
    type: "RESET_NEW_LISTING",
  };
};
export const UpdatePostProperty = (data: any) => {
  return {
    type: "UPDATE_POST_PROPERTY",
    payload: data,
  };
};

export const UpdateSelectedData = (
  data: selectedProperty
): updateSelectedList => {
  return {
    type: "UPDATE_SELECTED_LIST",
    payload: data,
  };
};
