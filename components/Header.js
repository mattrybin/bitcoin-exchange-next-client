import Link from 'next/link'
import { c, s, l, m } from '../lib/theme'
import HeaderTop from './elements/header-top'
import HeaderBranding from './elements/header-branding'
import HeaderCTA from './elements/header-cta'

const menuItems = [
  {text: 'Get Started', link: '/get-started', icon: 'mobile-icon-start'},
  {text: 'Trade', link: '/trade', icon: 'mobile-icon-trade'},
  {text: 'News', link: '/news', icon: 'mobile-icon-news'},
  {text: 'About', link: '/about', icon: 'mobile-icon-about'},
  {text: 'Contact', link: '/contact', icon: 'mobile-icon-contact'},
  {text: 'Login', link: '/login', icon: 'mobile-icon-login'}
]

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openMobileMenu() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <header className="root">
        <div className="container">
          <HeaderTop
            menuItems={menuItems}
            openMobileMenu={this.openMobileMenu.bind(this)}
            isOpen={this.state.isOpen} />
          <HeaderBranding />
          <HeaderCTA />
        </div>

        <style jsx>{`
          .root {
            color: ${c.baseBlack};
          }
        `}</style>
      </header>
    )
  }
}

export default Header
