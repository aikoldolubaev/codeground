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

const joinWithoutDuplicates2 = (prev, next)=> {
    const joined = prev.concat(next)
    const removedDuplicates = []
    joined.forEach((column)=> {
        if(removedDuplicates.some((column2) => column2.name === column.name)){
            removedDuplicates.push(column)
        }
    })
    return removedDuplicates
}

console.log(joinWithoutDuplicates2(prev, next))