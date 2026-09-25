---
theme: default
title: Learning About AI
titleTemplate: '%s — Learning About AI'
info: |
  A deta introduction to artificial intelligence.
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Learning About AI

## A detailed introduction to what artificial intelligence is—and what happens behind the screens.

<div class="pt-12 text-sm opacity-70">Richard Horne</div>

---
layout: center
---

# What's our goal?

Build a clear, practical foundation for understanding AI:

1. What is AI?
2. How does AI work?
3. What does AI *not* do?

<!--
Whats our goal. 

1.  Discuss
2. Overview of how AI REALLY works. 
3. How AI does what it does.

My personal goal is that each of you can walk away well informed and be empowered to navigate what you run into out in the wild world.  If you don't retain everything we talk about here today, I hope that you will at least remember our journey and the destination.
-->

---
layout: center
---

# Disclaimer about what we will NOT cover

- This session is an introduction to how AI works, not a complete guide to every aspect of AI.

- We will not try to settle philosophical debates about whether AI is sentient. 

- We will focus on how AI systems produce responses, how they are built, and the foundational ideas needed to understand them.

- At their core, AI systems use mathematical models, data, and computer programs. They are powerful tools, but they are not magic. The underlying calculations are repeatable, but the quality of an AI response still depends on the model, its training, the context, and the prompt.

<!--
What we are NOT going to cover. 
1. We will not be going over all parts of AI.  There is still lots more a person can learn. 
2. We will not try to resolve broad debates about AI safety, misuse, or whether AI could harm humanity. Those are important topics, but they are outside today’s introduction.

3. INSTEAD 

a. we will focus on How AI is built -  "the science behind it." 

b. We will explain that AI uses repeatable mathematical calculations. Its responses are based on learned patterns and can vary depending on the model, settings, context, and inputs. AI can respond differently when the context changes, but it does not normally change its underlying training during a conversation.
-->

---
layout: center
---

## Topics for another time

1. Everything you can do with AI
2. The ethical consequences of using AI
3. The personal implications of AI and how it might affect you
4. A full discussion of AI accuracy and its use by organizations, governments, and businesses

<!--
Things / Topics I would love to talk about another time, but we just wont have time to dive into today.

* You each should have a vocab sheet.  There is a lot of vocabulary that I will use that we simply do not have time to go over today.  I have tried to assist you in giving you key terms and their definitions  in relation to AI and how I will be using them today. 

* I am going to try my best to talk about things simply and provide examples that will connect the ideas to everyday understanding.
-->

---
layout: center
---

# Who am I?

## Richard Horne

- Computer Security Engineer and Architect
- Master's degree in Information Protection, plus 15+ professional certifications in advanced computing, information protection, coding, databases and AI
- Builder of AI systems and advanced enterprise security systems big and small
- Creator of AI tools for language translation, financial analysis, enterprise networks + interconnectivity security


<div class="pt-6 text-sm opacity-70">My perspective comes from both professional security work and hands-on AI system development.</div>

---
layout: center
---

# What do you already know about AI?

Let's begin with what you already know and have experienced.

1. What facts do you know about AI?
2. How do you think it works?
3. What have you seen it do that impressed you?
4. What questions do you have about how AI functions?
5. What concerns or fears do you have about AI?

<!--
This area is really important to discuss before we get into the nuts and bolts of todays discussion. 

1. I want to gather feed back about what you think AI is.
-->

---
layout: center
---

# Alright - lets begin

<!--
1. There are a couple foundational building blocks that we need to go over.   These will each build on each other and be iterative in our process to learning.  

2. For each building block feel free to scribble notes, raise your hand and ask lots of questions.  I will do my best to answer them.
-->

---
layout: center
---

# AI Models

## Different models are used for different tasks. 

<div class="grid grid-cols-2 gap-4 pt-8 text-left">
  <div class="rounded-lg bg-blue-50 p-4 text-slate-900">
    <strong>LLMs</strong><br><span class="text-sm font-medium">Large Language Models</span>
    <p class="mt-2 text-sm">Models trained to work with language, including tasks such as writing, summarizing, and answering questions. Some AI tools combine them with image, audio, or code capabilities.</p>
  </div>
  <div class="rounded-lg bg-emerald-50 p-4 text-slate-900">
    <strong>RAGs</strong><br><span class="text-sm font-medium">Retrieval-Augmented Generation</span>
    <p class="mt-2 text-sm">Systems that first find relevant information from selected documents or sources, then give it to a language model to help form an answer.</p>
  </div>
  <div class="rounded-lg bg-violet-50 p-4 text-slate-900">
    <strong>SLMs</strong><br><span class="text-sm font-medium">Small Language Models</span>
    <p class="mt-2 text-sm">Smaller, more efficient language models that can be useful for focused tasks or devices with limited computing power.</p>
  </div>
  <div class="rounded-lg bg-amber-50 p-4 text-slate-900">
    <strong>Agentic frameworks</strong><br><span class="text-sm font-medium">AI systems that plan and use tools</span>
    <p class="mt-2 text-sm">Systems that help a model work toward a goal by planning steps, keeping track of context, and using tools such as files or software.</p>
  </div>
</div>

<!--
1.  AI model types strongly influence the extent of the what is going to be accomplished. 

2.  Choosing a model is critical and is done as a part of the initial architecture requirements when building anything. 

3. Training and building models is time intensive and very expensive.  Many groups will leverage models that they did not build themselves, but were provided by those who could. 

4. Models must be trained and created.  Imagine a model as being a large snapshot in time of many different parameters.  These parameters include relationships between words, references to data, formulas, rules etc.

5. Garbage in, Garbage out.  If the training on your model is muddled with useless data, then you have all of that you will have to hold and manage.  This is why it a models build process is so important.  It's what you make of it that determines what you are able to work with later.
-->

---
layout: center
---

# Language models: a high-level view

Large language models (LLMs) are among today’s most widely used AI systems. They learn patterns in language and predict likely next pieces of text. They do not simply store a database of answers; they use patterns learned from many examples to generate a response that fits the context.

<div class="grid grid-cols-3 gap-4 pt-7 text-left text-sm text-slate-900">
  <div class="rounded-lg bg-blue-50 p-4">
    <strong>1. Prepare information</strong>
    <p class="mt-2">Training material is intentionally collected, selected, cleaned, filtered, and organized from existing information.</p>
  </div>
  <div class="rounded-lg bg-emerald-50 p-4">
    <strong>2. Train on patterns</strong>
    <p class="mt-2">The model repeatedly samples material and adjusts billions of internal values to become better at predicting what comes next.</p>
  </div>
  <div class="rounded-lg bg-violet-50 p-4">
    <strong>3. Refine and evaluate</strong>
    <p class="mt-2">Teams test, fine-tune, and add safety guidance before a model is released for people to use.</p>
  </div>
</div>

<div class="pt-6 text-sm opacity-70">Training is intentional work: it takes substantial computing power, time, expertise, and care. The data and decisions made during training shape a model’s strengths and limitations.</div>

<!--
* Large Language Models are the models that have become the defacto. 

* LLMs can range from 3.5 billion parameters to some that far exceed 100s of billions of parameters. 

Facts about LLMs:
1. They do not store a bunch of answers. 
2. LLMs are huge maps of relationships and meaning. 
* Think of the biggest spider web you can imagine.  Each intersection of that spider web has meaning. As one crawls through or makes use of the web different, intersections and points can be leveraged for decision making. 
3. Building any model is a methodical process.
-->

---
layout: center
---

# Our seed question

This simple question will follow us throughout the presentation. It gives us a firm foundation for exploring how AI understands requests, produces answers, and where its limits are.

## “How to change a light bulb?”
>##### Follow-up question: “What is a light bulb?”

<div class="pt-8 text-sm opacity-70">We will return to this question as we learn more about AI systems.</div>

<!--
Our model acts as the receptacle inside of which we are able to store relationships - but none of us can interact with billions of parameters on our own.  

So when we ask questions it must be broken down,  broken into a parts that the Model can understand and contextually react to. 

To do this lets use a seed question.
-->

---
layout: default
---

# Step One - Tokens

<div class="mt-5 grid grid-cols-2 items-start gap-14 text-left">
<div class="min-w-0 border-r-2 border-slate-300 pr-9">

## Text into pieces a model can process

Before a language model can work with text, it divides that text into units called **tokens**. A token might be a whole word, part of a word, punctuation, or a number. Different models can divide the same text into different tokens.

Think of a tokenizer as a lookup system: it assigns each token a numeric ID. The ID is only a label; it does not contain the token’s meaning. A model learns useful relationships through the numbers and patterns it processes after tokenization.

</div>

<div class="min-w-0 pl-2">

<TokensDemo />
</div>
</div>

<!--
1. We need a way for spoken language to have meaning to a computer.   Tokens are chucks of information that when processed create contextual understanding for the model. 
2.  There are different ways to create tokens. Regardless of how a token is created the meaning or definition is what is required for all of this to work.  Our Model needs to interpret and receive the tokens the same way everytime.  
3. A great example of this is the old library system of indexing which books and their physical location inside of a library.  "Dewy Decimal System."  Each word of our prompt or question - or "tokens" needs to be cataloged for reference by the model. 
4. The word or token itself does not have meaning.  The computer does not care that the word "Book" is associated to its respective token ID, nor vise versa.  The computer does not care, what that word is, it only cares about the relationship between the values of the tokens and their relationships to one another.
-->

---
layout: default
---

# Vectors

<div class="mt-5 grid grid-cols-2 items-start gap-14 text-left">
<div class="min-w-0 border-r-2 border-slate-300 pr-9">

<h2>An ordered container for numeric information</h2>

<p>A vector is an <strong>ordered</strong> list of numbers. Each position has a purpose: <code>(7, 29, 1, 0)</code> means something different from <code>(29, 7, 1, 0)</code>.</p>

<p>A vector can describe almost anything measurable—such as a location, a pixel’s color, or simple features of a sentence. In a language model, tokens begin as learned vectors and are repeatedly transformed using the words around them.</p>

<div class="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-slate-900"><strong>Key distinction:</strong> A vector is the general number-list format. An embedding as we will learn about next is a particular learned vector designed to capture meaning and relationships.</div>

</div>

<div class="min-w-0 pl-2">

<VectorsDemo />
</div>
</div>

<!--
1. Who remembers vectors from Algebra in math.  What meaning does a value pair give to a data point or a variable? 

2. Vectors with AI are similar but are modified by their surrounding partners. 

3. We are not creating data points on a a graph per-say, but we are mapping areas that are relevant to what is contextually happening.  Tokens are chained together and their vectoring impacts the outcome of the models understanding. 

4. What would happen if I took a steal ball and placed it near magnets?  It would be affected by those magnets and depending on the size and shape of the magnets, our steal ball could be impacted a lot or a little.  Thus the context of vectors could be considered a lot like the magnets having an effect on a steal object.  a vector of multiple tokens can be influenced by what came before or after them just like a magnet has an effect on steal that is not physically seen.  Our point here is that context is able to impact the vectoring process as tokens are mapped and applied inside of models.
-->

---
layout: default
---

# Embeddings: a map of relationships

<div class="mt-5 grid grid-cols-2 items-start gap-14 text-left">
<div class="min-w-0 border-r-2 border-slate-300 pr-9">

## How AI links related ideas

An embedding is a **special kind of learned vector** that helps an AI organize meaning. Imagine placing ideas on a map: questions about similar things tend to sit closer together. The underlying numbers make those relationships possible—the key idea is connection.

</div>

<div class="min-w-0 pl-2">

<EmbeddingsDemo />
</div>
</div>

<!--
Embeddings help to direct a models decision making and contextual understanding.   Imagine that these are specially learned vectors that aid in placing related ideas closer together.
-->

---
layout: center
class: text-center
---

# From learned dimensions to visible relationships

<img src="/trained-model-relationship-map.png" alt="Conceptual diagram of a trained language model, many learned dimensions, and a visible relationship map of related questions." style="max-height: 390px; width: auto; margin: 0 auto;" />

<div class="pt-2 text-xs opacity-70">Conceptual illustration: a real model uses far more dimensions than can be shown. We project those learned relationships into a simple map so people can see the idea.</div>

---
layout: center
---

# Bringing it together with a real-world example


---
layout: two-cols
---

# Hallucinations

## What does that mean when it comes to AI tools?

A hallucination is an AI response that sounds believable but is incorrect, unsupported, or invented. The model does not intend to deceive; it is generating likely language from patterns learned during training, rather than independently checking every claim.

<img src="/ai-extra-fingers-carrie-wexford.jpeg" alt="AI-generated woman with extra fingers, illustrating a generative-AI error." style="display: block; max-height: 220px; width: auto; margin: 1rem auto 0;" />

<div class="mt-2 text-center text-xs opacity-60">Image: Carrie Wexford, generated with Bing Image Creator; <a href="https://medium.com/stories-by-carrie-wexford/why-do-ai-people-have-extra-fingers-b50b1e0dcfcf" target="_blank" rel="noreferrer">“Why Do AI People Have Extra Fingers?”</a></div>

::right::

## Why can it happen?

- The training information may be incomplete, outdated, or contain errors.
- The question may be ambiguous or lack enough context.
- The model can produce plausible wording even when it does not have enough reliable information.
- Some questions do not have one clear, factual answer.
 

<div class="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-slate-900"><strong>Remember:</strong> Verify important claims, ask for sources, and use human judgment—especially for health, legal, financial, security, or other high-stakes decisions. A language model is designed to generate a response, even when a question is unclear or lacks enough information.</div>

---
layout: center
---

# How training and feedback refine relationship maps

<div class="grid grid-cols-5 gap-3 pt-7 text-left text-sm text-slate-900">
  <div class="rounded-lg bg-blue-50 p-3"><strong>1. Examples</strong><p class="mt-2">Selected training material provides language patterns and relationships.</p></div>
  <div class="rounded-lg bg-emerald-50 p-3"><strong>2. Prediction</strong><p class="mt-2">The model uses its current vectors and embeddings to predict the next token.</p></div>
  <div class="rounded-lg bg-amber-50 p-3"><strong>3. Compare</strong><p class="mt-2">Training checks how close the prediction was to the expected result.</p></div>
  <div class="rounded-lg bg-violet-50 p-3"><strong>4. Adjust</strong><p class="mt-2">The model adjusts many internal values, including the values that shape learned relationships.</p></div>
  <div class="rounded-lg bg-rose-50 p-3"><strong>5. Evaluate</strong><p class="mt-2">Tests and human feedback identify strengths, errors, bias, and safety concerns.</p></div>
</div>

<div class="pt-7 text-sm">This cycle repeats at enormous scale. Feedback can inform later fine-tuning or a new model version.</div>

<div class="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-slate-900"><strong>Important:</strong> A normal conversation does not usually retrain the model while you are using it. Feedback is collected, reviewed, and used separately to improve future versions.</div>

---
layout: center
class: text-center
---

# If AI is math, how can it answer detailed questions?

## A relatable story

Imagine asking how to replace a part in a 50-year-old radio. An AI tool may offer useful guidance because it has learned patterns from information such as manuals, articles, and discussions. It does not understand the radio as a technician does, and its answer can still be incomplete or wrong.

# Why is every response not a hallucination?

Training adjusts the model’s internal relationships using many examples. Testing and human feedback help teams find weaknesses and improve later versions. Today’s models reflect years of careful development, evaluation, and refinement—but important answers still need checking.

---
layout: center
class: text-center
---

# Same question, different models, Same Answer?

<ModelComparisonDemo />

<div class="pt-5 text-center text-xs opacity-60">Here we use the same seed questions and demonstrate how the same question can produce results that are vastly different.</div>

---
layout: two-cols
---

# Where AI can help

- Brainstorm ideas and questions
- Summarize or organize large amounts of material
- Draft a first version of writing or code
- Translate, caption, and improve accessibility
- Help explore complex problems when it is given relevant context—then check the result


::right::

# Where care is essential

- Facts may be incorrect or invented
- Outputs can reflect biased, incomplete, or promotional source material
- Private or sensitive information can be exposed if it is entered into an unsecured AI tool
- People remain accountable for important decisions

---
layout: center
---

# A simple practice: **C.R.I.T.I.C.**

**C**heck important claims  
**R**efine the prompt  
**I**dentify bias or missing perspectives  
**T**race sources  
**I**nclude your own judgment  
**C**ite AI use when appropriate

---
layout: end
---

# Questions & discussion
