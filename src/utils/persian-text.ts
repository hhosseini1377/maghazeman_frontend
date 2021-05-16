const replaceChar = (
  search: Array<string>,
  replace: Array<string>,
  subject: string
) => {
  const { length } = search;
  /* eslint-disable */
  subject = subject.toString();

  for (let i = 0; i < length; i++) {
    subject = subject.split(search[i]).join(replace[i]);
  }

  return subject;
};
const ThousandSeparator = (
  search: Array<string>,
  replace: Array<string>,
  subject: string
) => {
  const { length } = search;
  /* eslint-disable */
  subject = subject.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  for (let i = 0; i < length; i++) {
    subject = subject.split(search[i]).join(replace[i]);
  }

  return subject.toString();
};

export const persianNumbers = (str: string) => {
  let englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
  let persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "٫"];

  return replaceChar(englishNumbers, persianNumbers, str);
};

export const persianPrice = (str: string) => {
  let englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
  let persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "٫"];

  return ThousandSeparator(englishNumbers, persianNumbers, str);
};
