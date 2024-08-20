const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {trip?.tripData?.itinerary.map((item, index) => (
          <div>
            <h2 className="font-medium text-lg">{item.day}</h2>
            {item.plan.map((place, index) => (
              <div>
                <h2 className="font-medium text-sm text-orange-600">
                  {place.time}
                </h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
