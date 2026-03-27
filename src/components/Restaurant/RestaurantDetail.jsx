import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../Rating/RatingStars";
import ReviewItem from "./ReviewItem";

const API_URL = "http://localhost:4000/restaurants";

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!restaurant) return <div>Not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-4 md:px-8 py-8">
      <div className="mb-6">
        <div className="text-2xl font-bold mb-2">{restaurant.name}</div>
        <RatingStars rating={restaurant.star} />
      </div>
      {/* Map section (optional) */}
      {/* <div className="mb-6">Map here</div> */}
      <div className="border-t pt-6">
        <div className="text-lg font-semibold mb-4">Reviews</div>
        <div className="flex flex-col gap-0">
          {(restaurant.reviews || []).map((review, idx) => (
            <ReviewItem key={idx} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetail;
