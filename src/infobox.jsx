import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography'; 
import CardActionArea from '@mui/material/CardActionArea'; 
import Alert from '@mui/material/Alert'; 
import AlertTitle from '@mui/material/AlertTitle';
import "./infobox.css";


export default function InfoBox({ obj, cityNotFound }) {
    
    
    const image = "https://st2.depositphotos.com/1031174/6719/i/450/depositphotos_67199689-stock-photo-dramatic-sky.jpg";

    return (
        <div className='infobox'>
            {cityNotFound ? (
                <Alert severity="error"sx={{ margin:3 }} >
                    <AlertTitle>Error</AlertTitle>
                    Sorry No Such Place Found!
                </Alert>
                
            ) : obj ? (
                <div className='card'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={image}
                                alt="weather"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {obj.city}
                                </Typography>
                                <div>temperature: {obj.temp}&deg;c</div>
                                <div>pressure: {obj.pressure}</div>
                                <div>humidity: {obj.humidity}</div>
                                <div>temp-max: {obj.temp_max}&deg;c</div>
                                <div>temp-min: {obj.temp_min}&deg;c</div>
                                The weather can be described as <i>{obj.weather}</i> as feel like {obj.feels_like}&deg;c
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ) : null} 
        </div>
    );
}
