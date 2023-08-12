import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPizza} from "../types/IPizza.ts";
import axios, {options} from "axios";


interface IInitialState {
  pizzaList: IPizza[],
  pizzaCategories: Array<string>,
  sortedOptions: Array<string>,
  selectCategories: string,
  selectSort: string,
  filteredPizzes: Array<IPizza>,
  search: string
}


const pizzaList = [
  {
    id: 0,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9f54fa5d2d204f5fa70579e2e1982d03_292x292.webp',
    name: 'Чоризо фреш',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 200,
    category: ['Все', 'Мясные', 'Острые'],
    rating: 4
  },
  {
    id: 1,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_292x292.webp',
    name: 'Сырная',
    types: [0, 2],
    sizes: [26, 30, 40],
    prise: 180,
    category: ['Все', 'Вегетарианская'],
    rating: 4
  },
  {
    id: 2,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_292x292.webp',
    name: 'Пепперони фреш',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 400,
    category: ['Все', 'Мясные'],
    rating: 4
  },
  {
    id: 3,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_292x292.webp',
    name: 'Двойной цыпленок',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Мясные', 'Гриль'],
    rating: 5
  },
  {
    id: 4,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e482d5c7b107456783a0e0100952d05f_292x292.webp',
    name: 'Пицца Жюльен',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Вегетарианская'],
    rating: 5
  },
  {
    id: 5,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9f54fa5d2d204f5fa70579e2e1982d03_292x292.webp',
    name: 'Карбонара',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Мясные'],
    rating: 6
  },
  {
    id: 6,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4cc24119285949f09e5a4da61fd711ed_292x292.webp',
    name: 'Мясной Микс с пастрами из говядины',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 150,
    category: ['Все', 'Мясные', 'Гриль'],
    rating: 20
  },
  {
    id: 7,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/18dbb12240b041a191c9dc73c9c1f4ef_292x292.webp',
    name: 'Мясная',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Мясные'],
    rating: 10
  },
  {
    id: 8,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3a948b9d5af14d219e2c54282229755a_292x292.webp',
    name: 'Бургер-пицца',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Острые', 'Гриль'],
    rating: 30
  },
  {
    id: 9,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c24bb8e55baa4ca68945459ac6afdf3e_292x292.webp',
    name: 'Гавайская',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Вегетарианская'],
    rating: 4
  },
  {
    id: 10,
    imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c8ac7d2eb95b4bd0b8bc2f366415896c_292x292.webp',
    name: 'Цыпленок карри',
    types: [0, 1],
    sizes: [26, 30, 40],
    prise: 289,
    category: ['Все', 'Мясные'],
    rating: 4
  },
]

const initialState: IInitialState = {
  pizzaList,
  pizzaCategories: [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ],
  sortedOptions: [
    'популярности', 'цене', 'алфавиту'
  ],
  selectCategories: 'Все',
  selectSort: 'популярности',
  filteredPizzes: pizzaList,
  search: ''
}

export const fetchPizzas = createAsyncThunk(
   'pizza/GetPizzas',
   async () => {
     const response = await axios.get<IPizza[]>('https://64c9f1e7b2980cec85c297c6.mockapi.io/pizzas');
     return response.data
   }
)


const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.filteredPizzes = state.pizzaList
         .filter(pizza => pizza.category.includes(state.selectCategories))
         .filter(pizza => pizza.name.toLowerCase().includes(state.search.toLowerCase()))
    },
    setSorted(state, action: PayloadAction<string>) {
      state.selectSort = action.payload
      switch (state.selectSort) {
        case 'популярности' : {
          state.filteredPizzes = state.filteredPizzes
             .sort((a: IPizza, b: IPizza) => b.rating - a.rating)
          return
        }
        case 'цене' : {
          state.filteredPizzes = state.filteredPizzes
             .sort((a: IPizza, b: IPizza) => a.prise - b.prise)
          return
        }
        case 'алфавиту': {
          state.filteredPizzes = state.filteredPizzes
             .sort((a: IPizza, b: IPizza) => a.name > b.name ? 1 : -1)
          return
        }
      }

    },
    setCategories(state, action: PayloadAction<string>) {
      state.selectCategories = action.payload;
      state.filteredPizzes = state.pizzaList.filter(pizza => pizza.category.includes(state.selectCategories))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      console.log(action.payload)
      state.pizzaList = action.payload
    })
  }

})

export const {setSorted, setCategories, setSearch} = pizzaSlice.actions

export default pizzaSlice.reducer