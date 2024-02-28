Feature: Cart remove feature
    @cart_remove
  Scenario: User tries to remove existing item from cart
    Given I am on the home page
    And I have no items in my cart
    When I select "T-shirts" menu items
    And I hover over the first item
    And I click on "Add to compare"
    And I click on "Compare"
    And I click on "Add to cart"
    And I click on "Proceed to checkout"
    Then I should see Qty being "1" for the item
    When I remove an item from the cart
    Then I should see message saying "Your shopping cart is empty."
