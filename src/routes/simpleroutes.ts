// "simple routes" are routes that can simply extend "DefaultRoute" without any further properties

import DefaultRoute from "./default";

export class Conditions extends DefaultRoute {
	static readonly route = "conditions/";
}

export class DamageTypes extends DefaultRoute {
	static readonly route = "damage-types/";
}

export class EquipCategories extends DefaultRoute {
	static readonly route = "equipment-categories/";
}

export class Equipment extends DefaultRoute {
	static readonly route = "equipment/";
}

export class Features extends DefaultRoute {
	static readonly route = "features/";
}

export class Languages extends DefaultRoute {
	static readonly route = "languages/";
}

export class MagicSchools extends DefaultRoute {
	static readonly route = "magic-schools/";
}

export class Monsters extends DefaultRoute {
	static readonly route = "monsters/";
}

export class Skills extends DefaultRoute {
	static readonly route = "skills/";
}

export class Spells extends DefaultRoute {
	static readonly route = "spells/";
}

export class StarterEquip extends DefaultRoute {
	static readonly route = "starting-equipment/";
}

export class Traits extends DefaultRoute {
	static readonly route = "traits/";
}

export class WeaponProps extends DefaultRoute {
	static readonly route = "weapon-properties/";
}









