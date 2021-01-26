class Contestant {
    constructor() {
        this.name = null;
    }
    getCount() {
        var contestantCountRef = database.ref('contestantCount').on("value", (data) => {
            contestantCount = data.val()
        })
    }
    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        })
    }

    update() {
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
            Name: this.name,
            Answer: this.answer
        })
    }

    getContestantInfo() {
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value", (data) => {
            allContestants = data.val();
        })
    }

}