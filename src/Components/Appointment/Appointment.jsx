import './style.css';

function Appointment() {
  return (
    <div className='text-white'>
      <h2 className="mt-4">Appointments</h2>
      <p className="lead">
        We are here to help. Schedule an appointment below:
      </p>
      <a href="https://calendly.com/ezcar-management">
        <button type="button" className="btn btn-primary btn-lg p-3">Calendly Appointment</button>
      </a>
    </div>
  )
}

export default Appointment;