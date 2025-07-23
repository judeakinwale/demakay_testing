import React from "react";
import { links } from "./link";

export default function Navigation() {
  return (
    <div>
      <h1>Navigation</h1>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
            {link.menu && (
              <ul>
                {link.menu.map((subLink) => (
                  <li key={subLink.url}>
                    <a href={subLink.url}>{subLink.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
