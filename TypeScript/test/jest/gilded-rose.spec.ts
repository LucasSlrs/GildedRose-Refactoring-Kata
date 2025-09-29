import { GildedRose } from "@/src/gilded-rose/gilder-rose.service";
import { ItemName } from "@/src/item/enums/item-name.enum";
import { Item } from "@/src/item/item.service";

describe('Gilded Rose', () => {
  it('should never go above 50 quality', () => {
    const gildedRose = new GildedRose([new Item(ItemName.AgedBrie, 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
    // it('should never have negative quality', () => {
  //   const gildedRose = new GildedRose([new Item(ItemName.AgedBrie, 5, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });
});


