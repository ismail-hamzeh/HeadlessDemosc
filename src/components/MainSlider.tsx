'use client';
import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { SitecorePageProps } from 'lib/page-props';

const MainSlider = (props: SitecorePageProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap');
    }
  }, []);

  const carouselData = props.props.staticData;

  return (
    <section className="slider_section">
 <div
        id="carouselExampleIndicators"
        className="carousel slide m-5"
        data-ride="carousel" 
      >
       <div className="carousel-inner">
          {carouselData.map((child, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-md-11 mx-auto">
                    <div className="detail-box">
                      <h1>{child.fields.Heading.value}</h1>
                      <p>{child.fields.Description.value}</p>
                      <div className="btn-box">
                        <a
                          href={child.fields.Link.value.href}
                          className="btn1"
                        >
                          {child.fields.Link.value.anchor}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev" 
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next" 
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
        </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      staticData: props.fields.items,
    },
  };
};

export default MainSlider;
