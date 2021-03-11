import { useState } from "react";
import { Card, CardBody, CardTitle, Input } from "reactstrap"
import axios from "axios";
import { DISCUSSION_URL } from "../../Resources/CONSTS.json";
import StarRating from "../StarRating";

const Filter = require('bad-words'),
    filter = new Filter();
    filter.addWords('nomoretesting');


const DiscussionBoard = ({ trigger }) => {

    // states for form
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [Comments, setComment] = useState('');
    const [Rating, setRating] = useState(0);

    const create = (e) => {
        e.preventDefault();
        axios.post(`${DISCUSSION_URL}/create`, { username, title, Comments, Rating })
            .then((res) => {
                console.log(res.data);
                clearValues();
                trigger(res.data);
            }).catch((err) => {
                trigger(err.data);
            })
    }

    const clearValues = () => {
        setUsername('');
        setTitle('');
        setComment('');
        setRating(0);
    }

    return (
        <div className="bg-light border-right" id="sidebar">
            <Card>
                <CardBody>
                    <CardTitle>Create New Discussion
                    </CardTitle>
                    <form onSubmit={create}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={({ target }) => setTitle(target.value)}
                        />
                        <Input
                        
                        
                     
                            id="comment"
                            type="textarea"
                            className="form-control"
                            placeholder="Comments"
                            value={Comments}
                            onChange={({ target }) => setComment(filter.clean(target.value))}
                            
                        />
                        {/* <input
                        
                            type="number"
                            className="form-control"
                            placeholder="Rating"
                            value={Rating}
                            onChange={({ target }) => setRating(target.value)}

                        /> */}
                        <StarRating stars={setRating} />
                        <br />
                        <button type="submit" className="btn btn-outline-success col-md-12">Add</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default DiscussionBoard;