import { QUALITY } from "../item/constants/quality";
import { ItemName } from "../item/enums/item-name.enum";
import { Item } from "../item/item.service";
import { ItemStrategyFactory } from "../strategies";

export class GildedRose {
  items: Array<Item>;
  private strategyFactory: ItemStrategyFactory;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.strategyFactory = new ItemStrategyFactory()
  }

  updateQuality(): Item[] {
   for(const item of this.items) {
    const strategy = this.strategyFactory.getStrategy(item.name)
    strategy.updateItem(item)
   }
   return this.items;
  }
}