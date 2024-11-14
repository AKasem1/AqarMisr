import React from 'react'
import TextInput from '@/components/form/TextInput'
import CheckBox from '@/components/form/CheckBox'
import Select from '@/components/form/Select'
import { Building, Banknote, Bath, Bed, Square, Sofa, House, CookingPot, GlassWater, ArrowsUpFromLine, Trees, AirVent, Heater, Receipt, Camera } from 'lucide-react'
import NumberInput from '../form/NumberInput'

const RentBasicInfo = () => {
  return (
    <div className="border rounded-lg p-4 space-y-5" dir='rtl'>
        <h2 className="text-xl text-center font-bold mb-4">معلومات الايجار</h2>
        <div className='grid grid-cols-2 gap-4'>
          <TextInput label="اسم العقار" placeholder="اسم العقار" isRequired={true} errorMsg={"Please provide the property name"} labelIcon={<Building className='size-4'/>}/>
          <Select label="نوع العقار" options={[{value: "apartment", label: "شقة"}, {value: "villa", label: "فيلا"}, {value: "office", label: "مكتب"}]} labelIcon={<House className='size-4'/>} isRequired={true} />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <NumberInput label="سعر الايجار الشهري الحالى" placeholder="سعر الايجار الشهري الحالى" isRequired={true} errorMsg={"Please provide the property rent price"} labelIcon={<Banknote className='size-4'/>}/>
          <NumberInput label="سعر الايجار الشهري القديم" placeholder="سعر الايجار الشهري القديم" errorMsg={"Please provide the property old rent price"} labelIcon={<Banknote className='size-4'/>}/>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <NumberInput label="المساحة" placeholder="المساحة" isRequired={true} errorMsg={"Please provide the property area"} labelIcon={<Square className='size-4'/>}/>
          <NumberInput label="عدد الحمامات" placeholder="عدد الحمامات" errorMsg={"Please provide the property bathrooms number"} labelIcon={<Bath className='size-4'/>}/>
          <NumberInput label="عدد الغرف" placeholder="عدد الغرف" errorMsg={"Please provide the property rooms number"} labelIcon={<Bed className='size-4'/>}/>
        </div>

        <h2 className="text-xl text-center font-bold mb-4">مميزات العقار</h2>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10'>
          <CheckBox label="العقار مفروش ؟" labelIcon={<Sofa className='size-4'/>}/>
          <CheckBox label="يوجد مطبخ ؟" labelIcon={<CookingPot className='size-4'/>}/>
          <CheckBox label="يوجد حديقة خلفية ؟" labelIcon={<Trees className='size-4'/>}/>
          <CheckBox label="يوجد مصعد ؟" labelIcon={<ArrowsUpFromLine className='size-4'/>}/>
          <CheckBox label="يوجد تكيف ؟" labelIcon={<AirVent className='size-4'/>}/>
          <CheckBox label="يوجد سخان ؟" labelIcon={<Heater className='size-4'/>}/>
          <CheckBox label="يوجد عدادات ؟" labelIcon={<Receipt className='size-4'/>}/>
          <CheckBox label="يوجد كاميرات ؟" labelIcon={<Camera className='size-4'/>}/>
        </div>
    </div>
  )
}

export default RentBasicInfo