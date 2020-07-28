export class Monsters {
	public static list(): []
	public static get(name: string): Promise<monsterInfo>
}

export interface monsterInfo {
	_id: string,
	index: string,
	name: string,
	size: string,
	subtype: string | null
	alignment: string,
	armor_class: number,
	hit_points: number,
	hit_dice: string,
	speed: {},
	strength: number,
	dexterity: number,
	constitution: number,
	intelligence: number,
	wisdom: number,
	charisma: number,
	proficiencies: {},
	damage_vulnerabilities: string[],
	damage_resistances: string[],
	damage_immunities: string[],
	condition_immunities: string[],
	senses: {},
	special_abilities: {}[],
	actions: [],
	url: string
} // eslint-disable-line

export interface listElement {
	index: string,
	name: string,
	url: string
}

export interface listResponse {
	count: number,
	results: listElement[]
}

export interface apiError {
	error: string
}