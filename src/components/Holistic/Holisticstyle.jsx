export const styless =(theme)=>({
    container: {
        padding: "40px",
      //  height:'720px',

      "@media (max-width:600px)":{
        padding:'0px'
      }
        
      },
      card: {
        backgroundColor: "#ffffff",
        width: "84%",
        textAlign: "left",
     
        height:'93%',
        overflow: "hidden",
        padding:'8%',
     
        alignItems: "center",
        "@media (max-width:600px)":{
          width:'80%',
          marginLeft:'3%',
        height:'600px',
        
        display:'flex',
        alignItems: "center",
        // justifyContent:'center',
        flexDirection:'column',
        }
      },
      cardImage: {
        
       
        width: "100%",
        height: "186px",
        objectFit: "cover", // This ensures the image covers the space without distorting
        display: "block", 
      // Ensure image is displayed as a block-level element
         // Center the image horizontally
         // Optional: to add rounded corners to the image
      },
    
      title: {
        fontSize: "18px",
        fontWeight: "500",
        marginBottom: "10px",
        fontFamily:'IBM Plex Serif',
        paddingTop:'10px'
        
      },
      description: {
        fontSize: "14px",
        fontFamily:'DM Sans',
        color: "#555",
        lineHeight: "20px",
        width:'105%',
        paddingTop:'2%'
      },heading:{
        fontSize:"32px",
        fontWeight:"700",
        color:"#091B29",
        marginBottom:"10px",
        textAlign:"center",
        marginTop:"20%"
      },
      // layout:{
      // // width:'32%'
      // gap:'50%'
      // }
      Gridimages:{
        width:'100%',
      },
      pagination: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        gap:'2px',
        marginBottom:'6%'

      },
      dot: {
        width: "50px",
        height: "2px",
        borderRadius: "50%",
        background: "#006838", 
        cursor: "pointer",
      },
      activeDot: {
        width: "6px",
        height: "10px",
        borderRadius: "1px",
        background: "#DFD328 ",
      
      },
    })