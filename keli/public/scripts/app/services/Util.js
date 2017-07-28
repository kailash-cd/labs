/**
 * Created by kailash on 27/10/16.
 */
define(['angular'], function(angular) {
    'use strict';
    var Util = angular.module('Util', []);
    Util.service('Util', ['$http', '$log','localStorageService','$location',
        function ($http, $log,localStorageService,$location) {
            var poiObj ={};
            return {
                isVoid: function(obj){
                    switch(typeof(obj)){

                        case "undefined":
                        case "object":
                            for(var x in obj){
                                if(obj.hasOwnProperty(x))
                                    return false;
                                else
                                    return true;
                            }
                            return true;
                        case "number":
                        case "boolean":
                            return false;
                            break;
                        case "string":
                            if(obj == "")
                                return true;
                            else
                                return false;
                        default:
                            return false;
                    }
                },
                isEmailValid: function (email) {


                    if(this.isVoid(email)){
                        return false;
                    }else{
                        var atpos = email.indexOf("@");
                        var dotpos = email.lastIndexOf(".");
                        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                            return false;
                        } else {
                            return true;
                        }
                    }


                },
                isPhoneValid: function (phone) {
                    // $log.debug("phn is bfr string",phone)

                    var phnString=phone+""
                    var res = phnString.substring(0, 1);
                    // $log.debug("the first char is ",res)
                    if(res==="0"){
                        phnString= phnString.substring(1, phnString.length);
                    }else {
                        phnString=phnString;
                    }
                    // $log.debug("phn is ",phnString)
                    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3,5})$/;
                    if(this.isVoid(phnString)){
                        return false;
                    }else {
                        if ((phnString.match(phoneno))) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                getCountryCode: function(){
                    var isoCodes = {"Afghanistan":"AF","Aland Islands":"AX","Albania":"AL","Algeria":"DZ",
                        "American Samoa":"AS","Andorra":"AD","Angola":"AO","Anguilla":"AI","Antarctica":"AQ",
                        "Antigua And Barbuda":"AG","Argentina":"AR","Armenia":"AM","Aruba":"AW","Australia":"AU",
                        "Austria":"AT","Azerbaijan":"AZ","Bahamas":"BS","Bahrain":"BH","Bangladesh":"BD",
                        "Barbados":"BB","Belarus":"BY","Belgium":"BE","Belize":"BZ","Benin":"BJ",
                        "Bermuda":"BM","Bhutan":"BT","Bolivia":"BO","Bosnia And Herzegovina":"BA","Botswana":"BW",
                        "Bouvet Island":"BV","Brazil":"BR","British Indian Ocean Territory":"IO",
                        "Brunei Darussalam":"BN","Bulgaria":"BG","Burkina Faso":"BF","Burundi":"BI","Cambodia":"KH",
                        "Cameroon":"CM","Canada":"CA","Cape Verde":"CV","Cayman Islands":"KY",
                        "Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Christmas Island":"CX",
                        "Cocos (Keeling) Islands":"CC","Colombia":"CO","Comoros":"KM","Congo":"CG",
                        "Congo, Democratic Republic":"CD","Cook Islands":"CK","Costa Rica":"CR","Cote D'Ivoire":"CI",
                        "Croatia":"HR","Cuba":"CU","Cyprus":"CY","Czech Republic":"CZ","Denmark":"DK","Djibouti":"DJ",
                        "Dominica":"DM","Dominican Republic":"DO","Ecuador":"EC","Egypt":"EG","El Salvador":"SV",
                        "Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE","Ethiopia":"ET",
                        "Falkland Islands (Malvinas)":"FK","Faroe Islands":"FO","Fiji":"FJ","Finland":"FI",
                        "France":"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF",
                        "Gabon":"GA","Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Gibraltar":"GI",
                        "Greece":"GR","Greenland":"GL","Grenada":"GD","Guadeloupe":"GP","Guam":"GU","Guatemala":"GT",
                        "Guernsey":"GG","Guinea":"GN","Guinea-Bissau":"GW","Guyana":"GY","Haiti":"HT",
                        "Heard Island & Mcdonald Islands":"HM","Holy See (Vatican City State)":"VA",
                        "Honduras":"HN","Hong Kong":"HK","Hungary":"HU","Iceland":"IS","India":"IN",
                        "Indonesia":"ID","Iran, Islamic Republic Of":"IR","Iraq":"IQ","Ireland":"IE",
                        "Isle Of Man":"IM","Israel":"IL","Italy":"IT","Jamaica":"JM","Japan":"JP",
                        "Jersey":"JE","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE","Kiribati":"KI",
                        "Korea":"KR","Kuwait":"KW","Kyrgyzstan":"KG","Lao People's Democratic Republic":"LA",
                        "Latvia":"LV","Lebanon":"LB","Lesotho":"LS","Liberia":"LR","Libyan Arab Jamahiriya":"LY",
                        "Liechtenstein":"LI","Lithuania":"LT","Luxembourg":"LU","Macao":"MO","Macedonia":"MK",
                        "Madagascar":"MG","Malawi":"MW","Malaysia":"MY","Maldives":"MV","Mali":"ML","Malta":"MT",
                        "Marshall Islands":"MH","Martinique":"MQ","Mauritania":"MR","Mauritius":"MU","Mayotte":"YT",
                        "Mexico":"MX","Micronesia, Federated States Of":"FM","Moldova":"MD","Monaco":"MC",
                        "Mongolia":"MN","Montenegro":"ME","Montserrat":"MS","Morocco":"MA","Mozambique":"MZ",
                        "Myanmar":"MM","Namibia":"NA","Nauru":"NR","Nepal":"NP","Netherlands":"NL",
                        "Netherlands Antilles":"AN","New Caledonia":"NC","New Zealand":"NZ",
                        "Nicaragua":"NI","Niger":"NE","Nigeria":"NG","Niue":"NU","Norfolk Island":"NF",
                        "Northern Mariana Islands":"MP","Norway":"NO","Oman":"OM","Pakistan":"PK",
                        "Palau":"PW","Palestinian Territory, Occupied":"PS","Panama":"PA","Papua New Guinea":"PG",
                        "Paraguay":"PY","Peru":"PE","Philippines":"PH","Pitcairn":"PN","Poland":"PL",
                        "Portugal":"PT","Puerto Rico":"PR","Qatar":"QA","Reunion":"RE","Romania":"RO",
                        "Russian Federation":"RU","Rwanda":"RW","Saint Barthelemy":"BL","Saint Helena":"SH",
                        "Saint Kitts And Nevis":"KN","Saint Lucia":"LC","Saint Martin":"MF",
                        "Saint Pierre And Miquelon":"PM","Saint Vincent And Grenadines":"VC","Samoa":"WS",
                        "San Marino":"SM","Sao Tome And Principe":"ST","Saudi Arabia":"SA","Senegal":"SN",
                        "Serbia":"RS","Seychelles":"SC","Sierra Leone":"SL","Singapore":"SG","Slovakia":"SK",
                        "Slovenia":"SI","Solomon Islands":"SB","Somalia":"SO","South Africa":"ZA",
                        "South Georgia And Sandwich Isl.":"GS","Spain":"ES","Sri Lanka":"LK","Sudan":"SD",
                        "Suriname":"SR","Svalbard And Jan Mayen":"SJ","Swaziland":"SZ","Sweden":"SE","Switzerland":"CH",
                        "Syrian Arab Republic":"SY","Taiwan":"TW","Tajikistan":"TJ","Tanzania":"TZ","Thailand":"TH",
                        "Timor-Leste":"TL","Togo":"TG","Tokelau":"TK","Tonga":"TO","Trinidad And Tobago":"TT",
                        "Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Turks And Caicos Islands":"TC",
                        "Tuvalu":"TV","Uganda":"UG","Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB",
                        "United States":"US","United States Outlying Islands":"UM","Uruguay":"UY","Uzbekistan":"UZ",
                        "Vanuatu":"VU","Venezuela":"VE","Viet Nam":"VN","Virgin Islands, British":"VG",
                        "Virgin Islands, U.S.":"VI","Wallis And Futuna":"WF","Western Sahara":"EH","Yemen":"YE",
                        "Zambia":"ZM","Zimbabwe":"ZW"};
                        return isoCodes;
                    },
                validateUrl: function (url)
                {

                    //    var regexp =  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                    //var regexp = new RegExp("^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$");
                    //var regexp =  /^(ftp|http|https):\/\/[^ "]+$/;
                    var regexp =  /^((?:http|ftp)s?:\/\/)(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[\/?]\S+)$/i;

                    // var regexp =  /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
                    // $log.info("url to validate is :",url);
                    if(!regexp.test(url))
                    {
                        // $log.debug("A invalid URL");

                        return true;
                    }
                    else {
                        // $log.debug("A valid URL");
                        return false;
                    }

                },
                clearLocalStorage: function () {
                    localStorageService.clearAll();
                },
                goTologin: function () {
                    localStorageService.clearAll();
                    $location.path("/login");
                },
                setPoiObj:function (poi) {
                    poiObj = poi
                },
                getPoiObj:function (){
                    return poiObj
                }
            }
        }])
    return Util;
});
