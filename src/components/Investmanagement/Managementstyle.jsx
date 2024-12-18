import { bgcolor, display, fontFamily, fontSize, fontWeight, height, letterSpacing, lineHeight, textAlign, width } from "@mui/system";

export const managements=(theme)=>({
    maingrid:{
        width:'94.8%',
        height:'508px',
        bgcolor:theme.palette.background.primary.main,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border:'none',
        marginLeft:'40px',
        position:'relative',
       
        // marginRight:'40px',
    marginTop:'130px',
    overflow:'hidden',
    textAlign:'center',
    "@media (max-width:600px)":{
        marginLeft:'0',
        width:'100%',
        height:'663px',
        alignItems: 'start',
      
    }
    },
    invest:{
        width:'15%',
        height:'24px',
        bgcolor:"#DFD538",
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border:'none',
        textAlign:'center',
        letterSpacing:'2px',
        marginBottom:'20px',
     "@media (max-width:600px)":{
     width:'75%'
    }
}
,
maininvest:{
display:'flex',
alignItems: 'center',
justifyContent: 'center',
flexDirection:'column',
marginBottom:'7%',
"@media(max-width:600)":{
    alignItems:'start',
    justifyContent:'flex-start',
    width:'100%',
    height:'100%'
}
},

manageinvest:{
        fontWeight:'800',
        fontSize:'12px',
        
        display:'flex',
        fontFamily:'DM Sans',
        
        
        
        color:'#ffffff',
        "@media (max-width:600px)":{
         letterSpacing:'6px'
           }
        
},
stratergy:{
    fontSize:'48px',
     width:'80%',
    // height:'120px',
    lineHeight:'60px',
    display:'flex',
    fontWeight:'700',
    fontFamily:'IBM Plex Serif',
    color:'#ffffff'
},stratergygrid:{
    display:'flex',
    alignItems: 'center',
    justifyContent  : 'center',
    textAlign: 'center',
},knowmore:{
    width:'189px',
    height:'52px',
    bgcolor:"#0000004D",
    color:'#ffffff',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'none',
    fontWeight:'600',
    outline:'none',
    marginTop:'2%',
    
   
    gap:'10px',
    fontSize:'18px',

    "&:focus": {
        outline: 'none',
    },
    "@media (max-width:600px)":{
        marginTop:'10%'
    }
},right:{
    display:'flex',
    position:'absolute',
    left:0,
    top:0,
    "@media (max-width:600px)":{
        marginTop:'50%',
       position:'absolute',
       left:-70,
       }
    

},left:{
    display:'flex',
    position:'absolute',
    right:0,
    top:0,
    "@media (max-width:600px)":{
        marginTop:'50%',
       position:'absolute',
       right:-70,
       }
    

}
})