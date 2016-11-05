var BasketBall = function() {
    this.intro = 'this is basketball';
};
BasketBall.prototype = {
    getMember : function() {
        console.log('5');
    },
    getBallSize : function() {
        console.log('6');
    }
};

var Football = function() {
    this.intro = 'this is football';
};
Football.prototype = {
    getMember : function() {
        console.log('12');
    },
    getBallSize : function() {
        console.log('13');
    }
};

var Tennis = function() {
    this.intro = 'this is tennis';
};
Tennis.prototype = {
    getMember : function() {
        console.log('2');
    },
    getBallSize : function() {
        console.log('1');
    }
};

var SportFactory = function(name) {
    switch(name) {
        case 'NBA' : return new BasketBall();
        case 'wordCup' : return new Football();
        case 'FrenchOpen' : return new Tennis();
    }
};