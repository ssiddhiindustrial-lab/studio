'use server';
/**
 * @fileOverview This flow generates a high-level project scope and preliminary cost estimate based on client requirements.
 *
 * - aiProjectScopeAndEstimate - A function that handles the AI-powered project scope and estimate generation.
 * - ProjectRequirementsInput - The input type for the aiProjectScopeAndEstimate function.
 * - ProjectScopeAndEstimateOutput - The return type for the aiProjectScopeAndEstimate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectRequirementsInputSchema = z.object({
  clientRequirements: z
    .string()
    .describe(
      'Detailed description of the client\'s project requirements, including type of industrial facility, size, location, specific needs, etc.'
    ),
});
export type ProjectRequirementsInput = z.infer<typeof ProjectRequirementsInputSchema>;

const ProjectScopeAndEstimateOutputSchema = z.object({
  highLevelScope: z
    .string()
    .describe(
      'A high-level summary of the project scope, detailing the main components and services Siddhi Industrial Services would provide.'
    ),
  preliminaryCostEstimate: z
    .string()
    .describe(
      'A preliminary, high-level cost estimate for the project in Indian Rupees (₹), presented as a range (e.g., "₹X Cr - ₹Y Cr").'
    ),
});
export type ProjectScopeAndEstimateOutput = z.infer<
  typeof ProjectScopeAndEstimateOutputSchema
>;

export async function aiProjectScopeAndEstimate(
  input: ProjectRequirementsInput
): Promise<ProjectScopeAndEstimateOutput> {
  return aiProjectScopeAndEstimateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectScopeAndEstimatePrompt',
  input: {schema: ProjectRequirementsInputSchema},
  output: {schema: ProjectScopeAndEstimateOutputSchema},
  prompt: `You are an AI assistant for Siddhi Industrial Services, a premium industrial and infrastructure contractor.
Your task is to analyze client project requirements and provide a high-level project scope and a preliminary cost estimate.

Consider the following client requirements and generate a response that aligns with industrial construction projects:

Client Requirements:
{{{clientRequirements}}}

Base your estimate and scope on typical industrial construction project values in India. Provide the cost estimate as a range in Indian Rupees (₹) in Crores (Cr).`,
});

const aiProjectScopeAndEstimateFlow = ai.defineFlow(
  {
    name: 'aiProjectScopeAndEstimateFlow',
    inputSchema: ProjectRequirementsInputSchema,
    outputSchema: ProjectScopeAndEstimateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
