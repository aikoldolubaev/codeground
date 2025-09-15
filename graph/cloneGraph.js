/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *   this.val = val === undefined ? 0 : val;
 *   this.neighbors = neighbors === undefined ? [] : neighbors;
 * }
 */

var cloneGraph = function (node) {
  if (node == null) return null;

  const oldToNew = new Map(); // original node -> cloned node

  function dfs(n) {
    if (oldToNew.has(n)) return oldToNew.get(n);

    const copy = new Node(n.val);
    oldToNew.set(n, copy);

    for (const nei of n.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  }

  return dfs(node);
};