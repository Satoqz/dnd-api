// most names in the api can be casted to an index quite easily, which allows for less frustrating search results

export default function parseIndex(name: string) {
	return name.toLowerCase().replace(/\s/g, "-").replace("[^a-zA-Z0-9]", "");
}
