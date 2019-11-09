// Double bitwise NOT:
~~foo;

// Equivalent to this:
typeof foo === "number" && !isNaN(foo) && foo !== Infinity
	? foo > 0
		? Math.floor(foo)
		: Math.ceil(foo)
	: 0;
// This is_effectively_ the same... this is
// NOT what happens internally!

// E.g.
console.log(~~1.234); // 1
console.log(~~-1.234); // -1
console.log(~~1.789); // 1
console.log(~~-1.789); // -1
