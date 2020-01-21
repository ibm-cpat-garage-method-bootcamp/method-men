const wordWrap = (text, columns) => {
    const rows = [];
    while (text.length > columns) {
        // if (text[columns] === ' ') {
        //     rows.push(text.substring(0, columns))
        // }
        // const index = Math.min(text.indexOf(' '), columns);
        
        rows.push(text.substring(0, columns));
        text = text.substring(columns).trim();
    }

    rows.push(text);

    return rows.join('\n');
}

describe('word-wrap', () => {
    test('canary', () => {
        expect(true).toEqual(true);
    });

    test('(a, 1) => a', () => {
        expect(wordWrap('a', 1)).toEqual('a');
    })

    test('(aa, 1) => a_a', () => {
        expect(wordWrap('aa', 1)).toEqual('a\na')
    })

    test('(aaa, 1) => a_a_a', () => {
        expect(wordWrap('aaa', 1)).toEqual('a\na\na');
    })

    // test('(aaa, 2) => a_a a', () => {
    //     expect(wordWrap('aaa', 2)).toEqual('aa\na');
    // })

    // test('(a b cd a, 4) => a b_cd a', () => {
    //     expect(wordWrap('a b cd a', 4)).toEqual('a b\ncd a');
    // });
});