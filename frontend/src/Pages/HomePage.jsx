import BasicFilm from 'react-film';
import React from 'react';
import { Button } from 'reactstrap';



const Home = () => {


  return (
    <div className="container" >

      <h5 style={{ color: "white" }} className="text-center">Welcome to QA Cinemas!</h5>

      <BasicFilm height={400}>
        <img alt="Avenger:Endgame" src="https://i.imgur.com/VmLLlbK.jpg" height={400} />
        <img alt="Guardians of the Galaxy" src="https://i.imgur.com/grRtRHs.jpg" height={400} />
        <img alt="Up" src="https://i.imgur.com/4LN7A1G.jpg" height={400} />
        <img alt="Thor:Ragnarok" src="https://i.imgur.com/GWr9lUc.jpg" height={400} />
        <img alt="Avengers:Infinity War" src="https://i.imgur.com/aouNMIx.jpg" height={400} />
        <img alt="Iron Man 3" src="https://i.imgur.com/sYIlBfm.jpg" height={400} />
      </BasicFilm>


      <div class="container" >
        <div class="center">
          <Button href="/bookings" color="secondary" style={{ margin: '0 auto', display: 'block' }}>Book Tickets</Button>{' '}
        </div>
      </div>
    </div>
  );


}

export default Home;