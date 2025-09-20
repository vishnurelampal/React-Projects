import sum from "../sum";
test("sum pf 2 number", () => {
  const result = sum(5, 4);
  //below line is called assertion
  expect(result).toBe(9);
});
