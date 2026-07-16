import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

export default function NavLink({ href, children, dataAos, ...props }) {
  const path = usePathname();

  return (
    <a
      href={href}
      {...props}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
      data-aos={path.startsWith(href) ? "" : dataAos}
    >
      {children}
    </a>
  );
}
