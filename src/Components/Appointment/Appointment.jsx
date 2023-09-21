import './style.css';

function Appointment() {
  return (
    <div className='text-white'>
      <h2 className="mt-4">Appointments</h2>
      <p className="lead">
       For easier convenience feel free to make an appointment so we can help you out.
      </p>
      <a href="https://calendly.com/ezcar-management">
        <button type="button" className="btn btn-primary btn-lg">Calendly Appointment</button>
      </a>
    </div>
  )
}

export default Appointment;