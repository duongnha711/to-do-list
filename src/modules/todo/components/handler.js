import { clearAccents } from "./../../../functions/helper";

export const searchName = (arr, keyWord) => {
  return arr.filter((item) => {
    return clearAccents(item.name.toLowerCase()).includes(
      clearAccents(keyWord.toLowerCase().trim())
    );
  });
};

export const searchStatus = (arr, status) => {
  return arr.filter((item) => {
    return item.status === status;
  });
};

export function sortTask(arr, by, value) {
  return arr.sort((a, b) => {
    const x = a[by].toLowerCase();
    const y = b[by].toLowerCase();
    if (x < y) {
      return -value;
    }
    if (x > y) {
      return value;
    }
    return 0;
  });
}
