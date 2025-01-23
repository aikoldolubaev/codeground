// const islands = grid => {
//     let visited = [];
//     for(let i = 0; i < grid.length; i++) {
//       visited[i] = [];
//     }
//     let count = 0;
//     for(let x = 0; x < grid.length; x++) {
//       for(let y = 0; y < grid[x].length; y++) {
//         if(!visited[x][y] && grid[x][y] === 1) {
//           count++;
//           markIsland(grid, x, y, visited);
//         }
//         visited[x][y] = true;
//       }
//     }
//     return count;
//   };
//   const markIsland = (grid, x, y, visited) => {
//     if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
//         return;
//       }
//     if(visited[x][y] === true) {
//       return;
//     }
//     visited[x][y] = true;
//     if(grid[x][y] === 0) {
//     return;
//     }
//     markIsland(grid, x - 1, y, visited);
//     markIsland(grid, x + 1, y, visited);
//     markIsland(grid, x, y - 1, visited);
//     markIsland(grid, x, y + 1, visited);
//   };
//   islands([
//     [1,1,0,0,1],
//     [1,1,0,0,0],
//     [0,0,0,0,0],
//     [1,0,0,0,1],
//     [1,0,0,1,1]
//   ]);//output: 4
//   //////////////////////////////////////////////////////////////////////////////////////////
//   const islands = grid =>{
//     let count = 0;
//     for(let x=0; x<grid.length; x++){
//       for(let y=0; y<grid[0].length; y++){
//         if(grid[x][y]=== 1){//if first el is one(land)
//           count++;
//           searching(grid, x, y);
//         }
//       }
//     }
//     return count;
//   }

//   const searching = (grid, x, y)=>{
//     if(x<0 || x>=grid.length || y < 0 || y>=grid[0].length || grid[x][y]===0){//if everything is done, to stop the recursion
//       return;
//     }
//     grid[x][y]=0;//start overriding once we count the islands
//     searching(grid, x-1, y);//top column
//     searching(grid,x+1, y);//bottom column
//     searching(grid, x, y-1);//left row
//     searching(grid, x, y+1);//right row
//   }

//   islands([
//     [1,0,0,0],
//     [1,1,0,0],
//     [0,0,0,0],
//   ])
////////////////////////////////////
function islands(grid) {
	let count = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			// island is present
			if (grid[i][j] === '1') {
				const stack = []
				stack.push([i, j])

				while (stack.length) {
					//it will make sure we will visit all 4 sides
					const pair = stack.pop()
					i = pair[0]
					j = pair[1]

					if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === '1') {
						grid[i][j] = '2'
						stack.push([i + 1, j]) //right
						stack.push([i - 1, j]) //left
						stack.push([i, j + 1]) //down
						stack.push([i, j - 1]) //up
					}
				}
				count++
			}
		}
	}

	return count
}

const grid = [
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
]

console.log(islands(grid))

const grid2 = [
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '1'],
	['0', '0', '0', '0', '1'],
]

const numIslands = (grid) => {
	if (!grid || grid.length === 0) return 0

	let count = 0

	const dfs = (grid, i, j) => {
		// Base case: if out of bounds or at water, return
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return

		// Mark the cell as visited by setting it to '0'
		grid[i][j] = '0'

		// Visit all 4 adjacent cells
		dfs(grid, i + 1, j) // down
		dfs(grid, i - 1, j) // up
		dfs(grid, i, j + 1) // right
		dfs(grid, i, j - 1) // left
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				count++
				dfs(grid, i, j)
			}
		}
	}

	return count
}
console.log(numIslands(grid2))

/*
high level:
  We will go over the grid length and over nested array length and if we see land(1) we we will perform breadthFirstSearch(1right, 1left, 1up, 1down) 
  and on this each round search we will keep track(count)
  how many rounds searches we did.
*/
