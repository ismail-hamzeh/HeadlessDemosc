import { OurTeamDataPath, OurTeamItemTemplateID } from './Constants';

export const OurTeamQuery = `
   query OurTeam {
  parent: item(
    path: "${OurTeamDataPath}"
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
        { name: "_path", value: "${OurTeamDataPath}", operator: CONTAINS }
        { name: "_templates", value: "${OurTeamItemTemplateID}", operator: EQ }
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
