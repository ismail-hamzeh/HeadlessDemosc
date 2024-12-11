import { Link, Field, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';

const HeaderBottom = ({ fields }) => {
  return (
    <div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" field={fields.SiteLink as Field<LinkFieldValue>}></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              {fields.NavigationList.map((child, index) => {
                return (
                  <li key={index} className={`nav-item ${index === 0 ? 'active' : ''}`}>
                    <a className="nav-link" href={child.url}>
                      {child.name} <span className="sr-only">(current)</span>
                    </a>
                  </li>
                );
              })}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Login</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBottom;
