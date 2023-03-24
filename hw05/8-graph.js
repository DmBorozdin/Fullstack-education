"use strict";
var Graph = /** @class */ (function () {
    function Graph() {
        this.data = [];
        this.graphLength = 0;
    }
    Graph.prototype.addVertex = function (vert) {
        if (!this.data[vert]) {
            this.data[vert] = [];
            this.graphLength++;
        }
    };
    Graph.prototype.addEdge = function (a, b) {
        if (this.data[a]) {
            this.data[a].push(b);
        }
        else {
            this.data[a] = [b];
            this.graphLength++;
        }
        if (this.data[b]) {
            this.data[b].push(a);
        }
        else {
            this.data[b] = [a];
            this.graphLength++;
        }
    };
    Graph.prototype.findVertex = function (vert) {
        return this.data[vert] ? this.data[vert] : -1;
    };
    Graph.prototype.deleteVertex = function (vert) {
        var _this = this;
        if (this.data[vert]) {
            this.data[vert].forEach(function (neig) {
                _this.data[neig] = _this.data[neig].filter(function (elem) { return elem !== vert; });
            });
            this.data[vert] = [];
            this.graphLength--;
        }
    };
    Graph.prototype.changeVertex = function (vert, newVert) {
        var _this = this;
        if (this.data[vert]) {
            this.data[newVert] = this.data[vert].slice();
            this.data[vert].forEach(function (neig) {
                _this.data[neig] = _this.data[neig].map(function (elem) { return elem !== vert ? elem : newVert; });
            });
            this.data[vert] = [];
        }
    };
    Graph.prototype.findMinPath = function (A, B) {
        if (this.data[A] && this.data[B]) {
            var queue_1 = [];
            var pathLengthArr_1 = new Array(this.data.length).fill(-1);
            queue_1.push(A);
            pathLengthArr_1[A] = 0;
            var _loop_1 = function () {
                var vertice = queue_1.shift();
                if (vertice) {
                    this_1.data[vertice].forEach(function (neig) {
                        if (pathLengthArr_1[neig] === -1 && vertice) {
                            pathLengthArr_1[neig] = pathLengthArr_1[vertice] + 1;
                            queue_1.push(neig);
                        }
                    });
                }
            };
            var this_1 = this;
            while (queue_1.length) {
                _loop_1();
            }
            return pathLengthArr_1[B];
        }
        return -1;
    };
    Graph.prototype.getLength = function () {
        return this.graphLength;
    };
    return Graph;
}());
;
var graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 6);
graph.addEdge(2, 3);
graph.addEdge(4, 2);
graph.addEdge(4, 6);
graph.addEdge(3, 5);
console.log(graph.data);
console.log(graph.getLength());
graph.deleteVertex(2);
console.log(graph.data);
console.log(graph.getLength());
graph.addEdge(3, 4);
console.log(graph.data);
console.log(graph.getLength());
console.log("\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0443\u0442\u044C = ".concat(graph.findMinPath(1, 5)));
