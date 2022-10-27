const characters = [
  {"name": "Leia Organa", "hair_color": "brown", "gender": "female"},
  {"name": "C-3PO", "hair_color": "n/a", "gender": "n/a"},
  {"name": "Beru Whitesun lars", "hair_color": "brown", "gender": "female"},
];

describe("Given there is Star Wars information needed", () => {
    characters.forEach((character) => {
      describe("When I search for Star Wars planets", () => {
        it(`should find all ${character.name}'s details in the results`, () => {
          cy.request({
            method: "GET",
            url: "https://swapi.dev/api/people/" + '?search=' + character.name,
          }).as("getCharacters");
          cy.get('@getCharacters').then(people => {
            expect(people.status).to.eq(200);
            expect(people.body.results[0].gender).to.be.a('string').to.eq(character.gender);
            expect(people.body.results[0].name).to.be.a('string').to.eq(character.name);
            expect(people.body.results[0].hair_color).to.be.a('string').to.eq(character.hair_color);
        });
      });
    });
  });
});