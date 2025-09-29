import { QUALITY } from "../item/constants/quality";
import { Item } from "../item/item.service";
import { ItemStrategy } from "./interfaces/item.strategy.interface";

export class AgedBrieStrategy implements ItemStrategy {
    updateItem(item: Item): void {
        // Aged brie gets better with time
        this.increaseQuality(item, 1)

        item.sellIn--;

        // After exiration, Aged brie gets even better
        if(item.sellIn < 0) {
            this.increaseQuality(item, 1);
        }
    }

    private increaseQuality(item: Item, amount: number): void {
        item.quality = Math.min(QUALITY.maximum, item.quality + amount);
    }
}