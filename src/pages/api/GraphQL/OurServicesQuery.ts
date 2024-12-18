import { OurServiceDataPath, OurServiceItemTemplateID } from './Constants';

export const OurServicesQuery = `
query {
  parent: item(
    path: "${OurServiceDataPath}"
    language: "en"
  ) {
    ... on OurServices {
      Title: field(name: "Title") {
        ... on TextField {
          jsonValue
        }
      }
      Description: field(name: "Description") {
        ... on TextField {
          jsonValue
        }
      }
      Link: field(name: "Link") {
        ... on LinkField {
          jsonValue
        }
      }
    }
  }
  children: search(
    where: {
      AND: [
        { name: "_path", value: "${OurServiceDataPath}", operator: CONTAINS }
        { name: "_templates", value: "${OurServiceItemTemplateID}", operator: EQ }
      ]
    }
  ) {
    results {
      ... on OurServicesItem {
        title: field(name: "Title") {
          ... on TextField {
            jsonValue
          }
        }
        description: field(name: "Description") {
          ... on TextField {
            jsonValue
          }
        }
        image: field(name: "Image") {
          ... on ImageField {
            jsonValue
          }
        }
      }
    }
  }
}
`;
