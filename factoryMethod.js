var Factory = function (type, content) {
    if (this instanceof Factory) {
        return this[type](content);
    } else {
        return new Factory(type, content);
    }
};

Factory.prototype = {
    Java: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'green';
            div.style.background = 'red';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    PHP: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'yellow';
            div.style.background = 'red';
            document.getElementById('containner').appendChild(div);
        })(content);
    },
    JavaScript: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'pink';
            div.style.background = 'red';
            document.getElementById('containner').appendChild(div);
        })(content);
    }
};

var data = [{
    type: 'JavaScript',
    content: 'JavaScript真是垃圾'
}, {
    type: 'Java',
    content: 'Java真是垃圾'
}];

for (var i = 0; i < data.length; i++) {
    Factory(data[i].type, data[i].content);
}