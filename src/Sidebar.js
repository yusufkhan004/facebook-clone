import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <ul>
        <li> <SidebarRow title="Yusuf Khan" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMYvrFt8pkrbXTx-NwqTYIJIbe4s928-C1Q&usqp=CAU"/></li>
        <li> <SidebarRow title="COVID-19 Information Center" src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"/></li>
        <li> <SidebarRow title="Find Friends" src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"/></li>
        <li> <SidebarRow title="Groups" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"/></li>
        <li> <SidebarRow title="Marketplace" src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"/></li>
        <li> <SidebarRow title="Watch" src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"/></li>
        <li> <SidebarRow title="Events" src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png"/></li>
        <li> <SidebarRow title="Memories" src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png"/></li>
        <li> <SidebarRow title="Saved" src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"/></li>
        <li> <SidebarRow title="Pages" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"/></li>
        <li>
        <div className="sidebarRow" >
        <div className="seemorediv">
        <ArrowDropDownCircleRoundedIcon fontSize="large"/> 
        </div>
            <p>See More</p>
        </div>
        </li>
        <li className="container">
            <ul>
                <li> <SidebarRow title="Ad Centre" id="more" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png"/></li>
                <li> <SidebarRow title="Ads Manager" src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"/></li>
                <li> <SidebarRow title="Blood Donation" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/3F9PVdA5J7i.png"/></li>
                <li> <SidebarRow title="Climate Science Information Centre" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png"/></li>
                <li> <SidebarRow title="Community Help" src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/WreZVYrGEZH.png"/></li>
                <li> <SidebarRow title="Emotional health" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png"/></li>
                <li> <SidebarRow title="Favourites" src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png"/></li>
                <li> <SidebarRow title="Friend lists" src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/WAO9fJenkhr.png"/></li>
                <li> <SidebarRow title="Fundraisers" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"/></li>
                <li> <SidebarRow title="Gaming video" src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/uGfRd5KPhOI.png"/></li>
                <li> <SidebarRow title="Jobs" src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/U_sRIAvZ0k2.png"/></li>
                <li> <SidebarRow title="Live videos" src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/dghnujhRAoU.png"/></li>
                <li> <SidebarRow title="Messenger" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png"/></li>
                <li> <SidebarRow title="Messenger Kids" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png"/></li>
                <li> <SidebarRow title="Most recent" src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png"/></li>
                <li> <SidebarRow title="Offers" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/aD733-bMVVs.png"/></li>
                <li> <SidebarRow title="Play games" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"/></li>
                <li> <SidebarRow title="Recent ad activity" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png"/></li>
                <li> <SidebarRow title="Weather" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png"/></li>
                <li> <SidebarRow title="See less" src=""/></li>
            </ul>
        </li>
        </ul>
        </div>
    )
}

export default Sidebar;
