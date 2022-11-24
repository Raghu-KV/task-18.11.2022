import { Column } from "./Column";

export function ContainerRow({ plus, minus, value }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <Column plus={plus} minus={minus} value={value} product={"Note Book"} />
        <Column plus={plus} minus={minus} value={value} product={"Stapeler"} />
        <Column plus={plus} minus={minus} value={value} product={"Gum"} />
        <Column
          plus={plus}
          minus={minus}
          value={value}
          product={"Ball point pen"}
        />
        <Column plus={plus} minus={minus} value={value} product={"Gel pen"} />
        <Column plus={plus} minus={minus} value={value} product={"A4 sheet"} />
        <Column
          plus={plus}
          minus={minus}
          value={value}
          product={"Funtain pen"}
        />
        <Column
          plus={plus}
          minus={minus}
          value={value}
          product={"Ink bottle"}
        />
      </div>
    </div>
  );
}
