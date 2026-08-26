import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  PageNumber,
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
  ['Context window', 'The amount of information a model can consider at one time in a conversation or document.'],
  ['Dimensions', 'The individual positions or features in a vector. Together, many dimensions give an AI system a detailed way to represent information.'],
  ['Embedding', 'A vector that represents meaning and relationships. Ideas with related meanings are often placed closer together in this kind of representation.'],
  ['Fine-tuning', 'Additional focused training that adapts an existing model for a particular task, style, or domain.'],
  ['Generative AI', 'AI that creates new content, such as text, images, audio, video, or code.'],
  ['Guardrails', 'Rules, filters, or safety measures intended to limit harmful or inappropriate model behavior.'],
  ['Hallucination', 'A confident-sounding AI response that is incorrect, unsupported, or invented.'],
  ['Human oversight', 'A person checking AI output, applying judgment, and remaining accountable for decisions.'],
  ['Inference', 'Using a trained model to respond to a new prompt. This is what happens when you ask a model a question.'],
  ['Language model', 'An AI system trained on examples of language to predict likely next pieces of text.'],
  ['Large language model (LLM)', 'A language model with a very large number of adjustable internal values, often able to work with broad and complex language tasks.'],
  ['Multimodal AI', 'AI that can work with more than one type of information, such as text, images, audio, or video.'],
  ['Neural network', 'A layered mathematical system that learns patterns by adjusting many internal values during training.'],
  ['Parameter', 'One of the internal adjustable values a model changes during training. Modern models can have billions of parameters.'],
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
]

const tableWidth = 9360
const termWidth = 2520
const definitionWidth = tableWidth - termWidth
const lightBlue = 'E8EEF5'
const mutedBlue = '1F4D78'
const borders = {
  top: { style: BorderStyle.SINGLE, size: 4, color: 'B8C7D9' },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: 'B8C7D9' },
  left: { style: BorderStyle.SINGLE, size: 4, color: 'B8C7D9' },
  right: { style: BorderStyle.SINGLE, size: 4, color: 'B8C7D9' },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'D9E2EC' },
  insideVertical: { style: BorderStyle.SINGLE, size: 2, color: 'D9E2EC' },
}

const cell = (text, width, { bold = false, fill } = {}) => new TableCell({
  width: { size: width, type: WidthType.DXA },
  verticalAlign: VerticalAlign.CENTER,
  shading: fill ? { type: ShadingType.CLEAR, fill } : undefined,
  margins: { top: 80, bottom: 80, start: 120, end: 120 },
  children: [new Paragraph({
    spacing: { before: 0, after: 0, line: 275 },
    children: [new TextRun({ text, bold, font: 'Calibri', size: 20, color: '111827' })],
  })],
})

const headerRow = new TableRow({
  tableHeader: true,
  children: [
    cell('TERM', termWidth, { bold: true, fill: lightBlue }),
    cell('PLAIN-LANGUAGE DEFINITION', definitionWidth, { bold: true, fill: lightBlue }),
  ],
})

const rows = terms.map(([term, definition]) => new TableRow({
  children: [cell(term, termWidth, { bold: true }), cell(definition, definitionWidth)],
}))

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
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 709, footer: 709 },
      },
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 0 },
        children: [new TextRun({ text: 'LEARNING ABOUT AI  |  KEY VOCABULARY', font: 'Calibri', size: 16, color: mutedBlue, bold: true })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 0 },
        children: [
          new TextRun({ text: 'Vocabulary handout  •  Page ', font: 'Calibri', size: 16, color: '5B6472' }),
          new TextRun({ children: [PageNumber.CURRENT], font: 'Calibri', size: 16, color: '5B6472' }),
        ],
      })] }),
    },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 60 },
        children: [new TextRun({ text: 'Learning About AI', font: 'Calibri', size: 34, bold: true, color: mutedBlue })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: 'Key Vocabulary', font: 'Calibri', size: 24, color: '3D4A5C' })],
      }),
      new Paragraph({
        spacing: { before: 0, after: 180 },
        children: [new TextRun({ text: 'Plain-language definitions used in this presentation. Keep this handout nearby as you explore the examples and discussion questions.', font: 'Calibri', size: 20, color: '374151' })],
      }),
      new Table({
        width: { size: tableWidth, type: WidthType.DXA },
        columnWidths: [termWidth, definitionWidth],
        borders,
        rows: [headerRow, ...rows],
      }),
    ],
  }],
})

await writeFile('Learning_About_AI_Key_Vocabulary.docx', await Packer.toBuffer(document))
