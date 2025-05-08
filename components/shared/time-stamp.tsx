const TimeStamp = () => {
    return (
        <div className=" text-gray-400 fixed bottom-4 right-4">
            <p className="text-[10px]">Updated: {new Date().toDateString()}</p>
        </div>
    );
};

export default TimeStamp;
