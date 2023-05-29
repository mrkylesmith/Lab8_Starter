# Lab 8 - Starter
Author: Kyle Smith

# 'Check Your Understanding' Questions:
Question 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- Answer: Within a Github Action that runs whenever code is pushed to the remote repository. I would put the automated test suites in a GitHub Action that runs whenever the code is pushed because it ensures that the developer's code will be automatically tested before it is merged into the team repository, without relying on the developer to remember to manually test their code before pushing it. It also ensures that a consistent test suite is used by every member of the team, and whenever new tests are written, they can immediately be integrated into the GitHub Action test suite.  This will help prevent bugs from making their way into the repo, but it is reliant on having test coverage of the entire repo and integrating new tests into the GitHub Action routinely.

Question 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- Answer: No, you could use a unit test for that. End to end testing is used to automate tests that involve a user's actions through the UI from start to finish as a whole, and is not intended on testing small individual functions for correctness. A unit test would be appropriate for testing if a function is returning the correct output.

Question 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- Answer: No, I would use end-to-end testing for this "message" feature.  Since the "message" feature represents the core user action taken in this application (messaging application), it would be more appropriate to test the user's action from start to finish writing and sending the message in this application. This could involve many functions and is better suited for end-to-end testing, and since this functionality cannot be encapulated in a single function you should not use a unit test in this case.


Question 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Answer: Yes, I would use a unit test for the "max message length" feature because this test could be isolated to a single component (function) that, for example takes a message as input, and simply checks if its length exceeds the max allowed size.  Since this test could be encapsulated to just a single function and test it's functionality, it would be ideal for a unit test.