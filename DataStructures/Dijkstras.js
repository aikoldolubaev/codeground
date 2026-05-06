// Min-Heap (Priority Queue) used to always process the lowest-cost node next
class MinHeap {
	constructor() {
		this.heap = []
	}

	push(node, priority) {
		this.heap.push({ node, priority })
		this._bubbleUp(this.heap.length - 1)
	}

	pop() {
		const min = this.heap[0]
		const last = this.heap.pop()
		if (this.heap.length > 0) {
			this.heap[0] = last
			this._sinkDown(0)
		}
		return min
	}

	isEmpty() {
		return this.heap.length === 0
	}

	_bubbleUp(i) {
		while (i > 0) {
			const parent = Math.floor((i - 1) / 2)
			if (this.heap[parent].priority <= this.heap[i].priority) break
			;[this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
			i = parent
		}
	}

	_sinkDown(i) {
		const length = this.heap.length
		while (true) {
			const left = 2 * i + 1
			const right = 2 * i + 2
			let smallest = i

			if (left < length && this.heap[left].priority < this.heap[smallest].priority) {
				smallest = left
			}
			if (right < length && this.heap[right].priority < this.heap[smallest].priority) {
				smallest = right
			}
			if (smallest === i) break
			;[this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
			i = smallest
		}
	}
}

// Weighted undirected graph
class WeightedGraph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = []
		}
	}

	// Each edge stores the neighbor and the cost/weight
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight })
		this.adjacencyList[vertex2].push({ node: vertex1, weight })
	}

	// Returns { distances, previous } where:
	//   distances[v] = shortest distance from start to v
	//   previous[v]  = preceding node on the shortest path to v
	dijkstra(start) {
		const distances = {}
		const previous = {}
		const heap = new MinHeap()

		for (const vertex in this.adjacencyList) {
			distances[vertex] = vertex === start ? 0 : Infinity
			previous[vertex] = null
		}

		heap.push(start, 0)

		while (!heap.isEmpty()) {
			const { node: current, priority: currentDist } = heap.pop()

			// Skip stale entries (a shorter path was already found)
			if (currentDist > distances[current]) continue

			for (const { node: neighbor, weight } of this.adjacencyList[current]) {
				const candidate = distances[current] + weight
				if (candidate < distances[neighbor]) {
					distances[neighbor] = candidate
					previous[neighbor] = current
					heap.push(neighbor, candidate)
				}
			}
		}

		return { distances, previous }
	}

	// Reconstructs the shortest path from start to end as an array of nodes
	shortestPath(start, end) {
		const { distances, previous } = this.dijkstra(start)
		const path = []
		let current = end

		while (current !== null) {
			path.unshift(current)
			current = previous[current]
		}

		// If path doesn't begin with start, end is unreachable
		if (path[0] !== start) return { path: [], distance: Infinity }

		return { path, distance: distances[end] }
	}
}

// Example Usage
//
//        2       3
//   A ------B-------E
//   |     / |       |
//  4|   1   |6     1|
//   | /     |       |
//   C-------D-------F
//       5       2
//
const graph = new WeightedGraph()
;['A', 'B', 'C', 'D', 'E', 'F'].forEach((v) => graph.addVertex(v))
graph.addEdge('A', 'B', 2)
graph.addEdge('A', 'C', 4)
graph.addEdge('B', 'C', 1)
graph.addEdge('B', 'D', 6)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 5)
graph.addEdge('D', 'F', 2)
graph.addEdge('E', 'F', 1)

const { path, distance } = graph.shortestPath('A', 'F')
console.log('Shortest path:', path.join(' -> ')) // A -> B -> E -> F
console.log('Total distance:', distance) // 6
