import useFetch from "./useFetch"
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



interface IJoke {
    type: string
    setup: string
    punchline: string
    id: number
}
const FrontPage = () => {
    const [fetchJoke, setFetchJoke] = useState(0);
    const url: string = `https://official-joke-api.appspot.com/random_joke?trigger=${fetchJoke}`
    const {data, loading, error} = useFetch(url)
   
    const joke = data as IJoke

    return(
    <Box sx={{ flexGrow: 1}}>
        <Button onClick={() => {setFetchJoke(t => t + 1)}}color="inherit">Get Joke</Button>
        {loading && <p>Loading a joke..</p>}
        {error && <p>{error}</p>}
        {joke && (<Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.primary', mb: 1.5 }}>
                {joke.setup}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.primary', mb: 1.5 }}>
                {joke.punchline}
            </Typography>
            </CardContent>
        </Card>)}
    </Box>
);

}

export default FrontPage