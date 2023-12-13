import type { IDropdownProps, IDropdownPropsOptions, ISchemeParamsItem, IDropdownPropsOptionsWithParams } from "../components/type";

const commonParamsList = ['needLogin', 'autoTitle', 'title']
export const commonParams: ISchemeParamsItem[] = commonParamsList.map(key => ({
    key,
    require: false
}))

export enum Category {
    event,
    native,
    web
}

export const primary_option: IDropdownProps = {
    value: "",
    options: (() => {
        const res: IDropdownPropsOptions[] = []
        for (let key in Category) {
            if (!isNaN(+key)) continue;
            res.push({
                label: key,
                value: Category[key]
            })
        }
        return res
    })(),
};

export const secondary_option: Record<Category, IDropdownPropsOptionsWithParams[]> = {
    [Category.event]: [
        {
            label: "新手指引活动",
            value: "cassava://event/beginnerGuide",
        }, {
            label: "通知授权",
            value: "cassava://event/notificationAuth",
        }, {
            label: "运动授权",
            value: "cassava://event/notificationAuth",
        }
    ],
    [Category.native]: [
        {
            label: "回到首页",
            value: "cassava://main/main"
        },
        {
            label: "邀请",
            value: "cassava://referral/invite",
            params: [
                {
                    key: "referralCode",
                    require: true,
                }
            ]
        },
        {
            label: "Me页面",
            value: "cassava://tabbar/accountCenter"
        },
        {
            label: "AvatarStory",
            value: "cassava://tabbar/avatarStory"
        },
        {
            label: "MyAvatar",
            value: "cassava://tabbar/myAvatar"
        },
        {
            label: "Avatar种类选择页面",
            value: "cassava://native/avatarType",
            params: [
                {
                    key: "finishedReturn",
                    info: ""
                }
            ]
        },

    ],
    [Category.web]: [
        {
            label: "前端页面",
            value: "cassava://web/web",
            params: [
                {
                    key: "loadingType",
                    info: "quizLoading:  答题页面的loading样式"
                }, {
                    key: "url",
                    require: true,
                }
            ]
        },
    ]

}