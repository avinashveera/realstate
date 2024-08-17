import react,{useEffect, useState} from 'react'
import { CircularProgress } from '@mui/material';

import Carousel from '../components/Carousel'
import Testimonial from '../components/Testimonial';
import Propery from './Propery'

const Home=()=>{

    const [loading, setLoading] = useState(false);
useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        
        setLoading(false);
      }, 2000);

}, []);
return (<>


{loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <CircularProgress />
        </div>
      ) :
      (<>
        <Carousel />
        <Propery/>
        <Testimonial/>
        </>
      )

    }
    

    </>
)
setLoading(false)
}

export default Home;