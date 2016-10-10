Feature: Clear Puzzle

Background:
  Given I am on "http://studio.code.org/hoc/1?noautoplay=true"
  And I rotate to landscape
  Then I wait to see a dialog titled "Puzzle 1 of 20"
  And I close the dialog
  Then element "#runButton" is visible
  And element "#resetButton" is hidden

Scenario: Deleting start blocks then clearing the puzzle
  Then I drag block "5" to offset "-500, 0"
  And block "5" has been deleted
  Then I click selector "#clear-puzzle-header"
  And I wait to see ".modal"
  And I click selector "#confirm-button"
  Then block "7" is child of block "6"

Scenario: Adding blocks then clearing the puzzle
  Then I drag block "1" to block "5"
  Then I drag block "1" to block "6"
  Then I click selector "#clear-puzzle-header"
  And I wait to see ".modal"
  And I click selector "#confirm-button"
  And block "6" has been deleted
  And block "7" has been deleted
