import { GildedRose } from "@/src/gilded-rose/gilder-rose.service";
import { ItemName } from "@/src/item/enums/item-name.enum";
import { Item } from "@/src/item/item.service";

describe('Gilded Rose', () => {
  it('should never go above 50 quality', () => {
    const gildedRose = new GildedRose([new Item(ItemName.AgedBrie, 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

   it('should decrease quality twice as fast after sell date', () => {
      const gildedRose = new GildedRose([new Item(ItemName.ElixirOfTheMongoose, 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(8);
    });

     it('should never have negative quality', () => {
      const gildedRose = new GildedRose([new Item(ItemName.DexterityVest, 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
});


describe('Aged Brie', () => {
    it('should increase quality as it ages', () => {
      const gildedRose = new GildedRose([new Item(ItemName.AgedBrie, 5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(11);
    });
});

describe('Sulfuras', () => {
    it('should never change quality or sellIn', () => {
      const gildedRose = new GildedRose([new Item(ItemName.SulfurasHandOfRagnaros, 5, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(80);
    });
});

describe('Backstage Passes', () => {
    it('should increase quality by 1 when more than 10 days left', () => {
      const gildedRose = new GildedRose([new Item(ItemName.Backstage, 15, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });
});

describe('Conjured Items', () => {
    it('should decrease quality twice as fast as normal items', () => {
      const gildedRose = new GildedRose([new Item(ItemName.ConjuredManaCake, 5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(8); // -2 au lieu de -1
    });
});