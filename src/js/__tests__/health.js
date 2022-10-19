import whatMyHealth from "../health.js";

test("status at health: 90", () => {
  const result = whatMyHealth({ name: "Маг", health: 90 });
  expect(result).toBe("healthy");
});

const dataList = [
  [{ name: "Маг", health: 90 }, "healthy"],
  [{ name: "Лучник", health: 40 }, "wounded"],
  [{ name: "Троль", health: 10 }, "critical"],
];

const allHealth = test.each(dataList);

allHealth("testing status", (obj, status) => {
  const result = whatMyHealth(obj);
  expect(result).toBe(status);
});
