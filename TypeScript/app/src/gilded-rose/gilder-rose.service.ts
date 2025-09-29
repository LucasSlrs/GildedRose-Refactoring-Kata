import { QUALITY } from "../item/constants/quality";
import { ItemName } from "../item/enums/item-name.enum";
import { Item } from "../item/item.service";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != ItemName.AgedBrie && this.items[i].name != ItemName.Backstage) {
        if (this.items[i].quality > QUALITY.minimum) {
          if (this.items[i].name != ItemName.SulfurasHandOfRagnaros) {
            this.decreaseItemQuality(this.items[i], 1);
          }
        }
      } else {
        if (this.items[i].quality < QUALITY.maximum) {
          this.increaseItemQuality(this.items[i], 1);
          if (this.items[i].name == ItemName.Backstage) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < QUALITY.maximum) {
                this.increaseItemQuality(this.items[i], 1);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < QUALITY.maximum) {
                this.increaseItemQuality(this.items[i], 1);
              }
            }
          }
        }
      }
      if (this.items[i].name != ItemName.SulfurasHandOfRagnaros) {
        this.decreaseSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != ItemName.AgedBrie) {
          if (this.items[i].name != ItemName.Backstage) {
            if (this.items[i].quality > QUALITY.minimum) {
              if (this.items[i].name != ItemName.SulfurasHandOfRagnaros) {
                this.decreaseItemQuality(this.items[i], 1);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < QUALITY.maximum) {
            this.increaseItemQuality(this.items[i], 1);
          }
        }
      }
    }

    return this.items;
  }

  increaseItemQuality(item: Item, amount: number): void {
    item.quality = Math.min(item.quality + amount, 50);
  }

  decreaseItemQuality(item: Item, amount: number): void {
    item.quality = Math.max(item.quality - amount, 0);
  }

  decreaseSellIn(item: Item, amount: number = 1): void {
    item.sellIn -= amount;
  }
}