var locations = [
	{
		id: 1,
		building: "Darrin Communications Center",
		point: { lat: 42.7293, long: -73.6798 },
		address: "Darrin Communications Center, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/1.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 2,
		building: "",
		point: { lat: 42.730406, long: -73.681211 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/2.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 3,
		building: "Russell Sage Laboratory",
		point: { lat: 0.0, long: 0.0 }, // needs to be finished
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/3.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 4,
		building: "Quadrangle Complex",
		point: { lat: 42.730501, long: -73.678056 },
		address: "Quad, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/4.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 5,
		building: "",
		point: { lat: 42.729932, long: -73.680786 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/5.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 6,
		building: "Ricketts Building",
		point: { lat: 42.730731, long: -73.679784 },
		address: "Ricketts Building, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/6.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 7,
		building: "",
		point: { lat: 42.730129, long: -73.677750 },
		address: "Quad, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/7.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 8,
		building: "Russell Sage Laboratory",
		point: { lat: 42.730696, long: -73.681698 },
		address: "Russell Sage Laboratory, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/8.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 9,
		building: "",
		point: { lat: 42.729643, long: -73.678917 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/9.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 10,
		building: "Walker Laboratory",
		point: { lat: 42.730609, long: -73.682814 },
		address: "Walker Laboratory, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/10.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 11,
		building: "",
		point: { lat: 42.731020, long: -73.682303 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/11.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 12,
		building: "",
		point: { lat: 42.730472, long: -73.682599 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/12.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 13,
		building: "",
		point: { lat: 42.729492, long: -73.678365 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/13.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 14,
		building: "",
		point: { lat: 42.728609, long: -73.679085 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/14.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 15,
		building: "",
		point: { lat: 42.730493, long: -73.678538 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/15.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 16,
		building: "",
		point: { lat: 42.7308, long: -73.6817 }, // is this accurate?
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/16.jpg",
		outdoor: false,
		date: new Date("2017-11-04")
	},
	{
		id: 17,
		building: "",
		point: { lat: 42.730730, long: -73.680318 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/17.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 18,
		building: "",
		point: { lat: 42.729864, long: -73.680884 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/18.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 19,
		building: "Carnegie Building",
		point: { lat: 42.730580, long: -73.682871 },
		address: "Carnegie Building, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/19.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 20,
		building: "",
		point: { lat: 42.730782, long: -73.682255 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/20.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 21,
		building: "West Hall",
		point: { lat: 42.731483, long: -73.682683 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/21.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 22,
		building: "Darrin Communications Center",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/22.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 23,
		building: "",
		point: { lat: 42.729805, long: -73.681397 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/23.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 24,
		building: "",
		point: { lat: 42.730629, long: -73.681115 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/24.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 25,
		building: "",
		point: { lat: 42.731271, long: -73.682464 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/25.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 26,
		building: "Jonsson-Rowland Science Center",
		point: { lat: 42.728879, long: -73.680108 },
		address: "Jonsson-Rowland Science Center, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/26.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 27,
		building: "Amos Eaton Hall",
		point: { lat: 42.730148, long: -73.682194 },
		address: "Amos Eaton Hall, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/27.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 28,
		building: "",
		point: { lat: 42.729705, long: -73.679747 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/28.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 29,
		building: "",
		point: { lat: 42.728594, long: -73.678926 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/29.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 30,
		building: "",
		point: { lat: 42.729873, long: -73.682694 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/30.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 31,
		building: "Greene Building",
		point: { lat: 42.730152, long: -73.681179 },
		address: "Greene Bldg, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/31.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 32,
		building: "President's Parking Place",
		point: { lat: 42.730936, long: -73.680886 },
		address: "Troy Building, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/32.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 33,
		building: "Troy Building",
		point: { lat: 42.730852, long: -73.680558 },
		address: "Troy Building, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/33.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 34,
		building: "",
		point: { lat: 42.729650, long: -73.678936 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/34.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 35,
		building: "",
		point: { lat: 42.730674, long: -73.683443 },
		address: "Carnegie Building, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/35.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 36,
		building: "",
		point: { lat: 42.730728, long: -73.682168 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/36.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 37,
		building: "Rensselaer Lally School of Management",
		point: { lat: 42.730194, long: -73.681866 },
		address: "Rensselaer Lally School of Management, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/37.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 38,
		building: "",
		point: { lat: 42.730219, long: -73.678155 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/38.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 39,
		building: "",
		point: { lat: 42.730188, long: -73.681559 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/39.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 40,
		building: "",
		point: { lat: 42.729959, long: -73.682207 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/40.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 41,
		building: "",
		point: { lat: 42.730186, long: -73.682851 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/41.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 42,
		building: "",
		point: { lat: 42.728625, long: -73.679544 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/42.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 43,
		building: "",
		point: { lat: 42.730097, long: -73.677508 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/43.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 44,
		building: "",
		point: { lat: 42.729962, long: -73.682230 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/44.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 45,
		building: "",
		point: { lat: 42.728887, long: -73.678129 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/45.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 46,
		building: "'87 Gymnasium",
		point: { lat: 42.730550, long: -73.679018 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/46.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 47,
		building: "",
		point: { lat: 42.729581, long: -73.679540 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/47.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 48,
		building: "RPI Playhouse",
		point: { lat: 42.729162, long: -73.677935 },
		address: "RPI Playhouse, Troy, NY 12180",
		url: "hhttps://cardboard.cs.rpi.edu/2017_11_04/48.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 49,
		building: "",
		point: { lat: 42.730607, long: -73.679365 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/49.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 50,
		building: "",
		point: { lat: 0.0, long: 0.0 }, // I need to figure this out
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/50.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 51,
		building: "",
		point: { lat: 42.729745, long: -73.678535 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/51.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 52,
		building: "",
		point: { lat: 42.729758, long: -73.678800 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/52.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 53,
		building: "",
		point: { lat: 42.729092, long: -73.680047 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/53.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 54,
		building: "",
		point: { lat: 42.730140, long: -73.677801 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/54.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 55,
		building: "",
		point: { lat: 42.730573, long: -73.680634 },
		address: "15t St, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/55.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 56,
		building: "Pittsburgh Building",
		point: { lat: 42.730949, long: -73.683374 },
		address: "Pittsburgh Bldg, Troy, NY 12180",
		url: "https://cardboard.cs.rpi.edu/2017_11_04/56.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-11-04")
	},
	{
		id: 57,
		building: "East Campus Athletic Village",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVArena2ndOutFront.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 58,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVArenaIn1.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 59,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVArenaIn2.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 60,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVArenaIn4.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 61,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVFootballCourt.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 62,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVOverview1.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 63,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/ECAVPlaygroundSouthEastCorner.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 64,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/HockeyCourtDownstairs2.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 65,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/HockeyCourtUpstairs1.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 66,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/MullerCenterGym.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 67,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/PavilionNearHallHall.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 68,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/PavilionNearHallHall.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 69,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/StairsFromCommonsToUnion.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 70,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/StudentUnion1st.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 71,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/StudentUnion2ndHallFamilyWeekend.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 72,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/StudentUnion3rdBalcony.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 73,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/StudentUnionFrontDesk.jpg",
		outdoor: false,
		direction: 0,
		date: new Date("2017-10-28")
	},
	{
		id: 74,
		building: "",
		point: { lat: 0.0, long: 0.0 },
		address: "",
		url: "https://cardboard.cs.rpi.edu/2017_10_28/StudentUnionFrontDoor.jpg",
		outdoor: true,
		direction: 0,
		date: new Date("2017-10-28")
	},
	// {
	// 	id: 57,
	// 	building: "",
	// 	point: { lat: 42.7316, long: -73.6819 },
	// 	address: "15t St, Troy, NY 12180",
	// 	url: "http://localhost:3000/data/pics/57.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 58,
	// 	building: "",
	// 	point: { lat: 42.7321, long: -73.6658 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/58.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 59,
	// 	building: "",
	// 	point: { lat: 42.7324, long: -73.6653 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/59.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 60,
	// 	building: "",
	// 	point: { lat: 42.7326, long: -73.6651 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/60.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 61,
	// 	building: "",
	// 	point: { lat: 42.7327, long: -73.6652 },
	// 	address: "RPI Terminal, Troy, NY 12180",
	// 	url: "http://localhost:3000/data/pics/61.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 62,
	// 	building: "",
	// 	point: { lat: 42.7328, long: -73.6649 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/62.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 63,
	// 	building: "",
	// 	point: { lat: 42.733, long: -73.6648 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/63.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 64,
	// 	building: "",
	// 	point: { lat: 42.7332, long: -73.6662 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/64.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 65,
	// 	building: "",
	// 	point: { lat: 42.7336, long: -73.6665 },
	// 	address: "Stadium Field, Troy, NY 12180",
	// 	url: "http://localhost:3000/data/pics/65.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 66,
	// 	building: "ECAV",
	// 	point: { lat: 42.7337, long: -73.6672 },
	// 	address: "Stadium Field, Troy, NY 12180",
	// 	url: "http://localhost:3000/data/pics/66.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 67,
	// 	building: "",
	// 	point: { lat: 42.7352, long: -73.6673 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/67.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 68,
	// 	building: "",
	// 	point: { lat: 42.7346, long: -73.6676 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/68.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 69,
	// 	building: "",
	// 	point: { lat: 42.7339, long: -73.6677 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/69.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 70,
	// 	building: "",
	// 	point: { lat: 42.7298, long: -73.6808 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_112612_0.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 71,
	// 	building: "Jonsson Engineering Center",
	// 	point: { lat: 42.7297, long: -73.6802 },
	// 	address: "Jonsson Engineering Center, Troy, NY 12180",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_112838_1.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 72,
	// 	building: "",
	// 	point: { lat: 42.7297, long: -73.6793 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_113209_2.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 73,
	// 	building: "",
	// 	point: { lat: 42.7294, long: -73.6779 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_113447_3.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 74,
	// 	building: "Mueller Center",
	// 	point: { lat: 42.7290, long: -73.6770 },
	// 	address: "Mueller Center, Troy, NY 12180",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_113715_5.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 75,
	// 	building: "",
	// 	point: { lat: 42.7293, long: -73.6768 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_113857_6.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 76,
	// 	building: "",
	// 	point: { lat: 42.7290, long: -73.6758 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_114107_7.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// },
	// {
	// 	id: 77,
	// 	building: "",
	// 	point: { lat: 42.7284, long: -73.6748 },
	// 	address: "",
	// 	url: "http://localhost:3000/data/pics/PANO_20180402_114247_8.jpg",
	// 	outdoor: true,
	// 	direction: 0
	// }
];


// test
var mongoose = require('mongoose');
var Location = require('../models/location');

Location.collection.drop();

Location.insertMany(locations, function(err, docs) {
	if (err) {
		console.log('insertMany error')
	} else {
		console.log(docs.length + ' locations successfully stored')
	}
});