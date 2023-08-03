export interface IPizza {
   id: number,
   imageUrl: string,
   name: string,
   types: Array<number>,
   sizes: Array<number>,
   prise: number,
   category: Array<string>,
   rating: number,
}