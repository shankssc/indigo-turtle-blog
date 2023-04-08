export function isStringArray(obj: unknown): obj is string[] {
  if (typeof obj === 'object' && Array.isArray(obj)) {
    return obj.reduce(
      (acc: boolean, el: unknown) => !(acc && typeof el != 'string'),
      true
    );
  } else return false;
}
