import React from "react";
import PropertyAttribute from "./PropertyAttribute";
import Link from "next/link";

const PropertyCard = (props) => {
  return (
    <div className="min-w-64 rounded-lg border">
      {/* Property Image + Name*/}
      <img
        className="rounded-t-lg"
        src={props.propImage}
        alt="Property Image"
      />
      <div className="px-4 py-2 flex flex-col gap-2">
        <h1>{props.propName}</h1>
        {/* Property Location */}
        <div className="flex flex-row-reverse items-center">
          <img className="size-4" src="location_icon.svg" />
          <h2>{props.propLocation}</h2>
        </div>
        {/* Property Attributes */}
        <div className="flex justify-between">
          {props.propAttributes.map((attribute) => {
            return (
              <PropertyAttribute
                key={attribute.id}
                iconSrc={attribute.icon}
                value={attribute.value}
              />
            );
          })}
        </div>

        <hr />

        {/* Property Owner's Phone number */}
        <div className="flex items-center justify-center gap-4">
          <img
            className="size-4"
            src="owner_phone_icon.svg"
            alt="Owner's phone icon"
          />
          <p className="text-slate-600">{props.propOwnerPhone}</p>
        </div>

        {/* Property Owner's Whatsapp */}
        <div className="flex items-center justify-center gap-4">
          <img
            className="size-4"
            src="whatsapp_icon.svg"
            alt="Owner's Whatsapp icon"
          />
          <p className="text-slate-600">{props.propOwnerWhatsApp}</p>
        </div>
      </div>

      <hr />

      <div className="flex justify-center py-1">
        <Link href={"/property/example1"} className="text-sky-600 font-semibold hover:text-sky-800">رؤية المزيد</Link>
      </div>
    </div>
  );
};

export default PropertyCard;
