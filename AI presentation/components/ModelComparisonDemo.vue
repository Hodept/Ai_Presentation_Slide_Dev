<script setup lang="ts">
import { computed, ref } from 'vue'
import { comparisonQuestions, modelResponses } from '../data/modelResponses'

const selectedQuestion = ref<(typeof comparisonQuestions)[number]>(comparisonQuestions[0])
const responses = computed(() => modelResponses[selectedQuestion.value])
</script>

<template>
  <div class="text-left">
    <label class="block text-sm font-semibold mb-2" for="comparison-question">Choose one question for every model</label>
    <select id="comparison-question" v-model="selectedQuestion" class="w-full rounded border border-slate-500 bg-slate-800 px-3 py-2 text-base text-white" aria-label="Question to compare">
      <option v-for="question in comparisonQuestions" :key="question" :value="question" class="bg-slate-800 text-white">{{ question }}</option>
    </select>

    <div class="mt-5 grid grid-cols-3 gap-4">
      <article v-for="item in responses" :key="item.provider" class="rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900">
        <h3 class="text-base font-bold">{{ item.provider }}</h3>
        <p class="mt-1 text-xs text-slate-500">{{ item.model }}</p>
        <p class="mt-3 whitespace-pre-wrap text-sm leading-snug">{{ item.response }}</p>
      </article>
    </div>
  </div>
</template>
