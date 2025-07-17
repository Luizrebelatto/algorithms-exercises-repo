import { 
    EXPECTED_MINUTES_IN_OVEN, 
    PREPARATION_MINUTES_PER_LAYER, 
    preparationTimeInMinutes, 
    remainingMinutesInOven, 
    totalTimeInMinutes
} from './lucians-luscious-lasagna';

describe('Lucians Luscious Lasagna function', () => {
  it('should return PREPARATION_MINUTES_PER_LAYER = 2', () => {
    expect(PREPARATION_MINUTES_PER_LAYER).toBe(2);
  });

  it('should return EXPECTED_MINUTES_IN_OVEN = 2', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(4);
  });
}); 