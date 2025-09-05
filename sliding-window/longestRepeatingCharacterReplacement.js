// LeetCode 424 — Longest Repeating Character Replacement
function characterReplacement(s, k) {
  const cnt = new Array(26).fill(0);
  let left = 0, maxFreq = 0, best = 0;

  for (let right = 0; right < s.length; right++) {
    const r = s.charCodeAt(right) - 65; // 'A' -> 0
    cnt[r]++;
    maxFreq = Math.max(maxFreq, cnt[r]);

    // keep window valid: changes needed = windowSize - maxFreq
    while ((right - left + 1) - maxFreq > k) {
      const l = s.charCodeAt(left) - 65;
      cnt[l]--;
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}