import OpenAI from "openai";
import { GPT_KEY } from "./Constants";
console.log(GPT_KEY);
const client = new OpenAI({
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser: true,
});
export default client;
