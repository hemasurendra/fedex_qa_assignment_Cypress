Feature: Star Wars Planet search

  Background:
    Given User is able to open the application under test

  Scenario Outline: Planet details verification upon the '<planetName>' search
    When user enters '<planetName>' in the search field for the planet search
    Then user should see the planet with a population of '<population>'
    And user should see the planet with details of '<climate>' and '<gravity>'
    Examples:
      | planetName | population    | climate   | gravity    |
      | Alderaan   | 2000000000    | temperate | 1 standard |
      | Endor      | 30000000      | temperate | 0.85 standard |
      | Coruscant  | 1000000000000 | temperate | 1 standard |

  Scenario Outline: Validate the results when searched for a invalid planet name
    When user enters '<planetName>' in the search field for the planet search
    Then no results should be displayed
    Examples:
      | planetName   |
      | Invalid Name |

  Scenario: Verify no results are found when searched for a empty string planet
    When user enters ' ' in the search field for the planet search
    Then no results should be displayed