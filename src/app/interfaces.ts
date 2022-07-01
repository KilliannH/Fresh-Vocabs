/*
Interface for the Refresh Token (can look different, based on your backend api)
*/
export interface RefreshToken {
  id: number;
  userId: string;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}

/*
Interface for the Login Response (can look different, based on your backend api)
*/
export interface LoginResponse {
  token: string
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserInfos {
  username: string;
  tokenExpiresDate: number
}

export const partOfSpeechItems: string[] = [
    "Noun", "Pronoun",
    "Verb", "Adjective",
    "Adverb", "Preposition",
    "Conjunction", "Interjection"
  ];

// function to convert a vocab with it's partOfSpeech as a string
export function convertVocab(vocab: any) {
  vocab.partOfSpeech = partOfSpeechItems[vocab.partOfSpeech];
  return vocab;
}

/* export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  role: string
} */

/*
export interface RegisterResponse {
  status: number;
  message: string;
} */
