for (let i = 1; i < 11; ++i) {
    let s = '(' + i + '):';
    for (let j = 0; j < i; ++j) {
        s = s + '*';
    }
    console.log(s);
}