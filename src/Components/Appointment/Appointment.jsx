import './style.css';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Appointment() {
  return (
    <div id='appointment' className='container text-white my-5'>
      <h2 className='appointmentsContainerTitle'><FontAwesomeIcon icon={faCalendarAlt} /> Appointments</h2>
      <p className="appointmentsContainerSubtitle">
        We are here to help. Schedule an appointment below:
      </p>
      <div className="text-center">
        <a href="https://calendly.com/ezcar-management" className='appointmentButton'>
          <button type="button" className="btn btn-lg p-2 bg-danger text-white">Calendly Appointment</button>
        </a>
      </div>

    </div>
  )
}

export default Appointment;