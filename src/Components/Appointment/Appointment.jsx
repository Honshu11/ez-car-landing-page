import './style.css';

function Appointment() {
  return (
    <div id='appointment' className='container text-white'>
      <h2 className='appointmentsContainerTitle'><i className="fas fa-calendar-alt"></i> Appointments</h2>
      <p className="appointmentsContainerSubtitle">
        We are here to help. Schedule an appointment below:
      </p>
      <a href="https://calendly.com/ezcar-management">
        <button type="button" className="btn btn-lg p-2 bg-danger text-white">Calendly Appointment</button>
      </a>
    </div>
  )
}

export default Appointment;