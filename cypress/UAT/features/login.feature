Feature: Login

Scenario Outline: 
#Scenario outline is udes when we wnat to validate with multiple sets of data
Given user opens the url

When enter username as <username>

And enter password as <password>

And click on submit

Then Login should be successful


Examples:
    | username | password | 
    | ADMIN    | ADMIN123 | 
    | admin    | asdfgg   |
    | admni    |  admini1 |
    | Admin    | admin123 |
 


    