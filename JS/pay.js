window.onload = () =>{
    // Getting the pay now button so when it is clicked, user input is validated - I sourced this code from an excerise during a lab and modified it to fit my needs.
    const payNowBtn = document.getElementById("payNowbtn");
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
        event.preventDefault(); 
        // Getting the inputs
        const cardNumber = document.getElementById("masterCard").value
        const month = document.getElementById("expMonth").value
        const year = document.getElementById("expYear").value
        const cvv = document.getElementById("CVV").value

        // If any of the input boxes are empty, error 
        if(cardNumber === null || cardNumber === "" ){
            alert("Card number input box is empty");
            return
        }
        if( month === "M" ){
            alert("Expiry month was not stated");
            return
        }
        if( year === "Y" ){
            alert("Expiry year was not stated");
            return
        }
        if(cvv === null || cvv === "" ){
            alert("CVV input box is empty");
            return
        }

        // Variables used to validate the inputs
        const cardNum_reg = /^5[1-5][0-9]{14}$/; 
        const cvv_reg = /^[0-9]{3,4}$/;
        today = new Date();
        t_m = today.getMonth() + 1;
        t_y = today.getFullYear();

        // If the number does not start with 5 or is not 16 digits long, error
        if(!cardNumber.match(cardNum_reg)){
            alert("Card number is invalid. Please enter a valid master card number");
            reload()
            return(1);
        }
        // If the digits is more than 4 digits long, error
        if(!cvv.match(cvv_reg)){
            alert("CVV is invalid. Please enter a valid CVV");
            reload()
            return(1);
        }
        // If the year is less than the current year OR if the year is equal to the current year AND the month is less than the current month, error   
        if((year < t_y)||(year == t_y)&&(month < t_m)){
            alert("Card is expired. Please enter a valid expiry date");
            reload()
            return(1);
        }
    
        // The process of sending inputs to and fetchinf data from API - I sourced this code from an exercise duriing a lab. 
        // Sending inputs to API 
        data = {
            "master_card": cardNumber,
            "exp_month": month,
            "exp_year": year,
            "cvv_code": cvv
        }
        const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard";
        // Fetching the API
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.status === 200){
                return response.json();
            // If something went wrong with the data sent, error messages will be outputted 
            }else if(response.status === 400){
                throw "Bad data was sent to the server";
            }else{
                throw "Something went wrong";
            }
        })
        // If data was sent successfully, the next page (the success page) will be opened
        .then(resJson => {
            // The last 4 digits of the card number inputed is stored in local storage so it can be displayed in the success page.
            const cardNumlast4 = cardNumber % 10000;
            localStorage.setItem("cardNumlast4", cardNumlast4);
            
            window.open("success.html")
        })
        .catch((error) => {
            alert(error);
        })  
    }) 
}