import { Item } from "@/src/item/item.service";

export interface ItemStrategy {
    updateItem(item: Item): void;
}