import { z } from "zod/v4";
import { questionSchema, type question, type ApiResponse } from "./types";

const url = "https://opentdb.com/api.php?amount=5&type=multiple&encode=base64";

export default async function fetchQuestions(): Promise<question[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`NetWork error! ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    if (data.response_code) {
      throw new Error(
        `API error! Check documentation. Error Code=${data.response_code}`
      );
    }

    const result = questionSchema.array().safeParse(data.results);
    if (!result.success) {
      throw new Error(`Invalid API response ${z.prettifyError(result.error)}`);
    }

    return result.data;
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : `There was an error! ${err}`;
    console.error(msg);
    return [];
  }
}
