import { ItemName } from "../app/src/item/enums/item-name.enum";
import { GildedRose } from "../app/src/gilded-rose/gilder-rose.service";
import { Item } from "../app/src/item/item.service";

console.log("Hello Qover's Team!")

const items = [
  new Item(ItemName.DexterityVest, 10, 20), //
  new Item(ItemName.AgedBrie, 2, 0), //
  new Item(ItemName.ElixirOfTheMongoose, 5, 7), //
  new Item(ItemName.SulfurasHandOfRagnaros, 0, 80), //
  new Item(ItemName.SulfurasHandOfRagnaros, -1, 80),
  new Item(ItemName.Backstage, 15, 20),
  new Item(ItemName.Backstage, 10, 49),
  new Item(ItemName.Backstage, 5, 49),
  new Item(ItemName.ConjuredManaCake, 3, 6)];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
