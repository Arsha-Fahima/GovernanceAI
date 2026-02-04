export default function ReturnsTable({ title, rows }) {
  return (
    <div>
      <h4 className='text-lg font-semibold text-gray-800 mb-3'>{title}</h4>

      <div className='bg-[#faf9f6] rounded-2xl p-6'>
        <div className='grid grid-cols-3 text-sm font-medium text-gray-600 mb-4'>
          <span>FY</span>
          <span>Period</span>
          <span>Filing Date</span>
        </div>

        <div className='space-y-3'>
          {rows.map((row, index) => (
            <div key={index} className='grid grid-cols-3 text-sm text-gray-900'>
              <span>{row.fy}</span>
              <span>{row.period}</span>
              <span>{row.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
