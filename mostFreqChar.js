const anagrams = (s1, s2) => {
    const count = {}

    if (s1.length != s2.length){
      return false
    }

    for (let i = 0; i < s1.length; i++){
      if (count.hasOwnProperty(s1[i]) == false){
        count[s1[i]] = 1
      } else {
        count[s1[i]]++;
      }
    }

    for (let j = 0; j < s2.length; j++){
      if (count.hasOwnProperty(s2[j]) == true){
        count[s2[j]]--;
      }
    }

    for (let char in count) {
      if (count[char] !== 0) {
        return false;
      }
    }

    return true;
  };
