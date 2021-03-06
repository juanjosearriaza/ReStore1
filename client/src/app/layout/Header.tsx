import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean,
    handleThemeChange: () => void
}

const midLinks = [
    {title: "catalog", path:"/catalog"},
    {title: "contact", path:"/contact"},
    {title: "about", path:"/about"},
]

const rightLinks = [
    {title: "login", path:"/login"},
    {title: "register", path:"/register"},
]

const navStyles = {
color:"inherit", 
'&:hover': {color: "grey.500"}, 
'&.active': {color: "text.secondary"}
}

export default function Header ({darkMode, handleThemeChange}: Props) {


    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Box>
                    <Typography variant="h6" component={NavLink} to="/" sx={{color:"inherit", textDecoration:"none"}}>
                        Re-Store
                    </Typography>                
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>
                <Box>
                    <List sx={{display: "flex"}}>
                        {midLinks.map(({title, path}) => (
                            <ListItem
                            component={NavLink}
                            key={title} 
                            to={path}                                                    
                            sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        )                       
                        )}
                    </List>
                </Box>
                <Box sx={{display: "flex"}}>
                    <IconButton size="large" sx={{color:"inherit"}}>
                        <Badge badgeContent={4} color="secondary">
                        <ShoppingCart />
                        </Badge>
                        
                    </IconButton>
                    <List sx={{display: "flex"}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem 
                            component={NavLink}
                            key={title}                              
                            to={path} 
                            sx={{color:"inherit", variant:"h6"}}>
                                {title.toUpperCase()}
                            </ListItem>
                        )                       
                        )}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}