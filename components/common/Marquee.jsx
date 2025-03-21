"use client";
import Marquee from "react-fast-marquee";
import CustomerLogo from "./CustomerLogo";
export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "/assets/img/logos/PSI.jpg",
      companyName: "SKF",
      startDate: "2012",
    },
    {
      id: 2,
      href: "/assets/img/logos/SKF.jpg",
      companyName: "PSI",
      startDate: "2012",
    }, 
    {
      id: 3,
      href: "/assets/img/logos/Wttw.jpg",
      companyName: "WTTW Channel 11",
      startDate: "2012",
    },
    {
      id: 2,
      href: "/assets/img/logos/SKF.jpg",
      companyName: "PSI",
      startDate: "2012",
    }, 
    {
      id: 3,
      href: "/assets/img/logos/Wttw.jpg",
      companyName: "WTTW Channel 11",
      startDate: "2012",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <h3 className="text-center">Long lasting customer relationships</h3>
      <div 
        className={"slider__marquee clearfix marquee-wrap"}
        style={{padding: "0 !important"}}
      >
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={false}>
            {marQueeItems.map((elm, i) => (
              <CustomerLogo 
                key={i} 
                imageUrl={elm.href} 
                companyName={elm.companyName} 
                startDate={elm.startDate}
              />
            ))}
          </Marquee>
        </div>
      </div>
      <div className="logos-supportive-text">
        Our strong customer partnerships, built on simple <span className="fw-bold">30-day agreements, NO long-term contracts</span> is poof our system works!
      </div>
    </div>
  );
}
