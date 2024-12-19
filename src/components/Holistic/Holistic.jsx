import React ,{useState,useEffect}from 'react';
import {Box,Grid2,Typography} from '@mui/material'
import { styless } from './Holisticstyle';
import{lighttheme} from '../../Theme/Theme'
import img1 from '../../assets/image 9.png'
import img2 from '../../assets/Group 60.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"; 
const Holistic = () => {
    const styles=styless(lighttheme)

    const dotStyle =
    "width: 10px; height: 10px; border-radius: 50%; background-color: #006838;";
  const activeDotStyle =
    "width: 25px; height: 10px; border-radius: 5px; background-color: #E6D617;";
    const cardData = [
        {
          title: "Investment focus and strategy",
          description: (
            <>
              Veridian focuses on companies across a number of different sectors,
              predominantly internet-based companies with long term growth potential,
              with the aim of releasing the potential of businesses, sustainably
              improving operations and generating significant growth and
              profitability. <br />
              <br />
              Our investment strategy creates value at every stage of an investment.
              Utilizing the strengths of our industry experienced team, Veridian has
              crafted a streamlined process from identifying potential opportunities
              through due diligence and deal documentation and onward to integration
              and transformation. Veridian’s unique combination of people and
              processes is market-tested to generate and release significant value and
              growth.
            </>
          ),
          image:img1,
        },
        {
            title: "Portfolio",
            description:(
             <>The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.,<br /> <br /> Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.</> ),
            image: img2,
          },
          {
            title: "Corporate social responsibility",
            description:
              "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
            image: img2,
          },
      ];

      const [isSmallScreen, setIsSmallScreen] = useState(false);

      // Effect to update screen size
      useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 600); // Set true if screen width is less than 600px
        };
    
        // Initial check and adding resize event listener
        handleResize();
        window.addEventListener("resize", handleResize);
    
        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      
  return (

   
    
    <Grid2 >
    <Grid2>
        <Typography sx={styles.heading}>Holistic Investment Approach</Typography>

    </Grid2>
    {isSmallScreen ? (
        <Swiper
        modules={[Pagination]} 
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="${
                index === 1 ? activeDotStyle : dotStyle
              }"></span>`;
            },
          }}
          
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Box sx={styles.card}>
                <Box sx={styles.Gridimages}>
                  <img src={card.image} alt={card.title} style={styles.cardImage} />
                </Box>
                <Box sx={styles.cardContent}>
                  <Typography variant="h6" sx={styles.title}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={styles.description}>
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
           <Box className="custom-pagination" sx={styles.pagination}></Box>
        </Swiper>
      ) : (
        <Box sx={styles.container}>
        <Grid2 container spacing={3} justifyContent="center" size={12}>
          {cardData.map((card, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index} sx={styles.layout} size={{xs:12,md:4}}>
              <Box
                sx={{
                  ...styles.card,
                  "&:hover": styles.cardHover,
                }}
              >
                <Box sx={styles.Gridimages}>
                <img src={card.image} alt={card.title} style={styles.cardImage} />
                </Box>
               
                <Box sx={styles.cardContent}>
                  <Typography variant="h6" sx={styles.title}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={styles.description}>
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      )}
    </Grid2>
  );
}

export default Holistic;
