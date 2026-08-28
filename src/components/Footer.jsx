const Footer = () => {
  return (
    <div className="mt-8 flex w-full max-w-[2000px] flex-col items-center justify-between overflow-hidden bg-slate-800 px-12 py-8 text-white dark:bg-gray-900 dark:text-white/70 lg:gap-12">
      <div className="hidden w-full items-start justify-evenly lg:flex">
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>Quick access</span>
          <p>Blog</p>
          <p>Today's phone prices</p>
          <p>Samsung phones</p>
          <p>iPhone</p>
          <p>Xiaomi phones</p>
          <p>Wholesale phone orders</p>
          <p>Compare phones</p>
          <p>Laptop prices</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>Best sellers</span>
          <p>Xiaomi Note 11</p>
          <p>Samsung A32</p>
          <p>Samsung A53</p>
          <p>Poco X3 Pro</p>
          <p>Samsung A23</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>About us</span>
          <p>Techno Shop at a glance</p>
          <p>Our goals and commitments</p>
          <p>Our story</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>Before you buy</span>
          <p>Buying guide</p>
          <p>Installment purchase guide</p>
          <p>Payment methods</p>
          <p>7-day guarantee</p>
          <p>Shipping methods and costs</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>After you buy</span>
          <p>Warranty registration</p>
          <p>Return procedures</p>
          <p>Registration FAQ</p>
          <p>Order tracking</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>Terms and policies</span>
          <p>Terms and conditions</p>
          <p>User privacy</p>
          <p>Customer testimonials</p>
        </div>
      </div>
      <div className="flex w-full justify-center border-slate-400 lg:border-t">
        <p className="pt-8 font-bold text-gray-400">
          All rights reserved for this site belong to Hosein Mahmoudi
        </p>
      </div>
    </div>
  );
};

export default Footer;
