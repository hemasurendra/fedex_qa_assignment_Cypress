const parameters = [
  {"name": "Tatooine", "population": "200000", "climate": "arid"},
  {"name": "Alderaan", "population": "2000000000", "climate": "temperate"},
  {"name": "Hoth", "population": "unknown", "climate": "frozen"},
];

describe("Given there is Star Wars information needed", () => {
    parameters.forEach((parameter) => {
      describe("When I search for Star Wars planets", () => {
        it(`should find all ${parameter.name}'s details in the results`, () => {
          cy.request({
            method: "GET",
            url: "https://swapi.dev/api/planets/" + '?search=' + parameter.name,
          }).as("getPlanets");
          cy.get('@getPlanets').then(planets => {
            expect(planets.status).to.eq(200);
            expect(planets.body.results[0].population).to.be.a('string').to.eq(parameter.population);
            expect(planets.body.results[0].name).to.be.a('string').to.eq(parameter.name);
            expect(planets.body.results[0].climate).to.be.a('string').to.eq(parameter.climate);
        });
      });
    });
  });
});