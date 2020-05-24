function engine(string) {
  return string.split(/\s+/);
}

let inputString = engine("My Own Engine");
console.log(inputString);

// What my engine is doing is...
// Take some string and split it.

// Engine Flow is
// Parser -> files gets break into meaningful token. tokens are created based on keywords and text in "JS File".
// AST [Abstract Syntax Tree] -> Forms the tree based on token it gets.
// Interpreter
// Profiler
// Compliler

// After all this efforts Engine spits out "101010001" code.
// In that way computer understands what "JS File" trying to say and do exactly like that.

//[JS File] => [JS Engine](Translator) => [Computer]
