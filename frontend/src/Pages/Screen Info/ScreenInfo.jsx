import React from 'react';
import { CardGroup, Card } from "react-bootstrap";

const ScreenInfo = () => {

  return (
    
    <div className="container">

      <h4 style={{
        color: "white"
      }}>We offer a range of standard and luxury screen and seating options at QA Cinemas</h4>

<br/>

      <div className="row" style={{
        color: "white"
        
      }}>
        <CardGroup>
          <div className ="Col-md-3">
          <Card bg="dark">
            <Card.Img variant="top" style={{ width: 290, height: 200 }} src="https://acoustima.com/wp-content/uploads/2018/03/Spin%C2%AE-panel-by-Acoustima%C2%AE-and-cinema-seats-by-seatupturkey%C2%AE.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Standard Seating</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Available at all of our Theatres</small>
            </Card.Footer>
          </Card>
          </div>
          <div className ="Col-md-3">
          <Card bg="dark">
            <Card.Img variant="top" style={{ width: 290, height: 200 }} src="https://icdn7.digitaltrends.com/image/digitaltrends/samsung_3d_cinema_led_4-1920x1280.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Standard Screens</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Available at all of our Theatres</small>
            </Card.Footer>
          </Card>
          </div>

          <div className ="Col-md-3">
          <Card bg="dark">
            <Card.Img variant="top" style={{ width: 290, height: 200 }} src="https://m.buro247.my/images/2020/06/1593440798107962.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Standard Member Seating</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Available at all of our Theatres</small>
            </Card.Footer>
          </Card>
          </div>
        </CardGroup>
        
      </div>

<br/>

      <div className="row" style={{
        color: "white"
      }}>
        <CardGroup>
        <div className ="Col-md-3">
          <Card bg="dark">
            <Card.Img variant="top" style={{ width: 290, height: 200 }} src="https://thenudge.com/wp-content/uploads/2020/10/gate-picturehouse.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Deluxe Seating</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Available at all of our Theatres</small>
            </Card.Footer>
          </Card>
          </div>

          <div className ="Col-md-3">
          <Card bg="dark">
            <Card.Img variant="top" style={{ width: 290, height: 200 }} src="https://i.insider.com/5a256d413dbef48d0e8b9b4f?width=1100&format=jpeg&auto=webp" />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Deluxe Screens</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Available only at London Waterloo Theatre</small>
            </Card.Footer>
          </Card>
          </div>

          <div className ="Col-md-3">
          <Card bg="dark">
            <Card.Img variant="top" style={{ width: 290, height: 200 }} src="https://i.pinimg.com/originals/67/c1/cc/67c1cce34c10b29db3402d40885728f8.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Deluxe Member Seating</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Available only at London Waterloo Theatre</small>
            </Card.Footer>
          </Card>
          </div>
        </CardGroup>
      </div>
    </div>

  )
}

export default ScreenInfo