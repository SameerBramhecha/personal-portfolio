
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import backImg from "../assets/img/footer-bg.png"
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" style={{ backgroundImage: { backImg } }}>
      <div className="container">
        <div className="row" >
          <div className="col-12" >
            <div className="skill-bx wow zoomIn" >
              <h2>Skills</h2>
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/128/226/226777.png" alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="C++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygBZ1TrcGKZlQgk7FW8XfqwMB5HGXJr8AidPMuglLe8z8Z1WHK_aSj0AfJTHDB9J2aw&usqp=CAU" alt="MySQL" />
                  <h5>MySQL</h5>
                </div>

                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="MongoDB" style={{ height: 155 }} />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
