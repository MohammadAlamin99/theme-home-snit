import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer
      className="w-full font-lato"
    >
      <div className="mx-auto max-w-[1720px] bg-black rounded-t-[112px] px-20 pt-14 pb-6 max-md:px-6 max-md:pt-10 max-md:rounded-t-[48px]">

        {/* ── DESKTOP layout (md and above) ── */}
        <div className="hidden md:flex flex-row items-start justify-between gap-8">

          <div className="flex flex-col gap-4 max-w-[220px]">
            <img
              src="/images/footerlogo.png"
              alt="Logo"
              className="w-[169px]"
            />
            <p className="text-[13px] font-inter text-white leading-[1.7] mt-1">
              we create possibilities
              <br />
              for the connected
              <br />
              world.
            </p>
          </div>

          <div className="flex flex-row gap-20">

            {/* VISIT */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[16px] font-semibold text-[#7DB541] uppercase tracking-wider">
                VISIT
              </h4>
              <p className="text-[12px] text-white leading-[1.8] font-medium">
                D-14/3, Bankcolony,
                <br />
                Savar, Dhaka-1340
              </p>
            </div>

            {/* QUICK LINK */}
            <div className="flex flex-col gap-[20px]">
              <h4 className="text-[16px] font-semibold text-[#7DB541] uppercase tracking-wider">
                QUICK LINK
              </h4>
              <ul className="flex flex-col gap-2">
                {["Products", "Categories", "Campaigns"].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-[12px] text-white leading-[1.8] font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* USEFUL LINK */}
            <div className="flex flex-col gap-[20px]">
              <h4 className="text-[16px] font-semibold text-[#7DB541] uppercase tracking-wider">
                USEFUL LINK
              </h4>
              <ul className="flex flex-col gap-2">
                {["Facebook", "Instagram", "Twitter"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[12px] text-white leading-[1.8] font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-[20px]">
              <h4 className="text-[16px] font-semibold text-[#7DB541] uppercase tracking-wider">
                LEGAL
              </h4>
              <ul className="flex flex-col gap-2">
                {["Terms & Condition", "Privacy Policy", "Return Policy"].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-[12px] text-white leading-[1.8] font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── MOBILE layout ── */}
        <div className="flex md:hidden flex-col items-center gap-4">
          <img
            src="/images/footerlogo.png"
            alt="Logo"
            className="w-[140px]"
          />

          <p className="text-sm font-medium text-[#635C5C] text-center">
            Oversear Products © 2026. All rights reserved.
          </p>

          {/* Website URL */}
          <a
            href="https://www.opbd.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#3FC3D7] font-medium"
          >
            www.opbd.shop
          </a>
        </div>

        {/* Desktop Copyright */}
        <p className="hidden md:block text-[12px] font-medium text-white mt-6">
          ©2026 System Next IT, All right reserved.
        </p>
      </div>
    </footer>
  );
}