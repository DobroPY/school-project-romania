import React from "react";

const TeacherCell = (props) => {
  return (
    <div className="flex w-full flex-col items-stretch">
      <div className="items-stretch flex w-full justify-between gap-5">
        <div className="items-stretch flex justify-between gap-2.5 p-2">
        <svg className="aspect-square object-contain object-center w-10 self-center overflow-hidden shrink-0 max-w-full rounded-[50%]"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
    
          <span className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto px-5">
            <div className="text-slate-700 text-sm whitespace-nowrap">
              Theresa Webb
            </div>
            <div className="text-gray-500 text-xs whitespace-nowrap">
              Subject: Mathematics
            </div>
          </span>
        </div>
        <span className="items-stretch border bg-white self-center flex gap-1.5 my-auto px-2.5 py-1.5 rounded-2xl border-solid border-gray-200 mr-2">
        <svg className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6565 7.14863L11.8377 9.60863L12.6821 13.2711C12.7268 13.4626 12.714 13.663 12.6454 13.8472C12.5768 14.0315 12.4555 14.1914 12.2965 14.3071C12.1375 14.4227 11.9479 14.489 11.7515 14.4975C11.555 14.5059 11.3605 14.4564 11.1921 14.3549L7.99771 12.4174L4.81021 14.3549C4.64182 14.4564 4.44724 14.5059 4.25082 14.4975C4.05439 14.489 3.86483 14.4227 3.70583 14.3071C3.54683 14.1914 3.42545 14.0315 3.35686 13.8472C3.28828 13.663 3.27553 13.4626 3.32021 13.2711L4.16333 9.61238L1.34396 7.14863C1.19484 7.02002 1.08701 6.85024 1.03399 6.66059C0.980978 6.47094 0.985134 6.26986 1.04594 6.08257C1.10675 5.89527 1.2215 5.7301 1.37581 5.60776C1.53011 5.48542 1.71711 5.41137 1.91333 5.39488L5.62958 5.073L7.08021 1.613C7.15596 1.43145 7.28374 1.27637 7.44745 1.16729C7.61116 1.05821 7.80349 1 8.00021 1C8.19693 1 8.38926 1.05821 8.55297 1.16729C8.71668 1.27637 8.84446 1.43145 8.92021 1.613L10.3752 5.073L14.0902 5.39488C14.2864 5.41137 14.4734 5.48542 14.6277 5.60776C14.782 5.7301 14.8968 5.89527 14.9576 6.08257C15.0184 6.26986 15.0226 6.47094 14.9695 6.66059C14.9165 6.85024 14.8087 7.02002 14.6596 7.14863H14.6565Z" fill="#FFBB0B"/>
</svg>

          <div className="text-slate-700 text-right text-sm self-center my-auto">
            4.9
          </div>
        </span>
      </div>
      <div className="bg-gray-200 min-h-[1px] w-full mt-3" />
    </div>
  );
};
export default TeacherCell;
