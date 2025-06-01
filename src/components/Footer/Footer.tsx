import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" w-full bg-gray-800 text-gray-300 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6 md:flex-row md:justify-between items-center text-center">
        <div className="flex flex-row font-semibold items-center justify-center space-x-1 text-gray-200 text-2xl">
          @ {currentYear} My Portfolia
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link to="https://github.com/DanhKhongUs" target="_blank">
            <FontAwesomeIcon
              size="3x"
              className="hover:-translate-y-1  transition cursor-pointer"
              icon={faGithub}
            />
          </Link>
          <Link
            to="https://www.facebook.com/danh.nguyenthanh.923519?locale=vi_VN"
            target="_blank"
          >
            <FontAwesomeIcon
              size="3x"
              className="text-[#0866ff] hover:-translate-y-1  transition cursor-pointer"
              icon={faFacebook}
            />
          </Link>
          <Link to="https://www.instagram.com/heloodanh/" target="_blank">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-3xl transition-colors duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
