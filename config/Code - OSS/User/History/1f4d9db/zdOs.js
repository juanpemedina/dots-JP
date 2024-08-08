// Majority
function insertDashes(str) {
  return str
    .split(" ")
    .map((word) => word.split("").join("-"))
    .join(" ");
}
describe("insertDashes", () => {
  it("insert dashes in between chars", () => {
    const result = insertDashes("ab cde");
	console.log("result", result);
    expect(result).toBe("a-b c-d-e");
  });
});
