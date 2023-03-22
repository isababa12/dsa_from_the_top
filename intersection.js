const intersection = (a, b) => {
    const result = [];
    const setA = new Set(a);
    console.log(setA)
    for (let item of b) {
      if (setA.has(item)) {
        result.push(item);
        }
    }
    return result;
};

console.log(intersection([4,2,1,6], [3,6,9,2,10]))
