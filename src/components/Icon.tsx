import * as HeroIconsOutline from "@heroicons/react/outline/esm/index.js";
import * as HeroIconsSolid from "@heroicons/react/solid/esm/index.js";
import * as SimpleIcons from "@icons-pack/react-simple-icons";

export default function Icon({ name }: { name: string }) {
  const ParseIcon = (icon: string) => {
    let [pack, name] = icon.split(":");

    switch (pack) {
      case "heroicons_outline":
        return HeroIconsOutline[name];
      case "heroicons_solid":
        return HeroIconsSolid[name];
      case "simple_icons":
        return SimpleIcons[name];
      default:
        return null;
    }
  };

  const Icon = ParseIcon(name);

  return (
    <Icon className="w-5 h-5 group-hover:text-indigo-500 transition-colors duration-200" />
  );
}
