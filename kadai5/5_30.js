for (let i = 10; i >= 1; i--) {
    let s = '(' + i + '):';
    const marks = '*'.repeat(i);
    s = s + marks
    console.log(s);
}