import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/actions/dataActions';

const DataComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {data.loading ? (
        <p>Loading...</p>
      ) : data.error ? (
        <p>Error: {data.error}</p>
      ) : (
        <ul>
          {data.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataComponent;
