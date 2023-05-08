import { input } from "../../public/meta.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  return await eval(await input.resolveArgument(config.pwd, value.code));
};
