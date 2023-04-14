import { DateTime } from "global";

export const dateToString = (date: DateTime): string => {
  const str: string = `${date.month}/${date.day}/${date.year}`;
  return str;
};
