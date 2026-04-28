

class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	// Add a vertex (node)
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = []
		}
	}

	// Add an edge (connection) between two vertices
	addEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1].push(vertex2)
			this.adjacencyList[vertex2].push(vertex1) // Remove this for a directed graph
		}
	}

	// Remove an edge between two vertices
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
	}

	// Remove a vertex and all its edges
	removeVertex(vertex) {
		while (this.adjacencyList[vertex]?.length) {
			const adjacentVertex = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}

	// Print the graph
	print() {
		for (let vertex in this.adjacencyList) {
			console.log(vertex, '->', this.adjacencyList[vertex].join(', '))
		}
	}
}

// Example Usage
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
graph.print()
// Output:
// A -> B, C
// B -> A, C
// C -> A, B

graph.removeEdge('A', 'B')
graph.print()
// Output:
// A -> C
// B -> C
// C -> A, B

graph.removeVertex('C')
graph.print()
// Output:
// A ->
// B ->
