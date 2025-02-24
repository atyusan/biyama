import ContactSection from '@/app/Components/ContactSection';
import LocationMap from '@/app/Components/LocationMap/Index';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';


const headingData = {
    backgroundImage: '/assets/img/page_heading_bg.jpg',
    title: 'Contact Us',
  };
  
  const contactData = {
    sectionSubtitle: 'CONTACT US',
    SectionTitle: 'Book an Appointment or<br/> Request Treatment',
    teethShapeImg: '/assets/img/icons/hero_shape_3.png',
    contactImg: '/assets/img/contact_2.png',
    iconBox: {
      style: 'cs_style_4',
      icon: '/assets/img/icons/call_icon_1.png',
      title: 'Emergency Call',
      subtitle: '24/7 – Patient support',
    },
  };
  
  const mapData = {
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.106587660649!2d9.770073848624111!3d7.883915971930518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105771133fffe699%3A0xd9dd31302612b141!2sBIYAMA%20HOSPITAL%20WUKARI!5e0!3m2!1sen!2sng!4v1740438526640!5m2!1sen!2sng',
  };

const page = () => {
    return (
        <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>


        </div>
    );
};

export default page;