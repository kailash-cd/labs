/**
 * Created by kailash on 28/7/17.
 */
var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('myCtrl', function($scope,$timeout) {
    $scope.foo = 'This is from the controller!';
    $scope.AppJSON = {
        homeGallary: [
            {
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            },{
                "title":"Title",
                "name":"Name",
                "path":"images/members/face.gif"
            }
        ],
        homeBanners:[
            {
                "path":"images/banner/5.JPG",
                "title":"no title"
            },{
                "path":"images/banner/6.JPG",
                "title":"no title"
            }/*,{
                "path":"images/banner/7.JPG",
                "title":"no title"
            }*/,{
                "path":"images/banner/2.JPG",
                "title":"no title"
            },{
                "path":"images/banner/1.JPG",
                "title":"no title"
            },{
                "path":"images/banner/3.JPG",
                "title":"no title"
            },{
                "path":"images/banner/4.JPG",
                "title":"no title"
            },
        ],
        "booleans":{
            "homepage":{
                "enabled":true
            },
            "aboutpage":{
                "enabled":true
            },
            "membersdirectory":{
                "enabled":true
            },
        },
        "pagetoShow":0,
        "adminPages":0,
        "membersDirectory":[
            {
                "code":"A-1",
                "name": "Mr. Sayeed Nadeem Khurshid",
                "designation":"President",
                "sodowo":"son of daughter of wife of",
                "contact":"9410170326",
                "picPath":"images/members/president.jpg"
            },{
                "code":"A-1",
                "name": "Mr. Rakesh Kumar Joshi",
                "designation":"Senior Vice President",
                "sodowo":"son of daughter of wife of",
                "contact":"9412983063",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Sunil Upadhyay",
                "designation":"Vice President",
                "sodowo":"son of daughter of wife of",
                "contact":"9456779161",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mrs. Farida Siddiqui",
                "designation":"Vice President (Women Reserved)",
                "sodowo":"son of daughter of wife of",
                "contact":"9456779887",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Sandeep Tewari",
                "designation":"Secretary General",
                "sodowo":"son of daughter of wife of",
                "contact":"9719373192",
                "picPath":"images/members/secratry.jpg"
            },{
                "code":"A-1",
                "name": "Mr. Kaushal Sah Jagati",
                "designation":"Treasurer",
                "sodowo":"son of daughter of wife of",
                "contact":"9837859063",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. P.S. Bisht",
                "designation":"Joint Secretary (Admin)",
                "sodowo":"son of daughter of wife of",
                "contact":"9411167698",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Akshay Latwal",
                "designation":"Joint Secretary (Press)",
                "sodowo":"son of daughter of wife of",
                "contact":"9458182118",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Bhuvnesh Joshi ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9411167576 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Miss. Mamta Joshi ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412976587 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Ravi Joshi ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412035907",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Saurabh Kumar Pandey ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412086862",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Tarun Praskh Singh Takuli",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"94129952576 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Virendra Singh Rathor",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9720129323",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Miss. Lovely Grover",
                "designation":"Jounior Executive Members (Re. Wo.)",
                "sodowo":"son of daughter of wife of",
                "contact":"9756727644",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Akram Parvez ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9319691015 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Miss. Anchit Khokhar ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9690485559 ",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Manoj K Sharma ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"8439883941",
                "picPath":"images/members/face.gif"
            },{
                "code":"A-1",
                "name": "Mr. Prabhat ",
                "designation":"Senior Executive Members",
                "sodowo":"son of daughter of wife of",
                "contact":"9412086862 ",
                "picPath":"images/members/face.gif"
            }
        ],
        "sno": 1,
        "sittingJudges":[
            {
                "name":"Hon’ble Mr. Justice Sharad Kumar Sharma",
                "description":"Born on 1st January, 1962 at Allahabad, Uttar Pradesh. Justice Sharma attained his primary and secondary education from ‘Boys’ High School and Intermediate College, Allahabad and thereafter did his B.Com and LL.B from Allahabad University. He also holds Diploma in Material Management from Indian Institute of Engineering & Rural Technology, Allahabad. Enrolled as an Advocate on 29.02.1992 and started practice at Allahabad High Court on Civil, Constitutional, Service and Revenue Side matters from 1992 till 2000. His father Shri H.N. Sharma and brother Shri Anirudh Sharma are the Advocates and practicing at Allahabad High Court. His mother Smt. Sarla Sharma is housewife.After creation of State of Uttarakhand in the year 2000, he shifted to Nainital and started appearing and conducting different types of cases before the Hon’ble High Court of Uttarakhand at Nainital. In the year 2009, he was designated as Senior Advocate. Being Senior Panel Advocate, he appeared for High Court of Nainital, O.N.G.C., Dehradun, A.R.I.E.S, Nainital, Forest Corporation of Uttarakhand, Uttarakhand Transport Corporation etc. On 19.05.2017, he was elevated to the Bench and took charge as Addl. Judge, High Court of Uttarakhand. ",
                "picPath":"images/judges/Justice_alok_singh_26022013.jpg"
            },
            {
                "name":"Hon’ble Mr. Justice Manoj Kumar Tiwari",
                "description":"Born on 19th September, 1965 at Pithoragarh, Uttarakhand in the family of lawyers. His father, Shri N.B. Tiwari is a designated Senior Advocate and Maternal grandfather Shri Ram Datt Chilkoti was a leading lawyer in District Pithoragarh. Studied at Kendriya Vidyalaya, Pithoragarh upto 10th standard. Did Graduation & Post Graduation from Government Post Graduate College, Pithoragarh. Passed LL.B. from Delhi University in 1990. Enrolled with Bar Council of U.P. Allahabad in 1990 and started practice at Hon’ble High Court of Judicature at Allahabad. Upon creation of Hon’ble Uttarakhand High Court in the year 2000, shifted to Nainital and practiced before Hon’ble Uttarakhand High Court. On 20.05.2009, he was designated as Senior Advocate. Held the office of President, High Court Bar Association, Nainital in 2008. He appeared as special counsel on behalf of the State Government in various cases. He was elevated as permanent Judge, High Court of Uttarakhand on 19.05.2017. ",
                "picPath":"images/judges/Justice_Rajiv_Sharma1.jpg"
            },
            {
                "name":"Hon’ble Mr. Justice Lok Pal Singh",
                "description":"Born on 15th February, 1959 in Village Mohanpur-Mohammadpur, Tehsil Roorkee (then District Saharanpur) now District Haridwar, Uttarakhand, in a family of a farmer Late Shri Harpal Singh, mother Smt. Yashoda Devi was house-wife. Primary education from Cantonment Primary School, Roorkee Cantt. High School and Intermediate from BSM Intermediate College, Roorkee. Did Graduation and Law Degree from Meerut University, Meerut. Started practicing since 1988 at Civil Court, Roorkee in Civil and Revenue side initially. On creation of District Haridwar in 1989, shifted to District Court Haridwar and started practising in Civil, Revenue and Criminal matters.On creation of State of Uttarakhand immediately shifted to High Court of Uttarakhand and became founder member of the Bar Association. In the High Court, initially conducted Revenue, Civil and Criminal cases, and thereafter, conducted the matters relating to Constitution, Service, Company, Arbitration, Land Acquisition etc. Remained counsel for Pepsu Transport Corporation, Special Counsel on behalf of State of U.P. in some matters, Standing Counsel for Uttarakhand Power Corporation Ltd. as well as District Cooperative Banks of Uttarakhand and other private Banks. For a long period, empanelled in the pool of Advocates for the High Court.On 19th May, 2017 elevated as a permanent Judge of High Court of Uttarakhand and was assigned independent judicial work from the date of assuming the charge.",
                "picPath":"images/judges/LokpalSingh.jpg"
            },
            {
                "name":"Hon’ble Mr. Justice Umesh Chandra Dhyani",
                "description":"Joined Uttar Pradesh Judicial Service on 05.11.1979. Was posted as Law Secretary, Government of Uttarakhand and Legal Advisor to His Excellency, the Governor of  Uttarakhand. Has also worked as District Judge Udam Singh Nagar; District Judge Nainital; Director of State Judicial Academy (UJALA) and District Judge Dehradun. Appointed as Registrar General, High Court of Uttarakhand, Nainital vide notification dated 20.09.2010 and assumed charge of the office on 20.09.2010. Elevated as Judge of the Uttarakhand High Court On 13th September, 2011.",
                "picPath":"images/judges/Manoj_Kumar_Tiwari.jpg"
            },
            {
                "name":"Hon’ble Mr. Justice Servesh Kumar Gupta",
                "description":"was born on 1st January, 1956 at Khair, District Aligarh, Uttar Pradesh. His father was a school teacher. In the year 1976, he completed his LL.B. from Agra University. Subsequently, he did his LL.M. from Meerut University in 1979. He joined the Uttar Pradesh Judicial Services on 5th November, 1979 and served in various judicial positions in the State. Pursuant to the creation of the State of Uttarakhand, he opted for the same. Mr. Gupta served as the District Judge of Rudraprayag, Pauri Garhwal and Haridwar. His other prominent assignments included Chairman, Uttarakhand Tax Tribunal and Legal Adviser to H.E. the Governor of Uttarakhand. His wife is a home maker. His eldest son and daughter-in-law are Advocates and his other two sons are also studying law. In the forenoon of 21.04.2011, he was elevated as a Judge of the High Court of Uttarakhand at Nainital.",
                "picPath":"images/judges/sdhulia.jpg"
            },
            {
                "name":"Hon’ble Mr. Justice Alok Singh",
                "description":"Born on 28.04.1959 at Roorkee. Justice Singh attained his primary education in Roorkee and thereafter did his Graduation in science from M.S. College, Saharanpur. After which he pursued law and joined practice in 1982 in Civil / District Courts Roorkee, Hardwar. During this period he represented U.P. State electricity Board, U.P. Awas Vikas Parishad, Oriental Insurance Co. National Insurance Co., Nagar Palika Mangalore, Nagar Palika Roorkee beside other organizations and individuals.In April, 1993 shifted to New Delhi and started appearing before Supreme Court of India, High Court of Delhi, State and National Consumer commission, Delhi beside other courts and tribunals.Represented State of U.P. in different type of cases before Supreme Court of India being on the Senior Panel of Advocates of State of U.P.After creation of State of Uttarakhand started appearing and conducting different types of cases before the Hon’ble High Court of Uttarakhand at Nainital and has appeared for Central Government before Hon’ble High Court of Uttarakhand being Central Government Senior Panel Advocate and also appeared for Power Grid Corporation of India, Uttarakhand Power Corporation ltd., Uttarakhand Jal Vidyut Nigam Ltd. , Food Corporation of India, Uttarakhand Wakf Board, Board of control of Cricket in India. Etc.He was elevated to the High Court of Uttarakhand on 12.10.2009 as a Judge. On transfer, assumed office of Permanent Judge of Punjab & Hariyana High Court, Chandigarh on 21.12.2009 (F.N.). Took oath as the Judge of Jharkhand High Court, Ranchi on 13.06.2012. His Lordship was transferred to High Court of Uttarakhand and he assumed office of a Judge of High Court of Uttarakhand on 26/02/2013. ",
                "picPath":"images/judges/Servesh_K_Gupta.jpg"
            },
            {
                "name":"Hon'ble Mr. Justice Sudhanshu Dhulia (Hon'ble Judge In-Charge Education, Uttarakhand Judicial and Legal Academy)",
                "description":"was born on 10thAugust, 1960 in a small Cantonment Town of Lansdowne in Pauri Garhwal, Uttarakhand. He is the son of Late Sri K.C. Dhulia ( Judge, Allahabad High Court) and grandson of Pundit Bhairav Dutt Dhulia, freedom fighter and editor of Karambhumi newspaper which he established in the year 1938 and which played a key role in the freedom struggle in Garhwal Region. Mr. Dhulia is the second of the three sons of Late Sri K.C. Dhulia. He started his practice before the Allahabad High Court in the year 1986.Sri Dhulia was a retainer for Indian Institute of Technology (I.I.T.), Roorkee, State Industrial Development Corporation of Uttarakhand Ltd. (SIDCUL), Bhagirathi River Valley Authority, amongst others. He was also an Honorary professor in the Uttarakhand Academy of Administration (ATI) Nainital. On the creation of the new State of Uttarakhand, Sri Dhulia became its First Chief Standing Counsel. He was later appointed as the Additional Advocate General. In the year 2004, he was designated as a Senior Advocate by the Uttarakhand High Court. On 01.11.2008, he was elevated to the Bench and took charge as Judge, High Court of Uttarakhand.",
                "picPath":"images/judges/sharad_kumar_sharma.jpg"
            },
            {
                "name":"Hon'ble Mr. Justice Rajiv Sharma, Judge",
                "description":"Born on 8.10.1958. Obtained LL.B. Degree from Himachal Pradesh University. Enrolled as Advocate in the year 1982. Designated Senior Advocate in the year 2002. Primarily practiced in the High Court of Himachal Pradesh in Constitutional Law, Administrative Law, Employment Cases and Environmental Law. Visited U.S.A., China, Egypt, Sri Lanka, Myanmar, Thailand, Vietnam, Dubai, New Zealand, U.K., Italy, Switzerland, Belgium, Germany, France, Denmark, Sweden, Norway, Finland and Russia. Appointed Additional Judge, High Court of Himachal Pradesh on 3rd April, 2007 and confirmed as permanent Judge on 31st March 2013. Transferred to High Court of Uttarakhand and assumed office of a Judge of High Court of Uttarakhand on 26/09/2016.",
                "picPath":"images/judges/u.c.dhyani.jpg"
            },
            {
                "name":"Hon'ble Mr. Justice V.K. Bist",
                "description":"Born on 17th September 1957 at Lansdown, District Pauri Garhwal, Uttarakhand. Early education from Intermediate College Kanskhet, Pauri Garhwal. Completed Law Degreee from Allahabad University. Enrolled as an Advocate with the Bar Council of Uttar Pradesh in 1984 and started practicing in various segments of litigations and till first week of November 2000 continued practicing at Allahabad High Court. Initially worked under the guidance of Shri S.P. Gupta, Senior Advocate. During the period at Allahabad remained Legal Advisor and Standing Counsel/ Panel Advocate of various esteemed institutions i.e. Allahabad University, U.P. Higher Secondary Education, Northern/North Eastern Railway, U.P. Land Development Corporation, U.P. Co-operative Housing Federation, Ghaziabad Development Authority etc. After creation of Uttarakhand High Court His Lordship shifted to Nainital and practiced at Uttarakhand High Court. At the Uttarakhand High Court, His Lordship was Standing Counsel of Northern and North Eastern Railway, Uttarakhand Forest Development Corporation, Uttarakhand School Education Board and Uttarakhand Co-operative Federation. Also worked as Senior Panel Counsel, Uattarakhand High Court. On 1st July 2004 His Lordship was designated as Senior Advocate. On November 1, 2008 was elevated as Judge of the Uttarakhand High Court.",
                "picPath":"images/judges/vkbist.jpg"
            }
        ],
        "officeBearers":[
            {
                "name":"B.S Jakhar",
                "contactPhone":"9811178353",
                "chNum":"5531",
                "position":"President1",
                "dp":"https://s-media-cache-ak0.pinimg.com/originals/6e/b3/a2/6eb3a2db6d4db37d87888bbaa4b90f8c.jpg"
            },
            {
                "name":"B.S Jakhar1",
                "contactPhone":"9811178352",
                "chNum":"5532",
                "position":"President2",
                "dp":"https://s-media-cache-ak0.pinimg.com/originals/6e/b3/a2/6eb3a2db6d4db37d87888bbaa4b90f8c.jpg"
            },
            {
                "name":"B.S Jakhar2",
                "contactPhone":"9811178354",
                "chNum":"55322",
                "position":"President3",
                "dp":"https://s-media-cache-ak0.pinimg.com/originals/6e/b3/a2/6eb3a2db6d4db37d87888bbaa4b90f8c.jpg"
            },
            {
                "name":"B.S Jakhar3",
                "contactPhone":"9811178356",
                "chNum":"55333",
                "position":"President4",
                "dp":"https://s-media-cache-ak0.pinimg.com/originals/6e/b3/a2/6eb3a2db6d4db37d87888bbaa4b90f8c.jpg"
            }
        ],
        "importentLinks":[
            {
                "displayLink":"ALL INDIA JUDICIAL SERVICE",
                "redirectLink":"http://www.delhidistrictcourts.nic.in/Links.htm"
            },
            {
                "displayLink":" Board for Industrial and Financial Reconstruction (BIFR)",
                "redirectLink":"http://bifr.nic.in/"
            },
            {
                "displayLink":"Central Bureau of Investigation",
                "redirectLink":"http://www.cbi.gov.in/index.php"
            },
            {
                "displayLink":"Central Pollution Control Board, Delhi",
                "redirectLink":"http://www.rcbadelhi.com/importantlinks.html#"
            },
            {
                "displayLink":"Central Vigilance Commission",
                "redirectLink":"http://cvc.nic.in/welcome_cvc.html"
            },
            {
                "displayLink":"Delhi Development Authority (DDA)",
                "redirectLink":"http://www.ddadelhi.com/"
            },
            {
                "displayLink":"Delhi Government",
                "redirectLink":"http://www.delhi.gov.in/wps/wcm/connect/Lib_CentralJail/central+jail/home"
            },
            {
                "displayLink":"Delhi Metro Rail Corporation Limited (DMRC)",
                "redirectLink":"http://www.delhimetrorail.com/"
            },
            {
                "displayLink":"Delhi Minorities Commission",
                "redirectLink":"http://www.delhi.gov.in/wps/wcm/connect/doit_dmc/DMC/Home/"
            },
            {
                "displayLink":"Department of Police - Delhi",
                "redirectLink":"http://www.rcbadelhi.com/Department%20of%20Police%20-%20Delhi"
            },

            {
                "displayLink":"Delhi Urban Art Commission (DUAC)",
                "redirectLink":"http://www.duac.org/"
            },
            {
                "displayLink":"Directorate of Estates",
                "redirectLink":"http://estates.nic.in/estates.aspx"
            },
            {
                "displayLink":" Federal Magistrates Service (Australia)",
                "redirectLink":"http://www.fmc.gov.au/"
            },
            {
                "displayLink":"House of Lords – Latest Judgements",
                "redirectLink":"http://www.parliament.uk/Util/login.aspx?ReturnUrl=/Templates/ErrorPages/404.aspx?404;http://turkey.lbi.co.uk:80/judicial_work/judicial_work.cfm"
            },
            {
                "displayLink":"India Internet Law Library",
                "redirectLink":"http://www.priweb.com/internetlawlib/66.htm"
            },
            {
                "displayLink":" India Image – A gateway for Government Sites",
                "redirectLink":"http://indiaimage.nic.in/"
            },
            {
                "displayLink":"International Criminal Court",
                "redirectLink":"http://www.icc-cpi.int/Menus/ICC/Home"
            },
            {
                "displayLink":"Judicial Academy",
                "redirectLink":"http://www.judicialacademy.nic.in/"
            },
            {
                "displayLink":"Land and Development Office",
                "redirectLink":"http://www.ldo.nic.in/"
            },
            {
                "displayLink":"Law Commission of India",
                "redirectLink":"http://lawcommissionofindia.nic.in/"
            },
            {
                "displayLink":"Ministry of Law & Justice",
                "redirectLink":"http://lawmin.nic.in/"
            },
            {
                "displayLink":"National Crime Records Bureau (NCRB)",
                "redirectLink":"http://ncrbindia.org/"
            },
            {
                "displayLink":"National Law School of India",
                "redirectLink":"http://www.nls.ac.in/"
            },
            {
                "displayLink":"Other High Courts in India",
                "redirectLink":"http://www.indiancourts.nic.in/"
            },
            {
                "displayLink":" Patent & Know-how Information Division",
                "redirectLink":"http://pk2id.delhi.nic.in/"
            },
            {
                "displayLink":" Press Council of India (PCI)",
                "redirectLink":"http://presscouncil.nic.in/"
            },
            {
                "displayLink":"http://app.subcourts.gov.sg/subcourts/index.aspx",
                "redirectLink":" Subordinate Courts of Singapore"
            },
            {
                "displayLink":" Supreme Court of India",
                "redirectLink":"http://www.supremecourtofindia.nic.in/"
            },
            {
                "displayLink":" Supreme Court of Canada",
                "redirectLink":"http://www.scc-csc.gc.ca/"
            },
            {
                "displayLink":" Supreme Court of the United States",
                "redirectLink":"http://www.supremecourt.gov/"
            },
            {
                "displayLink":" Tihar Prisons",
                "redirectLink":"http://www.rcbadelhi.com/importantlinks.html#"
            },
            {
                "displayLink":"http://www.biotechpatents.org/",
                "redirectLink":" Value Added Patent Information System"
            },
            {
                "displayLink":"World Wide Fund (WWF) India",
                "redirectLink":"http://www.wwfindia.org/"
            }
        ]
    }

    $scope.openNavbar = function(navbarId) {
        document.getElementById(navbarId).style.display = "block";
        acc[0].click();
    }
    $scope.closeNavbar = function(navbarId) {
        document.getElementById(navbarId).style.display = "none";
    }
    $scope.pageChangeHandler = function(num) {
        $scope.AppJSON.sno = num;
    };
    var acc = document.getElementsByClassName("accordion");
    var panels = document.getElementsByClassName("panel");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            resetAll();
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.display = "block"
            }
        }
    }
    function resetAll(){
        for (i = 0; i < panels.length; i++) {
            if (panels[i].style.maxHeight){
                panels[i].style.maxHeight = null;
            }

        }
    }
    $scope.navigationControl = function (page) {
        console.log("navigate to ",page);
        switch (page){
            case "home":
                $scope.AppJSON.pagetoShow = 0;
                break;
            case "about":
                $scope.AppJSON.pagetoShow = 1;
                break;
            case "members_directory":
                $scope.AppJSON.pagetoShow = 2;
                break;
            case "aimAndObjectives":
                $scope.AppJSON.pagetoShow = 3;
                break;
            case "judge":
                $scope.AppJSON.pagetoShow = 4;
                break;
            case "sitting_judges":
                $scope.AppJSON.pagetoShow = 5;
                break;
            case "registrar_gernal":
                $scope.AppJSON.pagetoShow = 6;
                break;
            case "mission_vision":
                $scope.AppJSON.pagetoShow = 7;
                break;
            case "president_message":
                $scope.AppJSON.pagetoShow = 8;
                break;
            case "secretary_message":
                $scope.AppJSON.pagetoShow = 9;
                break;
            case "photo_gallery":
                $scope.AppJSON.pagetoShow = 10;
                break;
            case "video_gallery":
                $scope.AppJSON.pagetoShow = 11;
                break;
            case "notice_information":
                $scope.AppJSON.pagetoShow = 12;
                break;
            case "important_links":
                $scope.AppJSON.pagetoShow = 13;
                break;
            case "contact_us":
                $scope.AppJSON.pagetoShow = 14;
                $timeout(function () {
                    $scope.myMap();
                },2000);
                break;
            case "news":
                $scope.AppJSON.pagetoShow = 15;
                break;
        }
        $scope.closeNavbar();
    }

    $scope.myMap =  function ()  {
        console.log("map")
        var myCenter = new google.maps.LatLng(29.3957586,79.44771);
        var mapProp = {center:myCenter, zoom:17, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
        $scope.map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap($scope.map);
    }
  /*$timeout(function () {
          google.maps.event.trigger($scope.map, "resize");
  },2000);*/

});


