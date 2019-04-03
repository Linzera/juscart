import { observable, action, computed } from "mobx";
import { IProductItem } from "../../types/Products";

export interface IUserStore {
  cart: IProductItem[];
  addItem: (item: IProductItem) => void;
  removeItem: (id: string) => void;
  qtdItems: () => number;
}

class UserStore implements IUserStore {
  @observable cart: IProductItem[] = [];

  @action
  public qtdItems = () => this.cart.length;

  @action
  public addItem = (item: IProductItem) => this.cart.push(item);

  @action
  public removeItem = (id: string) => {
    const filtedArray = this.cart.filter(item => item.id !== id);
    this.cart = filtedArray;
  };
}

export default new UserStore();
