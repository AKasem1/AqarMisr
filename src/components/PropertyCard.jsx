import React from "react";
import PropertyAttribute from "./PropertyAttribute";
import Link from "next/link";
import { MapPin, Phone, PhoneIcon } from "lucide-react";

const PropertyCard = (props) => {
  return (
    <Link href={"/property/" + props.id}>
      {/* Property Image + Name*/}
      <img
        className="rounded-t-lg"
        src={props.propImage || "/property_1_image.png"}
        alt="Property Image"
      />
      <div className="px-4 py-2 flex flex-col gap-2">
        <h1>{props.propName}</h1>

        {/* Property Location */}
        <div className="flex flex-row-reverse items-center">
          <MapPin className="p-1" />
          <h2>{props.propLocation}</h2>
        </div>

        {/* Property Attributes */}
        <div className="flex justify-between">
          {/* {props.propAttributes.map((attribute) => {
            return (
              <PropertyAttribute
                key={attribute.id}
                iconSrc={attribute.icon}
                value={attribute.value}
              />
            );
          })} */}
        </div>

        <hr />

        {/* Property Owner's Phone number */}
        <div className="flex items-center justify-center gap-4">
          <Phone className="p-1"/>
          <p className="text-slate-600">{props.propOwnerPhone}</p>
        </div>

        {/* Property Owner's Whatsapp */}
        {props.propOwnerWhatsApp && (
          <div className="flex items-center justify-center gap-4">
            <img
              className="size-4"
              src="whatsapp_icon.svg"
              alt="Owner's Whatsapp icon"
            />
            <p className="text-slate-600">{props.propOwnerWhatsApp}</p>
          </div>
        )}
      </div>

      <hr />

      <div className="flex justify-center py-1">
        <p className="text-sky-600 font-semibold hover:text-sky-800">
          رؤية المزيد
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
