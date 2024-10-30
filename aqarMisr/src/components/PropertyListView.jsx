import React from "react";
import PropertyCard from "./UI/PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PropertyListView = () => {
  const DUMMY_PROPERTIES = [
    {
      propId: 1,
      propName: "Villa Garden With Pool",
      propImage: "property_1_image.png",
      propLocation: "الشيخ زايد",
      propAttributes: [
        {
          id: "propBedrooms",
          icon: "bed_icon.svg",
          label: "Bedrooms",
          value: 4,
        },
        {
          id: "propBathrooms",
          icon: "bathroom_icon.svg",
          label: "Bathrooms",
          value: 1,
        },
        {
          id: "propSize",
          icon: "size_icon.svg",
          label: "Size",
          value: 460,
        },
      ],
      propOwnerPhone: "01001001001",
      propOwnerWhatsApp: "01001432651",
    },
    {
        propId: 1,
        propName: "Villa Garden With Pool",
        propImage: "property_1_image.png",
        propLocation: "الشيخ زايد",
        propAttributes: [
          {
            id: "propBedrooms",
            icon: "bed_icon.svg",
            label: "Bedrooms",
            value: 4,
          },
          {
            id: "propBathrooms",
            icon: "bathroom_icon.svg",
            label: "Bathrooms",
            value: 1,
          },
          {
            id: "propSize",
            icon: "size_icon.svg",
            label: "Size",
            value: 460,
          },
        ],
        propOwnerPhone: "01001001001",
        propOwnerWhatsApp: "01001432651",
      },
      {
        propId: 1,
        propName: "Villa Garden With Pool",
        propImage: "property_1_image.png",
        propLocation: "الشيخ زايد",
        propAttributes: [
          {
            id: "propBedrooms",
            icon: "bed_icon.svg",
            label: "Bedrooms",
            value: 4,
          },
          {
            id: "propBathrooms",
            icon: "bathroom_icon.svg",
            label: "Bathrooms",
            value: 1,
          },
          {
            id: "propSize",
            icon: "size_icon.svg",
            label: "Size",
            value: 460,
          },
        ],
        propOwnerPhone: "01001001001",
        propOwnerWhatsApp: "01001432651",
      },
      {
        propId: 1,
        propName: "Villa Garden With Pool",
        propImage: "property_1_image.png",
        propLocation: "الشيخ زايد",
        propAttributes: [
          {
            id: "propBedrooms",
            icon: "bed_icon.svg",
            label: "Bedrooms",
            value: 4,
          },
          {
            id: "propBathrooms",
            icon: "bathroom_icon.svg",
            label: "Bathrooms",
            value: 1,
          },
          {
            id: "propSize",
            icon: "size_icon.svg",
            label: "Size",
            value: 460,
          },
        ],
        propOwnerPhone: "01001001001",
        propOwnerWhatsApp: "01001432651",
      },
      {
        propId: 1,
        propName: "Villa Garden With Pool",
        propImage: "property_1_image.png",
        propLocation: "الشيخ زايد",
        propAttributes: [
          {
            id: "propBedrooms",
            icon: "bed_icon.svg",
            label: "Bedrooms",
            value: 4,
          },
          {
            id: "propBathrooms",
            icon: "bathroom_icon.svg",
            label: "Bathrooms",
            value: 1,
          },
          {
            id: "propSize",
            icon: "size_icon.svg",
            label: "Size",
            value: 460,
          },
        ],
        propOwnerPhone: "01001001001",
        propOwnerWhatsApp: "01001432651",
      },
  ];

  return (
    <Carousel className="w-full mx-6" opts={{
        align: "start",
        loop: true,
    }}>
      <CarouselContent className="-ml-4">
        {DUMMY_PROPERTIES.map((property) => {
          return (
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <PropertyCard key={property.propId} {...property} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PropertyListView;
