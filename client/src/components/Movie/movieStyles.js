
import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  root: {
    minWidth: 230,
    height: 480,
    marginRight: 10,
    marginLeft: 10,
  },
  boton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 20,
    left: 79,
    bottom: 3,
    fontSize: 12,
    // padding: "0 30px",
  },
  title:{
      fontWeight: 'bold',
      fontSize: 20,
  },
  media:{
    height: 330,
    position: 'relative',
    top: 10,
  },
  media2:{
    width: 260,
    height: 524,
  },
  rate:{
    height: 0,
    position: 'absolute',
    zIndex: 1,
    top: 30,
    right: -15,
  },
  name:{
    height: 60, 
    fontWeight: "bold",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};
