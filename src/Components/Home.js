import '../App.css'
import About from './About';
import Leftproject from './Leftproject';
import RightProject from './Rightproject';
import Stag from './Stag';
import Etag from './Etag';
import Decorative from './Decorative';
import Service from './Service';
import Edu from './Edu';
import Foot from './Foot';
import Landing from './Landing';
import Contact from './Contact';
import a from '../images/1.png';
import b from '../images/2.png';
import ParticlesComponent from '../ParticlesComponent';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor";
import Aos from "aos";


function Home() {

  useEffect(() => {
    Aos.init({duration:2000});
  }, []);


  return (
   <>

           <ParticlesComponent id="particles" />
   <div className="p-8">

   <Landing />
   <About tag="about" id="about" />
   <Stag tag="tech stacks"/>
   <Edu />
   <Etag tag="tech stacks"/>
   <Decorative tag="CODING IS POETRY" />
   <Stag tag="project" />
   <Leftproject pname="CES Official Website" tag="Officail Website of Computer Engineering Website!" content="Making offical website using HTML, CSS and JavaScript language with responsive design" imgsrc={a} link="https://cesmmmut.netlify.app/" git="https://github.com/aaradhayasingh811/ces-official-draft" />
   <RightProject pname="Ennexus Website" tag="Let's see how beautiful the website can be!" content="A website for the three-days technical fest which is made using React.." imgsrc={b} link="https://aaradhayasingh811.github.io/Ennexus2024final/" git="https://github.com/aaradhayasingh811/Ennexus2024final" />
   <div className="flex justify-center">
   {/* <button className='text-white text-xl border-2 border-white p-2 transition ease-in-out duration-300' ><Link to={/project}>More Projects..</Link></button> */}
   <Link className='text-white text-xl border-2 border-white p-2 transition ease-in-out duration-300 rounded my-5' to="/project">More Projects..</Link>
   </div>
   <Etag tag="project" />
   <Stag tag="service"/>
   <Service />
   <Etag tag ="service" />

   <Etag tag="contact" />
   <Contact id="contact" />
   <Stag tag="contact" />
   
   <Foot />
   </div> 



   </>
  );
}

export default Home;
