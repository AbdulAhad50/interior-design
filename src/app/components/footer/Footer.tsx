import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#40513B] py-16 max-w-[1440px] mx-auto">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Company */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <Image src={"/f_logo.png"} alt={""} width={300} height={300}/>
            <p className="text-white text-sm font-medium mb-8 mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, minus!
            </p>
           
          </div>

          {/* Help */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-3xl mt-2">Services</h4>
             <ul className="space-y-2 mt-8 text-white">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Process</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-3xl mt-2">Services</h4>
            <ul className="space-y-2 mt-8 text-white">
              <li><a href="#" className="footer-link">Arch Design</a></li>
              <li><a href="#" className="footer-link">Interior Design</a></li>
              <li><a href="#" className="footer-link">Urban Planning</a></li>
              <li><a href="#" className="footer-link">Project Manage</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-3xl mt-2">Social links</h4>
            <div className="flex gap-3 mt-8">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }:{icon:string | unknown}) {
  return (
    <a
      href="#"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition hover:bg-white hover:text-[#24262b]"
    >
      {icon}
    </a>
  );
}
