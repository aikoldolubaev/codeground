class Monster {
	constructor(name) {
		this.name = name
	}

	attack() {
		console.log(`${this.name} attacked`)
	}

	walk() {
		console.log(`${this.name} walked`)
	}
}

class FlyingMonster extends Monster {
	fly() {
		console.log(`${this.name} flew`)
	}
}

class SwimmingMonster extends Monster {
	swim() {
		console.log(`${this.name} swam`)
	}
}

const bear = new Monster('Bear')
bear.walk()
bear.attack()

const eagle = new FlyingMonster('Eagle')
eagle.walk()
eagle.attack()
eagle.fly()

const shark = new SwimmingMonster('Shark')
shark.walk()
shark.attack()
shark.swim()

// Composition
function swimmer(obj) {
	return {
		swim: () => console.log(`${obj.name} swam`),
	}
}

function flyer(obj) {
	return {
		swim: () => console.log(`${obj.name} flew`),
	}
}

function swimmingMonsterCreator(name) {
	const monster = { name: name }
	return {
		...monster,
		...swimmer(monster),
	}
}

function FlyingSwimmingMonsterCreator(name) {
	const monster = { name: name }
	return {
		...monster,
		...swimmer(monster),
		...flyer(monster),
	}
}

const obj = swimmer({ name: 'Shark' })
obj.swim()
