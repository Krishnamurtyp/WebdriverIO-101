module.exports = class Page {
	constructor() {
		this.name = 'Krishna Murthy'; // Initial default name
	}

	// Return the current name stored in the object
	getName() {
		return this.name;
	}

	// Print the name to the console
	printName(name) {
		console.log('Name:', name);
	}

	// Set the passed name and return the updated name
	getName2(name) {
		this.printName(name);   // Log the new name
		this.name = name;       // Set the new name to the object
		return this.getName();  // Return the updated name
	}
}