
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({stars}) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        
        <p style={{ marginTop : "5px" }} >Your Rating: </p>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return <label>
                <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => {setRating(ratingValue);
                    stars(ratingValue);}}

                />

                <FaStar 
                    className="star"
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                />

            </label>;
        })}



   



    </div>
}

export default StarRating