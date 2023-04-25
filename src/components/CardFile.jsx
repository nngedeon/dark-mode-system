import coffeeCard from "../assets/images/coffeeCardMedia.jpg";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
const CardFile = () => {
  return (
    <Box sx={{  ml:60, mt: 10 }}>
    <Typography variant="h4"> An dark mode system</Typography>
      <Card sx={{ width: 320, mt: 5 }}>
        <CardMedia
          image={coffeeCard}
          alt=" a cup of coffee "
          sx={{ width: "100%", height: "180px" }}
        />

        <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            a cup of is very good to the health of every body in this world
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CardFile;
