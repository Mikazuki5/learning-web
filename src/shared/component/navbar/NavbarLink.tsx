import React from 'react'

type Props = {
    isDropdown?: boolean
    dropdownLinkName?: string
    dropdownItem?: DropdownItem[]
    singeLinkName?: string
    singeLinkRef?: string
    [key: string]: any
}

type PropsLink = {
    linkName?: string
    linkRef?: string
}

type DropdownItem = {
    item: string;
    link: string;
}

const NavbarLink = ({ isDropdown, dropdownLinkName, dropdownItem, singeLinkName, singeLinkRef }: Props) => {
    if (isDropdown) {
        return <DropdownLink dropdownLinkName={dropdownLinkName} dropdownItem={dropdownItem} />
    } else {
        return <Link linkName={singeLinkName} linkRef={singeLinkRef} />
    }
}

const DropdownLink = ({ dropdownLinkName, dropdownItem }: Props) => {
    return (
        <React.Fragment>
            <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {dropdownLinkName}
                </a>
                <div className="dropdown-menu text-right text-md-right text-lg-left" aria-labelledby="navbarDropdown">
                    <div className="row">
                        {dropdownItem?.map((values, index) => (
                            <a key={index} className="dropdown-item" href={`${values?.link}`}>{values?.item}</a>
                        ))}
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}

const Link = ({ linkName, linkRef }: PropsLink) => {
    return (
        <React.Fragment>
            <li className="nav-item">
                <a className="nav-link" href={`${linkRef}`}>{linkName}</a>
            </li>
        </React.Fragment>
    )
}

export default NavbarLink