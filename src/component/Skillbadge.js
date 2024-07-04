import React from 'react';

export default function SkillBadge({ skill }) {
  return (
    <span className="inline-block bg-blue-950 text-blue-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
      {skill}
    </span>
  );
}
