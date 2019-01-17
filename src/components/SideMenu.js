import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';



const SideMenu = (props) => {
  return (
    <Drawer 
      anchor = "right"
      open ={props.open}
      onClose={() => props.onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          Home
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          About
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          Portfolio
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          Contact
        </ListItem>
      </List>

    </Drawer>
  )
}
export default SideMenu