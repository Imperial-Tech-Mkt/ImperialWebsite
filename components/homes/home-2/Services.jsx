import { featureData } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="services-area-home space">

        <h2 className="services-title">Services</h2>
        <div className="row gy-4 services-card-wrapper">
          {featureData.map((elm, i) => (
            <div key={i} className="service-card">
                <div className="service-images">
                  <Image width={150} height={150} src={elm.image1} alt="service image" className="service-thumbnail"/>
                  <Image width={150} height={150} src={elm.image2} alt="service image" className="service-thumbnail"/>
                </div>
                <h4 className="feature-card-title">
                  <a href="#">{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <Link
                  scroll={false}
                  href={`/service-details/${elm.id}`}
                  className="link-btn"
                >
                  <span className="link-effect service-link">
                    <span className="effect-1">VIEW DETAILS</span>
                    <span className="effect-1">VIEW DETAILS</span>
                  </span>
                  <Image
                    width={13}
                    height={13}
                    src="/assets/img/icon/arrow-left-top.svg"
                    alt="icon"
                    className="service-link-icon"
                  />
                </Link>
            </div>
          ))}
          <div className="all-services-link-container">
            <p>We have a wide variety of commercial cleaning services for industries like retail, industrial manufacturing, multi-tenant buildings, medical, veterinarian, and more...</p>
            <Link href={"/"} className="all-services-link">VIEW ALL THE SERVICES</Link>
          </div>
        </div>
       
      </div>
  );
}
