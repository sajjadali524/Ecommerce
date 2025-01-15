import { RiExchangeFundsLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const Policy = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:px-32 md:px-32 px-3 py-20">

      <div className="flex flex-col items-center">
        <RiExchangeFundsLine className="text-3xl font-semibold mb-5" />
        <h1 className="text-[16px] font-semibold">Easy Exchange Policy</h1>
        <p className="text-[14px] opacity-80">
          We offer hossie free exchange policy
        </p>
      </div>

      <div className="flex flex-col items-center">
        <TbTruckReturn className="text-3xl font-semibold mb-5" />
        <h1 className="text-[16px] font-semibold">7 Days Return Policy</h1>
        <p className="text-[14px] opacity-80">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="flex flex-col items-center">
        <RiCustomerService2Fill className="text-3xl font-semibold mb-5" />
        <h1 className="text-[16px] font-semibold">Best Customer Support</h1>
        <p className="text-[14px] opacity-80">
          We provide 24/7 customer support
        </p>
      </div>
      
    </div>
  );
};

export default Policy;