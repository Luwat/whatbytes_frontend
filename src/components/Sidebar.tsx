import React from "react";
import { BarChart2, Award, File } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Dashboard", icon: BarChart2, href: "#" },
  { label: "Skill Test", icon: Award, href: "#" },
  { label: "Internship", icon: File, href: "#" },
];

const Sidebar = () => {
  return (
    <section className="md:min-h-screen md:w-1/5 border-r py-12">
      <ul className="flex md:flex-col justify-around gap-5 md:justify-start md:gap-12 p-5">
        {navLinks.map(link => (
            <li key={link.label}>
                <Link href={link.href}>
                    <span className="flex items-center gap-6">
                      <link.icon
                        className={`h-6 w-6 text-primary`}
                      />
                      <p className="font-semibold">{link.label}</p>
                    </span>
                </Link>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
