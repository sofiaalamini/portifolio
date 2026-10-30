import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data'
import { Icon } from './Icon'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
    }
    const desktop = matchMedia('(min-width: 961px)')
    const close = () => { if (desktop.matches) setOpen(false) }
    window.addEventListener('keydown', escape)
    desktop.addEventListener('change', close)
    return () => { window.removeEventListener('keydown', escape); desktop.removeEventListener('change', close) }
  }, [open])
  const links = navItems.map(item => <a key={item.id} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)
  return <header className="site-header" data-header>
    <nav className="nav-shell" aria-label="Navegação principal">
      <a className="brand-mark" href="#home" aria-label="Voltar ao início" onClick={() => setOpen(false)}><span className="brand-initials" aria-hidden="true">SA</span></a>
      <div className="desktop-nav">{links}</div>
      <a className="nav-cta" href="mailto:sofia.alamini06@gmail.com"><span>Contato</span><Icon name="fa-arrow-right" /></a>
      <button ref={toggle} className={`menu-button${open ? ' is-open' : ''}`} type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
    </nav>
    <div id="mobile-menu" className={`mobile-panel${open ? ' is-open' : ''}`} inert={!open}><div>{links}</div></div>
  </header>
}
