import React from 'react'

const MobileDropdownSubItm = ({ e, ind, closeNav }) => {
    return (
        <div className="px-3" key={ind}>
            <div className="flex justify-start py-1 items-center pl-8 ">
                <img
                    src={e?.image}
                    alt="Company"
                    className="w-8 pt-2"
                />
                <a
                    href={e?.href}
                    className="px-3 subMenuTitle !font-mono"
                    onClick={() => {
                        closeNav();
                    }}
                >
                    {e?.title}
                </a>
            </div>
        </div>
    )
}

export default MobileDropdownSubItm