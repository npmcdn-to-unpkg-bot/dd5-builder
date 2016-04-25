import {Component} from 'angular2/core';
import {races} from './races';
import {table} from './table';
import {racial} from './racial';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html'
})
export class AppComponent {
	races = races;
	table = table;
	points = 27;
	totalMods = -6;
	othersBonus = 0;
	raceWithBonus = false;
	exceptBonus = 0;

	ngAfterViewInit() {
		$('select').material_select();
		$('#select-race').change((event) => {
			this.resetOthersBonus();
			let racialId = event.target.value;
			let bonuses = racial[racialId - 1].bonus;
			let race = races[racialId - 1];

			_gaq.push(['_trackEvent', 'race', race.label])

			for (let i = 0; i < 6; i++) {
				table[i].racial = 0;
			}

			for (let i = 0; i < bonuses.length; i++) {
				let bonus = bonuses[i];
				if (bonus.others) {
					this.raceWithBonus = true;
					this.othersBonus = bonus.others;
					this.exceptBonus = bonus.except;
				} else {
					table[bonus.id - 1].racial = bonus.bonus;
				}
			}

			for (let i = 0; i < 6; i++) {
				this.valueChanged(this.table[i]);
			}
		});
	}

	between(value, a, b) {
		return value >= a && value <= b;
	}

	cost(from, to) {
		if (this.between(from, 8, 13) && this.between(to, 8, 13)) {
			return 1;
		} else if (this.between(from, 13, 15) && this.between(to, 13, 15)) {
			return 2;
		}
		/*
			8 = 0
			9 = 1
			10 = 2
			11 = 3
			12 = 4
			13 = 5
			14 = 7
			15 = 9
		*/
	}

	add(carac) {
		if (carac.score >= 15 ) {
			return;
		}

		_gaq.push(['_trackEvent', 'add', carac.label])

		let cost = this.cost(carac.score, carac.score + 1);
		if (this.points < cost) {
			return;
		}

		this.points -= cost;
		carac.score += 1;
		this.valueChanged(carac);
	}

	remove(carac) {
		if (carac.score <= 8) {
			return;
		}

		_gaq.push(['_trackEvent', 'remove', carac.label])

		this.points += this.cost(carac.score, carac.score - 1);
		carac.score -= 1;
		this.valueChanged(carac);
	}

	valueChanged(carac) {
		let value = carac.score + carac.racial + carac.bonus;
		carac.value = value
		carac.mod = Math.floor((value / 2) - 5);
		this.calcTotalMod();
	}

	calcTotalMod() {
		this.totalMods = 0;
		for (let i = 0; i < 6; i++) {
			this.totalMods += this.table[i].mod;
		}
	}

	resetOthersBonus() {
		$('.other-bonus').attr('checked', false);
		this.raceWithBonus = false;
		this.othersBonus = 0;
		this.exceptBonus = 0;
		for (let i = 0; i < 6; i++) {
			this.table[i].bonus = 0;
		}
	}

	chooseBonus(carac) {
		if ((carac.bonus === 0) && (this.othersBonus <= 0)) {
			return;
		}

		if (carac.bonus) {
			carac.bonus = 0;
			this.othersBonus += 1;
			this.valueChanged(carac);
		} else {
			if (this.otherBonus <= 0) {
				return;
			}
			carac.bonus = 1;
			this.othersBonus -= 1;
			this.valueChanged(carac);
		}
	}
}
