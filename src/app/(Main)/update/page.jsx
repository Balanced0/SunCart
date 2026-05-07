"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const UpdatePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (data) => {
    const { error } = await authClient.updateUser({
      image: data.photo,
      name: data.name,
    });
    if (!error) {
      router.push("/profile");
    }
  };
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">
        <div>
          <h3 className="font-extrabold text-3xl text-center mb-6">
            Update Information
          </h3>
        </div>

        <form onSubmit={handleSubmit(handleUpdate)}>
          <label className="label text-black text-base font-bold">Name</label>
          <input
            type="text"
            className="input mb-4 w-full rounded-xl"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label className="label text-black text-base font-bold">
            Photo URL
          </label>
          <input
            type="text"
            className="input mb-4 w-full rounded-xl"
            placeholder="Enter URL"
            {...register("photo", { required: "Photo URL is required" })}
          />
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}

          <button className="btn btn-lg bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-bold rounded-xl mt-4 w-full">
            Update Information
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default UpdatePage;
