import { useEffect } from 'react';
import { Link, Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';

const Footer = ({fields}) => {
  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const displayYear = document.querySelector("#displayYear");
    if (displayYear) {
      displayYear.innerHTML = currentYear.toString();
    }
  }, []);

  return (
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span><Text field={fields.FooterText as Field<string>}></Text>
        <b><Link className='CompanyName' field={fields.CompanyName}></Link></b>
      </p>
    </div>
  );
}

export default Footer;
