import favorites from 'assets/favorites.png'

type NavLink = {
  link: string
  label: string
  icon?: string
}

const navArray: NavLink[] = [
  {
    link: '/',
    label: 'HOME',
  },
  {
    link: '/blog',
    label: 'BLOG',
  },
  {
    link: '/partnership',
    label: 'PARTNERSHIP',
  },
  {
    link: '/aboutme',
    label: 'ABOUT ME',
  },
  {
    link: '/contact',
    label: 'CONTACT',
  },
  {
    link: '/favorites',
    label: 'FAVORITES',
    icon: favorites,
  },
]

export default navArray
