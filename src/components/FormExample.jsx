import {useState} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


export default function FormExample(){

    const serverlessURL = 'https://dealchecker-7517.twil.io/runStudio'
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [accountSID, setAccountSID] = useState('');


    const submit = (event) => {
        axios.get(`https://dealchecker-7517.twil.io/runStudio?customerName=${customerName}&phoneNumber=${phoneNumber}&accountSID=${accountSID}`)
    }

    const handleChange = (event) => {
        if (event.target.id === 'customerName') {
            setCustomerName(event.target.value)
        }
        else if (event.target.id === 'phoneNumber') {
            setPhoneNumber(event.target.value)
        }
        else if(event.target.id === 'accountSID') {
            setAccountSID(event.target.value)
        }
        
      };

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignContent: "center", minHeight: "60vh", minWidth: "25vw", maxWidth: "50vw"}}>
            <TextField
                id="customerName"
                label="Customer Name"
                value={customerName}
                onChange={handleChange}
            />
            <TextField
                id="phoneNumber"
                label="Phone Number"
                value={phoneNumber}
                onChange={handleChange}
            />
            <TextField
                id="accountSID"
                label="Account SID"
                value={accountSID}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={submit}>Submit</Button>
        </div>


    )

}