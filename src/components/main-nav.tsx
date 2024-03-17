"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname == `${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route, i) => {
        return (
          <Link className={cn("text-sm font-medium space-x-4 lg:space-x-6 transition-colors hover:text-primary", route.active ? 'text-black dark:text-white' : 'text-muted-foreground')} href={route.href} key={i}>
            {" "}
            {route.label}{" "}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;