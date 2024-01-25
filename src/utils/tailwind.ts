export const cl = (...classNames: (string | undefined | boolean)[]) => {
  return classNames.filter((item) => !!item).join(" ");
};
