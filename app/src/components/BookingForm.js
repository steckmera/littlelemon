import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AvailableTimes from './AvailableTimes';
import { useNavigate } from 'react-router-dom';

function ReservationForm() {
  const [submitAPI, setSubmitAPI] = useState(null);
  const [confirmation, setConfirmation] = useState('');
  const navigate = useNavigate();

  // Carga dinámica de API
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
      .then((res) => res.text())
      .then((script) => {
        const wrapper = `(function() {
          ${script}
          return { fetchAPI, submitAPI };
        })()`;
        const api = eval(wrapper);
        if (api.submitAPI) {
          setSubmitAPI(() => api.submitAPI);
        } else {
          console.error('submitAPI not found');
        }
      })
      .catch((err) => console.error('Error loading API:', err));
  }, []);

  // Validación con Yup
  const validationSchema = Yup.object({
    date: Yup.date()
      .transform((value, originalValue) =>
        originalValue ? new Date(originalValue) : value
      )
      .typeError('Invalid date')
      .required('Required')
      .min(new Date(), 'Must be today or later'),
    time: Yup.string().required('Required'),
    guests: Yup.number()
      .required('Required')
      .min(1, 'Min 1')
      .max(10, 'Max 10'),
    occasion: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: 1,
      occasion: 'Birthday',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (!submitAPI) {
        alert('API not ready');
        return;
      }
      const success = submitAPI(values);
      if (success) {
        navigate('/confirmed', { state: values });
        //setConfirmation(`✅ Reservation submitted successfully!`);
        //resetForm();
      } else {
        setConfirmation('❌ Submission failed. Please try again.');
      }
    },
  });

  const errorStyle = {
    border: '1px solid red',
    backgroundColor: '#ffe6e6',
  };

  return (
    <>
      <h2>Make a Reservation</h2>
      <p>Please fill out the form below to make a reservation.</p>


      <form aria-labelledby="reservation-form"
        onSubmit={formik.handleSubmit} 
        style={{ display: 'grid',  gap: '15px', margin: '20px' }}
      >
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          aria-required="true"
          aria-invalid={formik.errors.dateReserva ? "true" : "false"}
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={formik.touched.date && formik.errors.date ? errorStyle : {}}
        />
        {formik.touched.date && formik.errors.date && (
          <small style={{ color: 'red' }}>{formik.errors.date}</small>
        )}

        <AvailableTimes
          date={formik.values.date}
          onSelect={(time) => formik.setFieldValue('time', time)}
        />

        {formik.touched.time && formik.errors.time && (
          <small style={{ color: 'red' }}>{formik.errors.time}</small>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formik.values.guests}
          min="1"
          max="10"
          aria-required="true"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={formik.touched.guests && formik.errors.guests ? errorStyle : {}}
        />
        {formik.touched.guests && formik.errors.guests && (
          <small style={{ color: 'red' }}>{formik.errors.guests}</small>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          aria-required="true"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" role="button" aria-label="Submit reservation form" />
      </form>

      {confirmation && (
        <p style={{ color: confirmation.includes('✅') ? 'green' : 'red', marginTop: '10px' }}>
          {confirmation}
        </p>
      )}
    </>
  );
}

export default ReservationForm;





/*import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AvailableTimes from './AvailableTimes'; // Asegúrate de que la ruta sea correcta

function BookingForm() {
  const [confirmation, setConfirmation] = useState('');

  const validationSchema = Yup.object({
  date: Yup.date()
    .transform((value, originalValue) => {
      // Si viene como string, lo convertimos
      return originalValue ? new Date(originalValue) : value;
    })
    .typeError('Invalid date format')
    .required('Date is required')
    .min(new Date(), 'Date must be today or later'),
    guests: Yup.number()
      .required('Number of guests is required')
      .min(1, 'Minimum 1 guest')
      .max(10, 'Maximum 10 guests'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
      time: '17:00',
      guests: 1,
      occasion: 'Birthday',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setConfirmation(
        `Reservation confirmed for ${values.guests} guests on ${values.date} at ${values.time} for a ${values.occasion}.`
      );
      resetForm(); // Limpia el formulario
    },
  });

  const errorStyle = {
    border: '1px solid red',
    backgroundColor: '#ffe6e6',
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '15px' }}>
        <label htmlFor="date">Choose date</label>
        <input type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={formik.touched.date && formik.errors.date ? errorStyle : {}}
        />
        {formik.touched.date && formik.errors.date && (
          <small style={{ color: 'red' }}>{formik.errors.date}</small>
        )}

        <AvailableTimes
            date={formik.values.date}
            onSelect={(t) => formik.setFieldValue('time', t)}
        />

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formik.values.guests}
          min="1"
          max="10"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={formik.touched.guests && formik.errors.guests ? errorStyle : {}}
        />
        {formik.touched.guests && formik.errors.guests && (
          <small style={{ color: 'red' }}>{formik.errors.guests}</small>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>

      {confirmation && (
        <p style={{ color: 'green', marginTop: '10px' }}>{confirmation}</p>
      )}
    </div>
  );
}

export default BookingForm;
*/