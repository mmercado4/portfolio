export const isValidJson = (value: string) => {
  try {
    JSON.parse(value);
    return true;
  } catch (err) {
    return false;
  }
};
