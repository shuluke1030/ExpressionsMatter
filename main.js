function expressionMatter(a, b, c) {
    const expressions = [
        a + b + c,
        a + b * c,
        a * b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c)
      ];
      return Math.max(...expressions);
}
console.log(expressionMatter(1, 2, 3));