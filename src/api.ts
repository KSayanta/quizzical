import { z } from "zod/v4";
import {
  questionSchema,
  randomFactSchema,
  type question,
  type randomFact,
} from "./types";

const triviaUrl =
  "https://opentdb.com/api.php?amount=5&type=multiple&encode=base64";
const factsUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";

export async function fetchQuestions(): Promise<question[]> {
  try {
    const response = await fetch(triviaUrl);
    if (!response.ok) {
      throw new Error(`NetWork error! ${response.status}`);
    }

    const data: { response_code: number; results: question[] } =
      await response.json();

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
      err instanceof Error
        ? err.message
        : `There was an error! ${err!.toString()}`;
    console.error(msg);
    return [];
  }
}

export async function fetchRandomFact(): Promise<randomFact> {
  try {
    const response = await fetch(factsUrl);
    if (!response.ok) {
      throw new Error(`NetWork error! ${response.status}`);
    }

    const data: randomFact = await response.json();
    const result = randomFactSchema.safeParse(data);

    if (!result.success) {
      throw new Error(`Invalid API response ${z.prettifyError(result.error)}`);
    }

    return result.data;
  } catch (err) {
    const msg =
      err instanceof Error
        ? err.message
        : `There was an error! ${err!.toString()}`;
    console.error(msg);
    return {
      text: `The largest quiz, according to Guinness, was the "Quiz for Life", held
        at the Flanders Expo Halls in Ghent, Belgium, on 11 December 2010 with
        2,280 participants. The winning team Café De Kastaar from Leuven
        consisted of Marnix Baes, Erik Derycke, Eric Hemelaers, Bart Permentier
        and Tom Trogh.`,
    };
  }
}
