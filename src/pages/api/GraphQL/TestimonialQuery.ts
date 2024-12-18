import { TestimonialDataPath, TestimonialItemTemplateID } from './Constants';

export const TestimonialQuery = 
`
 query Testimonial {
  parent: item(
    path: "${TestimonialDataPath}"
    language: "en" 
  ) {
    Heading: field(name: "Heading") {
      value
    }
  }
  children: search(
    where: {
      AND: [
        { name: "_path", value: "${TestimonialDataPath}", operator: CONTAINS }
        { name: "_templates", value: "${TestimonialItemTemplateID}", operator: EQ }
      ]
    }
  ) {
    results {
      Name: field(name: "Name") {
        value
      }
      TestimonialText: field(name: "TestimonialText") {
        value
      }
      Image: field(name: "Image") {
        jsonValue
      }
    }
  }
}
`