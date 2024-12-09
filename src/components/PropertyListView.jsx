import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";

const PropertyListView = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const response = await axios
        .get("/api/property/getRequests/")
        .then((data) => data.data.data)
        .catch((err) => console.log(err));
      setProperties(response);
      console.log(properties);
    };
    getProperties();
  }, []);

  return (
    <Carousel
      className="w-full mx-6"
      opts={{
        align: "start",
        loop: true,
      }}>
      <CarouselContent className="-ml-4">
        {properties && properties.map((property) => {
          return (
            <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <PropertyCard
                key={property._id}
                propName={property.propertyName}
                propImage={property.propertyImage}
                propLocation={property.location}
                propAttributes={property.attributes}
                propOwnerPhone={property.addedBy.phone}
                propOwnerWhatsApp={property.addedBy.whatsapp}
              />
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