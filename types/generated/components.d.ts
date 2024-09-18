import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    icon: 'brush';
  };
  attributes: {
    headerLogo: Schema.Attribute.Component<'components.image', false>;
    menuLink: Schema.Attribute.Component<'components.link', true>;
    headerContact: Schema.Attribute.Component<'components.button', false>;
  };
}

export interface ComponentsText extends Struct.ComponentSchema {
  collectionName: 'components_components_texts';
  info: {
    displayName: 'Text';
    icon: 'brush';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'cog';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_components_images';
  info: {
    displayName: 'Image';
    icon: 'emotionHappy';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'book';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.header': LayoutHeader;
      'components.text': ComponentsText;
      'components.link': ComponentsLink;
      'components.image': ComponentsImage;
      'components.button': ComponentsButton;
    }
  }
}
