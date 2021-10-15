
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const useStyle = makeStyles({
    boton: {
      width: 80,
      height: 30,
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0  15px 10px rgba(0, 0, 0, 0.3)",
      color: "white",
      position: "relative",
      top: -2.5,
      fontSize: 14,
      margin: 5,
      '&:hover': {
        background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
        cursor: 'pointer'
      }
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20
    },
    media:{
      height: 330,
      position: 'relative',
      top: 10,
    },
    media2:{
      width: 260,
      height: 524,
    }
});

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  height: 35,
  marginTop: 5,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '27ch',
    },
  },
}));
