export class Vocab {
  id: string | undefined;
  word: string;
  translation: string;
  partOfSpeech: string;

  constructor(id: string | undefined, word: string, translation: string, partOfSpeech: string) {
    this.id = id;
    this.word = word;
    this.translation = translation;
    this.partOfSpeech = partOfSpeech;
  }
}
