import React from 'react';

const icons = [
  {
    name: 'Twitter',
    href: 'https://x.com/YumiFinance',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#B6FF7A] group-hover:text-white transition-colors duration-200">
        <path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.5 9.5c0 .352.04.695.116 1.022C7.728 10.37 4.1 8.6 1.67 5.905c-.386.663-.607 1.434-.607 2.26 0 1.56.795 2.936 2.006 3.744-.738-.023-1.432-.226-2.04-.563v.057c0 2.18 1.553 4.002 3.617 4.418-.378.104-.776.16-1.187.16-.29 0-.57-.027-.844-.08.57 1.78 2.225 3.078 4.188 3.113A8.98 8.98 0 0 1 2 20.07c-.65 0-1.29-.038-1.92-.112A12.7 12.7 0 0 0 7.29 22c8.29 0 12.83-6.87 12.83-12.83 0-.195-.004-.39-.013-.583A9.22 9.22 0 0 0 22 5.924z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#B6FF7A] group-hover:text-white transition-colors duration-200">
        <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="#B6FF7A" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://telegram.org/',
    svg: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#B6FF7A] group-hover:text-white transition-colors duration-200">
        <path d="M21.05 3.05a2.5 2.5 0 0 0-2.6-.4L3.7 8.6a2.5 2.5 0 0 0 .2 4.7l3.7 1.1 1.1 3.7a2.5 2.5 0 0 0 4.7.2l5.95-14.75a2.5 2.5 0 0 0-.35-2.5zM9.5 13.5l7.5-7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="w-full bg-black border-t border-[#222] py-0 flex flex-col  justify-center z-20 relative mt-3">
    <div className="flex gap-15 mt-4 justify-end mr-10">
      {icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={icon.name}
        >
          {icon.svg}
        </a>
      ))}
    </div>
    <span className="flex items-center justify-center w-full text-center text-[#B6FF7A] text-xs font-extralight mt-1">© {new Date().getFullYear()} Yumi Finance. All rights reserved.</span>
  </footer>
);

export default Footer; 