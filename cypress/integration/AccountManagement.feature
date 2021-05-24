Feature: AM Account Creation

Scenario: User wants to create a new account 
Given I create a new Account 
When I enter all the mandatory and other Account data
Then Account should be created

Scenario: Mandatory fields error message
Given I create a new Account 
When I do not enter account name and account URL
Then I should be alerted to enter account name and account URL
And I should not be allowed to create the account 

Scenario: To show whether the Account is already created.
Given I enter a Account name 
When the Account already exists
Then I should not be allowed to create duplicate account 