import React, { useEffect, useState } from 'react';

function AvailableTimes({ date, onSelect }) {
  const [fetchAPI, setFetchAPI] = useState(null);
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Cargar dinámicamente las funciones desde la URL
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
      .then(res => res.text())
      .then(scriptContent => {
        const wrapper = `(function() {
          ${scriptContent}
          return { fetchAPI, submitAPI };
        })()`;
        const extracted = eval(wrapper);
        if (typeof extracted.fetchAPI === 'function') {
          setFetchAPI(() => extracted.fetchAPI);
        } else {
          console.error('fetchAPI not found');
        }
      })
      .catch(err => console.error('Error loading API script:', err));
  }, []);

  // 2. Cuando cambia la fecha, obtener las horas
  useEffect(() => {
    if (!fetchAPI || !date) {
      setTimes([]);
      return;
    }
    setLoading(true);
    Promise.resolve(fetchAPI(new Date(date)))
      .then(data => setTimes(data))
      .catch(err => {
        console.error('Error fetchAPI:', err);
        setTimes([]);
      })
      .finally(() => setLoading(false));
  }, [date, fetchAPI]);

  return (
    <div>
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        aria-required="true"
        onChange={(e) => onSelect(e.target.value)}
        disabled={loading || times.length === 0}
      >
        {loading && <option>Loading...</option>}
        {!loading && times.length === 0 && <option>No times available</option>}
        {times.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
}

export default AvailableTimes;
