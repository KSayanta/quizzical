import { z } from "zod/v4";
import { questionSchema, type question, type ApiResponse } from "./types";

const url = "https://oopentdb.com/api.php?amount=5&type=multiple&encode=base64";

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

/**
Demo response
  const data = {
    response_code: 0,
    results: [
      {
        type: "bXVsdGlwbGU=",
        difficulty: "aGFyZA==",
        category: "SGlzdG9yeQ==",
        question:
          "SW4gd2hpY2ggeWVhciBkaWQgdGhlIFRva3lvIFN1YndheSBTYXJpbiBBdHRhY2sgb2NjdXI\/",
        correct_answer: "MTk5NQ==",
        incorrect_answers: ["MjAwMQ==", "MjAxMQ==", "MTk5MQ=="],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "bWVkaXVt",
        category: "RW50ZXJ0YWlubWVudDogTXVzaWM=",
        question:
          "SW4gd2hhdCB5ZWFyIGRpZCBVUyBiYW5kIFdlZXplciByZWxlYXNlIFdlZXplciAoVGhlIFdoaXRlIEFsYnVtKT8=",
        correct_answer: "MjAxNg==",
        incorrect_answers: ["MjAwMQ==", "MjAwOA==", "MjAxOQ=="],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "bWVkaXVt",
        category: "SGlzdG9yeQ==",
        question:
          "VGhlIFBhbmFtYSBDYW5hbCB3YXMgZmluaXNoZWQgdW5kZXIgdGhlIGFkbWluaXN0cmF0aW9uIG9mIHdoaWNoIFUuUy4gcHJlc2lkZW50Pw==",
        correct_answer: "V29vZHJvdyBXaWxzb24=",
        incorrect_answers: [
          "RnJhbmtsaW4gRGVsYW5vIFJvb3NldmVsdA==",
          "SGVyYmVydCBIb292ZXI=",
          "VGhlb2RvcmUgUm9vc2V2ZWx0",
        ],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "aGFyZA==",
        category: "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=",
        question:
          "SW4gIlRoZSBCaW5kaW5nIG9mIElzYWFjIiwgd2hpY2ggaXRlbSBpbnN0YW50bHkga2lsbHMgTW9tIGFuZCBNb20ncyBIZWFydD8=",
        correct_answer: "VGhlIEJpYmxl",
        incorrect_answers: [
          "VGhlIEhhbG8=",
          "QnJpbXN0b25l",
          "Qm9vayBvZiBTaGFkb3dz",
        ],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "bWVkaXVt",
        category: "RW50ZXJ0YWlubWVudDogTXVzaWM=",
        question:
          "V2hpY2ggc29uZyBtYWRlIGJ5IE1BTiBXSVRIIEEgTUlTU0lPTiB3YXMgdXNlZCBhcyB0aGUgb3BlbmluZyBmb3IgdGhlIGFuaW1lICJMb2cgSG9yaXpvbiI\/",
        correct_answer: "IkRhdGFiYXNlIg==",
        incorrect_answers: [
          "IkRlYWQgRW5kIGluIFRva3lvIg==",
          "IlJhaXNlIFlvdXIgRmxhZyI=",
          "Ik91dCBvZiBDb250cm9sIg==",
        ],
      },
    ],
  };
*/
