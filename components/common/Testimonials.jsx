"use client";

import { portfoliotestimonials } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useRef } from "react";
import Slider from "react-slick";

const testimonials = [
    {
      id: 1,
      name:"Mimi Weisberg",
      testimonial: "I just wanted to let you know that our Holy Days are the most traveled days in our building and because of your crew, we were able to serve our congregational family, flawlessly! Your team is professional and kind and willing to do whatever we put in front of them.",  
      jobTitle:"Director",
      company:"Anshe Emet Synagogue",
      location: "Chicago, IL"
    },
    {
      id: 2,
      name: "Adrienne Murphy",
      testimonial: "Imperial does such a great job at all our locations. We are very happy with their level of service and their prompt response on any issue that come up.",
      jobTitle: "Manager",  
      company: "Expeditors Chicago",
      location: "Chicago, IL",
    
    },
    {
      id: 3,
      name: "Tom Reboletti",
      testimonial: "I just wanted to let you know how pleased we are with Imperial’s service in our condo building, the place looks great, and residents are extremely happy how clean the building is. Our thanks to your crew at Medinah on the Lakes in Bloomingdale, IL.",
      jobTitle: "Owner",  
      company: "Medinah on the Lakes",
      location: "Bloomingdale, IL"
    },
  ];

  function PrevArrow(props) {
    const {  onClick } = props;
    return (
    <div className="slider-arrow-container-left">
        <div
            className="fa fa-arrow-left slider-arrow arrow-left"
            aria-hidden="true"
            onClick={onClick}
        />
    </div>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
    <div className="slider-arrow-container-right">
      <div
        className="fa fa-arrow-right slider-arrow arrow-right"
        aria-hidden="true"
        onClick={onClick}
      />
    </div>
    );
  } 

export default function Testimonials() {
  const sliderSettings = {
    slidesToShow: 1,
    arrows: true, // Removes navigation buttons
    autoplay: false, // Enable autoplay
    autoplaySpeed: 1500, // 3 seconds per slide
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens (lg)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992, // Medium screens (md)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // Extra small screens (xs)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <div className="project-area-11 overflow-hidden">
      <div className="container-fluid">
        <div>
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            className="row global-carousel"
          >
            {testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="testimonial-slide">
                
                <div className="testimonial-content">
                    <i class="fa fa-solid fa-quote-left"></i>
                    <div className="testimonial-text">{testimonial.testimonial}</div>
                    <div className="testimonial-rating">
                        <i class="fa-solid fa fa-star"></i>
                        <i class="fa-solid fa fa-star"></i>
                        <i class="fa-solid fa fa-star"></i>
                        <i class="fa-solid fa fa-star"></i>
                        <i class="fa-solid fa fa-star"></i>
                    </div>
                    <div className="testimonial-author">{testimonial.name}</div>
                    <div className="testimonial-author">{testimonial.jobTitle}, {testimonial.company}</div>
                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
