import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStaticProps } from 'next';
import { SitecorePageProps } from 'lib/page-props';

const HeaderTop = (props: SitecorePageProps) =>{
  const fields = props.fields;
  return (
    <div className="header_top">
      <div className="container-fluid header_top_container">
        <div className="contact_nav">
          <Link field={fields.Location}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>{fields.Location.value.text}</span>
          </Link>
          <a href={'tel:' + fields.Number.value}>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>{fields.Number.value}</span>
          </a>
          <Link field={fields.Email}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>{fields.Email.value.text}</span>
          </Link>
        </div>
        <div className="social_box">
          <Link field={fields.Facebook}>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link field={fields.Twitter}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
          <Link field={fields.LinkedIn}>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
          <Link field={fields.Instagram}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      fields: props.fields
    },
  };
};

export default HeaderTop;
