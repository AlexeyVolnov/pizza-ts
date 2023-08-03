import {ICartItem} from "../store/cartSlice.tsx";

export function calculatePrice(list: Array<ICartItem>): number {
  const price = list.reduce((acc, item) => acc + item.pizza.prise * item.count, 0)
  return price
}

export function calculatePizzaCount(list: Array<ICartItem>) {
  const countPizza = list.reduce((acc, pizza) => acc + pizza.count, 0);
  return countPizza
}