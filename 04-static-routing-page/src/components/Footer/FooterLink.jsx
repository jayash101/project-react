import React from "react";
import { NavLink } from "react-router-dom";

const FooterLink = ({ title, links = [] }) => {
  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="mb-2 font-bold uppercase">{title}</h2>

      {/* Adding multiple links through loop */}
      {links.map((link, key) => {
        return (
          <NavLink
            to={link.to}
            key={key}
            className="text-sm hover:text-orange-500"
          >
            {link.name}
          </NavLink>
        );
      })}
    </section>
  );
};

export default FooterLink;
