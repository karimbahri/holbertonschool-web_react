export const getFullYear = function () {
  const date = new Date();
  return date.getFullYear();
};

export const getFooterCopy = function (isIndex) {
  if (isIndex) return "Holberton School";

  return "Holberton School main dashboard";
};
