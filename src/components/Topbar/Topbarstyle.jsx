export const Topbarstyles={
    topbar:{
        backgroundColor:'#fff',
        color:'#fff',
        padding:'10px',
        display:'flex',
        flexDirection:'row',
        width: '100%', 
        justifyContent:'space-between',
        alignItems:'center'
        ,top:0,
        borderBottom:'1px solid #CACFDB',
        position:'fixed',
        zIndex:1000,
        height:'121px',
        "@media (max-width:600px)":{
      height:'100px'
        } 
        
    },
      tabs: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '10px',
        marginBottom: '0',
        alignItems: 'center',
        marginRight:'29%',
        outline: 'none',
        gap:'20px',
        "@media(max-width:600px)":{
          display: 'none'
        }
    
   
      },logo:{
        marginLeft:'40px',
        "@media(max-width:600px)":{
          marginLeft:'0' ,
          width:'60%',
          padding:'3%',
         
          
        }

      },
      close:{
        "@media(max-width:600px)":{
          marginRight:'5%',
         
        }
      },
      smallimg:{
        "@media(max-width:600px)":{
          padding:'4% '
        }
      },
      tab: {
        color: '#51585E',
        fontWeight: '500',
        padding: '10px 10px',
        textTransform: 'none',
        outline:'none',
        fontFamily:'IBM Plex Serif',
        fontSize:'18px',
        borderBottom: '5px solid transparent',

       
      },
      taber: {
        color: '#51585E',
        fontWeight: '500',
       
        textTransform: 'none',
        outline:'none',
        fontFamily:'IBM Plex Serif',
        fontSize:'18px',
        borderBottom: '5px solid transparent',

       
      },
      activeTabButton: {
        color: '#009065',
        fontWeight: '500',
        borderBottom: '5px solid #009065',
        outline: 'none',
     
      },
      grid:{
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      },
      listbutton:{
        
        marginBottom:'10px',
        color:'#000000',
        
      }
      
     
}