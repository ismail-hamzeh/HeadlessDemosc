const InfoSection = ({fields}) =>{
    return(
        <section className="info_section">
        <div className="container">
          <div className="info_top">
            <div className="row">
              <div className="col-md-3 ">
                <a className="navbar-brand" href={fields.SiteLink.value.href}>
                  {fields.SiteLink.value.anchor}
                </a>
              </div>
              <div className="col-md-5 ">
                <div className="info_contact">
                  <a href={fields.Location.value.href}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                    {fields.Location.value.text}
                    </span>
                  </a>
                  <a href={"tel:" + fields.Number.value}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                    {fields.Number.value}
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="social_box">
                  <a href={fields.Facebook.value.href}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href={fields.Twitter.value.href}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href={fields.LinkedIn.value.href}>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href={fields.Instagram.value.href}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="info_bottom">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="info_detail">
                  <h5>
                  {fields.CompanyTitle.value}
                  </h5>
                  <p>
                  {fields.CompanyDescription.value}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info_form">
                  <h5>
                    NEWSLETTER
                  </h5>
                  <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info_detail">
                  <h5>
                  {fields.ServicesTitle.value}
                  </h5>
                  <p>
                  {fields.ServicesDescription.value}
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="">
                  <h5>
                  {fields.UsefullinksTitle.value}
                  </h5>
                  <ul className="info_menu">
                    <li>
                      <a href={fields.Home.value.href}>
                      {fields.Home.value.anchor}
                      </a>
                    </li>
                    <li>
                      <a href={fields.About.value.href}>
                      {fields.About.value.anchor}
                      </a>
                    </li>
                    <li>
                      <a href={fields.Services.value.href}>
                      {fields.Services.value.anchor}
                      </a>
                    </li>
                    <li>
                      <a href={fields.Team.value.href}>
                      {fields.Team.value.anchor}
                      </a>
                    </li>
                    <li className="mb-0">
                      <a href={fields.ContactUs.value.href}>
                      {fields.ContactUs.value.anchor}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default InfoSection;