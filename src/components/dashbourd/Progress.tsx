 const Progress = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Progress</h2>
      <p className="text-gray-600">You have completed 70% of your courses.</p>
      <div>
        <div className="bg-gray-200 h-4 rounded-full mt-4">
          <div className="bg-purple-600 h-4 rounded-full" style={{ width: '70%' }}></div>
          
        </div>
      </div>
    </div>
  );
};

export default Progress;