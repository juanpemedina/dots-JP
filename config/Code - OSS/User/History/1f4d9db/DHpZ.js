// Majority
function insertDashes(str) {
  return str.replace(/\s/g, "-").split("").join("-");
}
describe("insertDashes", () => {
  it("insert dashes in between chars", () => {
    const value = "ab cde";
    const result = insertDashes(value);
    console.log("result", result);
    expect(result).toBeOneOf(["a-b-c-d-e", "a-b-c-d-e-"]);
  });
});
