import React from 'react';
import SkillBadge from './Skillbadge';

export default function Card({ Date, Role, Description, Skills, Link }) {
    return (
      <a href={Link} className="block cursor-pointer">
        <div className="flex divide-gray-200 overflow-hidden px-4 py-4 rounded-lg bg-transparent hover:bg-slate-800">
          <div className="w-48 font-normal text-slate-400 italic ">
            {Date}
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between px-2 sm:px-3 text-xl font-semibold">
              {Role}
              <span className="material-icons ml-2">open_in_new</span>
            </div>
            <div className="px-2 py-2 sm:p-3 text-slate-300 font-normal">
              {Description}
            </div>
            <div className="px-2">
              <div className="flex flex-wrap">
                {Skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
