export const getRandowNumber = (lists: Array<any>) => {
  return Math.floor(Math.random() * (lists.length - 0));
};
export const phoneRegex = /^[\+]?([0-9]{0,11})$/g;
export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const regexUrl =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
