import DefaultRoute from "./default";
import baseRequest from "../baseRequest";
import parseIndex from "../utils/indexParser";

export class Subraces extends DefaultRoute {
	static readonly route = "subraces/";

	public static async getProficiencies(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/proficiencies");
	}
	public static async getTraits(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/traits");
	}
}
