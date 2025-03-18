import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-2" id="hero">
      <div className="hero-2-thumb wow img-custom-anim-right animated hero-img-container">
        <div className="hero-image-background"></div>
          <Image
            width={1082}
            height={728}
            src="/assets/img/hero/Hero-Banner1082x728.png"
            alt="img"
          />
      </div>
      <div className="container">
        <div className="hero-style2">
          <div className="row">
            <div className="col-lg-9 ">
              <h1 className="hero-title wow img-custom-anim-right animated">
                Commercial Cleaning Services
              </h1>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <p className="hero-text wow img-custom-anim-left animated">
                Imperial is more than cleaning; with a dedicated <span className="fw-bold"> <span className="fst-italic">True</span> quality control</span> team, <span className="fw-bold">24/7 <span className="fst-italic">Live</span> customer support</span>, and multi-level supervision, we deliver top tier janitorial and commercial cleaning services.              
              </p>
              <div className="btn-group fade_left justify-content-center">
                <Link
                  scroll={false}
                  href="/project"
                  className="btn style2 wow img-custom-anim-left animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">SERVICES</span>
                    <span className="effect-1">SERVICES</span>
                  </span>
                </Link>
                <Link
                  scroll={false}
                  href="/contact"
                  className="btn style2 wow img-custom-anim-left animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">CONTACT</span>
                    <span className="effect-1">CONTACT</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-left contact-and-locations">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
              <div className="wow img-custom-anim-right animated">
                <h2>Services</h2>
                <p>We offer specialized services to <span className="fw-bold">keep your business clean</span>, such as Janitorial, Post Construction Cleaning, Window Washing, Power washing, Kitchen Cleaning, Floor Scrubbing, Deep Cleaning, Warehouse cleaning, Day Porter, Kitchen cleaning, Parking lot sweeping, and more...</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
              <div className="wow img-custom-anim-right animated">
                <h2>Regions:</h2>
                <p className="hero-contact-wrap locations">
                <Link
                  scroll={false}
                  href="/Illinois"
                  className="location-link"
                >Illinois
                </Link>,&nbsp;  
                <Link
                  scroll={false}
                  href="/Indiana"
                  className="location-link"
                >Indiana 
                </Link>,&nbsp; 
                <Link
                  scroll={false}
                  href="/Wisconsin"
                  className="location-link"
                >Wisconsin 
                </Link>,&nbsp; 
                <Link
                  scroll={false}
                  href="/Ohio"
                  className="location-link"
                >Ohio 
                </Link>,&nbsp; 
                <Link
                  scroll={false}
                  href="/Pennsylvania"
                  className="location-link"
                >Pennsylvania
                </Link>, and, Florida.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
