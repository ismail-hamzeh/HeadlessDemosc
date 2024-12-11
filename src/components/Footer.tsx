import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // to get current year
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
        &copy; <span id="displayYear"></span> All Rights Reserved By 
        <a href="https://html.design/"> Free Html Templates</a>
      </p>
    </div>
  );
}

export default Footer;
