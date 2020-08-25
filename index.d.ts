export class Monsters {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<monsterInfo | apiError>
}

export class Skills {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<skillInfo | apiError>
}

export class Spells {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<spellInfo | apiError>
}

export class Equipment {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<equipmentInfo | apiError>
}

export class StarterEquip {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<any | apiError>
}

export class Traits {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<traitInfo | apiError>
}

export class WeaponProps {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<weaponPropsInfo | apiError>
}

export class Abilities {
	public static get(name: string): Promise<abilityInfo | apiError>
}

export class Classes {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<classInfo | apiError>
	public static getSubClasses(name: string): Promise<listResponse | apiError>
	public static getStarterEquip(name: string): Promise<listResponse | apiError>
	public static getSpells(name: string): Promise<listResponse | apiError>
	public static getSpellCasting(name: string): Promise<listResponse | apiError>
	public static getProficiencies(name: string): Promise<listResponse | apiError>
	public static getLevels(name: string): Promise<levelsInfo | apiError>
	public static getLevel(name: string, level: number): Promise<levelInfo | apiError>
	public static getLevelFeatures(name: string, level: number): Promise<listResponse | apiError>
	public static getLevelSpells(name: string, level: number): Promise<listResponse | apiError>
}

export class Subclasses {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<subclassInfo | apiError>
	public static getFeatures(name: string): Promise<listResponse | apiError>
	public static getLevels(name: string): Promise<levelsInfo | apiError>
	public static getLevel(name: string, level: number) : Promise<levelInfo | apiError>
	public static getLevelFeatures(name: string, level: number): Promise<listResponse | apiError>
	public static getLevelSpells(name: string, level: number): Promise<listResponse | apiError>
}

export class Races {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<raceInfo | apiError>
	public static getSubraces(name: string): Promise<listResponse | apiError>
	public static getProficiencies(name: string): Promise<listResponse | apiError>
	public static getTraits(name: string): Promise<listResponse | apiError>
}

export class Subraces {
	public static list(): Promise<listResponse | apiError>
	public static get(name: string): Promise<subraceInfo | apiError>
	public static getProficiencies(name: string): Promise<listResponse | apiError>
	public static getTraits(name: string): Promise<listResponse | apiError>
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
}

export interface skillInfo {
	_id: string,
	index: string,
	name: string,
	desc: string[],
	ability_score: nameUrlReference,
	url: string
}

export interface equipmentInfo {
	_id: string,
	index: string,
	name: string,
	equipment_category: nameUrlReference,
	gear_category: string,
	cost: moneyReference,
	weight: number,
	url: string
}



export interface spellInfo {
	_id: string,
	index: string,
	name: string,
	desc: string[],
	higher_level: string[],
	page: string,
	range: string,
	components: string[],
	material: string,
	ritual: boolean,
	duration: string,
	concentration: boolean,
	casting_time: string,
	level: number,
	school: nameUrlReference,
	classes: {
		name: string,
		url: string
	}[],
	subclasses: nameUrlReference[]
}

export interface traitInfo {
	_id: string,
	index: string,
	races: nameUrlReference[],
	subraces: nameUrlReference[],
	name: string,
	desc: string[],
	url: string
}

export interface weaponPropsInfo {
	_id: string,
	index: string,
	name: string,
	desc: string[],
	url: string
}

export interface abilityInfo {
	_id: string,
	index: string,
	name: string,
	full_name: string,
	desc: string[],
	skills: nameUrlReference[],
	url: string
}

export interface subraceInfo {
	_id: string,
	index: string,
	name: string,
	race: nameUrlReference,
	desc: string,
	ability_bonuses: {
		name: string,
		url: string,
		bonus: number
	}[],
	starting_proficiencies: [],
	languages: [],
	racial_traits: nameUrlReference[],
	url: string
}

export interface raceInfo {
	_id: string,
	index: string,
	name: string,
	speed: number,
	ability_bonuses: {
		name: string,
		url: string,
		bonus: number
	}[],
	alignment: string,
	age: string,
	size: string,
	size_description: string,
	starting_proficiencies: nameUrlReference[],
	starting_proficiency_options: {
		choose: number,
		type: string,
		from: nameUrlReference[]
	},
	languages: nameUrlReference[],
	language_desc: string,
	traits: nameUrlReference[],
	subraces: nameUrlReference[],
	url: string
}

export interface subclassInfo {
	_id: string,
	index: string,
	class: nameUrlReference,
	name: string,
	subclass_flavor: string,
	desc: string[],
	features: [],
	url: string
}

export interface classInfo {
	_id: string,
	index: string,
	name: string,
	hit_die: number,
	proficiency_choices: {
		choose: number,
		type: string,
		from: nameUrlReference[]
	}[],
	proficiencies: nameUrlReference[],
	saving_throws: nameUrlReference[],
	starting_equipment: {
		url: string,
		class: string
	},
	subclasses: nameUrlReference[],
	spellcasting: {
		url: string,
		class: string
	},
	url: string
}

export interface levelsInfo {
	_id: string,
	level: number,
	ability_score_bonuses: number,
	prof_bonus: number,
	feature_choices: [],
	features: nameUrlReference[],
	spellcasting: {
		cantrips_known: number,
		spells_known: number,
		spell_slots_level_1: number,
		spell_slots_level_2: number,
		spell_slots_level_3: number,
		spell_slots_level_4: number,
		spell_slots_level_5: number,
		spell_slots_level_6: number,
		spell_slots_level_7: number,
		spell_slots_level_8: number,
		spell_slots_level_9: number
	},
	class_specific: any,
	index: number,
	class: nameUrlReference,
	url: string
}

export interface levelInfo {
	_id: string,
	index: number,
	level: number,
	ability_score_bonuses: number,
	prof_bonus: number,
	feature_choices: [],
	features: nameUrlReference[],
	spellcasting: {
		cantrips_known: number,
		spells_known: number,
		spell_slots_level_1: number,
		spell_slots_level_2: number,
		spell_slots_level_3: number,
		spell_slots_level_4: number,
		spell_slots_level_5: number,
		spell_slots_level_6: number,
		spell_slots_level_7: number,
		spell_slots_level_8: number,
		spell_slots_level_9: number
	},
	class_specific: any,
	class: nameUrlReference,
	url: string
}

export interface listElement {
	index: string,
	name: string,
	url: string,
	class: string
}

export interface listResponse {
	count: number,
	results: listElement[]
}

export interface listResponse {
	count: number,
	results: listElement[]
}

export interface nameUrlReference {
	url: string,
	name: string
}

export interface moneyReference {
	quantity: number,
	unit: string
}

export interface apiError {
	error: string
}