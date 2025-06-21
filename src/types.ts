import { z } from "zod/v4";

export const questionSchema = z.object({
  type: z.base64(),
  difficulty: z.base64(),
  category: z.base64(),
  question: z.base64(),
  correct_answer: z.base64(),
  incorrect_answers: z.array(z.base64()),
});

export const randomFactSchema = z.object({
  id: z.string().optional(),
  text: z.string(),
  source: z.string().optional(),
  source_url: z.string().optional(),
  language: z.string().optional(),
  permalink: z.string().optional(),
});

export type ApiResponse = {
  response_code: number;
  results: question[];
};

export type question = z.infer<typeof questionSchema>;
export type randomFact = z.infer<typeof randomFactSchema>;
