import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Landscape.css'
function Landscape() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      id: 1,
      title: "About The Project",
      text: "Refygee Ontology: Integration is a research-based web application designed to aid refugees, NGOs, and other organizations in understanding the factors that contribute to successful refugee integration in host countries. Our project utilizes advanced ontologies and a user-friendly QA chatbot system to provide comprehensive insights into this field.",
    },
    {
      id: 2,
      title: "How It Work",
      text: "Our platform uses ontologies to map out the complex factors and aspects related to refugee integration. Users can interact with our QA chatbot, which leverages these ontologies to provide detailed and relevant responses to queries.",
    },
    {
      id: 3,
      title: "Research Behind the Project",
      text: "This application is based on our research paper, ‘Refygee Ontology: Integration’. Our team has conducted extensive studies to understand the various elements that influence refugee integration, and this application is a practical implementation of our findings.",
    },
  ];

  return (
    <div className="card-body p-4">
      <h3 className="text-center" style={{ marginBottom: "50px" }}>
        Introduction
      </h3>
      <Slider {...settings} className="slider col-8 m-auto">
        {data.map((card) => (
          <div key={card.id} className="card card-item">
            <div className="card-body" style={{ padding: "50px 30px" }}>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Landscape;
