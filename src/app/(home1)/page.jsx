import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import CtaSection from '../Components/CtaSection';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import TeamSection from '../Components/TeamSection';
import BrandsSlider from '../Components/BrandsSection';
import ChooseUs from '../Components/ChooseUs';
import ProjectSection from '../Components/ProjectSection';
import CtaSection1 from '../Components/CtaSection/CtaSection1';
import MedicalTabSection from '../Components/MedicalTabSection';
import ContactSection2 from '../Components/ContactSection/ContactSection2';
import BlogSection from '../Components/BlogsSection';
import HeroSection2 from '../Components/HeroSection/HeroSection2';
import LocationMap from '../Components/LocationMap/Index';

const heroData = {
  slides: [
    {
      backgroundImage: '/assets/img/hero_slider_5.jpg',
      title: 'Providing Quality Healthcare Services for ',
      highlight: 'All',
      subtitle:
        'Bringing world-class medical expertise closer to you. Your health, our priority.',
      features: [
        'Experienced & Certified Medical Professionals',
        'Cutting-Edge Technology for Accurate Diagnosis & Treatment',
      ],

      btnText: 'Contact Now',
      btnLink: '/contact',
      btnText2: 'Discover More',
      btnLink2: '/about',

      shapeImage: '/assets/img/icons/hero_shape_2.png',
    },
    {
      backgroundImage: '/assets/img/hero_slider_5.jpg',
      title: 'Providing Quality Healthcare Services for ',
      highlight: 'All',
      subtitle:
        'Bringing world-class medical expertise closer to you. Your health, our priority.',
      features: [
        'Experienced & Certified Medical Professionals',
        'Cutting-Edge Technology for Accurate Diagnosis & Treatment',
      ],

      btnText: 'Contact Now',
      btnLink: '/contact',
      btnText2: 'Discover More',
      btnLink2: '/about',

      shapeImage: '/assets/img/icons/hero_shape_2.png',
    },
    {
      backgroundImage: '/assets/img/hero_slider_5.jpg',
      title: 'Providing Quality Healthcare Services for ',
      highlight: 'All',
      subtitle:
        'Bringing world-class medical expertise closer to you. Your health, our priority.',
      features: [
        'Experienced & Certified Medical Professionals',
        'Cutting-Edge Technology for Accurate Diagnosis & Treatment',
      ],

      btnText: 'Contact Now',
      btnLink: '/contact',
      btnText2: 'Discover More',
      btnLink2: '/about',

      shapeImage: '/assets/img/icons/hero_shape_2.png',
    },
  ],
  emergency: {
    icon: '/assets/img/icons/call_icon_1.png',
    title: 'Emergency Call',
    phone1: '+23490 55000 222',
    phone2: '+23480 5333 322',
  },
};

const ctaData = {
  imageUrl: '/assets/img/cta_img_1.jpg',
  title: 'Meet Our Amazing Medical Team.',
  subtitle: 'Your health is our priority. Our expert team is committed to providing top-quality medical support and personalized care',
  buttonUrl: '/contact',
  buttonText: 'Booking Now',
};

const aboutData = {
  sectionSubtitle: 'ABOUT US',
  sectionTitle: 'About 40 Years of Excellence in Healthcare.',
  aboutText:
    'Biyama Hospital Wukari was established in October 1984 and has been a trusted healthcare provider for 40 years. As a subsidiary of <b>Biyama Global Concept Limited</b>, we bring about 40 years of expertise in delivering high-quality medical care. Our commitment to patient-centered services ensures a safe, comfortable, and seamless healthcare experience.',
  service:
    "We strive to enhance the healthcare journey for both patients and doctors through cutting-edge technology and compassionate service. <a href='#''>READ MORE +</a>",
  experienceYears: '40+',
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

const countersData = [
  {
    iconUrl: '/assets/img/icons/counter_icon_1.png',
    number: '567+',
    title: 'Active Clients',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_2.png',
    number: '23K+',
    title: 'Team Support',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_3.png',
    number: '241+',
    title: 'Projects Complete',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_4.png',
    number: '16K+',
    title: 'Award Winner',
  },
];

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

const teamData = {
  subtitle: 'OUR TEAM',
  title: 'Meet Our Specialists',
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
      imageUrl: '/assets/img/team_8.jpg',
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

const brandData = [
  { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
];

const sectionData = {
  // subtitle: 'WHY CHOOSE US',
  title: 'Your Health, Our Priority.',
  services: [
    {
      iconUrl: '/assets/img/icons/service_icon_9.png',
      title: 'Comprehensive Medical Services',
      subtitle: 'From routine check-ups to specialized treatments, we offer holistic care for all your medical needs.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_10.png',
      title: '24/7 Emergency Support',
      subtitle: 'Quick and responsive medical assistance when you need it the most.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_11.png',
      title: 'Experienced & Qualified Doctors',
      subtitle: 'Our team of certified medical professionals ensures the highest standard of care.',
    },
    // {
    //   iconUrl: '/assets/img/icons/service_icon_12.png',
    //   title: 'Medical Advices',
    //   subtitle: 'Medical competitor research startup to financial',
    // },
    {
      iconUrl: '/assets/img/icons/service_icon_13.png',
      title: 'NHIS Accredited Center',
      subtitle: 'Enjoy seamless healthcare services covered under the National Health Insurance Scheme.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_14.png',
      title: 'Affordable & Transparent Pricing',
      subtitle: 'Quality healthcare should be accessible to everyone. We offer fair pricing with no hidden costs.',
    },
  ],
};

const projectData = {
  title: 'All The Great Work That<br> Medical Service',
  subtitle: 'OUR PORTFOLIO',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  tabs: [
    { id: 'dental', label: 'Dental' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'medical', label: 'Medical' },
  ],
  tabData: [
    {
      id: 'dental',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
      ],
    },
    {
      id: 'cardiology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
      ],
    },
    {
      id: 'neurology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
    {
      id: 'medical',
      items: [
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
  ],
};

const ctaData1 = {
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

const medicalTabsData = {
  subtitle: 'Service Offerings',
  title: 'Explore Our Service<br> Offerings',
  tabsTitle: [
    {
      href: 'brain_althim',
      iconUrl: '/assets/img/icons/tab_link_icon_1.png',
      label: 'Modern Technology',
    },
    {
      href: 'emergency',
      iconUrl: '/assets/img/icons/tab_link_icon_2.png',
      label: 'Success of Treatment',
    },
    {
      href: 'heart_beat',
      iconUrl: '/assets/img/icons/tab_link_icon_3.png',
      label: 'Certified Doctors',
    },
    {
      href: 'blood_test',
      iconUrl: '/assets/img/icons/tab_link_icon_4.png',
      label: 'Medical Advice',
    },
  ],
  tabsData: [
    {
      id: 'brain_althim',
      imageSrc: '/assets/img/offerings03.jpg',
      title: 'We are here to hear and heal your',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'emergency',
      imageSrc: '/assets/img/offerings02.jpg',
      title: 'Treatment patients in primary care',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'heart_beat',
      imageSrc: '/assets/img/offerings01.jpg',
      title: 'Accreditation within a given specialty',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'blood_test',
      imageSrc: '/assets/img/offerings04.jpg',
      title: 'Better Health While Aging health',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    // Add other tab data here
  ],
};

const blogsData = {
  sectionTitle: 'OUR LARGEST BLOG',
  sectionSubtitle: 'Latest Posts &amp; Articles',
  postsData: [
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'There Is Only One Thing That Is Hospital.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_2.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'This Working World and Infection Prevention.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_3.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
  ],
};

const mapData = {
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.106587660649!2d9.770073848624111!3d7.883915971930518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105771133fffe699%3A0xd9dd31302612b141!2sBIYAMA%20HOSPITAL%20WUKARI!5e0!3m2!1sen!2sng!4v1740438526640!5m2!1sen!2sng',
};

const page = () => {
  return (
    <div>
      {/* Start Hero Section */}
      {/* <HeroSection data={heroData} /> */}
      <HeroSection2 data={heroData} />
      {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg='80'
        topSpaceMd='120'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
        className='cs_about cs_style_1 position-relative'
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      {/* <Section className='cs_counter_area cs_gray_bg'>
        <CounterSection data={countersData} />
      </Section> */}
      {/* End Counter */}

      {/* Start Service Section */}
      <Section
        topSpaceLg='70'
        topSpaceMd='110'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start Team Section */}
      {/* <Section
        topSpaceLg='70'
        topSpaceMd='110'
        className={'cs_team_section position-relative'}
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section> */}
      {/* End Team Section */}

      {/* Start Brand Section */}
      {/* <Section topSpaceLg='70' topSpaceMd='90' className='cs_brands_section'>
        <BrandsSlider data={brandData} />
      </Section> */}

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg='70'
        topSpaceMd='110'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
        className='cs_gray_bg cs_bg_filed'
        backgroundImage='/assets/img/service_bg_2.jpg'
      >
        <ChooseUs data={sectionData} />
      </Section>
      {/* End Why Choose Us Section */}

      {/* Start Projects Section */}
      {/* <Section topSpaceLg='70' topSpaceMd='110' className='cs_tabs'>
        <ProjectSection data={projectData} />
      </Section> */}
      {/* End Projects Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg='70'
        topSpaceMd='110'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
        className='cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'
        backgroundImage='/assets/img/cta_bg_1.jpeg'
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Medical Tab Section */}
      {/* <Section topSpaceLg='70' topSpaceMd='110'>
        <MedicalTabSection data={medicalTabsData} />
      </Section> */}
      {/* End Medical Tab Section */}

      {/* Start Contact Solution */}
      <ContactSection2></ContactSection2>
      {/* End Contact Solution */}
      <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
        <LocationMap mapSrc={mapData.mapSrc} />
      </div>

      {/* Start Blog Section */}
      {/* <Section
        topSpaceLg='70'
        topSpaceMd='110'
        bottomSpaceLg='80'
        bottomSpaceMd='120'
      >
        <BlogSection data={blogsData} />
      </Section> */}
      {/* End Blog Solution */}
    </div>
  );
};

export default page;
