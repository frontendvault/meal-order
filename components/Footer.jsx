import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const footerNavigation = {
  company: [
    { name: "Blog", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About us", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Testimonials", href: "#" },
  ],
  customerService: [
    { name: "Legal policy", href: "#" },
    { name: "Status policy", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Terms of service", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

function Footer() {
  return (
    <div className="bg-gray-100  py-10 px-5 md:px-0 border-2 border-b-indigo-300">
      <footer aria-labelledby="footer-heading" className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Image section */}
          <div className="mb-10 text-gray-600">
            <Image src="/images/mpologo.png" alt="MPO" height={20} width={60} />
            <p className="mt-5 pt-3">Copyright © 2022 MPO</p>
            <p>All rights reserved.</p>

            <ul className="flex flex-row mt-6">
              <li className="social-icon cursor-pointer mr-3">
                {/* <Link href="/"> */}
                <FaInstagram className="text-blue-700" />
                {/* </Link> */}
              </li>
              <li className="social-icon cursor-pointer mr-3">
                <FaDribbble className="text-blue-700" />
              </li>
              <li className="social-icon cursor-pointer mr-3">
                <FaTwitter className="text-blue-700" />
              </li>
              <li className="social-icon cursor-pointer mr-3">
                <FaYoutube className="text-blue-700" />
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-base font-bold text-gray-900">Company</h3>
            <ul role="list" className="mt-3 space-y-1">
              {footerNavigation.company.map((item) => (
                <li key={item.name} className="text-base">
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <ul role="list" className="mt-1  ">
              {footerNavigation.customerService.map((item) => (
                <li key={item.name} className="text-base ">
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900">
              Get updates
            </h3>

            <form className="mt-2 flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="flex w-full  appearance-none border border-r-none  border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="outline-none w-full"
                />
                <div className=" ">
                  <button
                    type="submit"
                    className="border-transparent  py-2 px-4 text-base font-medium  focus:outline-none "
                  >
                    {/* <HiPaperAirplane className="h-6 w-6 text-black" /> */}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
