# Dungeons and Dragons API Wrapper

### This is a fork of [this](https://github.com/Satoqz/dnd-api) because the old one wasn't functioning correctly and isn't properly maintained anymore

### This is a Node API Wrapper of the [D&D 5th Edition API](http://www.dnd5eapi.co/)

## Key Features

- Access to all API endpoints using convenient methods

- The only dependency is node-fetch => Promise based

- Typings for all JSON response types of the API

## Docs

Every major route in the API is portrayed in form of a static class.
Let's take a look at an example:

JavaScript:<br>
`const monsters = require("dnd-api").Monsters;`<br>

`const response = await monsters.get("Cat");`

TypeScript:<br>
`import { Monsters } from "dnd-api";`<br>

`const response = await Monsters.get("Cat");`

Get a list of, for example, Monsters:
`const response = await Monsters.list()`

Filter the list by initial or more letters:
`const response = await Monsters.list("a")`<br>

=> returns a list of all Monsters beginning with "a"

- Note: case-sensitivity is taken care of by the library
