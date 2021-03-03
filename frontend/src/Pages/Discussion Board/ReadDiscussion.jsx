import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { DISCUSSION_URL } from '../../Resources/CONSTS.json';
import IndividualDiscussion from './IndividualDiscussion';

const ReadDiscussion = ({ msg, trigger }) => {

    // states
    const [DiscussionList, setDiscussionList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // useEffect -> triggers a sideEffect
    useEffect(() => {
        axios.get(`${DISCUSSION_URL}/getAll`)
            .then((res) => {
                setIsLoaded(true);
                setDiscussionList(res.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })
    }, [msg] );

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            
            <div className="row">
                {DiscussionList.map((item) => (
                    <div className="col-md-6">
                        <IndividualDiscussion key={item._id} item={item} trigger={trigger} />
                    </div>
                ))}
            </div>
            
        )
    }
}

export default ReadDiscussion;