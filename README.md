# Codeground
Improve problem solving skills

- [Codeground](#codeground)
  - [Paterns](#paterns)
    - [Two Pointers](#two-pointers)
    - [Sliding Window](#sliding-window)
    - [Hash Map](#hash-map)
    - [Binary Search](#binary-search)
    - [DFS](#dfs)
    - [BFS](#bfs)
    - [Backtracking](#backtracking)
    - [Heap](#heap)
    - [Stack](#stack)
    - [Dynamic Programming](#dynamic-programming)
    - [Greedy](#greedy)

## Paterns

### Two Pointers

**Use when:** sorted array, pairs, in-place, or cycle detection

**Types:**
1. **Left/Right** — start from both ends, move inward (3 Sum, Container)
2. **Fast/Slow** — detect cycles, find middle (Linked List Cycle)

**Examples:**
1. [3 Sum](two-pointers/3sum.js)
2. Two Sum II
3. [Container with the most water](two-pointers/containerWithMostWater.js)
4. [Is subsequence](two-pointers/isSubsequence.js)
5. [Palindrome check](string/palindrome.js)
6. [Reverse array in place](array/reverseListInPlace.js)
7. Linked List Cycle

---

### Sliding Window

**Use when:** subarray or substring, contiguous elements

**Types:**
1. **Fixed size** — window size given ("subarray of size k")
2. **Variable size** — find optimal size ("smallest with sum >= target")

**Examples:**
1. [Longest substring without repeating](sliding-window/longestNonRepatedSubstring.js)
2. [Max sum of subarray](sliding-window/maxContiguousSum.js)
3. [Longest repeating character replacement](sliding-window/longestRepeatingCharacterReplacement.js)
4. [String match](sliding-window/strMatch.js)
5. [Rotate](sliding-window/rotate.js)
6. Minimum Window Substring
7. Max Sum Subarray of Size K

---

### Hash Map

**Use when:** need O(1) lookup, count frequency, check duplicates


**Examples:**
1. [Two Sum](beginner-level/sumOfTwo.js)
2. [Anagram](frequency-counter/anagram.js)
3. [Bracket Match](frequency-counter/bracketMatch.js)

---

### Binary Search

**Use when:** sorted data, need O(log n), find boundary


**Examples:**
1. [Find element in sorted array](binary-search/findElementInSortedArray.js)
2. [Find boundary / minimum](binary-search/findBoundary.js)
3. Binary Search
4. First Bad Version
5. Search in Rotated Array
6. Koko Eating Bananas

---

### DFS

**Use when:** tree/graph traversal, explore all paths, connected components

**Examples:**
1. [Graph traversal](dfs/Graph%20-%20dfs.js)
2. [Clone Graph](dfs/CloneGraph/index.js)
3. [Number of Islands](dfs/number-of-islands/numberOfIslandsRecursive.js)
4. [Word Search](dfs/word-search/wordSearch.js)
5. Path Sum

---

### BFS

**Use when:** shortest path (unweighted), level-by-level, "minimum steps"

**Examples:**
1. [Graph BFS traversal](bfs/breadth-first.js)
2. [Rotting Oranges](bfs/rotting-oranges/index.js)
3. [Level Order Traversal](DataStructures/BinaryTree/BinaryTree.js)
4. Binary Tree Level Order
5. Word Ladder
6. Shortest Path in Matrix

---

### Backtracking

**Use when:** all combinations/permutations/subsets, "all possible ways"

**Types:**
1. **Permutation** — all possible orderings
2. **Choices** — include/exclude, make decisions (Subsets, N-Queens, Sudoku)

**Examples:**
1. [Permutations](backtracking/permutations/permutations.js)
2. [Subsets](backtracking/subsets/subsets.js)
3. [N-Queens Problem](backtracking/nQueens.js)
4. [Sudoku Solver](backtracking/sudokuSolver.js)
5. [Palindrome Partitioning](backtracking/palindrome-partioning/palindromePartitioning.js)
6. [Reconstruct Itinerary](backtracking/reconstructItinerary.js)
7. Combination Sum

---

### Heap

**Use when:** top K elements, need min/max repeatedly, merge K sorted things

**Examples:**
1. [Max Heap](DataStructures/Heap/MaxHeap.js)
2. [Min Heap](DataStructures/Heap/MinHeap.js)
3. [Find Most Frequent Character](string/findMostFrequentChar.js)
4. Kth Largest Element
5. Top K Frequent
6. Merge K Sorted Lists
7. Find Median from Stream

---

### Stack

**Use when:** matching pairs (brackets), next greater/smaller, undo operations

**Examples:** 
1. [Valid Parentheses](stack/validParenthesis.js)
2. Daily Temperatures
3. Min Stack

---

### Dynamic Programming

**Use when:** overlapping subproblems, "count ways", "min/max cost"

**Examples:**
1. [Fibonacci](dynamic-programming/fibonacci.js)
2. [Minimum Coin Change](dynamic-programming/minCoinChange.js)
3. [Longest Palindromic Subsequence](string/subsequentPalindrome.js)
4. Climbing Stairs
5. House Robbe
6. Longest Increasing Subsequence

---

### Greedy

**Use when:** local best choice = global best, intervals/scheduling

**Your Examples:**
1. [Buy and Sell Stock](greedy/buyAndSellStock.js)
2. [Integer to Roman](greedy/integerToRoman.js)
3. [Meeting Rooms](greedy/meetingRooms.js)
4. Jump Game
5. Merge Intervals

