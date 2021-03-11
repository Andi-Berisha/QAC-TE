import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


const FilmClassification = () => {

    const players = [
        {
            Classification: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/BBFC_U_2019.svg/1024px-BBFC_U_2019.svg.png" class="center" alt = "U rating logo"/>,
            Description: "Suitable for all - There is nothing unsuitable for children aged four years and over."
        },

        {
            Classification: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BBFC_PG_2019.svg/1024px-BBFC_PG_2019.svg.png" class="center" alt = "PG rating logo" />,
            Description: "General viewing, but some scenes may be unsuitable for young children - A PG film should not unsettle a child aged around eight or older."
        },

        {
            Classification: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BBFC_12_2019.svg/1024px-BBFC_12_2019.svg.png" class="center" alt = "12 rating logo"/>,
            Description: "Suitable only for persons of 12 years and over. (Not to be supplied to any person below that age)"
        },

        {
            Classification: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BBFC_12A_2019.svg/1024px-BBFC_12A_2019.svg.png" class="center" alt = "12A rating logo"/>,
            Description: "Generally suitable for those aged 12 and over; those under 12 admitted, but only if accompanied by an adult."
        },

        {
            Classification: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/BBFC_15_2019.svg/1024px-BBFC_15_2019.svg.png" class="center" alt = "15 rating logo"/>,
            Description: "Suitable only for persons of 15 years and over. (Not to be supplied to any person below that age)"
        },

        {
            Classification: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1024px-BBFC_18_2019.svg.png" class="center" alt = "18 rating logo"/>,
            Description: "Suitable only for persons of 18 years and over. (Not to be supplied to any person below that age)"

        }
    ]

    const renderPlayer = (player, index) => {
        return (
            <tr style={{ color: "white" }} key={index} >
                <td>{player.Classification}</td>
                <td>{player.Description}</td>

            </tr>
        )
    }

    return (

        <>
            <div className="Table">
                <div className="col-md-6 " style={{ width: 700, marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
                    <ReactBootStrap.Table striped bordered hover variant="dark">
                        <thead >
                            <tr style={{ color: "white" }}>
                                <th className="DescriptionHeader">Classification</th>
                                <th className="DescriptionHeader">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(renderPlayer)}
                        </tbody>
                    </ReactBootStrap.Table>
                </div>
            </div>
        </>
    )
}

export default FilmClassification;