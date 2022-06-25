class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`
        } else
            this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.goals[peak] == true && this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        let diff = this.resources - time * 10;
        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources = diff;
            let newPeak = { peak, time, difficultyLevel };
            this.listOfHikes.push(newPeak);
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${username} has not done any hiking yet`
        }
        let bestHikes = [];
        this.listOfHikes.forEach(hike => {
            if (hike.difficultyLevel == criteria) {
                bestHikes.push(hike);
            } else if (criteria == 'all') {
                bestHikes.push(hike);
            }
        });
        bestHikes.sort((a, b) => a.time - b.time);
        if (bestHikes.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        } else if (criteria == 'all') {
            let result = [];
            for (let hike of bestHikes) {
                result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
                return 'All hiking records:' + `\n${result.join(', ')}`;

            }
        } else {
            for (let hike of bestHikes) {

                return `${this.username}'s best ${criteria} hike is ${hike.peak} peak, for ${hike.time} hours`
            }
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));