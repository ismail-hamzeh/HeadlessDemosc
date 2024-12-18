import { GetStaticProps } from 'next';
import { SitecorePageProps } from 'lib/page-props';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FetchData } from 'src/pages/api/GraphQL/Services';
import { OurServicesQuery } from 'src/pages/api/GraphQL/OurServicesQuery';
import { Text, Field, Link, LinkFieldValue, Image } from '@sitecore-jss/sitecore-jss-nextjs';

const OurServices = (props: SitecorePageProps) => {
  const result = props.props.result;

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
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
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center ">
          <Text tag="h2" field={result.parent.Title.jsonValue as Field<string>}></Text>
          <Text tag="p" field={result.parent.Description.jsonValue as Field<string>}></Text>
        </div>
        <div className="service_container">
          <div className="carousel-wrap ">
            <div className="service_owl-carousel owl-carousel"></div>
            <Slider {...settings}>
              {result.children.results.map((child, index) => {
                return (
                  <div key={index} className="item">
                    <div className="box ">
                      <div className="img-box">
                        <Image field={child.image.jsonValue}></Image>
                      </div>
                      <div className="detail-box">
                        <Text tag="h5" field={child.title.jsonValue as Field<string>}></Text>
                        <Text tag="p" field={child.description.jsonValue as Field<string>}></Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <Link field={result.parent.Link.jsonValue as Field<LinkFieldValue>}></Link>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await FetchData(OurServicesQuery);
  return {
    props: {
      result,
    },
  };
};

export default OurServices;
