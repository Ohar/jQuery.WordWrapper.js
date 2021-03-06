import chai from 'chai'
import ifVowelWithNextKratkaya from '@/wordbreaker-russian/rules/119.2-if-vowel-with-next-kratkaya'

describe(
    'ifVowelWithNextKratkaya',
    () => {
        it(
            'Это функция',
            () => chai.assert.isFunction(ifVowelWithNextKratkaya)
        )

        describe(
            'Правильно работает',
            () => {
                const testCaseArr = [
                    {
                        input: 'война',
                        expectedOutput: [
                            false,  // в
                            true,   // о
                            false,  // й
                            false,  // н
                            false,  // а
                        ],
                    },
                    {
                        input: 'стойкий',
                        expectedOutput: [
                            false,  // с
                            false,  // т
                            true,   // о
                            false,  // й
                            false,  // к
                            true,   // и
                            false,  // й
                        ],
                    },
                    {
                        input: 'фейерверк',
                        expectedOutput: [
                            false,  // ф
                            true,   // е
                            false,  // й
                            false,  // е
                            false,  // р
                            false,  // в
                            false,  // е
                            false,  // р
                            false,  // к
                        ],
                    },
                    {
                        input: 'майор',
                        expectedOutput: [
                            false,  // м
                            true,   // а
                            false,  // й
                            false,  // о
                            false,  // р
                        ],
                    },
                ]

                testCaseArr.forEach(
                    ({input, expectedOutput}) => {
                        it(
                            input,
                            () => {
                                expectedOutput.forEach(
                                    (result, i) => {
                                        chai.assert.equal(
                                            ifVowelWithNextKratkaya(
                                                i,
                                                input
                                            ),
                                            result
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)
