import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HomeDashboard() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card sx={{minWidth: 270, boxShadow: 3}}>
            <CardContent>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: 100 }}
              >
                <Grid item>
                  <div>
                    <Typography variant="h5" color={"textPrimary"}>
                      <EuroIcon style={{color: '#d32f2f', fontSize: '1.8rem'}}/>
                    </Typography>
                  </div>
                </Grid>
                <Grid item style={{textAlign: 'center'}}>
                  <Typography variant="h5" color={"textPrimary"} gutterBottom style={{fontWeight : "bold"}}>
                    2000
                  </Typography>
                  <Typography variant="p" color={"textSecondary"} paragraph>
                    Any Text
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card sx={{minWidth: 270, boxShadow: 3}}>
            <CardContent>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ height: 100 }}
              >
                <Grid item>
                  <div>
                    <Typography variant="h5" color={"textPrimary"}>
                      <AddShoppingCartIcon style={{color: '#651fff', fontSize: '1.8rem'}}/>
                    </Typography>
                  </div>
                </Grid>
                <Grid item style={{textAlign: 'center'}}>
                  <Typography variant="h5" color={"textPrimary"} gutterBottom style={{fontWeight : "bold"}}>
                    2000
                  </Typography>
                  <Typography variant="p" color={"textSecondary"} paragraph>
                    Any Text
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card sx={{minWidth: 270, boxShadow: 3}}>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ height: 100 }}
              >
                <Grid item>
                  <div>
                    <Typography variant="h5" color={"textPrimary"}>
                      <CalendarMonthIcon  style={{color: '#ffea00', fontSize: '1.8rem'}}/>
                    </Typography>
                  </div>
                </Grid>
                <Grid item style={{textAlign: 'center'}}>
                  <Typography variant="h5" color={"textPrimary"} gutterBottom style={{fontWeight : "bold"}}>
                    2000
                  </Typography>
                  <Typography variant="p" color={"textSecondary"} paragraph>
                    Any Text
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card sx={{minWidth: 270, boxShadow: 3}}>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ height: 100 }}
              >
                <Grid item>
                  <div>
                    <Typography variant="h5" color={"textPrimary"}>
                      <PersonIcon style={{ color: '#ff5722', fontSize: '1.8rem' }} />
                    </Typography>
                  </div>
                </Grid>
                <Grid item style={{textAlign: 'center'}}>
                  <Typography variant="h5" color={"textPrimary"} gutterBottom style={{fontWeight : "bold"}}>
                    2000
                  </Typography>
                  <Typography variant="p" color={"textSecondary"} paragraph>
                    Any Text
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
