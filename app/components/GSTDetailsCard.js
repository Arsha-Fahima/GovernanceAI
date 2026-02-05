export default function GSTDetailsCard({ data }) {
  return (
    <div className="bg-[#faf9f6] rounded-2xl shadow-sm p-8 space-y-6">
      <DetailRow label="Trade Name" value={data?.tradeName || "N/A"} />
      <DetailRow label="Legal Name" value={data?.legalname || "N/A"} />
      <DetailRow label="GSTIN" value={data?.gstin || "N/A"} />
      <DetailRow label="Pincode" value={data?.pincode || "N/A"} />
      <DetailRow label="Pan" value={data?.pan || "N/A"} />
      <DetailRow label="Tax Type" value={data?.dty || "N/A"} />
      <DetailRow label="Status" value={data?.sts || "N/A"} />

      {/* <div>
        <p className='text-sm text-gray-600 mb-2'>Registration Status</p>
        <div className='flex gap-3'>
          <span className='px-4 py-1 rounded-full bg-green-500 text-white text-sm font-medium'></span>
          Active
          <span className='px-4 py-1 rounded-full bg-blue-400 text-white text-sm font-medium'>
            Regular
          </span>
        </div>
      </div> */}

      <DetailRow label="Registration Date" value={data?.rgdt || "N/A"} />
      <DetailRow label="Entity Type" value={data?.ctb || "N/A"} />

      <DetailRow
        label="Place of Business (Address)"
        value={data?.adr || "N/A"}
      />

      <DetailRow
        label="E-Invoice mandatory?"
        value={data?.mandatedeInvoice || "N/A"}
      />

      <DetailRow label="Central Jurisdiction" value={data?.ctj || "N/A"} />

      <DetailRow label="State Jurisdiction" value={data?.stj || "N/A"} />
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex gap-6">
      <p className="text-sm text-gray-600 w-48 shrink-0">{label}</p>
      <p className="text-sm text-gray-900 leading-relaxed">{value}</p>
    </div>
  );
}
