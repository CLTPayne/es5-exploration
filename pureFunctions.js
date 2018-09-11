// Pure functions:
// return values rely wholey on the arguements of the function
// no sideeffects (e.g. database call, network calls)
// they JUST calculate the new value
// therefore if you call the function with the same arguments, you will get the same return value
// they do not modify the values passed to them.

// Example Pure Function:
function square(x) {
  return x * x;
}

function squareAll(items) {
  return items.map(square);
}

// Example Impure Function:
// calls a database...
function square(x) {
  updateXInDatabase(x);
  return x * x;
}

// mutates the values in the items array...
function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
