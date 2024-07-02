import { ScrollArea } from "@mantine/core";
import classes from "./navbar.module.css";
import { navData } from "./nav-data";
import { LinksGroup } from "./link-group";
import { UserButton } from "./user-button";

export default function Navbar() {
  const links = navData.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
