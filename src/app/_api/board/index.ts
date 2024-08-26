import axios, { AxiosResponse } from "axios";
import { boardResponse } from "@/app/_api/board/type";

export const boardFetch = async (): Promise<AxiosResponse<boardResponse>> => {
  return await axios.get("http://localhost:3001/board");
};
