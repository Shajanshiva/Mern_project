import React from 'react'
import { Search} from 'lucide-react'
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        paddingLeft: "40px",
        paddingRight: "40px",
        //   backgroundColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h2 style={{ color: "red" }}>StageSeat</h2>
        <p style={{ fontWeight: "bold", color: "white" }}>Home</p>
        <p style={{ fontWeight: "bold", color: "white" }}>Shows</p>
        <p style={{ fontWeight: "bold", color: "white" }}>My Bookings</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
          >
              <Search color='white'/>
        <input
          type="text"
          placeholder="Search Shows"
          style={{
              border: "1px solid white",
              color:'white',
            padding: "10px",
              borderRadius: "10px",
              background: "transparent",
            width:"200px"
          }}
        />
        <button style={{padding:"12px", borderRadius:"10px", border:"none", backgroundColor:"red", color:'white', fontWeight:"bold"}}>Sign in</button>
      </div>
    </div>
  );
}

export default Header