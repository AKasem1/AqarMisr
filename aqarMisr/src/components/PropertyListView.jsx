import React from "react";
import PropertyCard from "./UI/PropertyCard";

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
    <div className="mt-12 w-full flex gap-10 overflow-x-scroll" style={{scrollbarWidth: "thin"}}>
      {DUMMY_PROPERTIES.map((property) => {
        return <PropertyCard key={property.propId} {...property} />;
      })}
    </div>
  );
};

export default PropertyListView;
