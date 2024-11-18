// src/types.ts

export interface SearchOptions {
    [key: string]: string;  // Index signature
    originalLanguage: string;
    translationLanguage: string;
    sorting: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    original_language: string;
    vote_average: number;
    backdrop_path?: string;
    overview?: string;
  }
  
  export interface APIResponse {
    results: Movie[];
    page: number;
    total_pages: number;
    total_results: number;
  }
  