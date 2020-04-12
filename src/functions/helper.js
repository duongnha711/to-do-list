export const findTasksIndex = (arr, id) => {
  return arr.findIndex((item) => {
    return item.id === id;
  });
};

export const clearAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};


