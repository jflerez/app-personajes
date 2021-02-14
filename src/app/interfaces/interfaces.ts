export interface DataHeroeResponse{
  heroes: Personaje[];
}

export interface DataVillanoResponse{
  villanos: Personaje[];
}

export interface Personaje{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  tipo: string;
  casa: string;
}