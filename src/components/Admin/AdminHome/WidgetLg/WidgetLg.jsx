import Button from '../Button/Button';

const WidgetLg = () => {
  return (
    <div className='py-2 px-4'>
      <p className='text-lg font-semibold'>Latest Transactions</p>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className='text-[14px] text-black'>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='flex items-center'>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-9 h-9 rounded-[50%] object-cover" />
                <p className='pl-2'>Saqiul islam</p>
              </th>
              <td className='text-gray-500'>2 jun 2021</td>
              <td className='text-gray-500'>$202</td>
              <td>
                <Button type="Approved" />
              </td>
            </tr>
            <tr>
              <th className='flex items-center'>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-9 h-9 rounded-[50%] object-cover" />
                <p className='pl-2'>Saqiul islam</p>
              </th>
              <td className='text-gray-500'>2 jun 2021</td>
              <td className='text-gray-500'>$202</td>
              <td>
                <Button type="Declined" />
              </td>
            </tr>
            <tr>
              <th className='flex items-center'>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-9 h-9 rounded-[50%] object-cover" />
                <p className='pl-2'>Saqiul islam</p>
              </th>
              <td className='text-gray-500'>2 jun 2021</td>
              <td className='text-gray-500'>$202</td>
              <td>
                <Button type="Pending" />
              </td>
            </tr>
            <tr>
              <th className='flex items-center'>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-9 h-9 rounded-[50%] object-cover" />
                <p className='pl-2'>Saqiul islam</p>
              </th>
              <td className='text-gray-500'>2 jun 2021</td>
              <td className='text-gray-500'>$202</td>
              <td>
                <Button type="Approved" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WidgetLg;