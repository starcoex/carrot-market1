import { housrSelector } from "@/atoms/atoms";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

interface Props {}
interface IFormInput {
  miniutes: number;
  hour: number;
}

const Index: NextPage<Props> = ({}) => {
  const { register, watch, formState, handleSubmit, setValue } = useForm();
  const [hours, setHours] = useRecoilState(housrSelector);
  const onVaild = (data: any) => {
    console.log(data);
  };
  console.log(setValue);
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        placeholder="mini"
        {...register("miniutes", {
          required: true,
          onChange: (event) => console.log(event),
        })}
        type="number"
      />
      <br />
      <input
        placeholder="hour"
        {...register("hour", { value: Number(hours) })}
      />
      <input type="submit" />
    </form>
  );
};

export default Index;
