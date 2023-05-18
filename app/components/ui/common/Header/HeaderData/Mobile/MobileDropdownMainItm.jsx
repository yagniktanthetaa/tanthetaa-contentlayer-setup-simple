import React from 'react'
import { BiChevronDown } from "react-icons/bi";

const MobileDropdownMainItm = ({ e, ind, subDropdown }) => {
  return (
    <div className="flex items-center justify-start pl-5" key={ind}>
      <a
        type="button"
        id="app-btn"
        className="px-3 py-2"
        onClick={() => {
          subDropdown(e?.id);
        }}
      >
        {e?.title}
      </a>
      <BiChevronDown style={{ color: "black" }} />
    </div>
  )
}

export default MobileDropdownMainItm