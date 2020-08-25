import DefaultRoute from "./default";
import baseRequest from "../baseRequest";
import parseIndex from "../utils/indexParser";

export class Subclasses extends DefaultRoute {
	static readonly route = "subclasses/";

	public static async getFeatures(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/features");
	}
	public static async getLevels(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/levels");
	}
	public static async getLevel(name: string, level: number) {
		return await baseRequest(this.route + parseIndex(name) + "/levels/" + level);
	}
	public static async getLevelFeatures(name: string, level: number) {
		return await baseRequest(this.route + parseIndex(name) + "/levels/" + level + "/features");
	}
	public static async getLevelSpells(name: string, level: number) {
		return await baseRequest(this.route + parseIndex(name) + "/levels/" + level + "/spells");
	}
}