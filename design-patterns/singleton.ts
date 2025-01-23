class Logger {
	constructor() {
		this.logs = []
	}

	log(message) {
		this.logs.push(message)
		console.log(`Fancy: ${message}`)
	}
	printLogoutCount() {
		console.log(`${this.logs.length} Logs`)
	}
}

const logger = new Logger()
function logFirstImplementation() {
	logger.printLogoutCount()
	logger.log('First file')
	logger.printLogoutCount()
}

const logger2 = new Logger()
function logSecondImplementation() {
	logger2.printLogoutCount()
	logger2.log('Second file')
	logger2.printLogoutCount()
}

logFirstImplementation()
logSecondImplementation()
