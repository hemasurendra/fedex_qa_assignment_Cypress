import  {dataAttributes}  from "../../support/DataAttributes";
import { PlanetDetailsPageObjects } from "../../support/PlanetDetailsPageObjects";
import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given("User is able to open the application under test",() => {
  cy.visit('baseUrl');
});

When("user enters {string} in the search field for the character search", (characterName) => {
  cy.get(dataAttributes.peopleRadioButton).click()
  cy.get(dataAttributes.searchInputField)
    .clear()
    .type(characterName)
    cy.get(dataAttributes.searchButton).click()
});

Then("user should see the character name {string}", (characterName) => {
  cy.get(dataAttributes.personName).should('contain', characterName);
});

And("user should see other character details like {string} and {string} and {string}", (Birth_year, Eye_color, Skin_color) =>{
  cy.get(dataAttributes.personBirthyear).should('contain', Birth_year);
  cy.get(dataAttributes.personEyeColor).should('contain', Eye_color);
  cy.get(dataAttributes.personSkinColor).should('contain', Skin_color);
});

Then("no results should be displayed", () => {
  cy.get(dataAttributes.noResultsFound).should('be.visible')
});