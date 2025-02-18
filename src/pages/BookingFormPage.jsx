import Doctor from "../components/Doctor";
import Schedule from "../components/Schedule ";
import { useParams, Navigate } from "react-router-dom";
import { dummySchedule } from "../data/index";
import BookingForm from "../components/BookingForm";

export default function BookingFormPage() {
  const { id } = useParams();
  const intId = parseInt(id, 10); // Convert id to integer

  const willingSchedule = dummySchedule[intId - 1]; // Get the schedule with the id
  if (!(willingSchedule.status === "Available")) {
    return <Navigate to="/booking" />;
  }
  return (
    <div className="mt-[92px] lg:h-[1000px] md:h-[1000px] h-[1300px]">
      <div className="h-[258px] w-full flex justify-center bg-primary relative px-5  ">
        <div className=" absolute top-1/4 md:top-1/3 xl:max-w-screen-xl lg:max-w-screen-lg lg:w-full flex flex-col gap-5 ">
          <Doctor />
          <Schedule schedule={willingSchedule} />
          {willingSchedule.status === "Available" ? (
            <>
              <BookingForm />
            </>
          ) : (
            <>
              <h1 className="text-center text-2xl text-red-500 bg-white p-5">
                This schedule is not available
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
