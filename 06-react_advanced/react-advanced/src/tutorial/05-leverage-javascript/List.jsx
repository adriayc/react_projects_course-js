import { Person } from './Person';
import { people } from '../../data';

const List = () => {
  return (
    <div>
      {people.map((person) => {
        console.log(person);
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
