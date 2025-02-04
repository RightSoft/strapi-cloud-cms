import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOverlayText extends Struct.ComponentSchema {
  collectionName: 'components_shared_overlay_texts';
  info: {
    description: '';
    displayName: 'Overlay';
    icon: 'book';
  };
  attributes: {
    backgroundMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content: Schema.Attribute.Text;
    height: Schema.Attribute.Integer;
    locationX: Schema.Attribute.Decimal;
    locationY: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.overlay-text': SharedOverlayText;
    }
  }
}
