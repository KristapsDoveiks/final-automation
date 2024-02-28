Feature: Search Process
    @search
  Scenario: User uses search box to find items
    Given I am on the home page
    When I click on the search box
    And I type "Blouse" into the search box
    And I click the search button
    Then I should see a list of items that contain text "Blouse"