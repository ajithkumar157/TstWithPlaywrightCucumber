
Feature: Login to BookCart webpage

  Background:
    Given the user navigates to the BookCart login page

  Scenario: Successfully log in to the BookCart page
    When the user enters a valid username 'ajith'
    And the user enters a valid password "Ben@1234"
    And the user clicks the login button
    Then the user should be redirected to the BookCart page
