// Palindrome Partitioning — backtracking + two-pointer palindrome check
function partition(s) {
  const res = [];
  const part = [];
  const n = s.length;

  function isPali(str, l, r) {
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++; r--;
    }
    return true;
  }

  function dfs(i) {
    if (i === n) {               // used all chars → one valid cut
      res.push(part.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      if (isPali(s, i, j)) {     // s[i..j] is palindrome?
        part.push(s.slice(i, j + 1)); // choose
        dfs(j + 1);              // explore
        part.pop();              // undo
      }
    }
  }

  dfs(0);
  return res;
}

// Quick tests
console.log(partition("aab"));   // [["a","a","b"], ["aa","b"]]
console.log(partition("abba"));  // [["a","b","b","a"], ["a","bb","a"], ["abba"]]