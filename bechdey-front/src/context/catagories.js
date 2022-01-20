// export const category = {
//     "Mobile Phone & Accessories" :{
//         "Mobile phone":["Apple","Asus","Blackberry","Colors","Gionee","Goolgle","HTC","Huwaei","Lava","Lenovo","LG","MI","Micromax","Motorola","Nokia","Oneplus","Oppo","Others","Samsung","Sony","Vivo"],
//         "Accessories":["Battery","Charger","Cover & Cases","Data cables","Gamepad & joystick","Headset & earphones","Memory Cards","Mobile apps & games","Mobile parts","Mobile unlock","Other accesories"]    
//     },
//     "Automobiles":{
//         "Cars":["Chevrolet","Daihatsu","Datsun","Eicher","Fiat",'Ford',"Geely","Honda",'Hyundai',"Kia","Land Rover"],
//         "Bike":["Aprilla","Bajaj","Benelli","Cfmoto","Cross X","Crossfire","Harford","Hero","Honda","Ktm"],
//         "Parts & accecorise":["helmet","parts","Riding gear","Tyre","accesories"]
//     }
// }
export const category = [
    {
        value:"mobile_phone_and_accesories",
        label:"Mobile Phone & Accessories",
        type:"category",
        children:[
            {
                value:"mobile_phone",
                label:"Mobile phone",
                type:"subcategory",
                children:[
                    {
                        type:"maincategory",
                        value:"Apple",
                        label:"Apple",
                    },
                    {
                        type:"maincategory",
                        value:"Asus",
                        label:"Asus",
                    },
                    {
                        type:"maincategory",
                        value:"Blackberry",
                        label:"Blackberry",
                    },
                    {
                        type:"maincategory",
                        value:"Colors",
                        label:"Colors",
                    },
                    {
                        type:"maincategory",
                        value:"Gionee",
                        label:"Gionee",
                    },
                    {
                        type:"maincategory",
                        value:"Goolgle",
                        label:"Goolgle",
                    },
                    {
                        type:"maincategory",
                        value:"HTC",
                        label:"HTC",
                    },
                    {
                        type:"maincategory",
                        value:"Huwaei",
                        label:"Huwaei",
                    },
                    {
                        type:"maincategory",
                        value:"Lava",
                        label:"Lava",
                    },
                    {
                        type:"maincategory",
                        value:"Lenovo",
                        label:"Lenovo",
                    },
                    {
                        type:"maincategory",
                        value:"LG",
                        label:"LG",
                    },
                    {
                        type:"maincategory",
                        value:"MI",
                        label:"MI",
                    },
                    {
                        type:"maincategory",
                        value:"Micromax",
                        label:"Micromax",
                    },
                    {
                        type:"maincategory",
                        value:"Motorola",
                        label:"Motorola",
                    },
                    {
                        type:"maincategory",
                        value:"Nokia",
                        label:"Nokia",
                    },
                    {
                        type:"maincategory",
                        value:"Oneplus",
                        label:"Oneplus",
                    },
                    {
                        type:"maincategory",
                        value:"Oppo",
                        label:"Oppo",
                    },
                    {
                        type:"maincategory",
                        value:"Others",
                        label:"Others",
                    },
                    {
                        type:"maincategory",
                        value:"Samsung",
                        label:"Samsung",
                    },
                    {
                        type:"maincategory",
                        value:"Sony",
                        label:"Sony",
                    },
                    {
                        type:"maincategory",
                        value:"Vivo",
                        label:"Vivo",
                    },
                ]
            },
            {
                value:"mobile_accesories",
                label:"Accessories",
                type:"subcategory",
                children:[
                    {
                        value:"Battery",
                        label:"Battery",
                    },
                    {
                        value:"Charger",
                        label:"Charger",
                    },
                    {
                        value:"Cover & Cases",
                        label:"Cover & Cases",
                    },
                    {
                        value:"Data cables",
                        label:"Data cables",
                    },
                    {
                        value:"Gamepad & joystick",
                        label:"Gamepad & joystick",
                    },
                    {
                        value:"Headset & earphones",
                        label:"Headset & earphones",
                    },
                    {
                        value:"Memory Cards",
                        label:"Memory Cards",
                    },
                    {
                        value:"Mobile apps & games",
                        label:"Mobile apps & games",
                    },
                    {
                        value:"Mobile parts",
                        label:"Mobile parts",
                    },
                    {
                        value:"Mobile unlock",
                        label:"Mobile unlock",
                    },
                    {
                        value:"Other accesories",
                        label:"Other accesories",
                    }
                ]
            }
        ]
    },
    {
        value:"automobiles",
        label:"Automobiles",
        children:[
            {
                value:"cars",
                label:"Cars",
                children:[
                    {
                        value:"Chevrolet",
                        label:"Chevrolet",
                    },
                    {
                        value:"Daihatsu",
                        label:"Daihatsu",
                    },
                    {
                        value:"Datsun",
                        label:"Datsun",
                    },
                    {
                        value:"Eicher",
                        label:"Eicher",
                    },
                    {
                        value:"Fiat",
                        label:"Fiat",
                    },
                    {
                        value:"Ford",
                        label:"Ford",
                    },
                    {
                        value:"Geely",
                        label:"Geely",
                    },
                    {
                        value:"Honda_car",
                        label:"Honda",
                    },
                    {
                        value:"Hyundai",
                        label:"Hyundai",
                    },
                    {
                        value:"Kia",
                        label:"Kia",
                    },
                    {
                        value:"Land Rover",
                        label:"Land Rover",
                    }
                ]
            },
            {
                value:"bike",
                label:"Bike",
                children:[
                    {
                        value:"Aprilla",
                        label:"Aprilla",
                    },
                    {
                        value:"Bajaj",
                        label:"Bajaj",
                    },
                    {
                        value:"Benelli",
                        label:"Benelli",
                    },
                    {
                        value:"Cfmoto",
                        label:"Cfmoto",
                    },
                    {
                        value:"Cross X",
                        label:"Cross X",
                    },
                    {
                        value:"Crossfire",
                        label:"Crossfire",
                    },
                    {
                        value:"Harford",
                        label:"Harford",
                    },
                    {
                        value:"Hero",
                        label:"Hero",
                    },
                    {
                        value:"Honda_bike",
                        label:"Honda",
                    },
                    {
                        value:"Ktm",
                        label:"Ktm",
                    },

                ]
            },
            {
                value:"autoparts",
                label:"Parts and Accessories",
                children:[
                    {
                        value:"helmet",
                        label:"helmet",
                    },
                    {
                        value:"parts",
                        label:"parts",
                    },
                    {
                        value:"Riding gear",
                        label:"Riding gear",
                    },
                    {
                        value:"Tyre",
                        label:"Tyre",
                    },
                    {
                        value:"accesories_automobile",
                        label:"accesories",
                    }
                ]
            }
        ]
    }
]
export const location = [{
    value:'cities',
    label:"Location",
    children:[
        {
            value:"Kathmandu",
            label:"Kathmandu",
        },
        {
            value:"Pokhara",
            label:"Pokhara",
        },
        {
            value:"Jitpur",
            label:"Jitpur",
        },
        {
            value:"Birāṭnagar",
            label:"Birāṭnagar",
        },
        {
            value:"Birgunj",
            label:"Birgunj",
        },
        {
            value:"Butwal",
            label:"Butwal",
        },
        {
            value:"Dharan",
            label:"Dharan",
        },
        {
            value:"Dhangadi",
            label:"Dhangadi",
        },
        {
            value:"Janakpur",
            label:"Janakpur",
        },
        {
            value:"Hetauda",
            label:"Hetauda",
        },
        {
            value:"Bhaktapur",
            label:"Bhaktapur",
        },
        {
            value:"Itahari",
            label:"Itahari",
        },
        {
            value:"Nepalgunj",
            label:"Nepalgunj",
        },
        {
            value:"Kritipur",
            label:"Kritipur",
        },
        {
            value:"Bairahawa",
            label:"Bairahawa",
        },
        {
            value:"Tikapur",
            label:"Tikapur",
        },
        {
            value:"Gulariya",
            label:"Gulariya",
        },
        {
            value:"Tulsipur",
            label:"Tulsipur",
        },
        {
            value:"Birendranagar",
            label:"Birendranagar",
        },
        {
            value:"Hanumannagar",
            label:"Hanumannagar",
        },
        {
            value:"Palpa",
            label:"Palpa",
        },
        {
            value:"Siraha",
            label:"Siraha",
        },
        {
            value:"Panauti",
            label:"Panauti",
        },
        {
            value:"Bidur",
            label:"Bidur",
        },
        {
            value:"Godawari",
            label:"Godawari",
        },

    ]
}]