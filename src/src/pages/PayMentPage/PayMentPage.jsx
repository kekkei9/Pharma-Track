import { async } from "@firebase/util";
import React from "react";

import Fetch from "../../fetch";


const handleSubmit= async() =>{
    const response =await Fetch(
        "POST",
        "https://pharma-track.onrender.com/api/v1/payment/create_payment_url"
    )

    console.log(response)
}
const PayMentPage = (props) =>{
return(
<div></div>
) ;
};
export default PayMentPage;

