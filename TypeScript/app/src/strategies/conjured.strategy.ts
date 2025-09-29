import { QUALITY } from "../item/constants/quality";
import { Item } from "../item/item.service";
import { ItemStrategy } from "./interfaces/item.strategy.interface";

export class ConjuredStrategy implements ItemStrategy {
    updateItem(item: Item): void {
        // Quality decrease twice as fast than a normal object
        this.decreaseQuality(item, 2);
        item.sellIn--;
        if (item.quality <= 0) {
            this.decreaseQuality(item, 2)
        }
        
    }
    private decreaseQuality(item: Item, amount: number): void {
        item.quality = Math.max(QUALITY.minimum, item.quality - amount)
    }
}