import baseRequest from "../baseRequest";
import listResponse from "../models/listResponse.model";
import parseIndex from "../utils/indexParser";

export default class DefaultRoute {
	static readonly route: string = "i should be changed by another class";
	public static async list(filter?: string) {
		const data: listResponse = await baseRequest(this.route);

		if(filter) {
			return {
				count: data.count,
				results: data.results.filter(r => r.name.toLowerCase().startsWith(filter.toLowerCase()))
			};
		}

		return data;
	}
	public static async get(name: string) {
		return await baseRequest(this.route + parseIndex(name));
	}
}