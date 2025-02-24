import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Service from '@/app/Components/Service';
import React from 'react';

const headingData = {
    title: 'Service',
  };
  
  const serviceData = {
    subtitle: 'OUR SERVICES',
    title: 'Comprehensive Healtcare Services',
    description:
      'We are committed to delivering exceptional medical care with a focus on quality, accessibility, and patient satisfaction. Our experienced team ensures that every patient receives the best treatment in a comfortable and professional environment.',
    services: [
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'General Medical Care',
        subtitle: 'Providing expert diagnosis, treatment, and preventive healthcare for all ages.',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: 'Ultrasound Services',
        subtitle: 'Advanced imaging technology for accurate diagnostics and pregnancy monitoring',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '03',
        title: 'NHIS Accredited Center',
        subtitle: 'Quality healthcare services covered under the National Health Insurance Scheme.',
        link: '/service/service-details',
      },
      // {
      //   backgroundImage: '/assets/img/service_bg.jpg',
      //   iconUrl: '/assets/img/icons/service_icon_4.png',
      //   index: '04',
      //   title: 'Plastic Surgery',
      //   subtitle: 'Medical competitor research startup to financial',
      //   link: '/service/service-details',
      // },
      // {
      //   backgroundImage: '/assets/img/service_bg.jpg',
      //   iconUrl: '/assets/img/icons/service_icon_5.png',
      //   index: '05',
      //   title: 'Neurology',
      //   subtitle: 'Medical competitor research startup to financial',
      //   link: '/service/service-details',
      // },
      // {
      //   backgroundImage: '/assets/img/service_bg.jpg',
      //   iconUrl: '/assets/img/icons/service_icon_6.png',
      //   index: '06',
      //   title: 'Ophthalmology',
      //   subtitle: 'Medical competitor research startup to financial',
      //   link: '/service/service-details',
      // },
      // {
      //   backgroundImage: '/assets/img/service_bg.jpg',
      //   iconUrl: '/assets/img/icons/service_icon_7.png',
      //   index: '07',
      //   title: 'Dental Care',
      //   subtitle: 'Medical competitor research startup to financial',
      //   link: '/service/service-details',
      // },
      // {
      //   backgroundImage: '/assets/img/service_bg.jpg',
      //   iconUrl: '/assets/img/icons/service_icon_8.png',
      //   index: '08',
      //   title: 'Cardiology',
      //   subtitle: 'Medical competitor research startup to financial',
      //   link: '/service/service-details',
      // },
    ],
    footerIcon: '/assets/img/icons/service_footer_icon_1.png',
    footerText:
      'We are dedicated to improving lives through reliable and affordable medical services.',
    footerLink: '/',
    footerLinkText: 'LEARN MORE',
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
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <Service data={serviceData} />
        </Section>

        </div>
    );
};

export default page;