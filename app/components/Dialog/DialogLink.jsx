import { usePathname } from "next/navigation";
import classes from "./DialogLink.module.css";
export default function DialogLink({ href, children }) {
  const path = usePathname();

  return (
    <a
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </a>
  );
}
