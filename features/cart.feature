Feature: Cart Feature
    @cart
  Scenario: User tries to add items to cart
    Given I am on the home page
    And I have no items in my cart
    When I select "T-shirts" menu items
    And I hover over the first item
    And I click on "Add to compare"
    And I click on "Compare"
    And I click on "Add to cart"
    And I click on "Continue Shopping"
    Then I should see "1" in the Cart
