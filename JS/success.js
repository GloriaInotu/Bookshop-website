window.onload = () =>{
    // Variable stored in local storage in the pay.js file is retrieved and displayed in the success page.
    const cardNumlast4 = localStorage.getItem("cardNumlast4");
    document.getElementById("successMessage").innerHTML =" Payment with card ending with **** **** **** " + cardNumlast4 + " was successful. Thank you for your purchase!";
}