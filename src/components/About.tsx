import { Text, Field, Link, LinkFieldValue, Image } from '@sitecore-jss/sitecore-jss-nextjs';

const About = ({fields}) =>{
    return(
        <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <div className="detail-box pr-md-2">
                <div className="heading_container">
                <Text tag="h2" field={fields.Title as Field<string>}></Text>
                </div>
                <Text tag="p" className="detail_p_mt" field={fields.Description as Field<string>}></Text>
                <Link field={fields.ReadMoreBtn as Field<LinkFieldValue>}></Link>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="img-box ">
                <Image className="box_img" field={fields.Image}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;