import { bgcolor, borderRadius, display, fontFamily, fontWeight, height, textAlign, width } from "@mui/system";

export const Aboutstyles =(theme)=>({
     maingrid:{
        
        width:'92%',
        height: "296px", //
        bgcolor:"#ffffff",
        display:'flex',
        
        marginRight:'1%',
        gap:'5%',
        padding:'4%',
        "@media (max-width:600px)":{
          // display:'flex',
          width:'100%',
          flexDirection:'column',
          height:"100%",
          padding:'5%',

         gap:0
        
        },
       
     },
     text:{
      
        
        fontSize:'14px',
         fontFamily:'DM sans',
         color:'#51585E',
         width:'115%',
         "@media (max-width:600px)":{
          width:'150%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         }
     },
     img:{
   
        width: "32%",
        height:'105%',
        bgcolor:"#CFE1DF",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
        "@media (max-width:600px)":{
          width:'100%',
          
          
          padding:'0',
          marginBottom:'10px'
 
        }
        
     },
     aboutus:{
        fontSize:'32px',
        fontWeight:'700',
        textAlign:'center',
        marginTop:'1%',
        marginBottom:'20px',
         fontFamily:'IBM Plex Serif'
     },
      cardIcon: {
        
        width:'40%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
        "@media (max-width:600px)":{
        width:"100%",
          display:'flex',
          justifyContent:'left',
          alignItems:'left',
 
        }
      },
      cardTitle: {
        fontSize: "20px",
        fontWeight: "500",
        marginBottom: "5px",
        textAlign: "left",
        marginLeft:'5%',
        fontFamily:'IBM Plex Serif',
        "@media (max-width:600px)":{
        width:"100%",
          display:'flex',
          justifyContent:'left',
          alignItems:'left',
 
        }
      },
      cardDescription: {
        marginTop:'2%',
        fontSize: "14px",
        color: "#555555",
        lineHeight: "20px",
        textAlign: "left",
        marginLeft:'5%',
        width:'100%',
        fontFamily:'DM Sans',
      "@media (max-width:600px)":{
            width:"100%",
          display:'flex',
          justifyContent:'left',
          alignItems:'left',
          
 
        }
      },
      mainbox: {
       display:'flex',
       alignItems: 'center',
       justifyContent: 'center',
       width:'550px',
      
       "@media (max-width:600px)":{
        flexDirection: 'column',
        alignItems: 'left',
        width:'100%',
        
       }
    
        
    
  
      },
      box: {
        display: "flex",
       // Two rows of equal height

    
        alignItems: "center",
        justifyContent: "center",
       
        
       
        backgroundColor: "#ffffff",
       
        marginTop: "20px",
         
         height: "160px",
        
        
        "@media (max-width:600px)":{
          height:'100%',
          flexDirection:'column-reverse',
padding:'4%'
        }
      },
  
      mainabout:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
        
      },
      maintext:{
         width:'55%',
         "@media (max-width:600px)":{
          width:'70%',
          
         }
      },
      mapgrid:{
       
      }
      ,grids:{
   
      
        display:'flex',
        alignItems: 'center',
        justifyContent:'center'
      },paragraph:{
        width:'100%', 
      }
    


})