import axios from "axios";

export const createProperty = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}property/create`;
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const UpdatePropertyData = async (
  propertyModalData: any,
  propertyId: string
) => {
  const url = `${process.env.REACT_APP_URL}property/update/${propertyId}`;
  return axios.patch(url, propertyModalData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const uploadImages = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}document-upload`;
  return axios.post(url, data);
};

export const searchproperty = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}search?${data}`;
  return axios.get(url, data);
};

export const PropertyId = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}property/${data}`;
  return axios.get(url, data);
};

export const stateByCountryCode = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}stateByCountryCode?countryCode=${data}`;
  return axios.get(url, data);
};

export const cityByStateCode = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}cityByStateCode?countryCode=IN&stateCode=${data}`;
  return axios.get(url, data);
};

export const getPropertyType = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}propertyType/${data}`;
  return axios.get(url, data);
};

export const getPropertyByUserId = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}PropertyByUsersId/${data}`;
  return axios.get(url, data);
};

export const deletePropertyById = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}property/delete/${data}`;
  return axios.delete(url);
};

export const popularProperty = async () => {
  const url = `${process.env.REACT_APP_URL}randomProperty`;
  return axios.get(url);
};
export const getAmenitiesData = async () => {
  const url = `${process.env.REACT_APP_URL}amenties`;
  return axios.get(url);
};

export const getFavPropertyData = async (token: string) => {
  const url = `${process.env.REACT_APP_URL}favProperty`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
