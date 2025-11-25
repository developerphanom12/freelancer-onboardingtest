import React, { useEffect, useState, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import Images from "../assets/Images";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import gsap from "gsap";
import { PiStudentFill } from "react-icons/pi";
// ...same imports
const API_BASE = "https://admin.phanomprofessionals.com";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [topbarLinks, setTopbarLinks] = useState([]);
  const [services, setServices] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fetch API data
  useEffect(() => {
    const ac = new AbortController();
    async function fetchData() {
      try {
        const [linksRes, svcRes] = await Promise.all([
          fetch(`${API_BASE}/api/topbar`, { signal: ac.signal }),
          fetch(`${API_BASE}/api/services`, { signal: ac.signal }),
        ]);

        const linksJson = await linksRes.json();
        const servicesJson = await svcRes.json();

        setTopbarLinks(Array.isArray(linksJson) ? linksJson : []);

        const mapped = (Array.isArray(servicesJson) ? servicesJson : []).map((sec) => ({
          id: sec.id,
          title: sec.title,
          items: (sec.items || [])
            .filter((it) => it.is_enabled !== false)
            .map((it) => ({ id: it.id, label: it.label, url: it.url || "/services" })),
        })).filter((sec) => sec.items.length > 0);

        setServices(mapped);
      } catch (e) {
        setTopbarLinks([]);
        setServices([]);
      }
    }
    fetchData();
    return () => ac.abort();
  }, []);

  // gsap animations
  useEffect(() => {
    if (isSidebarOpen && sidebarRef.current && overlayRef.current) {
      gsap.set(sidebarRef.current, { x: "100%" });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.to(sidebarRef.current, { x: "0%", duration: 0.4, ease: "power2.out" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
    }
  }, [isSidebarOpen]);

  const closeSidebar = () => {
    if (sidebarRef.current && overlayRef.current) {
      gsap.to(sidebarRef.current, { x: "100%", duration: 0.4, ease: "power2.in" });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsSidebarOpen(false);
          setMobileServicesOpen(false);
        },
      });
    } else {
      setIsSidebarOpen(false);
      setMobileServicesOpen(false);
    }
  };

  const go = (to, isExternal = false, target = null) => {
    if (!to) return;
    const absolute = /^https?:\/\//i.test(to);
    if (isExternal || absolute) {
      target === "_blank" ? window.open(to, "_blank") : (window.location.href = to);
      return;
    }
    navigate(to);
  };

  const handleNavigation = (to) => {
    go(to);
    closeSidebar();
  };

  // Separate services link
  const servicesLink = topbarLinks.find((l) => (l.url || "").toLowerCase() === "/services");
  const hireLink = topbarLinks.find((l) => (l.url || "").toLowerCase() === "/login");
  const desktopLinks = topbarLinks.filter(
    (l) => !["/services", "/login"].includes((l.url || "").toLowerCase())
  );

  return (
    <nav className="">
      <nav
        className={`fixed top-0 w-full max-w-[1500px] z-[500] transition-all duration-300 ${
          isScrolled ? "bg-white shadow" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between sm:px-12 px-4">
          {/* Left */}
          <div className="flex items-center">
            <img
              src={Images.Logo}
              alt="logo"
              className="w-[120px] sm:w-[150px] h-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Right */}
          <div className="flex items-center space-x-6 my-5">
            {desktopLinks.map((l) => (
              <a
                key={l.id}
                href={l.url || "#"}
                className={`hover:text-[#D11AE7] hidden lg:block transition-colors ${
                  path === (l.url || "") ? "text-[#D11AE7] scale-105" : "text-gray-600"
                }`}
                onClick={(e) => {
                  const absolute = /^https?:\/\//i.test(l.url || "");
                  if (!l.is_external && !absolute) {
                    e.preventDefault();
                    go(l.url);
                  }
                }}
                target={l.target || undefined}
              >
                {l.label}
              </a>
            ))}

            {/* Services mega menu */}
            {(servicesLink || services.length > 0) && (
              <div className="hidden lg:flex items-center relative group">
                <button
                  className={`flex gap-2 items-center hover:text-[#D11AE7] ${
                    path === "/services" ? "text-[#D11AE7] scale-105" : "text-gray-600"
                  }`}
                >
                  {servicesLink?.label || "Services"}
                  <IoIosArrowDown className="mt-1 group-hover:hidden" />
                  <IoIosArrowUp className="mt-1 hidden group-hover:inline" />
                </button>

                <div className="absolute top-[calc(100%+25px)] -left-[350px] hidden group-hover:flex bg-white shadow-lg rounded-lg p-6 z-50 min-w-[800px] max-w-[95vw] drop-shadow-2xl">
                  <div
                    className="grid gap-8"
                    style={{ gridTemplateColumns: `repeat(${services.length || 1}, minmax(0,1fr))` }}
                  >
                    {services.map((col) => (
                      <div key={col.id}>
                        <h3 className="font-semibold text-[#5A32EA] mb-3">{col.title}</h3>
                        <ul className="space-y-2">
                          {col.items.map((item) => (
                            <li key={item.id}>
                              <a
                                href={item.url || "/services"}
                                onClick={(e) => {
                                  e.preventDefault();
                                  go(item.url);
                                }}
                                className="text-gray-700 hover:text-[#5A32EA]"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {/* <button className="p-2 rounded-lg relative">
              <PiStudentFill className="w-6 h-6 text-gray-600 hover:text-[#D11AE7]" />
            </button> */}

            {/* Hire Talent (only if exists) */}
            {hireLink && (
              <button
                onClick={() => go(hireLink.url, hireLink.is_external, hireLink.target)}
                className="bg-gradient-to-r from-[#459CE1] to-[#D11AE7] text-white px-4 py-1 rounded-lg hover:bg-purple-700 hidden sm:block"
              >
                {hireLink.label}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <HiMenu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-transparent z-[600] lg:hidden"
            onClick={closeSidebar}
          />
          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[700] lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <img src={Images.Logo} alt="logo" className="w-[120px]" />
              <button onClick={closeSidebar}>
                <RxCross1 className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {desktopLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleNavigation(l.url)}
                  className="block w-full text-left text-gray-700 hover:text-[#5A32EA] py-2 text-lg"
                >
                  {l.label}
                </button>
              ))}

              {/* Services dropdown */}
              {(servicesLink || services.length > 0) && (
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#5A32EA] py-2 text-lg"
                  >
                    {servicesLink?.label || "Services"}
                    {mobileServicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-2 space-y-3">
                      {services.map((category) => (
                        <div key={category.id}>
                          <h4 className="font-semibold text-[#5A32EA] text-sm">{category.title}</h4>
                          <ul className="ml-2">
                            {category.items.map((item) => (
                              <li key={item.id}>
                                <button
                                  onClick={() => handleNavigation(item.url)}
                                  className="text-gray-600 hover:text-[#5A32EA] text-sm block w-full text-left"
                                >
                                  {item.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Hire Talent (only if exists) */}
              {hireLink && (
                <button
                  onClick={() => handleNavigation(hireLink.url)}
                  className="block w-full text-center bg-gradient-to-r from-[#459CE1] to-[#D11AE7] text-white px-4 py-3 rounded-lg mt-6"
                >
                  {hireLink.label}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
