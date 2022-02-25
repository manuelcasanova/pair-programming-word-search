const transpose = function(matrix) {
  let results = [];
  for (let i = 0; i < matrix[0].length; i++) {
    results.push([]);
    for (let j = 0; j < matrix.length; j++) {
      results[i].push(matrix[j][i]);
    }
  }
  return results;
};

const horizontal = function(arr, word) {

  const horizontalJoin = arr.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return "array not valid";
  }

  if (typeof word !== "string") {
    return "word is not a string";
  }

  if (horizontal(letters, word) || horizontal(transpose(letters), word)) {
    return true;
  } else {
    return false;
  }

};


module.exports = wordSearch;
