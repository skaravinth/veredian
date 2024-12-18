export const Homess =(theme)=>({
    topbar: {
      position: 'fixed',

      zIndex: 1200, 
    },
    layout: {
      
      display: 'flex',
      bgcolor: '#ffffff',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center', 
      minHeight: '100vh',     
    
           
    },
    toco:{
padding:'2% 5%',
"@media (max-width:600px)":{
  padding:'0% 0%',

  right:0
  
}

    },
    about:{
      bgcolor:theme.palette.background.primary.lite,
      width:'94.8%',
      padding:'3%',
     height:'100%',
      
      marginTop:'50px',
      "@media (max-width:600px)":{
        padding:'3%',
        width:'100%',
      }
    },
    Footer:{
      marginBottom:'50px',
      "@media (max-width:600px)":{
        marginBottom:'0px',
      }
    }
  })
  