import * as io from "react-icons/io";
import * as ci from "react-icons/ci";
import * as md from "react-icons/md";
import * as fa from "react-icons/fa";
import * as ri from "react-icons/ri";
import * as tb from "react-icons/tb";
import * as lu from "react-icons/lu";

export const displayIcons = (icon) => {
  if (icon.startsWith("Io")) {
    return io[icon];
  }
  if (icon.startsWith("Ci")) {
    return ci[icon];
  }
  if (icon.startsWith("Md")) {
    return md[icon];
  }
  if (icon.startsWith("Fa")) {
    return fa[icon];
  }
  if (icon.startsWith("Ri")) {
    return ri[icon];
  }
  if (icon.startsWith("Tb")) {
    return tb[icon];
  }
  if (icon.startsWith("Lu")) {
    return lu[icon];
  }
};
