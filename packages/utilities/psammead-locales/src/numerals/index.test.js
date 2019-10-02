import * as numerals from '.';

describe('Numeral systems', () => {
  const numeralSystems = Object.keys(numerals);
  numeralSystems.forEach(numeralSystem => {
    it(`should return ${numeralSystem} numerals`, () => {
      expect(numerals[numeralSystem]).toMatchSnapshot();
    });
  });
});

describe('makeNumeralTranslator', () => {
  it('should return a function', () => {
    const translate = numerals.makeNumeralTranslator();
    expect(typeof translate).toBe('function');
  });

  describe('valid numeral system', () => {
    const RomanNumerals = 'O_Ⅰ_Ⅱ_Ⅲ_Ⅳ_Ⅴ_Ⅵ_Ⅶ_Ⅷ_Ⅸ'.split('_');
    const examples = [
      ['0 1 2 3', 'O Ⅰ Ⅱ Ⅲ'],
      ['9', 'Ⅸ'],
      ['The Magnificent 7', 'The Magnificent Ⅶ'],
    ];
    const translate = numerals.makeNumeralTranslator(RomanNumerals);

    it.each(examples)('should translate %s', (input, expected) => {
      expect(translate(input)).toBe(expected);
    });
  });

  it('invalid numeral systems', () => {
    const invalidSystems = [
      '0_1_2'.split('_'), // too small
      '0_1_2_3_4_5_6_7_8_9_A'.split('_'), // too big
      'potato', // wrong type
      undefined, // missing arg
    ];

    invalidSystems.forEach(invalidSystem => {
      const translate = numerals.makeNumeralTranslator(invalidSystem);
      const input = 'Test 123';
      expect(translate(input)).toBe(input);
    });
  });
});
