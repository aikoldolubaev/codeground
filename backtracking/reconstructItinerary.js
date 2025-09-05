// LeetCode 332: Reconstruct Itinerary
// https://leetcode.com/problems/reconstruct-itinerary/

// Build graph: from -> min-heap (here: sorted array, we pop from start)
function findItinerary(tickets) {
	const flightRoutesMap = new Map()
	for (const [from, to] of tickets) {
		if (!flightRoutesMap.has(from)) flightRoutesMap.set(from, [])
		flightRoutesMap.get(from).push(to)
	}
	// sort each list so we always take smallest (lexicographically) first
	for (const [airportCode, flightDestinations] of flightRoutesMap) flightDestinations.sort()

	const flightRoute = []
	function dfs(airport) {
		const dests = flightRoutesMap.get(airport) || []
		while (dests.length) {
			// always take the smallest destination available
			const next = dests.shift()
			dfs(next)
		}
		flightRoute.push(airport) // add on backtrack
	}

	dfs('JFK')
	return flightRoute.reverse()
}

// Example:
console.log(
	findItinerary([
		['MUC', 'LHR'],
		['JFK', 'MUC'],
		['SFO', 'SJC'],
		['LHR', 'SFO'],
	])
)
// -> ["JFK","MUC","LHR","SFO","SJC"]
console.log(
	findItinerary([
		['JFK', 'SFO'],
		['JFK', 'ATL'],
		['SFO', 'ATL'],
		['ATL', 'JFK'],
		['ATL', 'SFO'],
	])
)
// -> ["JFK","ATL","JFK","SFO","ATL","SFO"]
