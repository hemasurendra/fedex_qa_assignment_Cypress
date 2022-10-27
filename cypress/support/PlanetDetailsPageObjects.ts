import {dataAttributes} from "./DataAttributes";


export class PlanetDetailsPageObjects {

  public getPlanetName() {
    return cy.get(dataAttributes.planetName);
  }

  public getPlanetPopulation() {
    return cy.get(dataAttributes.planetPopulation);
  }
    public getPlanetClimate() {
    return cy.get(dataAttributes.planetClimate);
  }

  public getPlanetGravity() {
    return cy.get(dataAttributes.planetGravity);
  }

}
