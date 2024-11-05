export const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="#"
                className="flex items-center"
                aria-label="Flowbite Homepage"
              >
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Thăng Quang Credit
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
              <div>
                <h2 className="mb-8 text-lg font-bold text-gray-900 uppercase dark:text-white">
                  Liên hệ
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-semibold">
                  <li className="mb-6">
                    <a
                      href="https://zalo.me/0879203999"
                      className="hover:underline text-lg"
                    >
                      Zalo: Quang Thăng
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100032589079166"
                      className="hover:underline text-lg"
                    >
                      Facebook: Quang Thăng
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-8 text-lg font-bold text-gray-900 uppercase dark:text-white">
                  Địa chỉ
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-semibold">
                  <li className="mb-6">
                    <h1>CS1: 2 Lý Nhân Tông, Phố Ngọc Mỹ, Ninh Bình</h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100032184014946"
                className="hover:underline"
              >
                Đinh Thiện
              </a>
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/profile.php?id=100032184014946"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-label="Facebook page"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  