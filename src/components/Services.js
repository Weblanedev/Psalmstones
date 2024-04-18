"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            alt="video banner"
            className="object-contain w-full rounded-3xl"
          />
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
           
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
            About Psalmstones Technologies Ltd
            </h2>
          </div>
          <p className="leading-loose">
          At Psalmstones Technologies Ltd, we're passionate about helping you turn your house into a home with our exquisite selection of home decor products. From stylish furniture to elegant accents, we offer everything you need to create spaces that reflect your personality and enhance your lifestyle.
          At Psalmstones Technologies Ltd, our mission is to inspire and empower you to express your unique sense of style through beautifully curated home decor. With our extensive range of products, personalized service, and expert advice, we're here to make your home decor dreams a reality
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
