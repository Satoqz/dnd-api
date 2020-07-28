import DefaultRoute from "./default";
import parseIndex from "../utils/indexParser";
import baseRequest from "../baseRequest";

export class Races extends DefaultRoute {
	static readonly route = "races/";

	public static async getSubraces(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/subraces");
	}
	public static async getProficiencies(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/proficiencies");
	}
	public static async getTraits(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/traits");
	}
}