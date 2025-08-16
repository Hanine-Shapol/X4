import './FAQ.css'
import HeadOfSection from '../MmHeadOfSection/HeadOfSection'
import FAQCards from '../MmFAQCards/FAQCards'

const FAQ = () => {

    return (
        <section className='FAQ'>
            <HeadOfSection
                title="Frequently Asked Questions"
                subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
                bgImage="/assets/head-bg-4.png"
            />
            <FAQCards />
        </section>
    )
}

export default FAQ
