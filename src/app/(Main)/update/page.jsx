const UpdatePage = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">
        <div>
          <h3 className="font-extrabold text-3xl text-center mb-6">
            Update Information
          </h3>
        </div>
        <label className="label text-black text-base font-bold">Name</label>
        <input
          type="text"
          className="input mb-4 w-full rounded-xl"
          placeholder="Enter your name"
        />

        <label className="label text-black text-base font-bold">
          Photo URL
        </label>
        <input
          type="text"
          className="input mb-4 w-full rounded-xl"
          placeholder="Enter URL"
        />

        <button className="btn btn-lg bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-bold rounded-xl mt-4 w-full">
          Update Information
        </button>
      </fieldset>
    </div>
  );
};

export default UpdatePage;
