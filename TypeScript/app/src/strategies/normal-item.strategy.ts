import { QUALITY } from "../item/constants/quality";
import { Item } from "../item/item.service";
import { ItemStrategy } from "./interfaces/item.strategy.interface";

export class NormalItemStrategy implements ItemStrategy {
    updateItem(item: Item): void {
        // Normal decrease per day before expiration
        this.decreaseQuality(item, 1);
        item.sellIn--;

        if(item.sellIn < 0) {
            // When expiration date is over, we decrease be one, one more time
            this.decreaseQuality(item, 1);
        }
    }

    private decreaseQuality(item: Item, amount: number): void {
        item.quality = Math.max(QUALITY.minimum, item.quality - amount)
    }
}