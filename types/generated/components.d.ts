import type { Schema, Struct } from '@strapi/strapi';

export interface JourneyGuest extends Struct.ComponentSchema {
  collectionName: 'components_journey_guests';
  info: {
    description: 'Guest information for journeys';
    displayName: 'Guest';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JourneyIncludedItem extends Struct.ComponentSchema {
  collectionName: 'components_journey_included_items';
  info: {
    description: 'Items included in the journey';
    displayName: 'Included Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'journey.guest': JourneyGuest;
      'journey.included-item': JourneyIncludedItem;
    }
  }
}
