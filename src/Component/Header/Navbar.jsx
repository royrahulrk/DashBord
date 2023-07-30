import { Menu } from 'antd';
import {
  HomeOutlined,
  WalletOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined ,
  EditOutlined,
  SmileOutlined,
  PropertySafetyOutlined,
  ProjectOutlined 

} from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {
  return (
    <>
    <Menu mode="horizontal" theme="dark" style={{justifyContent:'center'}} className='navbar'>
      <Menu.Item key="dashboard" icon={<HomeOutlined />}>
        Dashboard
      </Menu.Item>
      <SubMenu key="crypto" icon={<WalletOutlined />} title="Crypto Currencies">
        <Menu.Item key="crypto-dashboard">Dashboard</Menu.Item>
        <Menu.Item key="crypto-market">Marketcap</Menu.Item>
        <Menu.Item key="crypto-exchange">Currency exchange</Menu.Item>
        <Menu.Item key="crypto-buy-sell">Buy & Sell</Menu.Item>
        <Menu.Item key="crypto-wallet">Wallet</Menu.Item>
        <Menu.Item key="crypto-transactions">Transactions</Menu.Item>
      </SubMenu>
      <SubMenu key="ecommerce" icon={<ShoppingCartOutlined />} title="Ecommerce">
        <Menu.Item key="ecommerce-dashboard">Dashboard</Menu.Item>
        <Menu.Item key="ecommerce-products">Products</Menu.Item>
        <Menu.Item key="ecommerce-product-details">Product Details</Menu.Item>
        <Menu.Item key="ecommerce-cart">Cart</Menu.Item>
        <Menu.Item key="ecommerce-checkout">Checkout</Menu.Item>
        <Menu.Item key="ecommerce-orders">Orders</Menu.Item>
        <Menu.Item key="ecommerce-account">Account</Menu.Item>
      </SubMenu>
      <SubMenu key="apps" icon={<AppstoreAddOutlined />} title="Apps">
        <Menu.Item key="apps-widgets">Widgets</Menu.Item>
        <Menu.Item key="apps-chat">Chat</Menu.Item>
        <Menu.Item key="apps-cards">Cards</Menu.Item>
        <Menu.Item key="apps-mail-inbox">Mail-Inbox</Menu.Item>
        <Menu.Item key="apps-view-mail">View-Mail</Menu.Item>
        <Menu.Item key="apps-calendar">Calendar</Menu.Item>
        <Menu.Item key="apps-contacts">Contacts</Menu.Item>
        <Menu.Item key="apps-file-manager">File-manager</Menu.Item>
        <Menu.Item key="apps-file-manager-list">File-manager-list</Menu.Item>
        <Menu.Item key="apps-file-details">File-details</Menu.Item>
        <SubMenu key="apps-submenu" title="Submenu">
          <Menu.Item key="apps-level-01">Level-01</Menu.Item>
          <Menu.Item key="apps-level-02">Level-02</Menu.Item>
          <SubMenu key="apps-level-03" title="Level-03">
            <Menu.Item key="apps-level-01">Level-01</Menu.Item>
            <Menu.Item key="apps-level-02">Level-02</Menu.Item>
            <Menu.Item key="apps-level-03">Level-03</Menu.Item>
          </SubMenu>
        </SubMenu>
      </SubMenu>
      <SubMenu key="components"  title="Components" popupOffset={[0, 10]} popupClassName="submenu-popup">
        <SubMenu key="components-elements" title="Elements">
          <Menu.Item key="components-alerts">Alerts</Menu.Item>
          <Menu.Item key="components-avatar">Avatar</Menu.Item>
          <Menu.Item key="components-breadcrumbs">Breadcrumbs</Menu.Item>
          <Menu.Item key="components-buttons">Buttons</Menu.Item>
          <Menu.Item key="components-badge">Badge</Menu.Item>
          <Menu.Item key="components-dropdown">Dropdown</Menu.Item>
          <Menu.Item key="components-thumbnails">Thumbnails</Menu.Item>
          <Menu.Item key="components-list-group">List Group</Menu.Item>
        </SubMenu>
        <SubMenu key="components-advanced-ui" title="Advanced UI">
          <Menu.Item key="components-accordion">Accordion</Menu.Item>
          <Menu.Item key="components-carousel">Carousel</Menu.Item>
          <Menu.Item key="components-collapse">Collapse</Menu.Item>
          <Menu.Item key="components-modals">Modals</Menu.Item>
          <Menu.Item key="components-timeline">Timeline</Menu.Item>
          <Menu.Item key="components-draggable-cards">Draggable Cards</Menu.Item>
          <Menu.Item key="components-sweet-alert">Sweet Alert</Menu.Item>
          <Menu.Item key="components-ratings">Ratings</Menu.Item>
        </SubMenu>
        <SubMenu key="components-chart" title="Chart">
          <Menu.Item key="components-morris-charts">Morris Charts</Menu.Item>
          <Menu.Item key="components-flot-charts">Flot Charts</Menu.Item>
          <Menu.Item key="components-chartjs">ChartJS</Menu.Item>
          <Menu.Item key="components-sparkline-peity">Sparkline & Peity</Menu.Item>
          <Menu.Item key="components-echart">Echart</Menu.Item>
        </SubMenu>
      </SubMenu>
        <SubMenu key="components-forms" title="Forms" icon={< EditOutlined/>}>
          <Menu.Item key="components-form-elements">Form Elements</Menu.Item>
          <Menu.Item key="components-advanced-forms">Advanced Forms</Menu.Item>
          <Menu.Item key="components-form-layouts">Form Layouts</Menu.Item>
          <Menu.Item key="components-form-validation">Form Validation</Menu.Item>
          <Menu.Item key="components-form-wizards">Form Wizards</Menu.Item>
          <Menu.Item key="components-wysiwyg-editor">WYSIWYG Editor</Menu.Item>
          <Menu.Item key="components-form-element-sizes">Form Element-sizes</Menu.Item>
        </SubMenu>
        <SubMenu key="components-utilities" title="Utilities" icon={<PropertySafetyOutlined />}>
          <Menu.Item key="components-background">Background</Menu.Item>
          <Menu.Item key="components-border">Border</Menu.Item>
          <Menu.Item key="components-display">Display</Menu.Item>
          <Menu.Item key="components-flex">Flex</Menu.Item>
          <Menu.Item key="components-height">Height</Menu.Item>
          <Menu.Item key="components-margin">Margin</Menu.Item>
          <Menu.Item key="components-padding">Padding</Menu.Item>
          <Menu.Item key="components-position">Position</Menu.Item>
          <Menu.Item key="components-width">Width</Menu.Item>
          <Menu.Item key="components-extras">Extras</Menu.Item>
        </SubMenu>
        <SubMenu key="components-icons" icon={<SmileOutlined />} title="Icons">
          <Menu.Item key="components-icons-fa">Font Awesome</Menu.Item>
          <Menu.Item key="components-icons-md">Material Design Icons</Menu.Item>
          <Menu.Item key="components-icons-sli">Simple Line Icons</Menu.Item>
          <Menu.Item key="components-icons-feather">Feather Icons</Menu.Item>
          <Menu.Item key="components-icons-ionic">Ionic Icons</Menu.Item>
          <Menu.Item key="components-icons-flag">Flag Icons</Menu.Item>
          <Menu.Item key="components-icons-pe7">Pe7 Icons</Menu.Item>
          <Menu.Item key="components-icons-themify">Themify Icons</Menu.Item>
          <Menu.Item key="components-icons-typicons">Typicons Icons</Menu.Item>
          <Menu.Item key="components-icons-weather">Weather Icons</Menu.Item>
          <Menu.Item key="components-icons-material">Material Icons</Menu.Item>
          <Menu.Item key="components-icons-bootstrap">Bootstrap Icons</Menu.Item>
        </SubMenu>
        <SubMenu key="pages"  title="Pages" icon={<ProjectOutlined />}>
          <Menu.Item key="pages-profile">Profile</Menu.Item>
          <Menu.Item key="pages-invoice">Invoice</Menu.Item>
          <Menu.Item key="pages-pricing">Pricing</Menu.Item>
          <SubMenu key="pages-alertpages" title="Alertpages">
            <Menu.Item key="pages-success-message">Success Message</Menu.Item>
            <Menu.Item key="pages-danger-message">Danger Message</Menu.Item>
            <Menu.Item key="pages-warning-message">Warning Message</Menu.Item>
          </SubMenu>
          <Menu.Item key="pages-gallery">Gallery</Menu.Item>
          <Menu.Item key="pages-faqs">Faqs</Menu.Item>
          <Menu.Item key="pages-empty">Empty Page</Menu.Item>
          <Menu.Item key="pages-sign-in">Sign In</Menu.Item>
          <Menu.Item key="pages-sign-up">Sign Up</Menu.Item>
          <Menu.Item key="pages-forgot-password">Forgot Password</Menu.Item>
          <Menu.Item key="pages-reset-password">Reset Password</Menu.Item>
          <Menu.Item key="pages-lockscreen">Lockscreen</Menu.Item>
          <Menu.Item key="pages-under-construction">UnderConstruction</Menu.Item>
          <Menu.Item key="pages-404-error">404 Error</Menu.Item>
          <Menu.Item key="pages-500-error">500 Error</Menu.Item>
        </SubMenu>
      </Menu>
       </>
  );
};

export default Navbar;
