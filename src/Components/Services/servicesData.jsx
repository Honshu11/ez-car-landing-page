import { faCar, faTruckMoving, faTicket, faUserMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const services = [
    {
        serviceTitle: 'Vehicle Registration',
        serviceIcon:  <FontAwesomeIcon icon={faCar}/>,
        serviceDescription: `Get a quick California title transfer with our service.
        You'll need: Signed original Title and a Smog Check (depending on vehicle).
        Contact us today!`
    },
    {
        serviceTitle: 'Registration Renewals',
        serviceIcon: <FontAwesomeIcon icon={faCalendarCheck}/>,
        serviceDescription: `Renew your tags and get immediately your registration and stickers on location. You'll need one of the following: Your DMV renewal notice letter, Car registration or provide your CA license plate and last 3 of the VIN. Stay hassle-free with EZ Car Registration Services!`
    },
    {
        serviceTitle: 'Release of Liability',
        serviceIcon: <FontAwesomeIcon icon={faUserMinus} fade/>,
        serviceDescription: 'We can help you fill out the release of liability of your recently sold vehicle.'
    },
    {
        serviceTitle: 'VIN Verification',
        serviceIcon: <FontAwesomeIcon icon={faCheck}/>,
        serviceDescription: 'We provide seamless VIN verification on site, with our licensed VIN verification personnel. You will just need to bring the car that needs to be VIN verified on site and the title or car registration. Ask for our mobile VIN verification service.'
    },
    {
        serviceTitle: 'Out-of-State Title Transfers',
        serviceIcon: <FontAwesomeIcon icon={faTruckMoving}/>,
        serviceDescription: `You will have to do an out-of-state transfer when the vehicle you buy has an out of state license. You'll need the following: The out-of-state title and smog.`
    },
    {
        serviceTitle: 'LicensePlate/Sticker Replacements',
        serviceIcon: <FontAwesomeIcon icon={faTicket}/>,
        serviceDescription: 'We can help you replace your lost/stolen sticker and/or license plate. You will just need an ID/Passport and an old registration card to show proof that you are the owner of the vehicle.'
    },
];

export default services;