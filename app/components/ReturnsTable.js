export default function ReturnsTable({ title, rows }) {
  const safeRows = Array.isArray(rows) ? rows : [];

  return (
    <div>
      <h4 className='text-lg font-semibold text-gray-800 mb-3'>{title}</h4>

      <div className='bg-[#faf9f6] rounded-2xl p-4 overflow-x-auto'>
        {/* Headings for medium+ screens */}
        <div className='hidden sm:grid grid-cols-3 text-sm font-medium text-gray-600 mb-4'>
          <span>FY</span>
          <span>Period</span>
          <span>Filing Date</span>
        </div>

        <div className='space-y-1'>
          {safeRows.length > 0 ? (
            safeRows.map((row, index) => (
              <div
                key={index}
                className='grid grid-cols-1 sm:grid-cols-3 text-sm text-gray-900 gap-1 sm:gap-0 bg-white p-2 rounded-lg'
              >
                <div className='sm:block'>
                  <span className='sm:hidden text-xs text-gray-500 block'>
                    FY
                  </span>
                  <span className='font-medium'>{row.fy}</span>
                </div>

                <div className='sm:block'>
                  <span className='sm:hidden text-xs text-gray-500 block'>
                    Period
                  </span>
                  <span>{row.period}</span>
                </div>

                <div className='sm:block'>
                  <span className='sm:hidden text-xs text-gray-500 block'>
                    Filing Date
                  </span>
                  <span>{row.date}</span>
                </div>
              </div>
            ))
          ) : (
            <div className='text-sm text-gray-500'>No returns available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
