import baseRequest from "../baseRequest";
import parseIndex from "../utils/indexParser";
import { listResponse } from "../../index";
export default class DefaultRoute {
	static readonly route: string = "i should be changed by another class";
	public static async list(filter?: string) {
		const data: listResponse = await baseRequest(this.route);

		if(filter) {
			let filtered;
			let errored = true;
			try {
				filtered = data.results.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()));
				errored = false;
			} catch (e) {
				// Work-around to fix the problem with that Starter-Equipment API not having name and crashing NodeJS
			}
			
			if(errored) {
				filtered = data.results.filter(r => r.class.toLowerCase().includes(filter.toLowerCase()));
			}
			
			return {
				count: filtered.length,
				results: filtered
			};
		}

		return data;
	}
	public static async get(name: string) {
		return await baseRequest(this.route + parseIndex(name));
	}
}
