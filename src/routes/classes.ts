import DefaultRoute from "./default";
import baseRequest from "../baseRequest";
import parseIndex from "../utils/indexParser";

export class Classes extends DefaultRoute {
	static readonly route = "classes/";

	public static async getSubClasses(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/subclasses");
	}
	public static async getStarterEquip(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/starting-equipment");
	}
	public static async getFeatures(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/features");
	}
	public static async getSpells(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/spells");
	}
	public static async getSpellCasting(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/spellcasting");
	}
	public static async getProficiencies(name: string) {
		return await baseRequest(this.route + parseIndex(name) + "/proficiencies");
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