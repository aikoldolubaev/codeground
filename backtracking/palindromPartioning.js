// Return all ways to cut s so every piece is a palindrome
function partition(s) {
  const n = s.length;
  const res = [];
  // dp[i][j] = s[i..j] is palindrome
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  // build palindrome table (O(n^2))
  for (let r = 0; r < n; r++) {
    for (let l = 0; l <= r; l++) {
      if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
      }
    }
  }

  // backtrack to collect partitions
  const path = [];
  function dfs(start) {
    if (start === n) {
      res.push([...path]);
      return;
    }
    for (let end = start; end < n; end++) {
      if (dp[start][end]) {
        path.push(s.slice(start, end + 1));
        dfs(end + 1);
        path.pop();
      }
    }
  }

  dfs(0);
  return res;
}

// Example:
console.log(partition("aab")); 
// -> [["a","a","b"], ["aa","b"]]

console.log(partition("racecar"));
// [["r","a","c","e","c","a","r"],
//  ["r","a","cec","a","r"],
//  ["r","aceca","r"],
//  ["racecar"]]

console.log(partition("aba"));
// [["a","b","a"], ["aba"]]

console.log(partition("banana"));
// [["b","a","n","a","n","a"],
//  ["b","a","n","ana"],
//  ["b","a","nan","a"],
//  ["b","ana","n","a"],
//  ["b","anana"]]

console.log(partition("abba"));
// [["a","b","b","a"], ["a","bb","a"], ["abba"]]
