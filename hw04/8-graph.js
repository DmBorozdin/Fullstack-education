// 8) Написать класс, реализующий граф. Предусмотреть методы поиска, вставки,
// удаления, изменения элемента и определения количества элементов.
// Предусмотреть метод поиска кратчайшего расстояния между двумя узлами.

class Graph {
    data = [];
    graphLength = 0;

    addVertex(vert) {
        if (!this.data[vert]) {
            this.data[vert]= [];
            this.graphLength++;
        }
    }

    addEdge(a, b) {
       if (this.data[a]) {
        this.data[a].push(b);
       } else {
        this.data[a] = [b];
        this.graphLength++;
       }
       if (this.data[b]) {
        this.data[b].push(a);
       } else {
        this.data[b] = [a];
        this.graphLength++;
       }
    }

    findVertex(vert) {
        return this.data[vert] ? this.data[vert] : -1;
    }

    deleteVertex(vert) {
        if (this.data[vert]) {
            this.data[vert].forEach(neig => {
                this.data[neig] = this.data[neig].filter(elem => elem !== vert);
            });
            this.data[vert] = null;
            this.graphLength--;
        }
    }

    changeVertex(vert, newVert) {
        if (this.data[vert]) {
            this.data[newVert] = this.data[vert].slice();
            this.data[vert].forEach(neig => {
                this.data[neig] = this.data[neig].map(elem => elem !== vert ? elem : newVert);
            });
            this.data[vert] = null;
        }
    }

    findMinPath(A, B) {
        if (this.data[A] && this.data[B]) {
            const queue = [];
            const pathLengthArr = new Array(this.data.length).fill(-1);
            queue.push(A);
            pathLengthArr[A] = 0;
            while (queue.length) {
                let vertice = queue.shift();
                this.data[vertice].forEach(neig => {
                    if (pathLengthArr[neig] === -1) {
                        pathLengthArr[neig] = pathLengthArr[vertice] + 1;
                        queue.push(neig);
                    }
                });
            }
            return pathLengthArr[B];
        }
        return -1;
    }

    getLength() {
        return this.graphLength;
    }
};

const graph = new Graph();
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
console.log(`Минимальный путь = ${graph.findMinPath(1,5)}`);