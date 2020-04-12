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
