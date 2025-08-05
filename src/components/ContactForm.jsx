import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { inputs } from "../constants/inputs";
import style from "./ContactForm.module.css";

function ContactForm({ onSubmit, schema, defaultValues = {}, buttonLabel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {},
  });

  useEffect(() => {
   if (typeof defaultValues === "object" && defaultValues !== null && Object.keys(defaultValues).length > 0) {
  reset(defaultValues);
}
  }, [defaultValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      {inputs.map((item, index) => (
        <div key={index}>
          <input
            {...register(item.name)}
            type={item.type}
            placeholder={item.placeholder}
          />
          <div className={style.error}>
            {errors[item.name] && <p>{errors[item.name].message}</p>}
          </div>
        </div>
      ))}

      <div>
        <select {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className={style.error}>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
      </div>

      <button className={style.registerButton} type="submit">
        {buttonLabel}
      </button>
    </form>
  );
}

export default ContactForm;
