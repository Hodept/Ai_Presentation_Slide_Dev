import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from 'docx'
import { writeFile } from 'node:fs/promises'

const terms = [
  ['Agentic framework', 'A system that lets an AI model plan steps and use tools, such as searching files or calling software, to work toward a goal.'],
  ['Artificial intelligence (AI)', 'Technology that performs tasks associated with human intelligence, such as recognizing patterns, making predictions, or generating content.'],
  ['Attention', 'A method that helps a language model weigh which parts of the current text are most relevant.'],
  ['Context', 'The information a model is given or can consider while producing a response, such as the conversation so far, instructions, a document, or a question.'],
  ['Context window', 'The amount of information a model can consider at one time in a conversation or document.'],
  ['Dimensions', 'The individual positions or features in a vector. Together, many dimensions give an AI system a detailed way to represent information.'],
  ['Embedding', 'A vector that represents meaning and relationships. Ideas with related meanings are often placed closer together in this kind of representation.'],
  ['Fine-tuning', 'Additional focused training that adapts an existing model for a particular task, style, or domain.'],
  ['Generative AI', 'AI that creates new content, such as text, images, audio, video, or code.'],
  ['Guardrails', 'Rules, filters, or safety measures intended to limit harmful or inappropriate model behavior.'],
  ['Hallucination', 'A confident-sounding AI response that is incorrect, unsupported, or invented.'],
  ['Human oversight', 'A person checking AI output, applying judgment, and remaining accountable for decisions.'],
  ['Inference', 'Using a trained model to respond to a new prompt. This is what happens when you ask a model a question.'],
  ['Inputs', 'The information supplied to an AI system for it to process, such as a prompt, uploaded document, image, audio recording, or data from a tool.'],
  ['Language model', 'An AI system trained on examples of language to predict likely next pieces of text.'],
  ['Large language model (LLM)', 'A language model with a very large number of adjustable internal values, often able to work with broad and complex language tasks.'],
  ['Model', 'A trained mathematical system that uses learned parameters to process inputs and produce an output, such as a prediction, classification, or response.'],
  ['Multimodal AI', 'AI that can work with more than one type of information, such as text, images, audio, or video.'],
  ['Neural network', 'A layered mathematical system that learns patterns by adjusting many internal values during training.'],
  ['Parameters', 'The internal adjustable values a model changes during training. Modern models can have billions of parameters.'],
  ['Prompt', 'The instructions, question, or information a person gives an AI system.'],
  ['Relationships', 'The meaningful connections between ideas, words, or pieces of information. AI uses these connections to identify content that is similar or relevant.'],
  ['Retrieval-augmented generation (RAG)', 'A system that finds relevant information from a separate source and gives it to a language model to help answer a question.'],
  ['Small language model (SLM)', 'A more compact language model, often designed to run with less computing power or focus on specific tasks.'],
  ['System prompt', 'Instructions set by a tool or developer that guide how a model responds, often unseen by the user.'],
  ['Temperature', 'A setting that affects how predictable or varied a model’s generated responses are.'],
  ['Token', 'A small piece of text a language model processes. It may be a word, part of a word, number, or punctuation mark.'],
  ['Training', 'The time-intensive process of adjusting a model using many examples so it becomes better at a task, such as predicting text.'],
  ['Training data', 'The selected and prepared information used to help a model learn patterns.'],
  ['Vector', 'A list of numbers a computer uses to represent information so it can compare and work with it mathematically.'],
  ['Weighting', 'The way an AI system gives some signals, relationships, or examples more influence than others when calculating an output. During training, models adjust internal weights to improve their predictions.'],
]

const tableWidth = 14560
const termWidth = 2380
const definitionWidth = 4900
const lightGray = 'E7E7E7'
const borders = {
  top: { style: BorderStyle.SINGLE, size: 4, color: 'D9D9D9' },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D9D9D9' },
  left: { style: BorderStyle.SINGLE, size: 4, color: 'D9D9D9' },
  right: { style: BorderStyle.SINGLE, size: 4, color: 'D9D9D9' },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'D9D9D9' },
  insideVertical: { style: BorderStyle.SINGLE, size: 2, color: 'D9D9D9' },
}

const cell = (text, width, { bold = false, fill } = {}) => new TableCell({
  width: { size: width, type: WidthType.DXA },
  verticalAlign: VerticalAlign.CENTER,
  shading: fill ? { type: ShadingType.CLEAR, fill } : undefined,
  margins: { top: 52, bottom: 52, start: 70, end: 70 },
  children: [new Paragraph({
    spacing: { before: 0, after: 0, line: 215 },
    children: [new TextRun({ text, bold, font: 'Calibri', size: 18, color: '000000' })],
  })],
})

const headerRow = new TableRow({
  tableHeader: true,
  children: [
    cell('TERM', termWidth, { bold: true, fill: lightGray }),
    cell('PLAIN-LANGUAGE DEFINITION', definitionWidth, { bold: true, fill: lightGray }),
    cell('TERM', termWidth, { bold: true, fill: lightGray }),
    cell('PLAIN-LANGUAGE DEFINITION', definitionWidth, { bold: true, fill: lightGray }),
  ],
})

const midpoint = Math.ceil(terms.length / 2)
const leftTerms = terms.slice(0, midpoint)
const rightTerms = terms.slice(midpoint)
const rows = leftTerms.map(([leftTerm, leftDefinition], index) => {
  const [rightTerm = '', rightDefinition = ''] = rightTerms[index] ?? []
  return new TableRow({
    children: [
      cell(leftTerm, termWidth, { bold: true }),
      cell(leftDefinition, definitionWidth),
      cell(rightTerm, termWidth, { bold: true }),
      cell(rightDefinition, definitionWidth),
    ],
  })
})

const document = new Document({
  creator: 'Richard Horne',
  title: 'Learning About AI: Key Vocabulary',
  styles: {
    default: {
      document: {
        run: { font: 'Calibri', size: 22, color: '111827' },
        paragraph: { spacing: { after: 120, line: 300 } },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 15840, height: 12240 },
        margin: { top: 540, right: 540, bottom: 540, left: 540, header: 0, footer: 0 },
      },
    },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 30 },
        children: [new TextRun({ text: 'Learning About AI', font: 'Calibri', size: 26, bold: true, color: '000000' })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 90 },
        children: [new TextRun({ text: 'Key Vocabulary', font: 'Calibri', size: 18, color: '000000' })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 90 },
        children: [new TextRun({ text: 'Plain-language definitions used in this presentation.', font: 'Calibri', size: 16, color: '000000' })],
      }),
      new Table({
        width: { size: tableWidth, type: WidthType.DXA },
        columnWidths: [termWidth, definitionWidth, termWidth, definitionWidth],
        borders,
        rows: [headerRow, ...rows],
      }),
    ],
  }],
})

await writeFile('Learning_About_AI_Key_Vocabulary.docx', await Packer.toBuffer(document))
