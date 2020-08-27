import parseIndex from "../src/utils/indexParser";

test("indexParser test", () =>{
	expect(parseIndex("Tasha's Hideous Laughter")).toBe("tashas-hideous-laughter");
	expect(parseIndex("YOU ARE goin TO &%!? MY DJ!=")).toBe("you-are-goin-to--my-dj");
});