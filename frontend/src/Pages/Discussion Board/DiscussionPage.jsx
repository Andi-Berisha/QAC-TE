import CreateDiscussion from "./CreateDiscussion"
import { useState } from 'react';
import ReadDiscussion from "./ReadDiscussion";
import { Container } from "reactstrap";

const DiscussionPage = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="container">
            <div className="row">
            
                <div className="col-md-4">
                    <CreateDiscussion trigger={trigger} />
                </div>
                {/* <div className="container"> */}
                <div className="col-md-8">
                    <div className="alert alert-success">{msg}</div>
                    <ReadDiscussion msg={msg} trigger={trigger}/>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
export default DiscussionPage; 