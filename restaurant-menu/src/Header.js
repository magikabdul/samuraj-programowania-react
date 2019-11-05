import React from "react";

const Header = props => {
   const activeItems = props.items.filter(item => item.active);
   const number = activeItems.length;

   return (
      <header>
         <h2>Wielkość zamówienia: {number}</h2>
         {number ? (
            <h2>Do zapłaty: {number * 10} złotych</h2>
         ) : (
            <h2>Nie wybrałeś żadnych produktów</h2>
         )}
      </header>
   );
};

export default Header;
