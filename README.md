# codeground

Improve problem solving skills

## Patterns
1. [Two Pointers](#two-pointers)
2. [Sliding Window](#sliding-window)
3. [Hash Map](#hash-map)
4. [Binary Search](#binary-search)
5. [DFS](#dfs)
6. [BFS](#bfs)
7. [Backtracking](#backtracking)
8. [Heap](#heap)
9. [Stack](#stack)
10. [Dynamic Programming](#dynamic-programming)
11. [Greedy](#greedy)

---

### Two Pointers

**Use when:** sorted array, pairs, in-place, or cycle detection

**Types:**
1. **Left/Right** — start from both ends, move inward (3 Sum, Container)
2. **Fast/Slow** — detect cycles, find middle (Linked List Cycle)

**Examples:** Two Sum II, 3 Sum, Container With Most Water, Valid Palindrome, Linked List Cycle

**Your Practice:**
1. [3 Sum](two-pointers/3sum.js)
2. [Container with the most water](two-pointers/containerWithMostWater.js)
3. [Is subsequence](two-pointers/isSubsequence.js)
4. [Palindrome check](string/palindrome.js)
5. [Reverse array in place](array/reverseListInPlace.js)

---

### Sliding Window

**Use when:** subarray or substring, contiguous elements

**Types:**
1. **Fixed size** — window size given ("subarray of size k")
2. **Variable size** — find optimal size ("smallest with sum >= target")

**Examples:** Longest Substring Without Repeating, Minimum Window Substring, Max Sum Subarray of Size K

**Your Practice:**
1. [Longest substring without repeating](sliding-window/longestNonRepatedSubstring.js)
2. [Max sum of subarray](sliding-window/maxContiguousSum.js)
3. [Longest repeating character replacement](sliding-window/longestRepeatingCharacterReplacement.js)
4. [String match](sliding-window/strMatch.js)
5. [Rotate](sliding-window/rotate.js)

---

### Hash Map

**Use when:** need O(1) lookup, count frequency, check duplicates

**Examples:** Two Sum, Valid Anagram, Group Anagrams, Longest Consecutive Sequence

**Your Practice:**
1. [Two Sum](beginner-level/sumOfTwo.js)
2. [Anagram](frequency-counter/anagram.js)
3. [Bracket Match](frequency-counter/bracketMatch.js)

---

### Binary Search

**Use when:** sorted data, need O(log n), find boundary

**Examples:** Binary Search, First Bad Version, Search in Rotated Array, Koko Eating Bananas

**Your Practice:**
1. [Find element in sorted array](binary-search/findElementInSortedArray.js)
2. [Find boundary / minimum](binary-search/findBoundary.js)

---

### DFS

**Use when:** tree/graph traversal, explore all paths, connected components

**Examples:** Number of Islands, Clone Graph, Path Sum, Word Search

**Your Practice:**
1. [Graph traversal](dfs/Graph%20-%20dfs.js)
2. [Clone Graph](dfs/CloneGraph/index.js)
3. [Number of Islands](dfs/number-of-islands/numberOfIslandsRecursive.js)
4. [Word Search](dfs/word-search/wordSearch.js)

---

### BFS

**Use when:** shortest path (unweighted), level-by-level, "minimum steps"

**Examples:** Binary Tree Level Order, Rotting Oranges, Word Ladder, Shortest Path in Matrix

**Your Practice:**
1. [Graph BFS traversal](bfs/breadth-first.js)
2. [Rotting Oranges](bfs/rotting-oranges/index.js)
3. [Level Order Traversal](DataStructures/BinaryTree/BinaryTree.js)

---

### Backtracking

**Use when:** all combinations/permutations/subsets, "all possible ways"

**Types:**
1. **Permutation** — all possible orderings
2. **Choices** — include/exclude, make decisions (Subsets, N-Queens, Sudoku)

**Examples:** Subsets, Permutations, Combination Sum, N-Queens

**Your Practice:**
1. [Permutations](backtracking/permutations/permutations.js)
2. [Subsets](backtracking/subsets/subsets.js)
3. [N-Queens Problem](backtracking/nQueens.js)
4. [Sudoku Solver](backtracking/sudokuSolver.js)
5. [Palindrome Partitioning](backtracking/palindrome-partioning/palindromePartitioning.js)
6. [Reconstruct Itinerary](backtracking/reconstructItinerary.js)

---

### Heap

**Use when:** top K elements, need min/max repeatedly, merge K sorted things

**Examples:** Kth Largest Element, Top K Frequent, Merge K Sorted Lists, Find Median from Stream

**Your Practice:**
1. [Max Heap](DataStructures/Heap/MaxHeap.js)
2. [Min Heap](DataStructures/Heap/MinHeap.js)
3. [Find Most Frequent Character](string/findMostFrequentChar.js)

---

### Stack

**Use when:** matching pairs (brackets), next greater/smaller, undo operations

**Examples:** Valid Parentheses, Daily Temperatures, Min Stack

---

### Dynamic Programming

**Use when:** overlapping subproblems, "count ways", "min/max cost"

**Examples:** Climbing Stairs, House Robber, Coin Change, Longest Increasing Subsequence

**Your Practice:**
1. [Fibonacci](dynamic-programming/fibonacci.js)
2. [Minimum Coin Change](dynamic-programming/minCoinChange.js)
3. [Longest Palindromic Subsequence](string/subsequentPalindrome.js)

---

### Greedy

**Use when:** local best choice = global best, intervals/scheduling

**Examples:** Best Time to Buy/Sell Stock, Jump Game, Merge Intervals, Meeting Rooms

**Your Practice:**
1. [Buy and Sell Stock](greedy/buyAndSellStock.js)
2. [Integer to Roman](greedy/integerToRoman.js)
3. [Meeting Rooms](greedy/meetingRooms.js)

