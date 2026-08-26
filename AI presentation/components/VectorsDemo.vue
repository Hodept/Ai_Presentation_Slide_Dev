<script setup lang="ts">
import { computed } from 'vue'
import { useSeedQuestion } from '../composables/useSeedQuestion'

const question = useSeedQuestion()

const values = computed(() => {
  const text = question.value.trim()
  return [
    text ? text.split(/\s+/).length : 0,
    text.length,
    text.includes('?') ? 1 : 0,
    (text.match(/!/g) ?? []).length,
  ]
})

const vector = computed(() => `[${values.value.join(', ')}]`)

const dimensions = [
  'word count',
  'character count',
  'has a question mark?',
  'exclamation-mark count',
]
</script>

<template>
  <div class="text-left">
    <label class="block text-sm font-semibold mb-2" for="vector-question">Try your seed question</label>
    <input id="vector-question" v-model="question" class="w-full rounded border border-slate-300 px-3 py-2 text-base" aria-label="Seed question" />

    <p class="mt-4 text-sm opacity-70">Here we turn visible features of your text into a small, ordered list of numbers.</p>

    <p class="mt-4 rounded bg-blue-100 p-3 text-center font-mono text-lg font-bold text-blue-950">{{ vector }}</p>

    <div class="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-sm">
      <div v-for="(dimension, index) in dimensions" :key="dimension" class="flex justify-between border-b border-slate-200 pb-1">
        <span>v{{ index + 1 }} = {{ dimension }}</span><strong>{{ values[index] }}</strong>
      </div>
    </div>

    <p class="mt-4 text-xs opacity-60">This hand-built vector describes simple features, not the meaning of the question. A language model uses learned, much larger vectors.</p>
  </div>
</template>
