import email from './assets/email.svg';
import phone from './assets/phone.svg';
import address from './assets/address.svg';
import { ContactForm } from './ContactForm';

const Contact = () => {
    return (
        <section className="container contact" id='contact'>
            <div className='contact-details'>
                <div className='text-center'>
                    <img src={email} alt="" />
                    <p className='blue text'>contacto@evolusys.com</p>
                </div>

                <div className='text-center mt-2'>
                    <img src={phone} alt="" />
                    <p className='blue text'>+57 300 123 4567</p>
                </div>

                <div className='text-center mt-2'>
                    <img src={address} alt="" />
                    <p className='blue text'>Calle 45 #12-34</p>
                </div>
            </div>

            <ContactForm />
        </section>
    )
}

export {
    Contact
}