import React from "react";
import { Link, NavLink } from "react-router-dom";
import FooterLink from "./FooterLink";

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: "logo-facebook",
      href: "https://facebook.com",
    },
    {
      icon: "logo-github",
      href: "https://github.com",
    },
    {
      icon: "logo-twitter",
      href: "https://twitter.com",
    },
    {
      icon: "logo-linkedin",
      href: "https://www.linkedin.com",
    },
    {
      icon: "logo-instagram",
      href: "https://www.instagram.com",
    },
  ];

  return (
    <footer className="flex flex-col gap-4 border-y border-gray-300/50 bg-white px-2 py-16">
      <section className="footerTop flex justify-around pb-8">
        <Link to="/">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="logo"
            className="w-60"
          />
        </Link>

        <article className="flex gap-16">
          <FooterLink
            title={"Resources"}
            links={[
              { name: "Home", to: "" },
              { name: "About", to: "about" },
              { name: "Contact", to: "contact" },
              { name: "Github", to: "github" },
            ]}
          />
          <FooterLink
            title={"Follow us"}
            links={[
              { name: "Github", to: "https://github.com/jayash101" },
              { name: "Instagram", to: "https://instagram.com/jayashbasnet01" },
            ]}
          />
          <FooterLink
            title={"Legal"}
            links={[
              { name: "Privacy Policy", to: "/privacy" },
              { name: "Terms & Conditions", to: "" },
            ]}
          />
          
        </article>
      </section>

      <hr className="mx-auto w-3/4" />

      <section className="footerBottom py-4">
        <article className="mx-auto flex w-3/4 justify-between text-sm text-gray-500">
          <p>&copy; 2023 XYZcompany. All Rights Reserved.</p>
          <div className="iconNavigation flex items-center gap-3 text-lg">
            {socialMediaLinks.map((link, key) => {
              return (
                <NavLink
                  key={key}
                  to={link.href}
                  className="text-gray-700 hover:text-red-500 hover:[filter:drop-shadow(0_0_1vw)]"
                >
                  <ion-icon name={link.icon}></ion-icon>
                </NavLink>
              );
            })}
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
