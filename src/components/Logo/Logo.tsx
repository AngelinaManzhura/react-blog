import logo from 'assets/logo.svg'
import './Logo.scss'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="logo">
      <a className="logo-link" href="/">
        <img className="logo-link-img" src={logo} alt="" />
      </a>
    </div>
  )
}

export default Logo
