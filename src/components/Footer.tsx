import logo from '../../assets/logo-sofia.svg'
import { Icon } from './Icon'

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-brand"><img src={logo} alt="Sofia Alamini" width="240" height="60" /><p>Sofia Alamini, portfólio em React, TypeScript e Tailwind.</p></div>
    <button type="button" onClick={() => document.getElementById('home')?.scrollIntoView()}>Voltar ao inicio <Icon name="fa-arrow-up" /></button>
  </footer>
}
