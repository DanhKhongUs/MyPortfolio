import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import imageCoder from "~/assets/image/imageCoder/imageCoder.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative pt-24 pb-24 md:pt-28 bg-cover bg-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 z-10 relative">
        {/* Left: Text */}
        <div className="md:w-3/5 text-gray-800">
          <h2 className="text-4xl font-bold mb-6 relative text-center md:text-left">
            About Me
            <hr className="absolute w-12 border-t-4 border-teal-600 rounded mt-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0" />
          </h2>
          <p className="mb-4 leading-relaxed">
            I'm a{" "}
            <span className="font-bold text-teal-700">Frontend Developer</span>{" "}
            from Phu Yen, now living in Ho Chi Minh City. With a strong passion
            for <span className="font-bold text-teal-700">technology</span> and
            innovation, I constantly strive to improve my skills and push the
            limits of what's possible in web development.
          </p>
          <p className="mb-4 leading-relaxed">
            I recently completed a 1-year{" "}
            <Link
              to="https://fullstack.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 hover:underline"
            >
              Frontend Training Course
            </Link>{" "}
            <span className="font-bold text-teal-700">by F8</span>, where I
            gained hands-on experience in modern web technologies and best
            practices.
          </p>
          <p className="mb-4 leading-relaxed">
            Currently working as a programming intern,{" "}
            <span className="font-bold text-teal-700">
              I'm actively looking for full-time opportunities to grow,
              contribute, and make an impact as a professional Frontend
              Developer.
            </span>{" "}
            <ScrollLink
              to="contact"
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              className="font-bold text-blue-600 cursor-pointer hover:underline"
            >
              Contact me
            </ScrollLink>
            !
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-2/5 flex justify-center">
          <img
            src={imageCoder}
            alt="About"
            className="rounded-xl shadow-lg w-[350px] md:w-[420px] transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
