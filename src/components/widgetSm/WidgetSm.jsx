import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Thomas</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Donald Mike</span>
            <span className="widgetSmUserTitle">UI/UX Designer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Thomas</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Donald Mike</span>
            <span className="widgetSmUserTitle">UI/UX Designer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Thomas</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
