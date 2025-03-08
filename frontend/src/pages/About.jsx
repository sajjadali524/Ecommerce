import { about_image } from "../constants/images";
const About = () => {
  return (
    <div className="lg:flex md:flex block gap-10 lg:px-32 px-3 ">
      <div className="flex flex-col items-center justify-center lg:mt-28 md:mt-28 mt-28 w-full">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold lg:text-[18px] md:text-[18px] text-[14px]">
            ABOUT US
          </h1>
          <span className="lg:flex md:flex hidden bg-black w-20 h-[3px]"></span>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center pt-14 lg:gap-0 md:gap-0 gap-10">
          <div className="">
            <img src={about_image} alt="image" />
          </div>
          <div className="space-y-5 text-justify">
            <p className="">
              Our journey began to create a platform where customers can find
              unique and affordable products without the hassle. we strive to
              offer something for everyone, with new arrivals added regularly to
              keep things fresh and exciting.
            </p>
            <p>
              customer satisfaction is at the heart of everything we do. Our
              dedicated support team is always ready to assist, making sure your
              experience with us is smooth from browsing to checkout. Thank you
              for choosing us.
            </p>
            <h1 className="font-extrabold">Our Mission</h1>
            <p>
              our mission is to make online shopping effortless, affordable, and
              inspiring for everyone. We aim to bring high-quality products to
              your doorstep while ensuring a seamless and enjoyable shopping
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;