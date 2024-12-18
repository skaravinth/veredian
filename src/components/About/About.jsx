import React from 'react';
import {Box,Grid2,Typography,Card} from '@mui/material'
import { Aboutstyles } from './Aboutstyle';
import { lighttheme } from '../../Theme/Theme';
import Logo from '../../assets/logo1'
import image1 from '../../assets/Group52.svg'
import image2 from '../../assets/Group 53.svg'
import image3 from '../../assets/Group 54.svg'
import image4 from '../../assets/Group 56.svg'

const About = () => {
    const Aboutstyle=Aboutstyles(lighttheme);
    const Card = ({ title, description, icon }) => (
      <Box sx={Aboutstyle.mainbox}>
      <Box sx={Aboutstyle.box}>
        <Box sx={Aboutstyle.paragraph}>
          <Typography sx={Aboutstyle.cardTitle}>{title}</Typography>
          <Typography sx={Aboutstyle.cardDescription}>{description}</Typography>
        </Box>
        <Box sx={Aboutstyle.cardIcon}>
          <img src={icon} alt={title}     />
        </Box>
      </Box>
    </Box>
    
      );
    const cardData = [
        {
          title: "Excellence",
          description: "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
          icon: image1,  
        },
        {
          title: "Initiative",
          description: "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
          icon: image4,
        },
        {
          title: "Sustainability",
          description: "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
          icon: image2,
        },
        {
          title: "Integrity",
          description: "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
          icon:image3,
        }
      ];
  
  return (
    <Grid2 sx={Aboutstyle.mainabout}>
<Typography sx={Aboutstyle.aboutus}>
    About Us
</Typography>
<Grid2 sx={Aboutstyle.maingrid} >
    <Grid2 sx={Aboutstyle.img}>
      <Logo />
      

    </Grid2>
    <Grid2 sx={Aboutstyle.maintext}>
        <Typography sx={Aboutstyle.text}>
        Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise. <br/><br/>

We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this is mind.<br/><br/>

Veridian's expertise is delivered with a responsible approach to our business, our team, our local community, and the environment.
        </Typography>
    </Grid2>
</Grid2>

<Grid2 container sx={Aboutstyle.grids} size={12}>
        {cardData.map((item, index) => (
          <Grid2 item  key={index} size={{xs: 12,md: 5.6}} sx={Aboutstyle.mapgrid}>
            <Card
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </Grid2>
        ))}
      </Grid2>

    </Grid2>
      
    
  );
}

export default About;
