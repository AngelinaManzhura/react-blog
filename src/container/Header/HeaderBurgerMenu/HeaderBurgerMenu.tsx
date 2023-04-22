import { Link } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'

type Props = {
  open: boolean
  toggleDrawer: (openValue: boolean) => any
  handleDrawerClose: () => void
}

const drawerWidth = 250

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}))

const HeaderBurgerMenu = ({ open, toggleDrawer, handleDrawerClose }: Props) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      open={open}
      anchor="right"
      onClose={toggleDrawer(false)}
    >
      <DrawerHeader>
        <IconButton
          sx={{
            marginTop: 2,
            marginBottom: 2,
            padding: 0,
            width: 24,
            height: 24,
          }}
          onClick={handleDrawerClose}
        >
          <CloseIcon />
        </IconButton>
        <Link
          to="/contact"
          reloadDocument={true}
          className="header-content-contact-me header-content-contact-me-drawer"
        >
          <button className="header-content-contact-me-button" type="submit">
            CONTACT ME
          </button>
        </Link>
      </DrawerHeader>
      <Divider />
      <nav>
        <HeaderMenu onClick={toggleDrawer(false)} />
      </nav>
    </Drawer>
  )
}

export default HeaderBurgerMenu
