import axios from 'axios'
const detail =(ID)=>{
axios.get(`https://challenge.lexicondigital.com.au/api/filmworld/movie/${ID}`,{
     headers:{
         "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
    }
   });
}
   export default detail