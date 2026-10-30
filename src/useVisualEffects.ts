import { useEffect } from 'react'

export function useVisualEffects() {
  useEffect(() => {
    const root = document.documentElement
    const header = document.querySelector('[data-header]')
    let scrollFrame = 0
    let pointerFrame = 0
    const updateScroll = () => {
      const height = root.scrollHeight - innerHeight
      root.style.setProperty('--scroll-progress', `${height > 0 ? scrollY / height * 100 : 0}%`)
      header?.classList.toggle('is-scrolled', scrollY > 28)
    }
    const scroll = () => { cancelAnimationFrame(scrollFrame); scrollFrame = requestAnimationFrame(updateScroll) }
    updateScroll()
    window.addEventListener('scroll', scroll, { passive: true })
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.16 })
    document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 28, 160)}ms`)
      observer.observe(item)
    })
    const pointerAllowed = () => matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = (event: PointerEvent) => {
      if (!pointerAllowed()) return
      cancelAnimationFrame(pointerFrame)
      pointerFrame = requestAnimationFrame(() => {
        document.body.classList.add('has-pointer')
        root.style.setProperty('--cursor-x', `${event.clientX}px`)
        root.style.setProperty('--cursor-y', `${event.clientY}px`)
        if (!(event.target instanceof Element)) return
        const row = event.target.closest<HTMLElement>('.project-row')
        if (row) {
          const bounds = row.getBoundingClientRect()
          row.style.setProperty('--spotlight-x', `${(event.clientX - bounds.left) / bounds.width * 100}%`)
          row.style.setProperty('--spotlight-y', `${(event.clientY - bounds.top) / bounds.height * 100}%`)
        }
        const profile = event.target.closest<HTMLElement>('.profile-panel')
        if (profile) {
          const bounds = profile.getBoundingClientRect()
          profile.style.setProperty('--tilt-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 2.4}deg`)
          profile.style.setProperty('--tilt-y', `${((event.clientY - bounds.top) / bounds.height - .5) * -2.4}deg`)
        }
      })
    }
    const profile = document.querySelector<HTMLElement>('.profile-panel')
    const resetTilt = () => { profile?.style.setProperty('--tilt-x', '0deg'); profile?.style.setProperty('--tilt-y', '0deg') }
    window.addEventListener('pointermove', pointer, { passive: true })
    profile?.addEventListener('pointerleave', resetTilt)
    return () => {
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('pointermove', pointer)
      profile?.removeEventListener('pointerleave', resetTilt)
      cancelAnimationFrame(scrollFrame); cancelAnimationFrame(pointerFrame); observer.disconnect()
      document.body.classList.remove('has-pointer')
    }
  }, [])
}
