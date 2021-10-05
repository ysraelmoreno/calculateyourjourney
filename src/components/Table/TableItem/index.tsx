import { IData } from "..";
import { TableItemContainer } from "./styles";
import moment from "moment";
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
              <span>{moment(item.hour).format("LT")}</span>
            </div>
            <div>
              <h5>Saída prevista:</h5>
              <h5>{moment(item.leaveHour).format("LT")}</h5>
            </div>
          </TableItemContainer>
        );
      })}
    </>
  );
}

export default TableItem;
