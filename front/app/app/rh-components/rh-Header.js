import React from 'react';
// import NavigationBar from '../rh-components/rh-NavigationBar'
import UtilityBar from './rh-UtilityBar';

const Title = (props) => (
  <div className="header-title"><h1>{props.label}</h1></div>);
Title.propTypes = {
  label: React.PropTypes.string
};


const Header = ({title, secondaryNav, username}) => {

  /*
   <NavigationBar nav={[
   {label: 'Home', route: '/'},
   {label: 'Two', route: '/two'},
   {label: 'Three', route: '/three'},
   {label: 'Four', route: '/four'},
   {label: 'Five', route: '/five'}
   ]} search={true} searchPlaceholder='What are you looking for?'/>
   */


    return (
      <div className="header-region">
        <div className="page-container">
          <UtilityBar links={secondaryNav} username={username}/>
          <div className="header-title"><h1>{title}</h1></div>

        </div>
      </div>
    );
};

export default Header;


/*
 import UtilityBar from '../rh-components/rh-UtilityBar';

 const HeaderSubPage = ({title, secondaryNav, username}) => {
 return (
 <div className="header-region-subpage">
 <div className="page-container">
 <UtilityBar links={secondaryNav} username={username}/>
 <div className="header-title"><h1>{title}</h1></div>
 </div>
 </div>
 )
 };

 export default HeaderSubPage;
 */