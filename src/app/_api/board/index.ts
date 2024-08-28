import axios, { AxiosResponse } from "axios";
import { boardResponse } from "@/app/_api/board/type";

export const boardFetch = async (): Promise<AxiosResponse> => {
  return await axios.get("http://localhost:3001/board");
};

export const boardDelete = async (id: string): Promise<AxiosResponse> => {
  return await axios.delete(`http://localhost:3001/board/${id}`);
};

export const boardWrite = async (
  form: boardResponse,
): Promise<AxiosResponse> => {
  return await axios.post("http://localhost:3001/board", form);
};

export const boardInfo = async (id: string): Promise<AxiosResponse> => {
  return await axios.get(`http://localhost:3001/board/${id}`);
};

export const boardUpdate = async (
  id: string,
  form: boardResponse,
): Promise<AxiosResponse> => {
  return await axios.put(`http://localhost:3001/board/${id}`, form);
};
