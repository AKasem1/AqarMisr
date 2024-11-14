import React from "react";
import RentBasicInfo from "./RentBasicInfo";

const BasicInfo = () => {
  const [selectedType, setSelectedType] = React.useState("rent");
  return (
    <div>
      <div className="p-6 space-y-6">
        <div className="flex gap-4" dir="rtl">
          <label className="flex items-center space-x-2 space-x-reverse">
            <input
              type="radio"
              name="propertyType"
              value="rent"
              className="w-4 h-4"
              onChange={(e) => setSelectedType(e.target.value)}
              checked={selectedType === "rent"}
            />
            <span>ايجار</span>
          </label>

          <label className="flex items-center space-x-2 space-x-reverse">
            <input
              type="radio"
              name="propertyType"
              value="buy"
              className="w-4 h-4"
              onChange={(e) => setSelectedType(e.target.value)}
              checked={selectedType === "buy"}
            />
            <span>تمليك</span>
          </label>
        </div>

        {selectedType === "rent" && <RentBasicInfo />}

        {selectedType === "buy" && (
          <div className="border rounded-lg p-4">
            {/* Buy form component */}
            <h2 className="text-xl font-semibold mb-4">معلومات التمليك</h2>
            {/* Add buy specific fields here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInfo;
