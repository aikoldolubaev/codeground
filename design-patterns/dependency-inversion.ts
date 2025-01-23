class Store {
	constructor(paymentProccessor) {
		this.paymentProccessor = paymentProccessor
	}
	purchaseBike(quantity) {
		this.paymentProccessor.pay(200 * quantity * 100)
	}
	purchaseHelmet(quantity) {
		this.paymentProccessor.pay(15 * quantity * 100)
	}
}

class StripePaymentProcessor {
	constructor(user) {
		this.stripe = new Stripe(user)
	}

	pay(amountInDollars) {
		this.stripe.makePayment(amountInDollars * 100)
	}
}

class Stripe {
	constructor(user) {
		this.user = user
	}

	makePayment(amountInCents) {
		console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
	}
}

class Paypal {
	makePayment(user, amoountInDollars) {
		console.log(`${this.user} made payment of $${amoountInDollars / 100} with Paypal`)
	}
}

const store = new Store(new StripePaymentProcessor('John'))
store.purchaseBike(2)
store.purchaseHelmet(1)
