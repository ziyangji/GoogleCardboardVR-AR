var locations = [
	{
		id: 1,
		building: "Darrin Communications Center",
		point: { lat: 42.7293, long: -73.6798 },
		address: "Darrin Communications Center, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/1.jpg",
		outdoor: true
	},
	{
		id: 2,
		building: "",
		point: { lat: 42.730406, long: -73.681211 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/2.jpg",
		outdoor: true
	},
	{
		id: 4,
		building: "Quadrangle Complex",
		point: { lat: 42.730501, long: -73.678056 },
		address: "Quad, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/4.jpg",
		outdoor: true
	},
	{
		id: 5,
		building: "",
		point: { lat: 42.729932, long: -73.680786 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/5.jpg",
		outdoor: true
	},
	{
		id: 6,
		building: "Ricketts Building",
		point: { lat: 42.730731, long: -73.679784 },
		address: "Ricketts Building, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/6.jpg",
		outdoor: true
	},
	{
		id: 7,
		building: "",
		point: { lat: 42.730129, long: -73.677750 },
		address: "Quad, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/7.jpg",
		outdoor: true
	},
	{
		id: 8,
		building: "Russell Sage Laboratory",
		point: { lat: 42.730696, long: -73.681698 },
		address: "Russell Sage Laboratory, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/8.jpg",
		outdoor: true
	},
	{
		id: 9,
		building: "",
		point: { lat: 42.729643, long: -73.678917 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/9.jpg",
		outdoor: true
	},
	{
		id: 10,
		building: "Walker Laboratory",
		point: { lat: 42.730609, long: -73.682814 },
		address: "Walker Laboratory, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/10.jpg",
		outdoor: true
	},
	{
		id: 11,
		building: "",
		point: { lat: 42.731020, long: -73.682303 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/11.jpg",
		outdoor: true
	},
	{
		id: 12,
		building: "",
		point: { lat: 42.730472, long: -73.682599 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/12.jpg",
		outdoor: true
	},
	{
		id: 13,
		building: "",
		point: { lat: 42.729492, long: -73.678365 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/13.jpg",
		outdoor: true
	},
	{
		id: 14,
		building: "",
		point: { lat: 42.728609, long: -73.679085 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/14.jpg",
		outdoor: true
	},
	{
		id: 15,
		building: "",
		point: { lat: 42.730493, long: -73.678538 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/15.jpg",
		outdoor: true
	},
	{
		id: 16,
		building: "",
		point: { lat: 42.7308, long: -73.6817 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/16.jpg",
		outdoor: false
	},
	{
		id: 17,
		building: "",
		point: { lat: 42.730730, long: -73.680318 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/17.jpg",
		outdoor: true
	},
	{
		id: 18,
		building: "",
		point: { lat: 42.729864, long: -73.680884 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/18.jpg",
		outdoor: true
	},
	{
		id: 19,
		building: "Carnegie Building",
		point: { lat: 42.730580, long: -73.682871 },
		address: "Carnegie Building, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/19.jpg",
		outdoor: true
	},
	{
		id: 20,
		building: "",
		point: { lat: 42.730782, long: -73.682255 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/20.jpg",
		outdoor: true
	},
	{
		id: 21,
		building: "",
		point: { lat: 42.731483, long: -73.682683 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/21.jpg",
		outdoor: true
	},
	{
		id: 23,
		building: "",
		point: { lat: 42.729805, long: -73.681397 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/23.jpg",
		outdoor: true
	},
	{
		id: 24,
		building: "",
		point: { lat: 42.730629, long: -73.681115 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/24.jpg",
		outdoor: true
	},
	{
		id: 25,
		building: "",
		point: { lat: 42.731271, long: -73.682464 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/25.jpg",
		outdoor: true
	},
	{
		id: 26,
		building: "Jonsson-Rowland Science Center",
		point: { lat: 42.728879, long: -73.680108 },
		address: "Jonsson-Rowland Science Center, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/26.jpg",
		outdoor: true
	},
	{
		id: 27,
		building: "Amos Eaton Hall",
		point: { lat: 42.730148, long: -73.682194 },
		address: "Amos Eaton Hall, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/27.jpg",
		outdoor: true
	},
	{
		id: 28,
		building: "",
		point: { lat: 42.729705, long: -73.679747 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/28.jpg",
		outdoor: true
	},
	{
		id: 29,
		building: "",
		point: { lat: 42.728594, long: -73.678926 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/29.jpg",
		outdoor: true
	},
	{
		id: 30,
		building: "",
		point: { lat: 42.729873, long: -73.682694 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/30.jpg",
		outdoor: true
	},
	{
		id: 31,
		building: "Greene Building",
		point: { lat: 42.730152, long: -73.681179 },
		address: "Greene Bldg, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/31.jpg",
		outdoor: true
	},
	{
		id: 32,
		building: "President's Parking Place",
		point: { lat: 42.730936, long: -73.680886 },
		address: "Troy Building, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/32.jpg",
		outdoor: true
	},
	{
		id: 33,
		building: "Troy Building",
		point: { lat: 42.730852, long: -73.680558 },
		address: "Troy Building, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/33.jpg",
		outdoor: true
	},
	{
		id: 34,
		building: "",
		point: { lat: 42.729650, long: -73.678936 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/34.jpg",
		outdoor: true
	},
	{
		id: 35,
		building: "",
		point: { lat: 42.730674, long: -73.683443 },
		address: "Carnegie Building, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/35.jpg",
		outdoor: true
	},
	{
		id: 36,
		building: "",
		point: { lat: 42.730728, long: -73.682168 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/36.jpg",
		outdoor: true
	},
	{
		id: 37,
		building: "Rensselaer Lally School of Management",
		point: { lat: 42.730194, long: -73.681866 },
		address: "Rensselaer Lally School of Management, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/37.jpg",
		outdoor: true
	},
	{
		id: 38,
		building: "",
		point: { lat: 42.730219, long: -73.678155 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/38.jpg",
		outdoor: true
	},
	{
		id: 39,
		building: "",
		point: { lat: 42.730188, long: -73.681559 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/39.jpg",
		outdoor: true
	},
	{
		id: 40,
		building: "",
		point: { lat: 42.729959, long: -73.682207 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/40.jpg",
		outdoor: true
	},
	{
		id: 41,
		building: "",
		point: { lat: 42.730186, long: -73.682851 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/41.jpg",
		outdoor: true
	},
	{
		id: 42,
		building: "",
		point: { lat: 42.728625, long: -73.679544 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/42.jpg",
		outdoor: true
	},
	{
		id: 43,
		building: "",
		point: { lat: 42.730097, long: -73.677508 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/43.jpg",
		outdoor: true
	},
	{
		id: 44,
		building: "",
		point: { lat: 42.729962, long: -73.682230 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/44.jpg",
		outdoor: true
	},
	{
		id: 45,
		building: "",
		point: { lat: 42.728887, long: -73.678129 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/45.jpg",
		outdoor: true
	},
	{
		id: 46,
		building: "'87 Gymnasium",
		point: { lat: 42.730550, long: -73.679018 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/46.jpg",
		outdoor: true
	},
	{
		id: 47,
		building: "",
		point: { lat: 42.729581, long: -73.679540 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/47.jpg",
		outdoor: true
	},
	{
		id: 48,
		building: "RPI Playhouse",
		point: { lat: 42.729162, long: -73.677935 },
		address: "RPI Playhouse, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/48.jpg",
		outdoor: true
	},
	{
		id: 49,
		building: "",
		point: { lat: 42.730607, long: -73.679365 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/49.jpg",
		outdoor: true
	},
	{
		id: 51,
		building: "",
		point: { lat: 42.729745, long: -73.678535 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/51.jpg",
		outdoor: true
	},
	{
		id: 52,
		building: "",
		point: { lat: 42.729758, long: -73.678800 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/52.jpg",
		outdoor: true
	},
	{
		id: 53,
		building: "",
		point: { lat: 42.729092, long: -73.680047 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/53.jpg",
		outdoor: true
	},
	{
		id: 54,
		building: "",
		point: { lat: 42.730140, long: -73.677801 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/54.jpg",
		outdoor: true
	},
	{
		id: 55,
		building: "",
		point: { lat: 42.730573, long: -73.680634 },
		address: "15t St, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/55.jpg",
		outdoor: true
	},
	{
		id: 56,
		building: "Pittsburgh Building",
		point: { lat: 42.730949, long: -73.683374 },
		address: "Pittsburgh Bldg, Troy, NY 12180",
		url: "https://s3.us-east-2.amazonaws.com/rpigooglecardboard/360Video2/56.jpg",
		outdoor: true
	}
];


// test
var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	id: { type: Number, index: { unique: true } },
	building: String,
	point: { lat: Number, long: Number },
	address: String,
	url: String, // could change
	outdoor: { type: Boolean, default: true }
});

var Location = mongoose.model('Location', locationSchema);

Location.collection.drop();

Location.insertMany(locations, function(err, docs) {
	if (err) {
		console.log('insertMany error')
	} else {
		console.log(docs.length + ' locations successfully stored')
	}
});