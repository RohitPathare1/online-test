import { QuestionType } from "../enum/enum";


export const questions = [

  {
    no: 1,
    name: "Which of the following freedom fighters was also a civil rights activist in South Africa?",
    type: QuestionType.singleChoise,
    options: [
      { key: "A", value: "Vinayak Damodar Savarkar" },
      { key: "B", value: "MK Gandhi" },
      { key: "C", value: "BG Tilak" },
      { key: "D", value: "Motilal Nehru" },
    ],
  },
  {
    no: 2,
    name: "Which of the following freedom fighters is also known as the Unofficial Ambassador of India?",
    type: QuestionType.singleChoise,
    options: [
      { key: "A", value: "Tantia Tope" },
      { key: "B", value: "Kunwar Singh" },
      { key: "C", value: "Dadabhai Naroji" },
      { key: "D", value: "WC Bonnerjee" },
    ],
  },

  {
    no: 3,
    name: "Who was the founder of Jugantar?",
    type: QuestionType.singleChoise,
    options: [
      { key: "A", value: "Bhupendranath Dutt" },
      { key: "B", value: "Abhinash Bhattacharya" },
      { key: "C", value: "Barindra Kumar Ghosh" },
      { key: "D", value: "All of the above" },
    ],
  },

  {
    no: 4,
    name: "Who was called the Father of the Indian Unrest by the British?",
    type: QuestionType.singleChoise,
    options: [
      { key: "A", value: "MK Gandhi" },
      { key: "B", value: "BG Tilak" },
      { key: "C", value: "Motilal Nehru" },
      { key: "D", value: "Bhagat Singh" },
    ],
  }, {
    no: 5,
    name: "Which of the following sports are considered team sports?",
    type: QuestionType.multipleChoise,
    options: [
      { key: "A", value: "Soccer" },
      { key: "B", value: "Tennis" },
      { key: "C", value: "Basketball" },
      { key: "D", value: "Golf" },
    ],
  }, {
    no: 6,
    name: "Which of the following are Olympic track and field events?",
    type: QuestionType.multipleChoise,
    options: [
      { key: "A", value: "Marathon" },
      { key: "B", value: "Shot Put" },
      { key: "C", value: "Long Jump" },
      { key: "D", value: "Figure Skating" },
    ],
  },
  {
    no: 7,
    name: "Which of the following are types of swimming strokes?",
    type: QuestionType.multipleChoise,
    options: [
      { key: "A", value: "Breaststroke" },
      { key: "B", value: "Butterfly" },
      { key: "C", value: "Freestyle" },
      { key: "D", value: "Backhand" },
    ],
  },
  {
    no: 8,
    name: "Name the political ideology that advocates for the common ownership of the means of production and the absence of social classes.",
    type: QuestionType.multipleChoise,
    options: [
      { key: "A", value: "Capitalism" },
      { key: "B", value: "Socialism" },
      { key: "C", value: "Communism" },
      { key: "D", value: "Fascism" },
      { key: "E", value: "Anarchism" },
    ],
  }, {
    no: 9,
    name: "Which of the following countries have a federal system of government with distinct states or provinces?",
    type: QuestionType.multipleChoise,
    options: [
      { key: "A", value: "Germany" },
      { key: "B", value: "Canada" },
      { key: "C", value: "Japan" },
      { key: "D", value: "France" },
    ],
  }, {
    no: 10,
    name: "Which of the following programming languages are considered high-level languages?",
    type: QuestionType.multipleChoise,
    options: [
      { key: "A", value: "Assembly Language" },
      { key: "B", value: "Python" },
      { key: "C", value: "Machine Code" },
      { key: "D", value: "Java" },
    ],
  }
];

export const answers = [
  { questionNo: 1, answer: ["B"] },
  { questionNo: 2, answer: ["C"] },
  { questionNo: 3, answer: ["C"] },
  { questionNo: 4, answer: ["B"] },
  { questionNo: 5, answer: ["A", "C"] },
  { questionNo: 6, answer: ["A", "C"] },
  { questionNo: 7, answer: ["A", "B", "C"] },
  { questionNo: 8, answer: ["B", "C"] },
  { questionNo: 9, answer: ["A", "B"] },
  { questionNo: 10, answer: ["B", "D"] },
];

