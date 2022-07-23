#4 STEPS TO SOLVE ANY PROBLEM

STEP 1️⃣ => Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.

    Example: 
        🗣️ Project Manager: "We need a function that reverses **whatever** we pass into it"

    👉 What does "whatever" even mean in this context? 
    What should be reversed? Answer. Only strings, numbers and arrays make send to reverse.
    👉 What to do if something else is passed in?
    👉 What should be returned? Should it always be a string, or should the type be the same as passed in?
    👉 How to recognize wheather the argument is a number, a string, or an array?
    👉 How to reverse a number, a string and an array?

STEP 2️⃣ => Divide and conquer: Break a big problem into smaller sub-problems.

    SUB-PROBLEMS:
        👉 Check if argument is a number, a string, or an array.
        👉 Implement reversing a number
        👉 Implement reversing a string
        👉 Implement reversing a array
        👉 Return reversed value
        ⬆️ Looks like a task list that we need to implement.

What if we actully do not know how to implement one of this sub-problem?
Well, in that case we should not be affraid of doing as much research as we have to.
Now of course we should always first try to implement a sub-problem on our own using our own coding abilities, but if we are constatly hitting a wall and cannot move on then we should waste no more time and just find out how it works using google or a questions and answers website like stackoverflow or the mdn JavaScript documentation.
Researching is a huge part of a programmer jobs. 

STEP 3️⃣ => Don't be afraid to do as much research as you have to

        👉 How to check if a value is a number in JavaScript?
        👉 How to check if a value is a string in JavaScript?
        👉 How to check if a value is an array in JavaScript?
        👉 How to reverse a number in JavaScript?
        👉 How to reverse a string in JavaScript?
        👉 How to reverse an array in JavaScript?

4️⃣. For bigger problems, write pseudo-code before writing the actual code.
        EXAMPLE:
            function reverse(value)
                if value type !string || !number || !array
                    return value
                if value type === string
                reverse string
                if value type === number
                reverse number
                if value type === array 
                reverse array   
                return reversed value

We work for a company building a smart home thermometer. Our most recent task is this: "Give an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

