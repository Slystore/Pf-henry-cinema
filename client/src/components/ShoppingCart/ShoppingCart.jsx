import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartItem from "./CartItem";
import CartItemStorage from './CartItemStorage'
import NavBar from "../NavBar/NavBar";

import Select from "./Select";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getToken } from "../../redux/users/usersAction"
import { getAll, postCartFill, fillText } from "../../redux/carts/cartsActions";
import "./ShoppingCart.css";
import { Card } from "@mui/material";
// import { getMovies } from "../../redux/movies/moviesAction";
import PurchaseCart from "./PurchaseCart";
import { useHistory } from "react-router";

const steps = ["Carrito de compra", "Selecciona tu asiento", "Compra"];

function ShopingCart() {
  const { postCartStorage } = useSelector((state) => state.cartReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const { textFill } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const[text, ]= useState(JSON.parse(window.localStorage.getItem("id")))
  const history= useHistory()
  
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  
  useEffect(() => {
    // console.log("tb text", text)
    dispatch(fillText(text));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [fillShop, setFillShop] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    setFillShop(postCartStorage);
    // console.log("entro aca 1");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };
const x = getToken();
  const handleReset = () => {
    setActiveStep(0);
  };
  function handlePostCart() {
    if(!x.msg){
       
    const decoded = jwt_decode(x);
    let postFillFinal = fillShop.length === 1 ? [{...fillShop[0], userId: decoded.user.id }] 
    : fillShop.map(item => item.userId ? { item } : {...item, userId: decoded.user.id })

   let userLogParse= JSON.parse(window.localStorage.getItem("cartPost"))
   let userLog = userLogParse?(userLogParse.length === 1 ? [{...userLogParse[0], userId: decoded.user.id }] 
   : userLogParse.map(item => item.userId ? { item } : {...item, userId: decoded.user.id })):undefined
   userLog? dispatch(postCartFill(userLog)): dispatch(postCartFill(postFillFinal))}
    else{
      window.localStorage.setItem("cartPost",JSON.stringify( fillShop))
  history.push("/login")}
  }
  function handleComprar(){
    history.push('/prevCheckoutPage')
  }
  return (
    <div className="ContainerCart">
      <div className="NavBarCart">
        <NavBar />
      </div>

      <div className="Cart">
        <Card elevation={10} sx={{ height: 550, padding: "20px" }}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                // if (isStepOptional(index)) {
                //     labelProps.optional = (
                //     <Typography variant="caption">Optional</Typography>
                //     );
                // }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                  <Button onClick={handlePostCart}>Guardar Carrito</Button>
                  <Button onClick={handleComprar}>Comprar</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

                {/* **** SE MUESTRA EL CONTENIDO DEL CARRITO ******* */}
                <Box sx={{ height: 240, width: 500, marginTop: 2 }}>
                  {activeStep === 0 ? (
                    text?
              
                    textFill.map((movie) => {
                      console.log("tomi",textFill)
                      return (
                        <CartItemStorage
                          key={movie.id}
                          image={movie.image}
                          title={movie.title}
                          id={movie.id}
                          price={movie.price}
                          quantity={movie.quantity}
                       
                        />
                      );
                    }): 
                    (cart && cart.map((movie) => {
                      return (
                        <CartItem
                          key={movie.id}
                          image={movie.image}
                          title={movie.title}
                          id={movie.id}
                          price={movie.price}
                          quantity={movie.quantity}
                          />
                    )})
                  )) : activeStep === 1 ? (
                    <Select />
                  ) : (
                    <PurchaseCart />
                  )}
                </Box>
                {/* **** TERMINA EL CONTENIDO DEL CARRITO ******* */}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Atrás
                  </Button>

                  <Box sx={{ flex: "1 1 auto" }} />
                  {/* {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                            )} */}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Siguiente"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default ShopingCart;
