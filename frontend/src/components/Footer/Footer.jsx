import { Link } from "react-router-dom";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 w-full lg:px-32 md:px-32 px-3 py-10 mt-20">
      <div className="flex flex-col lg:w-[80%] w-full space-y-5">
         <Link to="/" className="font-semibold text-pink-600">
          ECO<sapn className="text-black">MMERCE</sapn>
        </Link>
        <p className="opacity-80">Lorem, ipsum dolor sit doloribus asperiores rerum corrupti suscipit sit, doloremque fuga esse voluptate blanditiis harum sint sed voluptatibus quibusdam architecto.</p>
      </div>

      <div className="flex lg:gap-32 md:gap-32 gap-10">
      <div className="space-y-5">
        <h1 className="font-semibold">COMPANY</h1>
        <div className="flex flex-col gap-1">
          {
            footerLinks.map((link, index) => {
              return(
                <Link key={index} to={link.path} className="opacity-80 hover:text-slate-500">{link.title}</Link>
              )
            })
          }
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="font-semibold">GET IN TOUCH</h1>
        <div className="flex flex-col gap-1">
          <p className="opacity-80">+923483490880</p>
          <p className="opacity-80">engr.sajjadali2001@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;
