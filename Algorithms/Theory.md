# About the Course
An introduction to the fundamentals of algorithms.

A practical take on algorithms with JavaScript.

# Course topics
- Algorithms
- Measuring performance
- Time and Space Complexity
- Big O notation
- Math Algorithms
- Sort
- Search
- Misc. algorithms and problem solving

# Prerequisites
- Modern JavaScript
- JavaScript Fundamentals
- Advance JavaScript Crash Course
- ES2015 topics

# Before we begin
It might seem hard and that is because it is hard.

Have a pen and paper and trance the execution of code with a sample input.

Code along with me and do not rush through the videos.

# What is an algorithm?
An algorithm is a set of well-defined instructions to solve a particular problem.

Recipe analogy
Ingredients -> Recipe -> Tasty dish

Ingredients:
- Cup of noodles            
- Taste maker       
- Water             

Recipe:
1. Boil water   
2. Pour water into cup
3. Add taste maker
4. Closed the lid and wait 4 minutes.

Tasty dish
- Tasty noodles

## Programming
Algorithms to add two numbers
inputs -> Algorithms -> Output

inputs 
- Two number 'a' & 'b'

Algorithm
- 1. Add number using '+'
- 2. Return the value

Output
- Sum of 'a' and 'b'

## Characteristics:
Well defined inputs and outputs.

Each step should be clear and unambiguous.

Language independent.

## Why algorithms?
As a developer, you're going to come across problems that you need to solve.

Learning algorithms translate to learning different techniques to efficiently solve those problems.

One problem can be solved in many ways using different algorithms.

Every Algorithms comes with its own tradeoffs when it comes to performance.

## Algorithm Analysis

There are multiple ways to solve one problem.
- Ex: There are multiple algorithms to sort a list of numbers.
How do we analyse which one of them is the most efficient algorithm?

Generally when we talk about performance, we use an absolute measure.

If I can run 100 meters in 12 sec, I am faster than someone who takes 15 seconds.

The absolute running time of an algorithms cannot be predicted, since it depends on a number of factors
 - Programming language used to implement the algorithm
 - The computer program runs on
 - Other programs running at the same time
 - Quality of the operating system

We evaluate the performance of an algorithms in terms of its input size.

Time Complexity: Amount of time taken by an algorithm to run as a function of input size.

Space complexity: Amount of memory taken by an algorithm to run, as a function of input size.

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

There is no one solution that works every single time. It is always good to known multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.

It you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

## How to represent complexity?
Asymptotic notations
- Mathematical tools to represent time and space complexity

1. Big-O Notation -> Worst case complexity
2. Omega-Notation -> Best case complexity
3. Theta-Notation -> Average case complexity

## Big-O Notation
The worst case complexity of an algorithms is represented using the Big-O notation.

Big-O Notation describes the complexity of an algorithm using algebric terms.

It has two important characteristics
- It is expressed in terms of the input
- It focuses on the bigger picture without getting cought up in the minute details

Multiple algorithms exist for the same problem and there is no one right solution. Different algorithm works well under different constraints.

The same algorithm with the same programming language can be implemented in different ways.

When writing programs at work, don't lose sight of the big picture. Rather than writing a cleaver code, write code that is simple to read and maintain.

# Math Algorithms
- Fibonacci sequence
- Factorial of a number
- Prime number
- Power of two
- Recursion
- Fibonacci sequence with recursion
- Factorial of a number with a sequence

## The approach
- Problem Statement
- Pause the video and try solving the problem
- Implement the solution together
- Determine the Big-O of the solution


## Big-O Guide
- Calculation not dependent on input size - O(1) => constant
- 1 loop - O(n) => linear
- 2 nested loops - O(n^2) => 
- input size reduced by half - O(logn) =>