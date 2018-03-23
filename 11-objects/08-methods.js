function divider () {
    console.log('-------------------------------')
}

let band = {
    'name': 'Mumford and Sons',
    'awesome': true
};

console.log(band.name);

divider()

// let netflix = {
//     id: 1,
//     name: 'Parks and Rec',
//     seasonInfo: {
//         episodeInfo: [
//             {
//                 episode: 1,
//                 episodeName: 'Pilot'},
//                 { episode: 2, episodeName: 'Second'}
//         ]
//     }
// }

// // console.log('All the stuff', netflix);
// // console.log('Season info', netflix.seasonInfo);
// console.log('Episode info', netflix.seasonInfo.episodeInfo[0].episodeName);

let audlMidwest = {
    city: 'Indianapolis',
    teamName: 'AlleyCats',
    division: {
        divisionTeams: [
            {team: 'Thunderbirds', teamCity: 'Pittsburgh'},
            {team: 'Wildfire', teamCity: 'Chicago'},
            {team: 'Radicals', teamCity: 'Madison'},
            {team: 'Wind Chill', teamCity: 'Minnesota'},
            {team: 'Revolution', teamCity: 'Cincinatti'},
            {team: 'Mechanix', teamCity: 'Detroit'}
        ]
    }
}

console.log('Team: ', audlMidwest.division.divisionTeams[4]);

divider ()

// let person = {
//     isHuman: false,
//     introduction: function() {
//         console.log(`My name is ${this.name}. Am I a human? ${this.isHuman}.`);
//     }
// };

// let me = Object.create(person);
// me.name = 'Zach';
// me.isHuman = true;

// me.introduction()


let person = {
    isHuman: true,
    introduction: function() {
        console.log(`My name is ${this.name}.`);
        if (this.isHuman == true) {
            console.log('I am a human!');
        } else { 
            console.log('I am a robot');
        }
    }
}


let me = Object.create(person);
me.name = 'Zach'
me.isHuman = true;

me.introduction()

divider ()

// Object.assign

const first = {
    a: 1,
    b: 2,
    c: 3,
};

const second = Object.assign({}, first);

console.log(second.c)


