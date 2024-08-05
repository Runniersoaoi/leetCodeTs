type ToBeOrNotToBe = {
  toBe: (val: any) => boolean,
  notToBe: (val: any) => boolean,
};

function expect(val: any): ToBeOrNotToBe {
  const toBe = (value: any): boolean => {
    if (value === val) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };

  const notToBe = (value: any): boolean => {
    if (value !== val) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };

  return { toBe, notToBe };
}
