import { Link } from "react-router-dom";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 w-full lg:px-32 md:px-32 px-3 py-10">
      <div className="flex flex-col w-[80%]">
         <Link to="/" className="font-[500] text-pink-600">
          ECO<sapn className="text-black">MMERCE</sapn>
        </Link>
        <p>Lorem, ipsum dolor sit doloribus asperiores rerum corrupti suscipit sit, doloremque fuga esse voluptate blanditiis harum sint sed voluptatibus quibusdam architecto.</p>
      </div>

      <div className="flex gap-32">
      <div className="flex flex-col">
        <h1>COMPANY</h1>
        {
          footerLinks.map((link, index) => {
            return(
              <Link key={index} to={link.path}>{link.title}</Link>
            )
          })
        }
      </div>

      <div className="flex flex-col">
        <h1>GET IN TOUCH</h1>
        <p>+923483490880</p>
        <p>engr.sajjadali2001@gmail.com</p>
      </div>
      </div>
    </div>
  )
}

export default Footer;
