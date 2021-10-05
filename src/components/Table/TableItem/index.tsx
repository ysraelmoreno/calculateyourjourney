import { IData } from "..";
import { TableItemContainer } from "./styles";

interface ITableItem {
  entry: IData[];
}

function TableItem({ entry }: ITableItem) {
  return (
    <>
      {entry.map((item) => {
        return (
          <TableItemContainer key={item.id}>
            <div>
              <p>{item.type}</p>
              <span>{item.hour}</span>
            </div>
            <div>
              <h5>Saída prevista:</h5>
              <h5>{item.leaveHour}</h5>
            </div>
          </TableItemContainer>
        );
      })}
    </>
  );
}

export default TableItem;
