const NavBar = () => {
  return (
    <div className="navigation px-6 py-5">
      <ul>
        <li className="inline-block mr-10"><a href="#">Home</a></li>
        <li className="inline-block mr-10"><a href="#">Product</a></li>
        <li className="inline-block mr-10"><a href="#">Login</a></li>
        <li className="inline-block"><a href="#">My Account</a></li>
      </ul>
    </div>
  );
}

export default NavBar;