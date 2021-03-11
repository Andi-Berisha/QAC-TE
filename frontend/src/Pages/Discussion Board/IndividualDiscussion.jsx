import { Toast, ToastBody, ToastHeader } from "reactstrap";




const IndividualDiscussion = ({ item, trigger }) => {

    return (
        // <Card>
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader> <h6>Movie: {item.title}</h6>
                <h6>Rating: {item.Rating}/5</h6>


                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    

                    <p>{item.Comments}</p>



                    <hr />
                    <p>By: <em>{item.username}</em></p>




                </ToastBody>

            </Toast>
        </div>

    )
}
export default IndividualDiscussion; 