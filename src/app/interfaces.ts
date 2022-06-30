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
  email: string;
  username: string;
  tokenExpiresDate: number
}

export const partOfSpeechItems: string[] = [
    "Noun", "Pronoun",
    "Verb", "Adjective",
    "Adverb", "Preposition",
    "Conjunction", "Interjection"
  ];

/* export interface RegisterRequest {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
} */

/*
export interface RegisterResponse {
  status: number;
  message: string;
} */
