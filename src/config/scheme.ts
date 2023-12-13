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
        {
            label: "任务广场页面",
            value: "cassava://tabbar/tasks"
        },
        {
            label: "社区广场页面",
            value: "cassava://tabbar/communities"
        },
        {
            label: "社区详情页面",
            value: "cassava://native/communityDetail",
            params: [
                { key: "id", require: true },
                { key: "code" },
            ]
        },
        {
            label: "Credits页面",
            value: "cassava://tabbar/credits"
        },
        {
            label: "Referral页面",
            value: "cassava://native/referral",
            params: [
                { key: "type", require: true, enum: ["invite", "referral"] },
            ]
        }, {
            label: "步数计页面",
            value: "cassava://native/pedometer"
        }, {
            label: "Earning页面（每日任务中心页面）",
            value: "cassava://tabbar/earning"
        }, {
            label: "我的Avatar列表页面",
            value: "cassava://native/myAvatarList"
        },
        {
            label: "我的钱包管理页面",
            value: "cassava://native/walletManage"
        },
        {
            label: "挖矿列表页面",
            value: "cassava://native/miningList"
        },
        {
            label: "投资(追加)挖矿页面",
            value: "cassava://native/investMining"
        },
        {
            label: "挖矿详情页面",
            value: "cassava://native/miningDetail",
            params: [
                { key: "pool_id", require: true },
                { key: "round_id", require: true },
            ]
        }, {
            label: "我的挖矿列表页面(进行中的)",
            value: "cassava://native/myMining"
        }, {
            label: "我的挖矿历史记录列表页面",
            value: "cassava://native/myMiningHistory"
        }, {
            label: "新手任务页面",
            value: "cassava://native/newbieTask"
        }
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