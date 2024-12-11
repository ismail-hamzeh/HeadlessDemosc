export const OurServicesQuery = `
 query OurServices {
  parent: item(
    path: "/sitecore/content/HeadlessSites/HeadlessDemosc/Data/OurServices"
    language: "en" 
  ) {
    Title: field(name: "Title") {
      value
    }
      Description: field(name: "Description") {
      value
    }
    Link: field(name: "Link") {
      jsonValue
    }
  }
  children: search(
    where: {
      AND: [
        { name: "_path", value: "D8D3F5D6-B5C4-4A39-BE5D-5DCF29CC1832", operator: CONTAINS }
        { name: "_templates", value: "7F17D7C0-0995-4CD0-890C-F61D8E26992E", operator: EQ }
      ]
    }
  ) {
    results {
      title: field(name: "Title") {
        value
      }
      description: field(name: "Description") {
        value
      }
      image: field(name: "Image") {
        jsonValue
      }
    }
  }
}
`;
