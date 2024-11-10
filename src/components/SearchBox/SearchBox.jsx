import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { setFilter } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';

const SearchBox = () => {
  const selectNameFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name or number</h3>
      <input
        className={css.findInput}
        value={selectNameFilter}
        type="text"
        onChange={event => {
          const changeFilter = setFilter(event.target.value);
          dispatch(changeFilter);
        }}
      />
    </div>
  );
};

export default SearchBox;
