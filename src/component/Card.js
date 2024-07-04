import React from 'react';

export default function Card({ Date, Role, Description, Skills }) {
  return (
    <div className="divide-y flex divide-gray-200 overflow-hidden rounded-lg bg-transparent shadow">
      <div className="w-36">
        {Date}
      </div>
      <div className="w-full">
        <div className="px-4 py-5 sm:px-6">
          {Role}
        </div>
        <div className="px-4 py-5 sm:p-6">
            {Description}
        </div>
        <div className="px-4 py-4 sm:px-6">
          {Skills}
        </div>
      </div>
    </div>
  );
}
