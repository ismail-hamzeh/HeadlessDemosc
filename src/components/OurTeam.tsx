'use client';
import { GetStaticProps } from 'next';
import { SitecorePageProps } from 'lib/page-props';
import { FetchData } from 'src/pages/api/GraphQL/Services';
import { OurTeamQuery } from 'src/pages/api/GraphQL/OurTeamQuery';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Text, Field, Image } from '@sitecore-jss/sitecore-jss-nextjs';

const OurTeam = (props: SitecorePageProps) => {
  const result = props.props.result;

  const settings = {
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="team_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <Text tag="h2" field={result.parent.Heading as Field<string>}></Text>
          <Text tag="p" field={result.parent.Description as Field<string>}></Text>
        </div>

        <div className="row">
          <div className="carousel-wrap ">
            <div className="service_owl-carousel owl-carousel"></div>
            <Slider {...settings}>
              {result.children.results.map((child, index) => {
                return (
                  <div key={index} className="col-md-4 col-sm-6 mx-5">
                    <div className="box mx-3">
                      <div className="img-box">
                      <Image field={child.Image.jsonValue}></Image>
                      </div>
                      <div className="detail-box">
                        <Text tag="h5" field={child.Name as Field<string>}></Text>
                        <Text tag="h6" field={child.Position as Field<string>}></Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await FetchData(OurTeamQuery);
  return {
    props: {
      result,
    },
  };
};

export default OurTeam;
