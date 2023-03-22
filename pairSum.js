// hashmapped

// const pairSum = (numbers, targetSum) => {
//   const numObj = {};

//   for (let i = 0; i <= numbers.length; i++){
//     const num = numbers[i];
//     const comp = targetSum - num;

//     if (comp in numObj){
//       return [i, numObj[comp]];

//     } else {

//       numObj[num] = i;
//     }
//   }
// };

// brute force

const pairSum = (numbers, targetSum) => {
    for (let i = 0; i < numbers.length; i++){
      for (let j = 1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === targetSum){
          return [i, j]
        }
      }
    }
  };
