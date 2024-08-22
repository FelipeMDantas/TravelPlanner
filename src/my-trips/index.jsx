import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigation = useNavigation();

  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getUserTrips();
  }, []);

  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigation("/");
      return;
    }

    setUserTrips([]);

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserTrips((prevVal) => [...prevVal, doc.data]);
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 mt-10">
      <h2 className="font-bold text-3xl">MyTrips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {userTrips.map((trip, index) => (
          <UserTripCardItem trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
