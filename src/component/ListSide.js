import ListCard from "./ListCard";

export default function ListSide(props) {
  return (
    <div className="w-1/2  border-r-2 p-2 overflow-scroll">
      {props.dataes.map((v) => {
        return (
          <ListCard
            key={v.id}
            id={v.id}
            text={v.text}
            checked={v.checked}
            dataes={props.dataes}
            setDataes={props.setDataes}
          />
        );
      })}
    </div>
  );
}
