// Example from You Don't Know JS:

// The javascript compiler takes a first pass of your code
// Looking for formal declarations and adding just the declaration to the relevant level of scope
// In the below example this happens 4 times (L7, L9, L10, L10.5)

var foo = 'foo';

function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }

  baz();

}

bar();
foo;
bam;
baz();
