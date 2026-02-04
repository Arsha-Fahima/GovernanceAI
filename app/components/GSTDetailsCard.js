export default function GSTDetailsCard() {
  return (
    <div className='bg-[#faf9f6] rounded-2xl shadow-sm p-8 space-y-6'>
      <DetailRow label='Trade Name' value='purushotham k' />
      <DetailRow label='Legal Name' value='sri venkateswara blue metals' />

      <div>
        <p className='text-sm text-gray-600 mb-2'>Registration Status</p>
        <div className='flex gap-3'>
          <span className='px-4 py-1 rounded-full bg-green-500 text-white text-sm font-medium'></span>
          Active
          <span className='px-4 py-1 rounded-full bg-blue-400 text-white text-sm font-medium'>
            Regular
          </span>
        </div>
      </div>

      <DetailRow label='Registration Date' value='08/01/2021' />
      <DetailRow label='Entity Type' value='Partnership' />

      <DetailRow
        label='Place of Business (Address)'
        value='9, SAIT KAADU / 18TH CANAL, BODINAYAKKANUR / SILAMALAI / SOOLAPURAM, Theni, Tamil Nadu, 625528'
      />

      <DetailRow label='E-Invoice mandatory?' value='No, Not mandatory' />

      <div className='flex items-center gap-6'>
        <p className='text-sm text-gray-600 w-48'>Aggregate Turnover</p>
        <button className='px-6 py-2 rounded-xl bg-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-400 transition'>
          View Aggregate Turnover
        </button>
      </div>

      <DetailRow
        label='Central Jurisdiction'
        value='State - CBIC, Zone - CHENNAI, Commissionerate - MADURAI, Division - DINDIGUL - II, Range - THENI RANGE'
      />

      <DetailRow
        label='State Jurisdiction'
        value='State - Tamil Nadu, Division - MADURAI, Zone - THENI, Circle - BODINAYAKANUR (Jurisdictional Office)'
      />
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className='flex gap-6'>
      <p className='text-sm text-gray-600 w-48 shrink-0'>{label}</p>
      <p className='text-sm text-gray-900 leading-relaxed'>{value}</p>
    </div>
  );
}
