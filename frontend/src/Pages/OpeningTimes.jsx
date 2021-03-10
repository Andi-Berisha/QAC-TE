import Iframe from 'react-iframe';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

const OpeningTimes = () => {

  return (

    <div className="container" style={{ marginTop: '20px' }}>

      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <h5 className="title" style={{ color: "white" }}><u><b>Getting Here</b></u></h5>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158931.88101325327!2d-0.21387938359370498!3d51.50751669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603544462f21d%3A0x60c3dd1ddc3bc0b7!2sQA%20Ltd.!5e0!3m2!1sen!2suk!4v1614868489930!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" />
          </MDBCol>
          <MDBCol>
            <h5 className="title" style={{ color: "white" }}><u><b>Opening Times</b></u></h5>
            <ul>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Monday</b> &nbsp;&nbsp; 09:00 - 23:30</p>
              </li>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Tuesday</b> &nbsp;&nbsp; 09:00 - 23:30</p>
              </li>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Wednesday</b> &nbsp;&nbsp; 09:00 - 23:30</p>
              </li>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Thursday</b> &nbsp;&nbsp; 09:00 - 23:30</p>
              </li>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Friday</b> &nbsp;&nbsp; 09:00 - 00:30</p>
              </li>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Saturday</b> &nbsp;&nbsp; 09:00 - 00:30</p>
              </li>
              <li className="list-unstyled">
                <p style={{ color: "white" }}><b>Sunday</b> &nbsp;&nbsp; 09:00 - 22:30</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


    </div>

  )
}

export default OpeningTimes;