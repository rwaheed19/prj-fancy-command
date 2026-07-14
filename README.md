# prj-fancy-command
**Section 1 — Command Description**

**what your tool does**
fancySort is a simplified command-line tool that combines the functionality of two Linux commands: sort and wc.
The tool reads a text file, sorts the contents alphabetically, displays the sorted results, and shows the total number of lines in the file. This provides users with both organized file contents and basic file information in one command. This is a simplified implementation and does not reproduce the full functionality of the original Linux commands.

**how to run it**
1. Make sure Node.js is installed.
2. Open the terminal in the project folder.
3. Run the command using:
    node fancySort.js filename.txt
    node fancySort.js fruits.txt
4. In the end, double check your results to make sure you got the right output. 


**what commands it combines**
My tool combines:
1. sort: sorts lines of text alphabetically.
2. wc: counts the number of lines in a file.

**Section 2 — AI‑Assisted Programming**

**Explain: what you asked AI**
I used AI as a programming assistant to help understand Linux commands and plan the structure of my Node.js implementation.
Some questions I asked included:
"What does the Linux sort command do?"
"How can I combine sort and wc into a simple Node.js tool?"
"What test cases should I use for this command?"
"What edge cases could cause this program to fail?"

**where AI helped**
AI helped me:
Understand the purpose and basic functionality of Linux commands.
Decide on the idea for my fancy command (fancySort).
Plan the program logic using Node.js.
Identify possible test cases, including missing files and missing command-line arguments.
Improve error handling and make the output easier to understand.

**where you had to think independently**
I had to make my own decisions about:
Choosing which Linux commands to combine.
Designing the fancySort features.
Deciding how the output should be displayed.
Creating and testing my own input files.
Manually running the program and verifying that the results were correct.

**what AI got wrong or missed**
AI provided guidance, but it did not know the exact requirements of my assignment unless I explained them. Some suggestions needed to be adjusted to match the project restrictions, such as only using:
fs synchronous APIs
process.argv
basic string and array operations
I also had to verify the code myself by running tests and fixing issues based on the actual output.