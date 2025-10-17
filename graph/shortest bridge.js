// LeetCode 934. Shortest Bridge
function shortestBridge(grid) {
  const n = grid.length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const q = [];
  const seen = Array.from({ length: n }, () => Array(n).fill(false));

  // 1) Find and mark the first island; push all its cells into queue
  let found = false;
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= n || c >= n) return;
    if (seen[r][c] || grid[r][c] === 0) return;
    seen[r][c] = true;
    q.push([r, c]);           // for BFS later
    grid[r][c] = 2;           // mark first island
    for (const [dr, dc] of dirs) dfs(r + dr, c + dc);
  }

  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        found = true;
      }
    }
  }

  // 2) BFS outward from the first island until we touch the second island
  let steps = 0;
  while (q.length) {
    const size = q.length;
    for (let s = 0; s < size; s++) {
      const [r, c] = q.shift();
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= n || nc >= n) continue;
        if (seen[nr][nc]) continue;

        if (grid[nr][nc] === 1) {
          // reached the second island
          return steps;
        }

        // water: expand
        seen[nr][nc] = true;
        q.push([nr, nc]);
      }
    }
    steps++;
  }
  return -1; // should not happen
}