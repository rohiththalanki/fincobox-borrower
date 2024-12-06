export const firstCharacterOfWord = (str = '')  =>
  str.split(" ").length > 1
    ? str
        .split(" ")
        .map((item) => item.slice(0, 1).toUpperCase())
        .join("")
    : str.slice(0, 2).toUpperCase();
