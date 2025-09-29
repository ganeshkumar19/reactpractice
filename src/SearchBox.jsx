import React from "react";
import {
  Box,
  TextField,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  InputAdornment,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  return (
    <Box sx={{ width: 400, p: 2, bgcolor: "background.paper", borderRadius: 2, boxShadow: 3 }}>
      {/* Search Input */}
      <TextField
        fullWidth
        placeholder="Search"
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action"  sx={{width: '30px'}}/>
            </InputAdornment>
          ),
          endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
          sx: {
            "& fieldset": { border: "none" }, // removes the border
          },
        }}
        sx={{ mb: 2 }}
        
      />

      {/* Tabs */}
      <Tabs value={0} aria-label="search tabs">
        <Tab label="All" />
        <Tab label="Files" />
        <Tab label="People" />
      </Tabs>

      <Divider sx={{ mb: 1 }} />

      {/* Results */}
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Randall Johnsson" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Randall Johnsson" secondary="Active now" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>📁</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Random Michal Folder"
            secondary="12 Files · Edited 12m ago"
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>🖼️</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="crative_file_frandkies.jpg"
            secondary="in Photos/Assets · Edited 12m ago"
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Kristinge Karand" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Kristinge Karand" secondary="Active 2d ago" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>🎥</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="files_krande_michelle.avi"
            secondary="in Videos · Added 12m ago"
          />
        </ListItem>
      </List>
    </Box>
  );
}