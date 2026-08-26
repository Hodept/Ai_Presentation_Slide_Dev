<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSeedQuestion } from '../composables/useSeedQuestion'

const question = useSeedQuestion()
const selectedTokenizer = ref('word')

const tokenizerOptions = [
  { value: 'word', label: 'Word and punctuation' },
  { value: 'subword', label: 'Subword chunks' },
  { value: 'character', label: 'Character-like pieces' },
]

function wordTokens(text: string) {
  return text.match(/[A-Za-z]+(?:'[A-Za-z]+)?|\d+|[^\s]/g) ?? []
}

function subwordTokens(text: string) {
  return wordTokens(text).flatMap((token) => {
    if (!/^[A-Za-z]+$/.test(token) || token.length <= 4) return [token]
    return [`▁${token.slice(0, 3)}`, `##${token.slice(3)}`]
  })
}

function characterTokens(text: string) {
  return Array.from(text.replace(/\s/g, '')).map((character, index) => index === 0 ? `▁${character}` : character)
}

function hash(text: string) {
  let value = 2166136261
  for (const character of text) {
    value ^= character.charCodeAt(0)
    value = Math.imul(value, 16777619)
  }
  return value >>> 0
}

const tokens = computed(() => {
  const text = question.value.trim()
  const split = selectedTokenizer.value === 'subword'
    ? subwordTokens(text)
    : selectedTokenizer.value === 'character'
      ? characterTokens(text)
      : wordTokens(text)

  return split.map((token) => ({
    text: token,
    id: 1000 + (hash(`${selectedTokenizer.value}:${token}`) % 49000),
  }))
})

const colours = ['bg-blue-100 text-blue-900', 'bg-emerald-100 text-emerald-900', 'bg-amber-100 text-amber-900', 'bg-violet-100 text-violet-900']
</script>

<template>
  <div class="text-left">
    <label class="block text-sm font-semibold mb-2" for="token-question">Try your seed question</label>
    <input id="token-question" v-model="question" class="w-full rounded border border-slate-300 px-3 py-2 text-base" aria-label="Seed question" />

    <div class="mt-4 flex items-center gap-3">
      <label class="text-sm font-semibold" for="tokenizer-select">Tokenizer style</label>
      <select id="tokenizer-select" v-model="selectedTokenizer" class="rounded border border-slate-500 bg-slate-800 px-2 py-1 text-sm text-white">
        <option v-for="option in tokenizerOptions" :key="option.value" :value="option.value" class="bg-slate-800 text-white">{{ option.label }}</option>
      </select>
    </div>

    <p class="mt-3 text-sm opacity-70">A tokenizer breaks text into small pieces a model can process. Different models use different tokenizers and assign different IDs.</p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span v-for="(token, index) in tokens" :key="`${token}-${index}`" class="rounded px-2 py-1 text-sm font-mono" :class="colours[index % colours.length]">
        <span class="block">{{ token.text }}</span>
        <span class="block border-t border-current/20 pt-1 text-xs opacity-75">ID {{ token.id }}</span>
      </span>
    </div>

    <p class="mt-4 text-sm"><strong>{{ tokens.length }}</strong> illustrative tokens</p>
    <p class="mt-1 text-xs opacity-60">The token IDs here are stable but deliberately made up for teaching. Real IDs come from each model’s own vocabulary.</p>
  </div>
</template>
