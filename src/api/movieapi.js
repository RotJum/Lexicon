
import axios from 'axios'

const api=  axios.get("https://challenge.lexicondigital.com.au/api/filmworld/movies",{
     headers:{
         "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
    }
   });

   export default api