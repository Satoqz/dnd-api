import baseRequest from "../baseRequest";

const keys = [
	{"k":"cha","r":"charisma"},
	{"k":"con","r":"constitution"},
	{"k":"dex","r":"dexterity"},
	{"k":"int","r":"intelligence"},
	{"k":"str","r":"strength"},
	{"k":"wis","r":"wisdom"},
];
	

export class Abilities {

	static readonly route: string = "ability-scores/";

	public static async get(name: string) {
		const match = keys.find(key => key.r == name.toLowerCase() || key.k == name.toLowerCase());

		if(!match) {
			return {
				"error": "invalid ability"
			};
		}

		return await baseRequest(this.route + match.k);
	}
}