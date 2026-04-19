;

const Courses= () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">My Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-yellow-100 p-8 rounded-xl shadow ">
          <h3 className="font-semibold">Frontend Development</h3>
          <p className="text-sm text-gray-500 mb-3">
            Continue learning React and JavaScript
          </p>
           
          <p className="text-lg font-bold">$99.99</p>
          <button className="bg-yellow-500 hover:bg-amber-700 text-white px-4 py-2 rounded-lg cursor-pointer">
            Continue
          </button>
        </div>

        <div className="bg-yellow-50 p-8 rounded-xl shadow">
          <h3 className="font-semibold">UI/UX Design</h3>
          <p className="text-sm text-gray-500 mb-3">
            Complete your design lessons
          </p>
          <p className="text-lg font-bold">$79.99</p>
          <button className="bg-yellow-600 hover:bg-amber-700   text-white px-4 py-2 rounded-lg cursor-pointer">
            Continue
          </button>
        </div>
         <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="font-semibold">digtal markin</h3>
          <p className="text-sm text-gray-500 mb-3">
            Complete your design lessons
          </p>
          <p className="text-lg font-bold">$79.99</p>
          <button className="bg-amber-500 hover:bg-amber-700 text-white px-4 py-2 rounded-lg cursor-pointer">
            Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default Courses;