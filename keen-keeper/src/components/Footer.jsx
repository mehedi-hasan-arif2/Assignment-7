import fbIcon from "../assets/facebook.png";
import igIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#24473D] text-white pt-16 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Content */}
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            KeenKeeper
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed mb-8">
            Your personal shelf of meaningful connections. Browse, tend,
            and nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div className="mb-14">
            <p className="text-sm mb-5 text-white">
              Social Links
            </p>

            <div className="flex items-center justify-center gap-4">

              {/* Instagram */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={igIcon}
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={fbIcon}
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#35584E] pt-6 text-xs text-gray-300">

          <p className="mb-4 md:mb-0">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;