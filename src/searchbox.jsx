import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState } from 'react';
export default function SearchBox({ updateinfo ,rcheck}) {
    let [city, setcity] = useState('')
    let [notfound, setnotfound] = useState(false)
    let [loading, setLoading] = useState(false); 

    let url = "https://api.openweathermap.org/data/2.5/weather"
    let key = "17fe7343810df18cbb6197fb70cf1365"

        let getdata = async () => {
            let response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`)
            
            if (!response.ok) {
                setnotfound(true);
                rcheck(true)
                throw new Error("City not found");
            }
    
            let jsonresponses = await response.json()
           
            let resultobj = {
                city: city,
                temp: jsonresponses.main.temp,
                temp_min: jsonresponses.main.temp_min,
                temp_max: jsonresponses.main.temp_max,
                humidity: jsonresponses.main.humidity,
                pressure: jsonresponses.main.pressure,
                feels_like: jsonresponses.main.temp,
                weather: jsonresponses.weather[0].description
            }
            return resultobj

        }
    


    function handlefiled(event) {
        setcity(event.target.value)
    }


    
    
    let handlesubmit = async (event) => {
        event.preventDefault();
        setnotfound(false); 
        setLoading(true)
        try {
            setnotfound(false); 
            let result = await getdata();
            updateinfo(result);  // Pass data to parent component
            console.log(result);
            rcheck(false)
        } catch (error) {
            setnotfound(true);   // If any error, show "Not Found"
            rcheck(true)
        } finally {
            setcity('');  // Clear input field
            setLoading(false)
        }
    };
    
    return (
        <div className='search'>
            <h1 style={{ color: 'white' }}>Weather App</h1>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: '70vh'  }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    {/* {notfound && <p>No Such place exist!</p>} */}
                    <form onSubmit={handlesubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            required
                            size='small'
                            value={city}
                            onChange={handlefiled}
                        />&nbsp;
                        <Button variant="contained" type='submit'>Contained</Button>
                    </form>
                </>
            )}
        </div>
    );
}