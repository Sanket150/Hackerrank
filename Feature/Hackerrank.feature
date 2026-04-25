Feature: Hackerrank login and perform actions

    Feature Description
    @TC_1
    Scenario: Login to Hackerrank and perform actions
        Given I am on the login page
        When I enter login credentials if not already logged in
        Then I verify 'Practice Skills' header after login
        When I click on 'Java' skill from page