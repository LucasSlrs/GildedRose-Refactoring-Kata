import { ItemName } from "../item/enums/item-name.enum";
import { strategyFactory } from "./constants/strategy.factory";
import { ItemStrategy } from "./interfaces/item.strategy.interface";

export class ItemStrategyFactory {
    getStrategy(itemName: ItemName): ItemStrategy {
        return strategyFactory(itemName)
    }
}