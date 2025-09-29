import { GildedRose } from '@/src/gilded-rose/gilder-rose.service';
import { Item } from '@/src/item/item.service';
import { expect } from 'chai';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });
});
