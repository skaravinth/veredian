import { MarginRounded } from "@mui/icons-material";
import { fontFamily, fontSize, fontWeight, letterSpacing, textAlign } from "@mui/system";

export const styless=(theme)=>({
    layout:{
        width: "94.8%",
        height:'285px',
        bgcolor:"#009065",
        marginLeft:'2.5%',
        justifyContent:"center",
        alignItems:"center",
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        position:'relative',
        "@media (max-width:600px)":{
            width:'100%',
            height:'294px',
            marginLeft:"0px",
          

        }

    },
    mail:{
        width:'25%',
       
        height:'25px',
        bgcolor:'#F9C300',
        color:'#091B29',
        
        
        marginRight:'5%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'12px',
        fontWeight:700,
        fontFamily:'DM Sans',
       marginTop:'0.7%',
        
        "@media(max-width:600px)":{
            width:'25%',
          
            height:'25px',
            fontFamily:'DM Sans',
            marginBottom:'2%',
            marginTop:'1.2%',
            
        }
    },
    mailto:{
        display:'flex',
        width: "25.7%",
height: "52px",
bgcolor:'#0000004D',
alignItems:"center",
justifyContent:"space-around",
positions:'relative',

"@media(max-width:600px)":{
width:'90%',
justifyContent:'space-between'
,

},
meeting:{
    fontSize:'12px',

    fontFamily:'DM Sans',
    fontWeight:'700',
    lineHeight:'20px',
    "@media(max-width:600px)":{
    
        color:'red',
 
    }
}


        
    },
    contact:{
        fontSize:'32px',
        color:'#FFFFff',
        fontFamily:'IBM Plex Serif',
        fontWeight:700,
        
    },
    text:{
        color:'#FFFFFF',
        fontFamily:'DM Sans',
        fontSize:'14px',
        fontWeight:'400',
        lineHeight:'20px',
        
        
        "@media(max-width:600px)":{
            fontSize:'14px',
            width:'90%',
            textAlign:'center',
        }
    },arrow:{
       alignItems:'right',
        marginTop:'5px',
    
        
        "@media(max-width:600px)":{
      
        }
    }
    ,
    email:{
        color:"#FFFFFF",
        fontSize:"18px",
        fontWeight:'600',
        FontFamily:'DM Sans',
     letterSpacing:"1px",
        "@media(max-width:600px)":{
            marginLeft:'5%',
        }
    },contactus:{
        marginBottom:'15px'
    },
    help:{
        fontSize:'14px',
        color:'#ffffff',
        fontFamily:'DM Sans',
    },
    Right:{
        position:'absolute',
        left:0,
        top:0,
        "@media(max-width:600px)":{
            display:'none'
            }
    }, Left:{
        position:'absolute',
        right:0,
        top:0,
        "@media(max-width:600px)":{
display:'none'
}
    },
    twothings:{
        display:'flex',
        width:'85%',
        marginLeft:'7%',
        "@media(max-width:600px)":{
        marginLeft:'5%',
        
        }
    },
    git:{
        fontFamily:'DM Sans',
        fontSize:'18px',
        color:'#ffffff',
    
        marginTop:'3px',
        "@media(max-width:600px)":{
            letterSpacing:'1px',
            marginRight:'0%'
        }
    }
    
})