"use client";

import Link from "next/link"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { usePathname } from "next/navigation";

const SidebarComponent = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="mt-5">
          <SidebarGroupLabel>
            Sections
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/">
                <SidebarMenuButton className={pathname === "/" ? "bg-gray-100" : ""}>
                  Brand Profile
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/assess-images">
                <SidebarMenuButton className={pathname === "/assess-images" ? "bg-gray-100" : ""}>
                  Assess Images
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default SidebarComponent