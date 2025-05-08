const TimeStamp = () => {
  return (
    <div className=" text-gray-400 fixed bottom-8 right-8">
      <p className=" text-right text-sm">Last update</p>
      <p className="text-sm">{new Date().toDateString()}</p>
    </div>
  );
};

export default TimeStamp;
