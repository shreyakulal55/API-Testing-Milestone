describe("API test", () => {
  const baseURL = "https://api.trello.com";
  const apiKey = ""; // API Key here
  const apiToken = ""; // Token Here

  let id; // id of a board

  //Create a board
  it("Creating a new Trello Board", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/1/boards",
      qs: {
        name: "My first board",
        key: apiKey,
        token: apiToken,
      },
    }).then((response) => {
      const res = JSON.parse(JSON.stringify(response.body));
      id = res.id;
      expect(response.status).to.eql(200);
    });
  });

  //Get a Board
  it("Get Trello Board", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/1/boards/" + id,
      qs: {
        key: apiKey,
        token: apiToken,
      },
    }).then((response) => {
      const res = JSON.parse(JSON.stringify(response.body));
      id = res.id;
      expect(response.status).to.eql(200);
    });
  });

  //update a Board
  it("Update Trello Board", () => {
    cy.request({
      method: "PUT",
      url: baseURL + "/1/boards/" + id,
      qs: {
        name: "Updated name",
        key: apiKey,
        token: apiToken,
      },
    }).then((response) => {
      const res = JSON.parse(JSON.stringify(response.body));
      id = res.id;
      expect(response.status).to.eql(200);
    });
  });

  //Delete a Board
  it("Delete Trello Board", () => {
    cy.wait(5000);
    cy.request({
      method: "DELETE",
      url: baseURL + "/1/boards/" + id,
      qs: {
        name: "Updated name",
        key: apiKey,
        token: apiToken,
      },
    }).then((response) => {
      const res = JSON.parse(JSON.stringify(response.body));
      id = res.id;
      expect(response.status).to.eql(200);
    });
  });
});
