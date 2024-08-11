import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences. 🏕️
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip plannel will generate a
        customized itinerary.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">Choose a destination</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days will you be travelling?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.budget === item.title && "shadow-lg border-black"
              }`}
              onClick={() => handleInputChange("budget", item.title)}
            >
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          Who will you take with you?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelList.map((item, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.travelers === item.people && "shadow-lg border-black"
              }`}
              onClick={() => handleInputChange("travelers", item.people)}
            >
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
