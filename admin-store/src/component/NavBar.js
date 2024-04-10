import React from "react";
import removeAccents from "remove-accents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

function NavBar() {
  const memus = [
    { id: 1, name: "Bản điều khiển", icon: "../../icon_category/console.png" },
    {
      id: 2,
      name: "Quản lý nhân viên",
      icon: "../../icon_category/manager-stuff.png",
    },
    {
      id: 3,
      name: "Quản lý khách hàng",
      icon: "../../icon_category/manager-customer.jpg",
    },
    {
      id: 4,
      name: "Quản lý sản phẩm",
      icon: "../../icon_category/manager-product.png",
    },
    { id: 5, name: "Quản lý đơn hàng", icon: "faCartShopping" },
    // { id: 6, name: "Quản lý nội bộ", icon: "faCartShopping" },
    // { id: 7, name: "Bảng kê lương", icon: "faCartShopping" },
    // { id: 8, name: "Báo cáo doanh thu", icon: "faCartShopping" },
    // { id: 9, name: "Lịch công tác", icon: "faCartShopping" },
    // { id: 10, name: "Quản lý hệ thống", icon: "faCartShopping" },
  ];

  let menuItem = memus.map((item) => (
    <Link
      state={{}}
      to={`/${removeAccents(item.name).toLowerCase().replace(/\s/g, "")}`}
    >
      <li key={item.id} className="li_">
        <img src={item.icon} alt={item.id} className="iconMenu" />
        <span className="textMenu">{item.name}</span>
      </li>
    </Link>
  ));

  return (
    <nav className="nav">
      <header className="nav__headerNav">
        <img src="../../admin.png" alt="" />
        <h4>Admin</h4>
        <span>Welcome to back</span>
      </header>
      <ul className="nav__headerMenu">
        <li className="li_index_0" style={{ fontSize: "10px" }}>
          <FontAwesomeIcon icon={faCartShopping} className="iconMenu" />
          <span className="textMenu">Bài viết bán hàng</span>
        </li>
        <li
          className="li_signout"
          style={{
            width: "80px",
            height: "40px",
            color: "white",
            fontSize: "15px",
            fontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <span>Sign Out</span>
          </a>
        </li>
        <hr />
        {menuItem}
      </ul>
      {/* <br /> */}
    </nav>
  );
}

export default NavBar;
