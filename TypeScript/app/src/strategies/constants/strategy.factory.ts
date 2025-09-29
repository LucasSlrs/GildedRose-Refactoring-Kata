import { ItemName } from "@/src/item/enums/item-name.enum";
import { AgedBrieStrategy } from "../aged-brie.strategy";
import { NormalItemStrategy } from "../normal-item.strategy";
import { ItemStrategy } from "../interfaces/item.strategy.interface";
import { BackstageStrategy } from "../backstage.strategy";
import { SulfurasStategy } from "../sulfuras.strategy";
import { ConjuredStrategy } from "../conjured.strategy";

const STRATEGY = {
    [ItemName.AgedBrie]: () => new AgedBrieStrategy(),
    [ItemName.Backstage]: () => new BackstageStrategy(),
    [ItemName.SulfurasHandOfRagnaros]: () => new SulfurasStategy(),
    [ItemName.ConjuredManaCake]: () => new ConjuredStrategy()
}

export const strategyFactory = (itemName: ItemName): ItemStrategy => {
    const strategy = STRATEGY[itemName];
    if (!strategy) {
        return new NormalItemStrategy()
    }
    return strategy()
}