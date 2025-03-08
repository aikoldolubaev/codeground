const response = [
	{ name: "Food", label: "Yogurt", group: "Milk" },
	{ name: "Auto", label: "Door", group: "Car" },
	{ name: "Adobe", label: "Adobe Suite", group: "Software" },
	{ name: "Home", label: "Window", group: "House" },
	{ name: "Food", label: "Yogurt", group: "Milk" },
	{ name: "Tech", label: "iPhone", group: "Apple" },
];




const collectByGroup1 = (response) => {
	const duplicates = {};
	response.forEach((column, idx) => {
		if (duplicates[column.name]) {
			duplicates[column.name].push(column);
		} else {
			duplicates[column.name] = [column];
		}
	});
	return duplicates;
};

const collectByGroup2 = (response) => {
	return response.reduce((duplicates, column) => {
		if (duplicates[column.name]) {
			duplicates[column.name].push(column);
		} else {
			duplicates[column.name] = [column];
		}
		return duplicates;
	}, {});
};

console.log(collectByGroup2(response));