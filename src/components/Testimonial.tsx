import { GetStaticProps } from 'next';
import { SitecorePageProps } from 'lib/page-props';
import { FetchData } from 'src/pages/api/GraphQL/Services';
import { TestimonialQuery } from 'src/pages/api/GraphQL/TestimonialQuery';
import React, { useEffect } from 'react';
import { Text, Image, Field } from '@sitecore-jss/sitecore-jss-nextjs';

const Testimonial = (props: SitecorePageProps) => {
  const result = props.props.result;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap');
    }
  }, []);
  return (
    <section className="client_section layout_padding">
      <div className="container ">
        <div className="heading_container heading_center">
          <Text tag="h2" field={result.parent.Heading as Field<string>}></Text>
          <hr></hr>
        </div>
        <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {result.children.results.map((child, index) => {
              return (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="row">
                    <div className="col-lg-7 col-md-9 mx-auto">
                      <div className="client_container ">
                        <div className="img-box">
                          <img
                            src={child.Image.jsonValue.value.src}
                            alt={child.Image.jsonValue.value.alt}
                          ></img>
                        </div>
                        <div className="detail-box">
                          <Text tag="h5" field={child.Name as Field<string>}></Text>
                          <Text tag="p" field={child.TestimonialText as Field<string>}></Text>
                          <span>
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carousel_btn-box">
            <a
              className="carousel-control-prev"
              href="#carouselExample2Controls"
              role="button"
              data-bs-slide="prev"
            >
              <span>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExample2Controls"
              role="button"
              data-bs-slide="next"
            >
              <span>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await FetchData(TestimonialQuery);
  return {
    props: {
      result,
    },
  };
};

export default Testimonial;
