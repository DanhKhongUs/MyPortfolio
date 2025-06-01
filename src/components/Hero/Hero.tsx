import { Link as ScrollLink } from "react-scroll/modules";
import image from "~/assets/image/imageHero/image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-24 md:pt-28 bg-cover bg-center mt-10"
    >
      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm Thanh Danh!
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold">
            A Frontend Developer passionate about creating beautiful and
            responsive websites.
          </p>
          <p className="mt-4 mb-8 text-gray-600 md:text-lg leading-relaxed">
            React | JavaScript | TypeScript <br />
            HTML | CSS | Sass | TailwindCSS
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ScrollLink
              smooth={true}
              offset={-80}
              spy={true}
              to="contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition cursor-pointer"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
