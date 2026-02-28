"use client";

export default function CountdownTimer({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");

  const items = [
    { value: pad(hours), label: "H" },
    { value: pad(minutes), label: "M" },
    { value: pad(seconds), label: "S" },
  ];

  return (
    <div className="flex items-center gap:0 lg:gap-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-0 lg:gap-3">

          {/* Box */}
          <div className="relative w-10 h-10  rounded-[4px] bg-white flex items-center justify-center">
            {/* Number */}
            <span
              className="text-sm font-black text-gray-900 leading-none font-lato"
            >
              {item.value}
            </span>

            {/* Label badge — bottom left corner */}
            <div className="absolute bottom-[-10px] left-0 bg-[#FF9C1A] rounded-[0_4px_0_4px] px-1">
              <span
                className="text-white text-[10px] font-bold leading-none font-lato"
              >
                {item.label}
              </span>
            </div>
          </div>

          {/* Colon separator */}
          {index < 2 && (
            <span
              className="text-[#FF9C1A] font-black text-2xl sm:text-3xl leading-none font-lato"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}