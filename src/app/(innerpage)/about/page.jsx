import About from '@/app/Components/About';
import CtaSection1 from '@/app/Components/CtaSection/CtaSection1';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const headingData = {
  title: 'About Page',
};

const aboutData = {
  sectionSubtitle: 'ABOUT US',
  sectionTitle: 'About 40 Years of Excellence in Healthcare.',
  aboutText:
    'Biyama Hospital Wukari was established in October 1984 and has been a trusted healthcare provider for 40 years. As a subsidiary of <b>Biyama Global Concept Limited</b>, we bring about 40 years of expertise in delivering high-quality medical care. Our commitment to patient-centered services ensures a safe, comfortable, and seamless healthcare experience.',
  service:
    "We strive to enhance the healthcare journey for both patients and doctors through cutting-edge technology and compassionate service. <a href='#''>READ MORE +</a>",
  experienceYears: '26+',
  experienceTitle: 'Experience',
  // videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  // videoText: 'How We Work',
  iconboxes: [
    {
      imgUrl: '/assets/img/icons/about_icon_2.png',
      title: 'Patient Support',
      subtitle: 'Reliable assistance for all your healthcare needs',
    },
    // {
    //   imgUrl: '/assets/img/icons/about_icon_2.png',
    //   title: 'Doctor Support',
    //   subtitle: 'But must explain to you medical of and pain was.',
    // },
  ],

  btnUrl: '/about',
  btnText: 'More About Us',
  sectionImgUrl: '/assets/img/about_section_img_1.png',
  headImgUrl: '/assets/img/about_img_1.jpg',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 567,
    suffix: '+',
    title: 'Active Clients',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 23,
    suffix: 'K+',
    title: 'Team Support',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 241,
    suffix: '+',
    title: 'Projects Completed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 16,
    suffix: 'K+',
    title: 'Award winner',
  },
];

const teamData = {
  subtitle: 'OUR TEAM MEMBER',
  title: ' Meet Our Specialist This <br />Doctor Meeting',
  sliderData: [
    {
      name: 'Dr. Norma Pedric',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_1.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. James Lewis',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_3.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Sophia Anderson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_4.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Michael Thompson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_5.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. David Wilson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_6.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
  ],
};

const ctaData = {
  // videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoButtonText: 'BIYAMA HOSPITAL',
  // subtitle: 'OUR WATCH VIDEO',
  title: 'Excellence in Professional Medical Care',
  description:
    'We are committed to delivering world-class medical solutions in partnership with leading global brands in healthcare technology. Our dedication to innovation ensures safe, reliable, and patient-focused services.',
  buttonLink: '/contact',
  buttonText: 'Contact Us',
  brandImage: '/assets/img/medical_brand.png',
};

const page = () => {
  return (
    <div className='about-page-area' style={{paddingBottom: "80px"}}>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage='/assets/img/page_heading_bg.jpg'
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Start About Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg='70'
        topSpaceMd='120'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}

      {/* <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section> */}
      {/* End Counter Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg='70'
        topSpaceMd='110'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
        className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
        backgroundImage='/assets/img/cta_bg_1.jpeg'
      >
        <CtaSection1 data={ctaData} />
      </Section>
      {/* End CTA Section */}

      {/* Start Team Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section> */}
      {/* End Team Section */}
    </div>
  );
};

export default page;
