import {NavbarContentType} from "../../types/common";

import SelectedHomeIcon from "../../assets/common/SelectedHomeIcon";
import SelectedSearchIcon from "../../assets/common/SelectedSearchIcon";
import SelectedWriteIcon from "../../assets/common/SelectedWriteIcon";
import SelectedRecommendIcon from "../../assets/common/SelectedRecommendIcon";
import UnSelectedHomeIcon from "../../assets/common/UnSelectedHomeIcon";
import UnSelectedSearchIcon from "../../assets/common/UnSelectedSearchIcon";
import UnSelectedWriteIcon from "../../assets/common/UnSelectedWriteIcon";
import UnSelectedRecommendIcon from "../../assets/common/UnSelectedRecommendIcon";
import MyProfileIcon from "../../assets/common/MyProfileIcon";


export const navbarContents: NavbarContentType[] = [
    {path: "/home", pathName: "홈", selectedIcon: SelectedHomeIcon, unSelectedIcon: UnSelectedHomeIcon},
    {path: "/search", pathName: "도서검색", selectedIcon: SelectedSearchIcon, unSelectedIcon: UnSelectedSearchIcon},
    {path: "/write", pathName: "글쓰기", selectedIcon: SelectedWriteIcon, unSelectedIcon: UnSelectedWriteIcon},
    {path: "/recommend", pathName: "추천", selectedIcon: SelectedRecommendIcon, unSelectedIcon: UnSelectedRecommendIcon},
    {path: "/mypage", pathName: "My", selectedIcon: MyProfileIcon, unSelectedIcon: MyProfileIcon},
]
