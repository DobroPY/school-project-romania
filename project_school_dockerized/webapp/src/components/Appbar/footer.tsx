import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="relative pb-5">
        {/* Desktop View Only */}
        <div className="pt-10 pb-0 mt-16 flex items-center justify-between max-md:hidden px-8per md:h-200 bg-transparent w-full z-50">
          <div className="">
            <div className="flex items-center gap-14">
              <div className="flex items-center gap-2 text-white text-36">
                <FaFacebookF className="bg-main p-1" />
                <BsTwitter className="bg-main p-1" />
                <BsInstagram className="bg-main p-1" />
              </div>

              <ul className="flex items-center gap-8 text-18 leading-24 text-white">
                <li className="blue-bullet">Home</li>
                <li className="blue-bullet">Login</li>
                <li className="blue-bullet">Students</li>
              </ul>
            </div>
            <p className="mt-10 text-18 leading-24 text-white">
              Copyright notice: © 2023 [Your Company Name]. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile View Only */}
        <div className="w-full px-8per md:hidden md:mt-0 mt-20">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-36 text-white">
              <FaFacebookF className="bg-main p-1" />
              <BsTwitter className="bg-main p-1" />
              <BsInstagram className="bg-main p-1" />
            </div>
          </div>
          <div className="w-full">
            <ul className="flex items-center justify-center gap-8 text-18 leading-24 text-white">
              <li className="blue-bullet">Home</li>
              <li className="blue-bullet">Login</li>
              <li className="blue-bullet">Students</li>
            </ul>
          </div>
          <hr className="border-main my-4" />
          <div className="">
            <p className="text-13 leading-24 text-white text-center mb-5">
              Copyright notice: © 2023 [Your Company Name]. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
