[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730524&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above.

## Answer

My code runs something like this:

```
for (# of vertices) {
  for (# of vertices) {
    convert a single item
  }
}
```

Since if runs through the number of vertices time the number of vertices, the time complexity is $\Theta(|V|^2)$.  It does not depend on the number of edges, since it has to process every possible edge every time, no matter the case.
