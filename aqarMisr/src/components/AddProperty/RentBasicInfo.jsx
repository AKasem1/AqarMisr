import React from 'react'
import TextInput from '@/components/form/TextInput'
import { Building } from 'lucide-react'

const RentBasicInfo = () => {
  return (
    <div className="border rounded-lg p-4 space-y-4" dir='rtl'>
        <h2 className="text-xl text-center font-bold mb-4">معلومات الايجار</h2>
        <TextInput label="اسم العقار" placeholder="اسم العقار" isRequired={true} errorMsg={"Please provide the property name"} labelIcon={<Building className='size-4'/>}/>
        
        <div className='grid grid-cols-2 gap-4'>
          <TextInput label="سعر الايجار الشهري الحالى" placeholder="سعر الايجار الشهري الحالى" isRequired={true} errorMsg={"Please provide the property rent price"} />
          <TextInput label="سعر الايجار الشهري القديم" placeholder="سعر الايجار الشهري القديم" errorMsg={"Please provide the property old rent price"} />
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <TextInput label="المنطقة" placeholder="المنطقة" isRequired={true} errorMsg={"Please provide the property area"} />
          <TextInput label="عدد الحمامات" placeholder="عدد الحمامات" errorMsg={"Please provide the property bathrooms number"} />
          <TextInput label="عدد الغرف" placeholder="عدد الغرف" errorMsg={"Please provide the property rooms number"} />
        </div>
    </div>
  )
}

export default RentBasicInfo