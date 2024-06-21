# The Design of the UNIX Operating System - Question Paper

**Instructions:**

- Answer all questions.
- Marks are indicated against each question.
- Use diagrams wherever necessary.

## 2 Marks Questions (5 x 2 = 10 Marks)

1. Explain the difference between a process and a program in the context of the UNIX operating system.
2. What is a buffer cache? Why is it used in the UNIX system?
3. Define the terms "inode" and "link" with respect to files in the UNIX file system.
4. Briefly explain the two main approaches to handling multiple CPUs in a UNIX environment.
5. What is the main purpose of the sleep and wakeup functions in the UNIX kernel?

## 5 Marks Questions (4 x 5 = 20 Marks)

1. Describe the steps involved in converting a path name to an inode in the UNIX file system.
2. Explain the algorithm used for allocating disk blocks to a file in the UNIX file system. Discuss the advantages and disadvantages of the chosen scheme.
3. Explain the concept of process states and state transitions in the UNIX system. Illustrate your answer with a simple state transition diagram.
4. What are the advantages of using a demand paging policy over a swapping policy for memory management?

## 10 Marks Questions (4 x 10 = 40 Marks)

1. Provide a detailed explanation of the fork system call. Discuss the steps involved and the challenges in its implementation for both swapping and paging systems.
2. Describe the concept of signals in the UNIX operating system. Explain the different ways a process can handle a signal. Discuss the race condition that can occur when a process tries to catch a signal.
3. Explain the functionality of the terminal driver in both canonical and raw modes. Discuss the use of clists and how the driver regulates data flow to and from the terminal.
4. Describe the three different models of distributed UNIX systems discussed in the text: satellite systems, Newcastle connection, and transparent distributed systems. Compare and contrast the advantages and disadvantages of each model.

**Good Luck!**
