'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, MoonStars } from "@phosphor-icons/react";

export default function ThemeButton() {
  const {setTheme, resolvedTheme} = useTheme()
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? (
        ( 
          <Sun size={32} className="hover:fill-black-russian-300 hover:drop-shadow-sm"/>
        )
      ) : ( 
        <MoonStars size={32} className="hover:fill-black-russian-300"/>
      )}
    </button>
  )
}