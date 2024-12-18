import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./Swipperstyle.css";
// import Person1 from '../../assets/person1'
// import Person2 from '../../assets/Peter Montegriffo KC Photo 2021 A High Res 1.png';
// import Person3 from '../../assets/Grahame_Jackson_24 1.png'
import  Person1 from "../../assets/image 5.svg";
import Person2 from "../../assets/Peter Montegriffo KC Photo 2021 A High Res 1 (2).svg";
import Person3 from "../../assets/Grahame_Jackson_24 1.svg"
import { useTheme, useMediaQuery } from '@mui/material';

const dotStyle =
    "width: 10px; height: 10px; border-radius: 50%; background-color: #006838;";
  const activeDotStyle =
    "width: 30px; height: 10px; border-radius: 5px; background-color: #E6D617;";
const teamMembers = [
  {
    name: "Julian Jarvis",

    description:
      "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
    image: Person1, // Replace with actual image
  },
  {
    name: "John Doe",
    
    description: (
      <>
    Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices. In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.  <br /> <br />
  
    Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services, and gaming.
    
    Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000. Peter was appointed KC in Gibraltar in June 2014.</>),
  
    image: Person2, // Replace with actual image
  },
  {
    name: "Jane Smith",
   
    description:
      (<>Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation. <br/><br/>

        He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.</>),
    image: Person3, // Replace with actual image
  },
];

export default function App() {
  const isMobile = window.innerWidth <= 600;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "2rem auto",
        maxWidth: "1700px",
        position: "relative",
        alignItems: "center",
        justifyContent:'center',
        
        borderRadius: "10px",

      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#003b4a",marginTop:isMobile ? "15%" : "6%",marginBottom: isMobile ? "5%":"3%",fontFamily: "IBM Plex Serif",fontSize: "32px",fontWeight:'700'}}
      >
        Our Team
      </Typography>

      
      <Swiper
  modules={isMobile ? [Pagination] : [Navigation]}
  slidesPerView={"auto"}
  centeredSlides={true}
  spaceBetween={110}
  navigation={!isMobile } 
  pagination={{
    el: ".custom-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}" style="${
        index === 1 ? activeDotStyle : dotStyle
      }"></span>`;
    },
  }} 
  style={{ padding: isMobile ? "0" : "0% 13.9%" }}
>
  {teamMembers.map((member, index) => (
    <SwiperSlide key={index}>
     
      <Box
        sx={{

          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          transform: "skew(-25deg)",
          height:'408px',
          width:'900px',

          "@media (max-width:600px)":{
            transform:"skew(0deg)",
            height:'913px',
            width:'100%',
            overflow: "hidden"
          }
        }}
      >
        {/* Avatar */}
        <img
          src={member.image}
          alt={member.name}
          style={{
            
            position: "absolute",
            transform: isMobile ? "skew(0deg)" : "skew(25deg)",
            left:isMobile ? 40 : 0,
            bottom:isMobile ? "60%":0,
            
          }}
        />

        
        <Box textAlign="center" >
        <Box sx={{width:'305px',height:'68px',bgcolor:'#009065',marginLeft:'20%',position:'absolute',bottom:20,zIndex:'-1',display:'flex',alignItems:'center',"@media(max-width:600px)":{transform: "skew(-50deg)",marginLeft:"30%",width:'110%',top:365,left:-200}}}>
          <Typography variant="h6" fontWeight="bold" style={{transform: isMobile?"skew(50deg)":"skew(25deg)",textAlign:'left',marginLeft:isMobile?"40%":'30%',fontSize:'24px',color:'#fff',fontFamily:'DM Sans',fontWeight:'500',letterSpacing:'0.5px',marginTop:isMobile?"0px":'7px'}}>
            {member.name}
          </Typography>
      
          </Box>
         <Box sx={{width:'555px',fontSize:'16px',fontFamily:'DM Sans',color:'#717B85',fontWeight:'400',textAlign:'left',marginTop:'40px',marginLeft:'120px',"@media (max-width:600px)":{width:'100%',textAlign:'left',marginLeft:'0',marginTop:'-30px',position:'absolute',left:0,top:470,padding:'5%'}}}>
         <Typography variant="body2" style={{ transform: isMobile ? "skew(0deg)" : "skew(25deg)" ,width:isMobile?"93%":'100%' }}
         >{member.description}</Typography>
         </Box>
          
        </Box>
      </Box>
    </SwiperSlide>
  ))}
</Swiper>
 <Box className="custom-pagination"></Box>
<Box>
  {/* {isSmallScreen ?<></>} */}
</Box>

  </Box>
);
}


      {/* Custom Navigation Buttons */}
      {/* <IconButton
        className="prev-arrow"
        sx={{
          position: "absolute",
          top: "50%",
          left: "-2rem",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#00bfa6",
          color: "#fff",
          "&:hover": { backgroundColor: "#00897b" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        className="next-arrow"
        sx={{
          position: "absolute",
          top: "50%",
          right: "-2rem",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#00bfa6",
          color: "#fff",
          "&:hover": { backgroundColor: "#00897b" },
        }}
      >
        <ArrowForwardIos />
      </IconButton> */}
  
