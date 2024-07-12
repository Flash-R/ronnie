import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import Image from 'next/image'
import './style.css'


function NavMenu() {
  return (
    <div className='flex flex-row items-center justify-between bg-black py-3 px-8'>
      <div className="logo">
        <Link href="/" legacyBehavior passHref>
          <Image src="/logo_white.png" width={128} height={128} />
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="text-white">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className='nav_link'>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className='nav_link'>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className='nav_link'>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/resume" legacyBehavior passHref>
              <NavigationMenuLink className='nav_link'>
                Resume
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

  )
}

export default NavMenu
