# codeground
- [codeground](#codeground)
  - [Patterns](#patterns)
    - [Two Pointers](#two-pointers)
    - [Sliding Window](#sliding-window)
    - [Dictionary](#dictionary)
    - [Binary Search](#binary-search)
    - [Depth-First Search](#depth-first-search)
    - [Breadth-First Search](#breadth-first-search)
    - [Backtracking](#backtracking)
    - [Heap (Priority Queue)](#heap-priority-queue)
    - [Dynamic Programming (DP)](#dynamic-programming-dp)
    - [Greedy](#greedy)


Improve problem solving skills

## Patterns

### Two Pointers
Use when: array is sorted or you compare from both sides
Idea:
- Start one pointer at start, one at end
- Move based on condition

Example:
1. [3 Sum](two-pointers/3sum.js)
2. [Container with the most water](two-pointers/containerWithMostWater.js)
3. [Is subsequence](two-pointers/isSubsequence.js)
4. [Palindrome check](string/palindrome.js)
5. [Reverse array in place](array/reverseListInPlace.js)

### Sliding Window
Use when: subarray / substring problems
Idea:
- Expand window → add elements
- Shrink window → remove elements

Example:
1. [Longest substring without repeating](sliding-window/longestNonRepatedSubstring.js)
2. [Max sum of subarray](sliding-window/maxContiguousSum.js)
3. [Longest repeating character replacement](sliding-window/longestRepeatingCharacterReplacement.js)
4. [String match](sliding-window/strMatch.js)
5. [Rotate](sliding-window/rotate.js)

### Dictionary
Use when: need fast lookup
Idea:
- Store value → index or count

Example:
1. [Two Sum](beginner-level/sumOfTwo.js)
2. [Anagram](frequency-counter/anagram.js)
3. [Bracket Match](frequency-counter/bracketMatch.js)

### Binary Search
Use when: sorted data OR search space
Idea:
- Cut problem in half each time

Example:
1. [Find element in sorted array](binary-search/findElementInSortedArray.js)
2. [Find boundary / minimum](binary-search/findBoundary.js)

### Depth-First Search
Use when: tree or graph
Idea:
- Go deep first, then backtrack

Example:
1. [Graph traversal](dfs/Graph%20-%20dfs.js)
2. [Clone Graph](dfs/CloneGraph/index.js)
3. [Number of Islands](dfs/number-of-islands/numberOfIslandsRecursive.js)
4. [Word Search](dfs/word-search/wordSearch.js)

### Breadth-First Search
Use when: shortest path / levels
Idea:
- Explore level by level (queue)

Example:
1. [Graph BFS traversal](bfs/breadth-first.js)
2. [Rotting Oranges](bfs/rotting-oranges/index.js) - Multi-source shortest path
3. [Level Order Traversal](DataStructures/BinaryTree/BinaryTree.js)

### Backtracking
Use when: all combinations / possibilities
Idea:
- Try → undo → try next

Example:
1. [Permutations](backtracking/permutations/permutations.js)
2. [Subsets](backtracking/subsets/subsets.js)
3. [N-Queens Problem](backtracking/nQueens.js)
4. [Sudoku Solver](backtracking/sudokuSolver.js)
5. [Palindrome Partitioning](backtracking/palindrome-partioning/palindromePartitioning.js)
6. [Reconstruct Itinerary](backtracking/reconstructItinerary.js)

### Heap (Priority Queue)
Use when: top K / min or max
Idea:
- Keep most important elements

Example:
1. [Max Heap](DataStructures/Heap/MaxHeap.js)
2. [Min Heap](DataStructures/Heap/MinHeap.js)
3. [Find Most Frequent Character](string/findMostFrequentChar.js)

### Dynamic Programming (DP)
Use when: repeated subproblems
Idea:
- Save results (memo or table)

Example:
1. [Fibonacci](dynamic-programming/fibonacci.js)
2. [Minimum Coin Change](dynamic-programming/minCoinChange.js)
3. [Longest Palindromic Subsequence](string/subsequentPalindrome.js)

### Greedy
Use when: local best choice works
Idea:
- Make locally optimal choice at each step

Example:
1. [Buy and Sell Stock](greedy/buyAndSellStock.js)
2. [Integer to Roman](greedy/integerToRoman.js)
3. [Meeting Rooms](greedy/meetingRooms.js)