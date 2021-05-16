const numeral = require("numeral");

/**
 * Accept a number greater than 999 and return (e.g. 1.2m) string
 *
 * @param num
 */

export function humanizeToEnglish(num: number | string) {
  if (typeof num !== "number") {
    return num;
  }

  if (Math.abs(num) < 1000) {
    return num;
  }

  // return numeral(num).format("0.0a");
  return numeral(num).format("0a");
}

const FarsiDelimiters = {
  k: "هزار",
  m: "میلیون",
  b: "میلیارد",
  t: "تریلیون",
};

/**
 * Accepts a number greater than 999 and return string version of that number with FarsiDelimiters
 * @param num
 */
export function humanizeToFarsi(num: number | string) {
  if (typeof num !== "number") {
    return num;
  }

  if (Math.abs(num) < 1000) {
    return num;
  }

  // const humanized = numeral(num).format("0.0a");
  const humanized = numeral(num).format("0a");
  const delimiter = humanized.slice(-1);
  const result = humanized.substr(0, humanized.length - 1);

  switch (delimiter) {
    case "k":
      return `${result} ${FarsiDelimiters.k}`;
    case "m":
      return `${result} ${FarsiDelimiters.m}`;
    case "b":
      return `${result} ${FarsiDelimiters.b}`;
    case "t":
      return `${result} ${FarsiDelimiters.t}`;
    default:
      return result;
  }
}
