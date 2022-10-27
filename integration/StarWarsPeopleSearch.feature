Feature: Star Wars People search

  Background:
    Given User is able to open the application under test

  Scenario Outline: Character details verification upon the '<characterName>' search
    When user enters '<characterName>' in the search field for the character search
    Then user should see the character name '<characterName>'
    And user should see other character details like '<Birth_year>' and '<Eye_color>' and '<Skin_color>'
    Examples:
      | characterName       | Gender   | Birth_year | Eye_color   | Skin_color |
      | Beru Whitesun lars  | female   | 47BBY      | blue       | light      |
      | Luke Skywalker      | male     | 19BBY      | blue        | fair       |
      | Leia Organa         | female   | 19BBY      | brown       | light      |
      
      
  Scenario Outline: Validate the results when searched for a invalid character name
    When user enters '<characterName>' in the search field for the character search
    Then no results should be displayed
    Examples:
      | characterName   |
      | Invalid Name    |