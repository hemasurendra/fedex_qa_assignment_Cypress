import {dataAttributes} from "./DataAttributes";


export class CharacterDetailsPageObjects {

  public getCharacterName() {
    return cy.get(dataAttributes.personName);
  }

  public getGender() {
    return cy.get(dataAttributes.personGender);
  }

  public getEyeColor() {
    return cy.get(dataAttributes.personEyeColor);
  }

  public getSkinColor() {
    return cy.get(dataAttributes.personSkinColor);
  }  
  public getBirthDate() {
    return cy.get(dataAttributes.personBirthyear);
  }

}
