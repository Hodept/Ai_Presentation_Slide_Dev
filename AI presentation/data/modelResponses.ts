/**
 * Offline comparison content.
 *
 * Before presenting, replace the placeholder text for each question with
 * short excerpts from the same model. Include the exact model/version in `model`.
 */
export const comparisonQuestions = [
  'How to change a light bulb?',
  'What is a light bulb?',
] as const

type ModelResponse = {
  provider: string
  model: string
  response: string
}

export const modelResponses: Record<(typeof comparisonQuestions)[number], ModelResponse[]> = {
  'How to change a light bulb?': [
    {
      provider: 'Meta',
      model: 'Llama3:latest',
      response: 'Turn off power, remove shade or globe, grasp bulb firmly, twist counterclockwise to loosen, pull out and replace with new bulb, screw in new one clockwise until snug.',
    },
    {
      provider: 'Google',
      model: 'Gemma3:latest',
      response: '1. Turn off power!\n2. Carefully remove old bulb.\n3. Screw in new bulb – clockwise.',
    },
    {
      provider: 'Microsoft',
      model: 'phi3:latest',
      response: "Ensure power off, then remove and replace using hand's grip motion clockwise or counterclockwise as needed - safety first!",
    },
  ],
  'What is a light bulb?': [
    {
      provider: 'Meta',
      model: 'Llama3:latest',
      response: 'A light bulb is an electric device that produces light when an electric current passes through it, typically using a filament or gas discharge to generate illumination.',
    },
    {
      provider: 'Google',
      model: 'Gemma3:latest',
      response: 'A light bulb is a device that converts electricity into light. It’s a common source of illumination!',
    },
    {
      provider: 'Microsoft',
      model: 'phi3:latest',
      response: 'A glass object with filament or gas, emits visible spectrum when electrified for illumination!',
    },
  ],
}
