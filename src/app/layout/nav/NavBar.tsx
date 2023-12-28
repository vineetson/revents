import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
    setFormOpen: (value: boolean) => void;
}

export default function NavBar({setFormOpen}: Props) {
  return (
    <Menu inverted={true} fixed="top">
        <Container>
            <MenuItem header>
                <img src="/logo.png" alt="logo" />
                Re-vents
            </MenuItem>
            <MenuItem name="Events" />
            <MenuItem>
                <Button 
                        onClick={() => setFormOpen(true)}
                        floated="right" 
                        positive={true} 
                        inverted={true} 
                        content="Create event" />
            </MenuItem>
            <MenuItem position="right">
                <Button basic inverted content="Login"></Button>
                <Button basic inverted content="Register" style={{marginLeft: '0.5em'}}></Button>
            </MenuItem>
        </Container>
    </Menu>
  )
}