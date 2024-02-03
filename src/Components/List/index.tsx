import style from "./list.module.scss";
import Item from "./Item";
import { ITask } from "../../Types/tasks";

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.tasksList}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
