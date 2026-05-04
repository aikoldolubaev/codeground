class User {
	constructor(id, name) {
		this.id = id
		this.name = name
	}
	hasAccess() {
		return this.name === 'Bob'
	}
}

class NullUser {
	constructor() {
		this.id = -1
		this.name = 'Guest'
	}
	hasAccess() {
		return false
	}
}

const users = [new User(1, 'Bob'), new User(2, 'John')]

function getUser(id) {
	const user = users.find((user) => user.id === id)
	if (!user) {
		return new NullUser()
	} else {
		return user
	}
}

function printUser(id) {
	const user = getUser(id)
	console.log(`Hello ${user.name}`)

	if (user.hasAccess()) {
		console.log('You have access')
	} else {
		console.log('You are not allowed here')
	}
}

printUser(1)
printUser(3)
