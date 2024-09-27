import type { Schema, Attribute } from '@strapi/strapi';

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
  };
}

export interface ComponentsText extends Schema.Component {
  collectionName: 'components_components_texts';
  info: {
    displayName: 'Text';
    icon: 'brush';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.service-section': LayoutServiceSection;
      'layout.service-card': LayoutServiceCard;
      'layout.our-acheivement': LayoutOurAcheivement;
      'layout.hero': LayoutHero;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'layout.about-section': LayoutAboutSection;
      'components.text': ComponentsText;
      'components.link': ComponentsLink;
      'components.image': ComponentsImage;
      'components.hero-section': ComponentsHeroSection;
      'components.card': ComponentsCard;
      'components.button': ComponentsButton;
    }
  }
}
