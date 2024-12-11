export const TestimonialQuery = 
`
 query Testimonial {
  parent: item(
    path: "/sitecore/content/HeadlessSites/HeadlessDemosc/Data/Testimonial"
    language: "en" 
  ) {
    Heading: field(name: "Heading") {
      value
    }
  }
  children: search(
    where: {
      AND: [
        { name: "_path", value: "F966BFE3-29EA-4915-86DE-21DB69FD1E47", operator: CONTAINS }
        { name: "_templates", value: "A26C8E93-2345-4F57-A3E4-906A5156DDD9", operator: EQ }
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