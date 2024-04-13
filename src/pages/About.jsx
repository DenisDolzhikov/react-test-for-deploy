import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const About = () => {


  return (
    <Suspense fallback={<BounceLoader />}>
      <div className='main'>
        About
      </div>
    </Suspense>
  )
}

export default About;