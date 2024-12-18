'use client';
import React, { useEffect } from 'react';
import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

const MainSlider = ({ fields }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap');
    }
  }, []);

  return (
    <section className="slider_section">
      <div id="carouselExampleIndicators" className="carousel slide m-5" data-ride="carousel">
        <div className="carousel-inner">
          {fields.items.map((child, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-md-11 mx-auto">
                    <div className="detail-box">
                      <Text tag="h1" field={child.fields.Heading}></Text>
                      <Text tag="p" field={child.fields.Description}></Text>
                      <div className="btn-box">
                        <Link className="btn1" field={child.fields.Link}></Link>
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

export default MainSlider;
