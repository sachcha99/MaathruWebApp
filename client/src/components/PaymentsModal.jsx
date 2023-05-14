import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import API from "../api"
import styled from 'styled-components';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Button = styled.button`
padding: 12px;
font-size: 15px;
background-color: #292727;
cursor: pointer;
border: 2px solid #292727;
border-radius: 6px;
color: #fff;
margin: 15px 0;
transition: 0.8s;
width:500px;
height:60px;


&:hover {
  opacity: 1;
  background-color: #6a6666;
  border: 2px solid #6a6666;
  color: #fff;  }
`;

const ChannelButton = styled.button`
  padding: 12px 25px;
  font-size: 15px;
  background-color: #956C6E;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #fff;
  margin: 15px 0;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #fff;
    border: 2px solid #956C6E;
    color: #956C6E; 

}


&:disabled {
    opacity: 0.3; 

}
`;


function PaymentsModal({disabled}) {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        setOpen(false);
    };

    const handleCloseModal = () => {

        setOpen(false);
    };

    useEffect(() => {
        const createPayment = async () => {
            try {
                const result = await API.get('payment/config')
                console.log("result", result)
                setStripePromise(loadStripe(result.data.publishableKey));
            } catch (err) {
                console.log("err", err)
            }
        };
        createPayment();

    }, []);

    useEffect(() => {
        const createPayment = async () => {
            try {
                const result = await API.post('payment/create-payment-intent')
                console.log("result", result)
                setClientSecret(result.data.clientSecret);
            } catch (err) {
                console.log("err", err)
            }
        };
        createPayment();

    }, []);

    return (
        <>
            <div>
                <Button onClick={handleClickOpen}><b>Debit or Credit Card</b></Button>

                <Dialog PaperProps={{ sx: { width: "50%" } }} open={open} onClose={handleClose}>
                    <DialogContent>
                        {clientSecret && stripePromise && (
                            <Elements stripe={stripePromise} options={{ clientSecret }}>
                                <CheckoutForm handleCloseModal={handleCloseModal} />
                            </Elements>
                        )}
                    </DialogContent>

                </Dialog>
            </div>

        </>
    );
}

export default PaymentsModal;