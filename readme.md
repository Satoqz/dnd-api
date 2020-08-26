# Dungeons and Dragons API Wrapper
<a href="https://github.com/Satoqz/dnd-api/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Satoqz/dnd-api?style=for-the-badge"></a><a href="https://github.com/Satoqz/dnd-api/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Satoqz/dnd-api?style=for-the-badge"></a><a href="https://github.com/Satoqz/dnd-api/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Satoqz/dnd-api?style=for-the-badge"></a><a href="https://github.com/Satoqz/dnd-api"><img alt="GitHub license" src="https://img.shields.io/github/license/Satoqz/dnd-api?style=for-the-badge"></a><img alt="npm (tag)" src="https://img.shields.io/npm/v/dnd-api/latest?style=for-the-badge"><img alt="npm" src="https://img.shields.io/npm/dt/dnd-api?style=for-the-badge">

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
