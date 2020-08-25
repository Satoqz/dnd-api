import nodefetch from "node-fetch";
import { apiError } from "../index";
const baseURL = "https://www.dnd5eapi.co/api/";

export default async function baseRequest(query: string): Promise<any | apiError> {
	// 300 iq line
	return await (await nodefetch(baseURL + query)).json();
}