import * as constants from '../constants';
import store from '../store';

type JSONWords = Array<{
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
}>;

export default async function getWords(): Promise<JSONWords> {
  const response = await fetch(`${constants.wordsUrl}?page=${store.page-1}&group=${store.chapter-1}`);
  const wordsArray = await response.json();
  return wordsArray;
}
