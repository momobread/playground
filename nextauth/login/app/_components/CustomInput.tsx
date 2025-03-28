const CustomInput = ({ register, type, placeholder, id }) => {
  return (
    <input
      className="w-[90%] rounded-2xl border border-gray-300 p-[1.5rem]"
      type={type}
      placeholder={placeholder}
      {...register(id)}
    />
  );
};

export default CustomInput;
