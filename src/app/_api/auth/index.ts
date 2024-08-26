import axios, { AxiosResponse } from "axios";

export const authFetch = async (token: string) => {
  return await axios.get("/api/user", {
    headers: {
      Authorization: token,
    },
  });
};

interface User {
  id: string;
  password: string;
}

type UserResponse = User & {
  token: string;
};

export const authPost = async (
  form: User,
): Promise<AxiosResponse<UserResponse>> => {
  return await axios.post("/api/user", form);
};
