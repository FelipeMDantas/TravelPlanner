import { Button } from "@/components/ui/button";
import { GetPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlaceImage();
  }, [trip]);

  const GetPlaceImage = async () => {
    const data = { textQuery: trip?.userSelection?.location?.label };

    const result = await GetPlacesDetails(data).then((resp) => {
      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );

      setPhotoUrl(photoUrl);
    });
  };

  return (
    <div>
      <img
        src={photoUrl}
        className="h-[300px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl text-">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="py-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-base">
              📅 {trip.userSelection?.noOfDays} Day(s)
            </h2>
            <h2 className="py-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-base">
              💰 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="py-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-base">
              🥂 Number of travelers: {trip.userSelection?.travelers}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
