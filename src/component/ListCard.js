import { GrFormTrash } from "react-icons/gr";

export default function ListCard(props) {
  const onDeleteHandler = (id) => {
    props.setDataes(
      props.dataes.filter((v) => {
        return v.id !== id;
      })
    );
  };

  const onCheckedHandler = (id) => {
    props.setDataes(
      props.dataes.map((data) => {
        return data.id === id ? { ...data, checked: !data.checked } : data;
      })
    );
  };

  return (
    <div
      className={`flex justify-between text-white text-4xl mb-10 mr-4 cursor-pointer`}
    >
      <div
        className={
          props.checked ? "line-through text-black" : "no-underline text-white"
        }
        onClick={() => onCheckedHandler(props.id)}
      >
        {props.text}
      </div>

      <div
        className="flex w-8 h-8 cursor-pointer"
        onClick={() => onDeleteHandler(props.id)}
      >
        <GrFormTrash />
      </div>
    </div>
  );
}
