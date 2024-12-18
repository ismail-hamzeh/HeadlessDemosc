import { Link, Text, Field, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';

const InfoSection = ({ fields }) => {
  return (
    <section className="info_section">
      <div className="container">
        <div className="info_top">
          <div className="row">
            <div className="col-md-3 ">
              <Link
                className="navbar-brand"
                field={fields.SiteLink as Field<LinkFieldValue>}
              ></Link>
            </div>
            <div className="col-md-5">
              <div className="info_contact">
                <Link field={fields.Location as Field<LinkFieldValue>}>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>{fields.Location.value.text}</span>
                </Link>
                <a href={'tel:' + fields.Number.value}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>{fields.Number.value}</span>
                </a>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="social_box">
                <Link field={fields.Facebook as Field<LinkFieldValue>}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link field={fields.Twitter as Field<LinkFieldValue>}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link field={fields.LinkedIn as Field<LinkFieldValue>}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link field={fields.Instagram as Field<LinkFieldValue>}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="info_bottom">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="info_detail">
                <Text tag="h5" field={fields.CompanyTitle}></Text>
                <Text tag="p" field={fields.CompanyDescription}></Text>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info_form">
                <h5>NEWSLETTER</h5>
                <form action="">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info_detail">
                <Text tag="h5" field={fields.ServicesTitle}></Text>
                <Text tag="p" field={fields.ServicesDescription}></Text>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="">
                <Text tag="h5" field={fields.UsefullinksTitle}></Text>
                <ul className="info_menu">
                  <li>
                    <Link field={fields.Home as Field<LinkFieldValue>}></Link>
                  </li>
                  <li>
                    <Link field={fields.About as Field<LinkFieldValue>}></Link>
                  </li>
                  <li>
                    <Link field={fields.Services as Field<LinkFieldValue>}></Link>
                  </li>
                  <li>
                    <Link field={fields.Team as Field<LinkFieldValue>}></Link>
                  </li>
                  <li className="mb-0">
                    <Link field={fields.ContactUs as Field<LinkFieldValue>}></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
