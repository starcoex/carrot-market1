import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const { register, watch, handleSubmit, setValue } = useForm();
  const onVaild = (form_data: any) => {
    console.log(form_data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("name", { required: "Pleas Write" })}
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email", { required: "Pleas Write" })}
          type="email"
          placeholder="E-mail"
        />
        <input
          {...register("password", { required: "Pleas Write" })}
          type="password"
          placeholder="Min 10 characters"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Index;
