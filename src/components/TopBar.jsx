import React from 'react'
import { IconButton, Toolbar, Typography,AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton>


                    <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                    AppBar
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default TopBar 