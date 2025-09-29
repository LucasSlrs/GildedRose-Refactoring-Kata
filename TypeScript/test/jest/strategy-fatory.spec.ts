import { ItemName } from "@/src/item/enums/item-name.enum";
import { strategyFactory } from "@/src/strategies/constants/strategy.factory";

describe('Strategy Factory', () => {
  it('should return correct strategy for each item type', () => {
    expect(strategyFactory(ItemName.AgedBrie).constructor.name).toBe('AgedBrieStrategy');
    expect(strategyFactory(ItemName.Backstage).constructor.name).toBe('BackstageStrategy');
    expect(strategyFactory(ItemName.SulfurasHandOfRagnaros).constructor.name).toBe('SulfurasStategy');
    expect(strategyFactory(ItemName.ConjuredManaCake).constructor.name).toBe('ConjuredStrategy');
  });

  it('should return NormalItemStrategy for unknown items', () => {
    expect(strategyFactory('Unknown Item' as ItemName).constructor.name).toBe('NormalItemStrategy');
  });
});