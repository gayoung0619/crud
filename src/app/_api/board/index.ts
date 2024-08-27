import axios, { AxiosResponse } from "axios";
import { boardResponse } from "@/app/_api/board/type";

export const boardFetch = async (): Promise<AxiosResponse> => {
  return await axios.get("http://localhost:3001/board");
};

export const boardDelete = async (id: number): Promise<AxiosResponse> => {
  return await axios.delete(`http://localhost:3001/board/${id}`);
};
