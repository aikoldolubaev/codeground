// LeetCode 332: Reconstruct Itinerary
// Build graph: from -> min-heap (here: sorted array, we pop from start)
function findItinerary(tickets) {
  const g = new Map();
  for (const [from, to] of tickets) {
    if (!g.has(from)) g.set(from, []);
    g.get(from).push(to);
  }
  // sort each list so we always take smallest (lexicographically) first
  for (const [k, arr] of g) arr.sort();

  const route = [];
  function dfs(airport) {
    const dests = g.get(airport) || [];
    while (dests.length) {
      // always take the smallest destination available
      const next = dests.shift();
      dfs(next);
    }
    route.push(airport); // add on backtrack
  }

  dfs("JFK");
  return route.reverse();
}

// Example:
console.log(findItinerary([
  ["MUC","LHR"], ["JFK","MUC"], ["SFO","SJC"], ["LHR","SFO"]
]));
// -> ["JFK","MUC","LHR","SFO","SJC"]