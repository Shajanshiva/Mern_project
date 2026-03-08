import React from "react";

const Footer = () => {
  return (
      <div style={{ margin: "0px", backgroundColor: "black", height: "400px" }}>
              
          <hr style={{width:"vwpx" ,margin:"0px", color:"rgba(0, 0, 0, 0.9)"
}}></hr>
     
      <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", paddingTop:"30px"}}>
        <div>
          <h2 style={{ color: "red" }}>StageSeat</h2>
          <p style={{color:"white", width:"300px"}}>
            The premium theatre experience. Book tickets for the best shows in
            town with ease and elegance.
          </p>
        </div>
        <div style={{color:"white"}}>
          <h3>Explore</h3>
          <p>Featured Shows</p>
          <p>Popular theaters</p>
          <p>Gift Card</p>  
          <p>Offers</p>
        </div>
        <div style={{color:"white"}}>
          <h3>Support</h3>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div style={{color:"white", display:"flex", justifyContent:"center",marginTop:"50px"}}>
        <p>2026 StageSeat.All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
