<script setup lang="ts">
import { computed } from 'vue'
import { useSeedQuestion } from '../composables/useSeedQuestion'

const question = useSeedQuestion()
const examples = ['How do I replace a light bulb?', 'How do I reset a circuit breaker?', 'What is the capital of France?']

function hash(text: string) {
  let value = 5381
  for (const character of text.toLowerCase()) value = (Math.imul(value, 33) ^ character.charCodeAt(0)) >>> 0
  return value
}

function embedding(text: string) {
  const seed = hash(text || ' ')
  const values = Array.from({ length: 12 }, (_, index) => Math.sin(seed * (index + 1)) + Math.cos(seed / (index + 2)))
  const magnitude = Math.sqrt(values.reduce((total, value) => total + value ** 2, 0))
  return values.map(value => value / magnitude)
}

function cosine(a: number[], b: number[]) {
  return a.reduce((total, value, index) => total + value * b[index], 0)
}

const currentEmbedding = computed(() => embedding(question.value))
const comparisons = computed(() => examples.map(text => ({ text, score: cosine(currentEmbedding.value, embedding(text)) })).sort((a, b) => b.score - a.score))
</script>

<template>
  <div class="text-left">
    <label class="block text-sm font-semibold mb-2" for="embedding-question">Try your seed question</label>
    <input id="embedding-question" v-model="question" class="w-full rounded border border-slate-300 px-3 py-2 text-base" aria-label="Seed question" />

    <p class="mt-4 text-sm opacity-70">Behind the scenes, AI turns meaning into a set of numbers. Think of this as a map: ideas that relate to each other tend to land closer together.</p>

    <div class="mt-4 grid grid-cols-2 gap-6">
      <div>
        <p class="mb-2 text-sm font-semibold">Your relationship map (illustrative)</p>
        <div class="grid grid-cols-4 gap-1 font-mono text-xs">
          <span v-for="(value, index) in currentEmbedding" :key="index" class="rounded bg-blue-100 p-1 text-center text-blue-900">{{ value.toFixed(2) }}</span>
        </div>
      </div>
      <div>
        <p class="mb-2 text-sm font-semibold">How closely the examples relate</p>
        <div v-for="comparison in comparisons" :key="comparison.text" class="mb-2">
          <div class="flex justify-between gap-2 text-xs"><span>{{ comparison.text }}</span><span>{{ comparison.score.toFixed(2) }}</span></div>
          <div class="mt-1 h-2 rounded bg-slate-200"><div class="h-full rounded bg-emerald-500" :style="{ width: `${Math.max(0, comparison.score) * 100}%` }" /></div>
        </div>
      </div>
    </div>

    <p class="mt-4 text-xs opacity-60">This is a safe offline analogy. A real model learns its relationship map during training; these values simply make the idea visible.</p>
  </div>
</template>
