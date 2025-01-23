import {TagType} from "./sign-up";
import {ResponseType} from "./common";

export interface UserInfoType {
    id: number;
    nickname: string;
    imageUrl: string;
    marketingAllow: boolean;
    userTag: TagType;
    infoOpen: InfoOpenType;
    followedCount: number;
    followerCount: number;
    readBooksCount: number;
    wishBooksCount: number;
}

export interface InfoOpenType {
    followOpen: boolean;
    contentOpen: boolean;
    commentOpen: boolean;
    likeOpen: boolean;
}
