export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  created: string;
}
export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
  characters: Character[];
  season: string;
}
export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  location: Location;
  episode: Episode[];
}

export interface PageInfo {
  pages: number;
  count: number;
  next: number;
  prev: number;
  items: number;
  current: number;
}

export interface Option {
  value: string;
  label: string;
  hint: string;
}

export interface FieldProps {
  variant: string;
  label: string;
  hint?: string;
  id: string;
  name: string;
  placeholder: string;
  options?: Option[];
  className?: string;
}

export interface Quote {
  id: string;
  quote: string;
  character: Character;
}
