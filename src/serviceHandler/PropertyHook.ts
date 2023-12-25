import { useDispatch, useSelector } from "react-redux";
import {
  UpdateErrorMsg,
  UpdateSucessMsg,
} from "../redux/reducer/CommonReducer";
import {
  PropertyId,
  createProperty,
  searchproperty,
  stateByCountryCode,
  cityByStateCode,
  uploadImages,
  getPropertyByUserId,
  deletePropertyById,
  getPropertyType,
  UpdatePropertyData,
  getFavPropertyData,
} from "../service/Property";

const UsePropertyHook = () => {
  const { userInfo } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const createPropertyHandler = async (data: any) => {
    try {
      const res = await createProperty(data);
      dispatch(UpdateSucessMsg("Property Posted Successfully"));
      setTimeout(() => {
        dispatch(UpdateSucessMsg(""));
      }, 5000);
      return res.data.result;
    } catch (error: any) {
      console.log("error", error.response.data.error.message);

      dispatch(UpdateErrorMsg(error.response.data.error.message));
      setTimeout(() => {
        dispatch(UpdateErrorMsg(""));
      }, 5000);
      return error.response;
    }
  };

  const updatePropertyHandler = async (data: any, propertyId: string) => {
    try {
      const res = await UpdatePropertyData(data, propertyId);
      dispatch(UpdateSucessMsg("Updated Property Successfully"));
      setTimeout(() => {
        dispatch(UpdateSucessMsg(""));
      }, 5000);
      return res;
    } catch (error: any) {
      dispatch(UpdateErrorMsg(error.response.data.error.message));
      setTimeout(() => {
        dispatch(UpdateErrorMsg(""));
      }, 5000);
      return error.response;
    }
  };

  const uploadImagesHandler = async (data: any) => {
    try {
      const res = await uploadImages(data);
      return res.data.result;
    } catch (error) {
      console.log("errorUploadImg", error);
    }
  };

  const searchpropertyHandler = async (data: string) => {
    try {
      const res = await searchproperty(data);
      return res.data.result.rows;
    } catch (error) {
      console.log(error, "errorpropertylist");
    }
  };

  const propertyIdHandler = async (data: string) => {
    try {
      const res = await PropertyId(data);
      return res.data.result;
    } catch (error) {
      console.log(error, "errorpropertyId");
    }
  };

  const stateByCountryCodeHandler = async (data: string) => {
    try {
      const res = await stateByCountryCode(data);
      return res.data.result;
    } catch (error) {
      console.log(error, "errorstate");
    }
  };

  const cityByStateCodeHandler = async (data: string) => {
    try {
      const res = await cityByStateCode(data);
      return res.data.result;
    } catch (error) {
      console.log(error, "errorcity");
    }
  };

  const getPropertyTypeHandler = async (data: string) => {
    try {
      const res = await getPropertyType(data);
      dispatch(UpdateSucessMsg(""));
      return res.data.result;
    } catch (error) {
      dispatch(UpdateErrorMsg(""));
      console.log(error, "errorpropertyType");
    }
  };

  const getPropertyByUserIdHandler = async (data: any) => {
    try {
      const res = await getPropertyByUserId(data);
      return res.data.result;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const deletePropertyByIdHandler = async (data: any) => {
    try {
      const res = await deletePropertyById(data);
      return res;
    } catch (error) {
      console.log(error, "errr");
    }
  };

  const getFavPropertyHandler = async () => {
    try {
      const res = await getFavPropertyData(userInfo.token);
      return res.data.result;
    } catch (error) {
      console.log(error, "error");
    }
  };

  return {
    createPropertyHandler,
    searchpropertyHandler,
    propertyIdHandler,
    stateByCountryCodeHandler,
    cityByStateCodeHandler,
    uploadImagesHandler,
    getPropertyByUserIdHandler,
    deletePropertyByIdHandler,
    getPropertyTypeHandler,
    updatePropertyHandler,
    getFavPropertyHandler,
  };
};

export default UsePropertyHook;
