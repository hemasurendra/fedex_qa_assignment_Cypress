import {dataAttributes}  from "../../support/DataAttributes";
import { PlanetDetailsPageObjects } from "../../support/PlanetDetailsPageObjects";
import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given("User is able to open the application under test",() => {
  cy.visit('/');
});

When("user enters {string} in the search field for the planet search", (planetName) => {
  cy.get(dataAttributes.planetRadioButton).click()
  cy.get(dataAttributes.searchInputField)
    .clear()
    .type(planetName)
  cy.get(dataAttributes.searchButton).click()  
});

Then("user should see the planet with a population of {string}", (population) => {
  cy.get(dataAttributes.planetPopulation).should('contain', population);
});

And("user should see the planet with details of {string} and {string}", (climate, gravity) =>{
  cy.get(dataAttributes.planetClimate).should('contain', climate);
  cy.get(dataAttributes.planetGravity).should('contain', gravity);
});

Then("no results should be displayed", () => {
  cy.get(dataAttributes.noResultsFound).should('be.visible')
});