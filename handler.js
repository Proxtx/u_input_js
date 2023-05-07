import { input } from "../../public/meta.js";

export const evaluate = async (value) => {
  return await eval(await input.resolveArgument(value.pwd, value.code));
};
