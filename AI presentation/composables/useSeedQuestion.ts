import { ref } from 'vue'

// The single default and shared state for every interactive teaching demo.
export const DEFAULT_SEED_QUESTION = 'How to change a light bulb?'

const seedQuestion = ref(DEFAULT_SEED_QUESTION)

export function useSeedQuestion() {
  return seedQuestion
}
