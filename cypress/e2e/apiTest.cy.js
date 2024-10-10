import testData from '../fixtures/data.json';


describe('Reqres API User Creation Test', () => {
    const endPoint = Cypress.config('api');

    testData.forEach(data => {
        it(`should create user ${data.name} and validate response`, () => {
            cy.request('POST', `${endPoint}/users`, data)
                .then((response) => {
                    // Assert response code
                    expect(response.status).to.equal(201);

                    // Assert response schema
                    expect(response.body).to.have.property('name', data.name);
                    expect(response.body).to.have.property('job', data.job);

                    // Assert response time
                    expect(response.duration).to.be.lessThan(2000);

                    // Assert response headers
                    expect(response.headers['content-type']).to.include('application/json');
                });
        });
    });
});
