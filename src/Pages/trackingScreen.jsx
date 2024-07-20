import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Slider, 
  Button, 
  Typography, 
  Container,
  Snackbar
} from '@mui/material';
import { ShareOutlined } from '@mui/icons-material';

const TrackingScreen = () => {
    const [time, setTime] = useState(new Date());
    const [speed, setSpeed] = useState(1);
    const [startTime] = useState(new Date());
    const canvasRef = useRef(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [shareUrl, setShareUrl] = useState('');
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);
    const category = 'happiness';
    const apiKey = '4wtBT4MgweRyLdu7o6CQLQ==N77hK2cxK6uBGHLw';
  
    useEffect(() => {
        const fetchQuote = async () => {
          try {
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
              method: 'GET',
              headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
              },
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setQuote(result);
          } catch (error) {
            setError(error.message);
            console.error('Error:', error);
          }
        };
  
        fetchQuote();
        
        // Fetch a new quote every 5 seconds
        const intervalId = setInterval(fetchQuote, 5000);
  
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
      }, [category, apiKey]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlSpeed = urlParams.get('speed');
        if (urlSpeed) {
            setSpeed(parseFloat(urlSpeed));
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(startTime - (new Date() - startTime) * speed));
        }, 1000 / speed);

        return () => clearInterval(timer);
    }, [speed, startTime]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const radius = canvas.height / 2*0.9;

        // Clear the entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Reset the transformation matrix to the identity matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Translate to the center of the canvas
        ctx.translate(canvas.width / 2, canvas.height / 2);

        drawClock(ctx, radius);
    }, [time]);

    function drawClock(ctx, radius) {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }

    function drawFace(ctx, radius) {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = radius * 0.05;
        ctx.stroke();

        // Draw center point
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    function drawNumbers(ctx, radius) {
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (let num = 1; num <= 12; num++) {
            const ang = num * Math.PI / 6;
            const x = radius * 0.8 * Math.sin(ang);
            const y = -radius * 0.8 * Math.cos(ang);
            ctx.fillText(num.toString(), x, y);
        }
    }

    function drawTime(ctx, radius) {
        const now = time;
        const second = now.getSeconds() * Math.PI / 30;
        const minute = (now.getMinutes() + now.getSeconds() / 60) * Math.PI / 30;
        const hour = (now.getHours() % 12 + now.getMinutes() / 60) * Math.PI / 6;

        // Hour
        drawHand(ctx, hour, radius * 0.5, radius * 0.07);

        // Minute
        drawHand(ctx, minute, radius * 0.8, radius * 0.07);

        // Second
        drawHand(ctx, second, radius * 0.9, radius * 0.02);
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

    const handleSpeedChange = (event, newValue) => {
        setSpeed(newValue);
    };

    const handleShare = () => {
        const baseUrl = "http://localhost:3000/sharedTrackingScreen";
        const url = new URL(baseUrl);
        url.searchParams.set('speed', speed);
        const shareUrl = url.toString();
        
        window.open(shareUrl, '_blank');

        // // Copy the URL to the clipboard
        // navigator.clipboard.writeText(shareUrl)
        //     .then(() => {
        //         // Notify the user that the URL was copied
        //         setSnackbarOpen(true);
        //     })
        //     .catch(err => {
        //         console.error('Failed to copy URL: ', err);
        //     });
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        
        <Container maxWidth="sm" sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center',width:'375px',height:'auto', backgroundImage:'url(/assets/h1.png)'}}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',}}>
                <canvas ref={canvasRef} width={300} height={300}  />

                <Typography variant="h6" sx={{ mt: 2 ,color: 'white'}}>
                    Clock Speed Control
                </Typography>
                <Slider
                    value={speed}
                    onChange={handleSpeedChange}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0.1}
                    max={5}
                    step={0.1}
                    sx={{ width: '80%', mt: 2,
                        color: '#FE8C00', // Change the slider color
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#FE8C00', // Change the thumb color
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: '#FE8C00', // Change the track color
                        },
                        '& .MuiSlider-rail': {
                            backgroundColor: '#878787', // Change the rail color if needed
                        },
                     }}
                />

                <Button
                    variant="contained"
                    startIcon={<ShareOutlined />}
                    onClick={handleShare}
                    sx={{ mt: 3, mb: 2 , backgroundColor: '#FE8C00',
                        "&:hover": {
                    backgroundColor: '#FE8C00',
                     // Maintain the same color on hover
                  },
                  textTransform: "none",
                       }}
                >
                    Share
                </Button>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message="Share URL copied to clipboard!"
                />
                <Box sx={{my:4,backgroundColor:'#FE8C00',borderRadius:'100px',padding:"25px", alignItems:'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant='h5'sx={{fontWeight:'600'}} color='black' >Quote of the second</Typography>
                 {error && <Typography variant='body' color='white'>Error: {error}</Typography>}
      {quote && 
        
          <Typography variant='body' color='white'>{quote[0]?.quote}</Typography>
          
      }
</Box>
              
            </Box>
        </Container>
    );
};

export default TrackingScreen;
