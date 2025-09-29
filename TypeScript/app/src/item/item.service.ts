import { ItemName } from "./enums/item-name.enum";

export class Item {
    name: ItemName;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}