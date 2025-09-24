import ContactForm from '@/components/forms/contact-form/contact-form';
import '@/scss/pages/contact.scss';

export const metadata = {
    title: 'Contact'
};

function ContactPage() {
    return (
        <>
            <h1 className="heading">Contact</h1>
            <p className="contact__text">
                You can sign up to our newsletter to be the first to recieve updates!
            </p>
            <ContactForm />
        </>
    );
}

export default ContactPage;