import { QUALITY } from "../item/constants/quality";
import { Item } from "../item/item.service";
import { ItemStrategy } from "./interfaces/item.strategy.interface";

export class BackstageStrategy implements ItemStrategy {
    updateItem(item: Item): void {
        if (item.sellIn <= 0) {
            // After concert, quality drops to 0
            item.quality = 0;
        } else if (item.sellIn <= 5) {
            // 5 days or less, increase by 3
            this.increaseQuality(item, 3);
        } else if (item.sellIn <= 10) {
            // 10 days or less, increase by 2
            this.increaseQuality(item, 2)
        } else {
            this.increaseQuality(item, 1)
        }

        item.sellIn--;
    }

    private increaseQuality(item: Item, amount: number): void {
        item.quality = Math.min(QUALITY.maximum, item.quality + amount);
    }
}