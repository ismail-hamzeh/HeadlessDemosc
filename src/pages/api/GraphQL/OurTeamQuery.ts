export const OurTeamQuery = `
   query OurTeam {
  parent: item(
    path: "/sitecore/content/HeadlessSites/HeadlessDemosc/Data/OurTeam"
    language: "en" 
  ) {
    Heading: field(name: "Heading") {
      value
    }
      Description: field(name: "Description") {
      value
    }
  }
  children: search(
    where: {
      AND: [
        { name: "_path", value: "697A8A54-1C11-4F2A-9237-9C3C7F66537B", operator: CONTAINS }
        { name: "_templates", value: "6219C911-A5E5-4ADD-A007-330A34352540", operator: EQ }
      ]
    }
  ) {
    results {
      Name: field(name: "Name") {
        value
      }
      Position: field(name: "Position") {
        value
      }
      Image: field(name: "Image") {
        jsonValue
      }
    }
  }
}
`;
