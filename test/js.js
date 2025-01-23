const prev = [
	{ name: "Food", label: "Yogurt", group: "Milk" },
	{ name: "Auto", label: "Door", group: "Car" },
	{ name: "Home", label: "Window", group: "House" },
];

const next = [
	{ name: "Food", label: "Yogurt", group: "Milk" },
	{ name: "Auto", label: "Door", group: "Car" },
	{ name: "Adobe", label: "Adobe Suite", group: "Software" },
	{ name: "Home", label: "Window", group: "House" },
	{ name: "Food", label: "Yogurt", group: "Milk" },
	{ name: "Tech", label: "iPhone", group: "Apple" },
];

const joinWithoutDuplicates = (prev, next) => {
    const joined= [...prev, ...next];
    const uniqueArray = []
    const duplicatesFound = joined.reduce((duplicate, column)=> {
        duplicate[column.name] = duplicate[column.name] + 1 || 1
        if(duplicate[column.name] === 1) {
            uniqueArray.push(column)
        }
        return duplicate
    }, {})
    return uniqueArray
};
console.log(joinWithoutDuplicates(prev, next))