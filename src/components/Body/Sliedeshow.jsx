import Logo1 from "../../assets/image6.jpg";
import Logo2 from "../../assets/image7.png";
import Logo3 from "../../assets/image8.png";
import Logo9 from "../../assets/image9.jpg";
import Logo10 from "../../assets/image10.jpg";
import Logo11 from "../../assets/image11.jpg";
import Logo12 from "../../assets/image12.jpg";



export const Sliedeshow = () => {
  return (
    <div className="z-10">
      <div id="default-carousel" className="relative w-full mt-[95px]" data-carousel="slide">
        <div className="relative h-56 overflow-hidden md:h-[670px]">
          {/* Slide 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Logo1}
              className="absolute block w-full  h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Logo 1"
            />
          </div>
          {/* Slide 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Logo2}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Logo 2"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        </div>

        {/* Previous Button */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="relative w-full h-300">
        <img
          src={Logo3}
          alt="Logo 3"
          className="block w-full h-auto" // Sử dụng h-auto để logo giữ tỷ lệ
        />
               <img
          src={Logo9}
          alt="Logo 3"
          className="block w-full h-auto" // Sử dụng h-auto để logo giữ tỷ lệ
        />       <img
          src={Logo10}
          alt="Logo 3"
          className="block w-full h-auto" // Sử dụng h-auto để logo giữ tỷ lệ
        />       <img
          src={Logo11}
          alt="Logo 3"
          className="block w-full h-auto" // Sử dụng h-auto để logo giữ tỷ lệ
        />       <img
          src={Logo12}
          alt="Logo 3"
          className="block w-full h-auto" // Sử dụng h-auto để logo giữ tỷ lệ
        />
      </div>
    </div>
  );
};
