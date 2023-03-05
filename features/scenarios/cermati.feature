@FeatureA
Feature: Automation Test at Cermati.com

    @SignUp @positive
    Scenario Outline: Login with valid credential
        Given I am on the Cermati.com Sign Up Page
        When I input email with "bukanrolan@gmail.com" 
        When I input phone number with "08892293279"
        When I input password with "Kurakura21"
        When I confirm password with "Kurakura21"
        When I input First Name with "Rolan"
        When I input Last Name with "Fransiskus"
        When I input City or Province with "KABUPATEN BEKASI"
        When I click the Regist Button
        Then Then I go to verification method page
    
