export default function Footer() {
  const footerNav = [
    {
      label: "General",
      items: [
        {
          title: "Home",
          Link: "#",
        },
        {
          title: "Genre",
          Link: "#",
        },
        {
          title: "Movies",
          Link: "./movies",
        },
        {
          title: "Series",
          Link: "./series",
        },
      ],
    },
    {
      label: "Terms & Conditions",
      items: [
        {
          title: "Privacy",
          Link: "#",
        },
        {
          title: "Terms Of Use",
          Link: "#",
        },
        {
          title: "Legal Notices",
          Link: "#",
        },
        {
          title: "Cookie Preferences",
          Link: "#",
        },
      ],
    },
    {
      label: "Important",
      items: [
        {
          title: "Account",
          Link: "#",
        },
        {
          title: "FAQs",
          Link: "#FAQs",
        },
        {
          title: "Contact Us",
          Link: "./support",
        },
        {
          title: "Support",
          Link: "./support",
        },
      ],
    },
  ];

  return (
    <footer className="sticky pt-10 bg-transparent z-20 bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNav.map((item, idx) => (
            <ul className="space-y-4 text-gray-300" key={idx}>
              <h4 className="text-gray-700 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href="el.Link"
                    className="duration-150 hover:text-gray-400"
                  >
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-2 py-2 border-t border-gray-700 items-center justify-center">
          <a className=" text-gray-200" href="/">
            TouchFlix Kenya
          </a>
        </div>
      </div>
    </footer>
  );
}
