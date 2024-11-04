import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsText extends Schema.Component {
  collectionName: 'components_components_texts';
  info: {
    displayName: 'Text';
    icon: 'brush';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    secondTitle: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'cog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    eventTitle: Attribute.String;
  };
}

export interface ComponentsImage extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'Image';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    contactTitle: Attribute.String;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {};
}

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'cup';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    button: Attribute.String;
    href: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface LayoutWhyChooseUs extends Schema.Component {
  collectionName: 'components_layout_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
    icon: 'database';
  };
  attributes: {
    whyUsTitle: Attribute.Component<'components.text'>;
    whyUsDescription: Attribute.String;
    whyUsImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    whyUsCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutTestimonial extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'clock';
  };
  attributes: {
    testimonailTitle: Attribute.Component<'components.text'>;
    testimoanilDescription: Attribute.Text;
    testimonialCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutServiceSection extends Schema.Component {
  collectionName: 'components_layout_service_sections';
  info: {
    displayName: 'serviceSection';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    serviceCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutServiceDetail extends Schema.Component {
  collectionName: 'components_layout_service_details';
  info: {
    displayName: 'ServiceDetail';
    icon: 'cog';
    description: '';
  };
  attributes: {
    serviceTitle: Attribute.Component<'components.text'>;
    serviceImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    serviceContent: Attribute.Blocks;
    serviceDetail2: Attribute.Blocks;
    serviceGallery: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LayoutServiceCard extends Schema.Component {
  collectionName: 'components_layout_service_cards';
  info: {
    displayName: 'ServiceCard';
    icon: 'crop';
  };
  attributes: {
    ServiceCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutPropertyAboutUs extends Schema.Component {
  collectionName: 'components_layout_property_aboutuses';
  info: {
    displayName: 'PropertyAboutUs';
    icon: 'feather';
  };
  attributes: {
    Title: Attribute.Component<'components.text'>;
    description: Attribute.Text;
    aboutCard: Attribute.Component<'components.text', true>;
  };
}

export interface LayoutPartners extends Schema.Component {
  collectionName: 'components_layout_partners';
  info: {
    displayName: 'Partners';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    partnerDescription: Attribute.Text;
    partnerImage: Attribute.Component<'components.image', true>;
    partnerTitle: Attribute.Component<'components.text'>;
  };
}

export interface LayoutOurAcheivement extends Schema.Component {
  collectionName: 'components_layout_our_acheivements';
  info: {
    displayName: 'ourAcheivement';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    acheivementCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutMissionVision extends Schema.Component {
  collectionName: 'components_layout_mission_visions';
  info: {
    displayName: 'MissionVision';
    icon: 'gate';
  };
  attributes: {
    missionTitle: Attribute.Component<'components.text'>;
    missionDescription: Attribute.String;
    missionCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'folder';
    description: '';
  };
  attributes: {
    heroImage: Attribute.Component<'components.image', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    icon: 'brush';
    description: '';
  };
  attributes: {
    menuLink: Attribute.Component<'components.link', true>;
    headerContact: Attribute.Component<'components.button'>;
    headerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutGallery extends Schema.Component {
  collectionName: 'components_layout_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    galleryTitle: Attribute.Component<'components.text'>;
    galleryImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    prevNextImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    closeButton: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'crop';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    footerSocialMedia: Attribute.Component<'components.image', true>;
    eventLink: Attribute.Component<'components.link', true>;
    propertyLink: Attribute.Component<'components.link', true>;
    contactInfo: Attribute.Component<'components.image', true>;
    ctaTitle: Attribute.String;
    ctaDescription: Attribute.String;
    ctaButton: Attribute.Component<'components.button'>;
  };
}

export interface LayoutFaq extends Schema.Component {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'filter';
  };
  attributes: {
    FAQTitle: Attribute.Component<'components.text'>;
    QA: Attribute.Component<'components.text', true>;
  };
}

export interface LayoutContactInfo extends Schema.Component {
  collectionName: 'components_layout_contact_infos';
  info: {
    displayName: 'ContactInfo';
    icon: 'cloud';
  };
  attributes: {
    contactTitle: Attribute.Component<'components.text'>;
    contactDescription: Attribute.String;
    getInTouch: Attribute.String;
    contactCard: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutAboutSection extends Schema.Component {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'AboutSection';
    icon: 'cog';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    aboutButton: Attribute.Component<'components.button'>;
    aboutImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    aboutTitle: Attribute.Component<'components.text'>;
    aboutDetail: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.text': ComponentsText;
      'components.link': ComponentsLink;
      'components.image': ComponentsImage;
      'components.hero-section': ComponentsHeroSection;
      'components.card': ComponentsCard;
      'components.button': ComponentsButton;
      'layout.why-choose-us': LayoutWhyChooseUs;
      'layout.testimonial': LayoutTestimonial;
      'layout.service-section': LayoutServiceSection;
      'layout.service-detail': LayoutServiceDetail;
      'layout.service-card': LayoutServiceCard;
      'layout.property-about-us': LayoutPropertyAboutUs;
      'layout.partners': LayoutPartners;
      'layout.our-acheivement': LayoutOurAcheivement;
      'layout.mission-vision': LayoutMissionVision;
      'layout.hero': LayoutHero;
      'layout.header': LayoutHeader;
      'layout.gallery': LayoutGallery;
      'layout.footer': LayoutFooter;
      'layout.faq': LayoutFaq;
      'layout.contact-info': LayoutContactInfo;
      'layout.about-section': LayoutAboutSection;
    }
  }
}
