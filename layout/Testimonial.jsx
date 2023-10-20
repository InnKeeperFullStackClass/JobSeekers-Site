import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonials } from "./constants";

const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section p-6 text-center">
      <style jsx>{`
        .testimonial-section {
          padding: 2rem 0;
        }

        .testimonial-card {
          max-width: 500px;
          margin: 0 auto;
          border-radius: 0.375rem;
          background-color: #ffffff;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 1rem;
        }

        .testimonial-card h3 {
          color: #f57e7c;
        }

        .testimonial-card p {
          color: #595959;
          margin-bottom: 1rem;
        }

        .testimonial-rating {
          color: #3a9ea3;
        }

        .testimonial-info {
          text-align: left;
        }

        .testimonial-author {
          color: #555555;
        }
      `}</style>

      <Slider className="testimonial-slider" {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-rating">*****</p>
            <p>{testimonial.quote}</p>
            <div className="testimonial-info">
              <p className="testimonial-author">
                - {testimonial.author}, {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
