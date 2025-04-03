
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with server-safe check (return false on server)
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Call once to set initial value
    handleResize()
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(() => {
    // Initialize with server-safe check
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  React.useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return
    
    const media = window.matchMedia(query)
    
    // Initial check
    setMatches(media.matches)
    
    // Create listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    
    // Add listener
    media.addEventListener('change', listener)
    
    // Clean up
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
