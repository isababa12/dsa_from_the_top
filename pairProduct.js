// const pairProduct = (numbers, targetProduct) => {
//   const numObj = {};

//   for (let i = 0; i < numbers.length; i++){
//     const num = numbers[i]
//     const comp = targetProduct / num;

//     if (comp in numObj){
//       return [i, numObj[comp]]

//     } else {

//       numObj[num] = i;
//     }
//   }
// };

const pairProduct = (numbers, targetProduct) => {
    for (let i = 0; i < numbers.length; i++){
      for (let j = 1; j < numbers.length; j++){
        if (numbers[i] * numbers[j] === targetProduct){
          return [i, j]
            }
        }
    }
};
