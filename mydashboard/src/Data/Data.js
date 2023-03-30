// objects we will call one by one to make reusable components
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilComments
} from '@iconscout/react-unicons';

export const SidebarData=[
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Email"
    },
    {
        icon: UilComments,
        heading: "Chat"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    },
];


export const CardsData=[
    //individual card object
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "32,000",
        png: UilUsdSquare,
        series:{
            labels: [1,2,3,4,5,6,7,8],
            datasets:[
                {
                    label: 'Sales',
                    backgroundColor: "rgba(51,200,99,.1)",
                    borderColor: "black",
                    data: [31,40,28,51,42,109,100],
                }
            ]
        },
    },
    {
        title: "Sessions",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 70,
        value: "32,000",
        png: UilClipboardAlt,
        series:{
            labels: [1,2,3,4,5,6,7,8],
            datasets:[
                {
                    label: 'Sales',
                    data: [31,40,28,51,42,109,100],
                }
            ]
        },
    },
    {
        title: "Total Profit",
        color: {
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 70,
        value: "32,000",
        png: UilMoneyWithdrawal,
        series:{
            labels: [1,2,3,4,5,6,7,8],
            datasets:[
                {
                    label: 'Sales',
                    data: [31,40,28,51,42,109,100],
                }
            ]
        },
    },
]