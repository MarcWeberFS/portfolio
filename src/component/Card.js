import React from 'react';
import SkillBadge from './Skillbadge';

export default function Card({ Date, Role, Description, Skills }) {
  return (
    <div className="flex divide-gray-200 overflow-hidden rounded-lg bg-transparent shadow">
      <div className="w-48 font-normal text-slate-400 italic ">
        {Date}
      </div>
      <div className="w-full">
        <div className="px-2 sm:px-3 text-xl font-semibold">
          {Role}
        </div>
        <div className="px-2 py-2 sm:p-3 text-slate-300 font-normal">
          {Description}
        </div>
        <div className="px-2 py-2 sm:px-3">
          <div className="flex flex-wrap">
            {Skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
