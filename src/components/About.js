import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl shadow-md p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900">
          About Us
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed text-center">
          We are a team of passionate food lovers dedicated to bringing you the
          best dining experiences. Our mission is to connect food enthusiasts
          with the finest restaurants in town, offering a diverse range of
          cuisines and exceptional service. Whether you're looking for a cozy
          cafe or a fine dining establishment, we've got you covered.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Meet the team</h2>
        <UserClass
          name={"Chetan Sharma"}
          location={"Rahon"}
          contact={"989897999"}
        />
      </div>
    </div>
  );
};

export default About;
