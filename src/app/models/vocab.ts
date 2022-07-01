export class Vocab {
  id: string | undefined;
  word: string;
  translation: string;
  partOfSpeech: number | null;

  //Vocabs Schema
  /*
  partOfSpeech: {
   0: "Noun",
   1: "Pronoun",
   2: "Verb",
   3: "Adjective",
   4: "Adverb",
   5: "Preposition",
   6: "Conjunction",
   7: "Interjection"
  } */
  constructor(id: string | undefined, word: string, translation: string, partOfSpeech: number | null) {
    this.id = id;
    this.word = word;
    this.translation = translation;
    this.partOfSpeech = partOfSpeech;
  }
}
