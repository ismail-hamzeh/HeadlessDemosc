import { Text, Image, Field } from '@sitecore-jss/sitecore-jss-nextjs';

const ContactUs = ({fields}) => {

  return (
    <section className="contact_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img-box ">
              <Image field={fields.Image} className="box_img"></Image>
            </div>
          </div>
          <div className="col-md-5 mx-auto">
            <div className="form_container">
              <div className="heading_container heading_center">
                <Text tag="h2" field={fields.Heading as Field<string>}></Text>
              </div>
              <form action="">
                <div className="form-row">
                  <div className="form-group col">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="form-group col-lg-6">
                    <select name="" id="" className="form-control wide">
                      <option value="">Select Service</option>
                      {fields.ServicesList.map((service, index) => {
                        return(
                        <option key={index} value="">{service.fields.Name.value}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input type="text" className="message-box form-control" placeholder="Message" />
                  </div>
                </div>
                <div className="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
