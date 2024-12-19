export const style={
    copyright:{
        width:'100%',
        bottom:0,
   
        bgcolor:'#F5F7FA',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
       
     
        padding:'10px',
        wdth:'1440px',
        height:'66px',
        "@media(max-width:600px)":{
            flexDirection:'column',
            textAlign:'start',
            justifyContent:'start',
            alignItems:'start',
            gap:'10px',
            marginTop:"0px",
      
            height:'100%'
        }
       
    },text1:{
        fontSize:'12px',
        fontFamily:'DM Sans',
        fontWeight:400,
        marginLeft:'30px',
        "@media(max-width:600px)":{
            marginLeft:'10px',
        }
       
    },text2:{
        fontSize:'12px',
        fontFamily:'DM Sans',
        fontWeight:400,
        marginRight:'30px',
        "@media(max-width:600px)":{
            marginLeft:'10px',
        }
       
    }
}