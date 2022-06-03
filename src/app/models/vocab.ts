export class Vocab {
  id: string;
  value: string;
  translation: string;
  partOfSpeech: string;

  constructor(id: string, value: string, translation: string, partOfSpeech: string) {
    this.id = id;
    this.value = value;
    this.translation = translation;
    this.partOfSpeech = partOfSpeech;
  }
}
