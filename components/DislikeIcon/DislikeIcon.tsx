const DislikeIcon = ({color}: {color: string}) => {
  return (
    <>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier">
          <path d="M19 5L18.0864 5.91358M5 19L8.21252 15.7875M18.0864 5.91358C16.3142 4.5616 13.7913 4.69173 12.1544 6.42726L12 6.59097L11.8456 6.42726C9.86801 4.33053 6.59738 4.57698 4.91934 6.94915C3.42999 9.05459 3.78668 12.0335 5.725 13.6776L8.21252 15.7875M18.0864 5.91358L8.21252 15.7875M9.64206 17L12 19L18.275 13.6776C19.9081 12.2924 20.4185 9.95956 19.6479 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"/>
        </g>

      </svg>
    </>
  );
};

export default DislikeIcon;