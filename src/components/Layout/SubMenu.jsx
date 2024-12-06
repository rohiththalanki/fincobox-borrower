import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  const { title, items } = props;
  return (
    <div>
      <NavItem
        onClick={toggle}
        className={'classNames({ "menu-open": !collapsed })'}
      >
        <Dropdown isOpen={collapsed} toggle={toggle} direction={'down'}>
          <DropdownToggle className="bg-none nav-link" caret>
            {title}
          </DropdownToggle>
          <DropdownMenu >
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && < DropdownItem divider />}
                <DropdownItem key={index} className="pl-4">
                  <NavLink tag={Link} to={item.link} className="p-0">
                    {item.label}
                  </NavLink>
                </DropdownItem>
              </React.Fragment>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </div>
  );
};

export default SubMenu;
