import { Item } from "../item/item.service";
import { ItemStrategy } from "./interfaces/item.strategy.interface";

export class SulfurasStategy implements ItemStrategy {
    updateItem(item: Item): void {
        // Do nothing because Sulfuras is "a legendary item, never has to be sold or decreases in Quality"
    }
}