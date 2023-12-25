import axios from "axios";

export const UpdateUserProfile = async (
  userId: string,
  data: any,
  token: string
) => {
  const url = `${process.env.REACT_APP_URL}user/update/${userId}`;
  return axios.patch(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
