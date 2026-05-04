class GraphMatrix {
	constructor(size = 0, directed = false) {
		this.directed = directed
		this.size = size
		// initialize an NxN matrix filled with 0
		this.matrix = Array.from({ length: size }, () => Array(size).fill(0))
	}

	// Add a vertex (increase matrix size by 1)
	addVertex() {
		this.size += 1
		// add a new column to existing rows
		for (let row of this.matrix) row.push(0)
		// add a new row
		this.matrix.push(Array(this.size).fill(0))
		return this.size - 1 // return index of new vertex
	}

	// Add edge between u and v with optional weight (default 1)
	addEdge(u, v, weight = 1) {
		this._validateIndex(u)
		this._validateIndex(v)
		this.matrix[u][v] = weight
		if (!this.directed) this.matrix[v][u] = weight
	}

	// Remove edge
	removeEdge(u, v) {
		this._validateIndex(u)
		this._validateIndex(v)
		this.matrix[u][v] = 0
		if (!this.directed) this.matrix[v][u] = 0
	}

	// Check whether edge exists
	hasEdge(u, v) {
		this._validateIndex(u)
		this._validateIndex(v)
		return this.matrix[u][v] !== 0
	}

	// Get neighbors of vertex u (returns array of {v, weight})
	neighbors(u) {
		this._validateIndex(u)
		const res = []
		for (let v = 0; v < this.size; v++) {
			const w = this.matrix[u][v]
			if (w !== 0) res.push({ v, weight: w })
		}
		return res
	}

	// Utility: validate vertex index
	_validateIndex(i) {
		if (!Number.isInteger(i) || i < 0 || i >= this.size) {
			throw new RangeError(`Vertex index out of bounds: ${i}`)
		}
	}

	// Pretty print
	toString() {
		return this.matrix.map((row) => row.join(' ')).join('\n')
	}
}

// Example Usage
const graph = new GraphMatrix(3) // Create a graph with 3 vertices (0, 1, 2)
graph.addEdge(0, 1) // Add edge between vertex 0 and 1
graph.addEdge(1, 2, 5) // Add edge between vertex 1 and 2 with weight 5
console.log(graph.toString())
// Output:
// 0 1 0
// 1 0 5
// 0 5 0

console.log(graph.hasEdge(0, 1)) // true
console.log(graph.hasEdge(0, 2)) // false
console.log(graph.neighbors(1)) // [ { v: 0, weight: 1 }, { v: 2, weight: 5 } ]

graph.removeEdge(1, 2)
console.log(graph.toString())
// Output:
// 0 1 0
// 1 0 0
// 0 0 0
