Vue.use(VueMaterial.default);

const vm = new Vue({
	data: {
		zodiacsigns: [
		'Aries',
		'Taurus',
		'Gemini',
		'Cancer',
		'Leo',
		'Virgo',
		'Libra',
		'Scorpio',
		'Sagittarius',
		'Capricorn',
		'Aquarius',
		'Pisces'
		],
		hobbies: [
		'Sport',
		'Music',
		'Cooking',
		'Reading',
		'Art',
		'Dancing',
		'Writing',
		'Photography',
		'Yoga',
		'Traveling',
		'Diving',
		'Computer programming',
		'Fashion',
		'Gaming',
		'Collecting',
		'Singing',
		'Surfing',
		'Other'
		],
		compatibility: -1,
		showHeart: false,
		showForms: true,
		showFriends: false,
		girl: {
			girlHair: [
			'girl-hair-1',
			'girl-hair-2',
			'girl-hair-3',
			'girl-hair-4',
			'girl-hair-5',
			'girl-hair-6',
			'girl-hair-7',
			'girl-hair-8'
			],
			girlClothes: [
			'girl-clothes-0',
			'girl-clothes-1',
			'girl-clothes-2',
			'girl-clothes-3',
			'girl-clothes-4',
			'girl-clothes-5',
			'girl-clothes-6'
			],
			girlShoes: [
			'girl-shoes-0',
			'girl-shoes-1',
			'girl-shoes-2',
			'girl-shoes-3',
			'girl-shoes-4',
			'girl-shoes-5'
			],
			currentHair: 1,
			currentClothes: 1,
			currentShoes: 1,			
			name: '',
			zodiacsign: '',
			about: '',
			hobbies: []
		},
		boy: {
			boyHair: [
			'boy-hair-1',
			'boy-hair-2',
			'boy-hair-3'
			],
			boyClothes: [
			'boy-clothes-0',
			'boy-clothes-1',
			'boy-clothes-2',
			'boy-clothes-3'
			],
			currentHair: 1,
			currentClothes: 1,
			currentShoes: 1,			
			name: '',
			zodiacsign: '',
			about: '',
			hobbies: []
		}
	},
	methods: {
		prev: function (obj, option, i) {
			obj[i]--;
			if( obj[i] < 1 ) {
				obj[i] = option.length;
			}		
		},
		next: function (obj, option, i) {
			obj[i]++;
			if( obj[i] > option.length ) {
				obj[i] = 1;
			}
		},
		submit: function() {
			this.showForms = false;
			this.showFriends = true;
			this.girl.zodiacsign.toLowerCase();
			this.boy.zodiacsign.toLowerCase();

		},
		getCompatibility: function() {
			this.showHeart = false;
			this.compatibility = Math.round(Math.random() * 100);
			if( this.compatibility >=90 ) {
				this.showHeart = true;
				console.log('heart');
				console.log(this.showHeart);
			}
		}
	}
}).$mount ( '#app' );
