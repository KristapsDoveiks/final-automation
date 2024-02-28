Feature: Checkout Process
    @checkout
  Scenario: Unregistered user tries to checkout
    Given I am on the home page
    And I have no items in my cart
    When I select "T-shirts" menu items
    And I hover over the first item
    And I click on "Add to compare"
    And I click on "Compare"
    And I click on "Add to cart"
    And I click on "Proceed to checkout"
    When I click on "Proceed to checkout" again
    Then The page should ask the user to create an account or sign in