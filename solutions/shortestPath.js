function NodeGraph(name) {

    this.ref = []
    this.name = name
    this.getPath = function (node) {
        for (let i = 0; i < this.ref.length; i++) {
            if (this.ref[i].node === node) return this.ref[i].weight
        }
        return -1
    }
    this.walked = false
    this.createPaths = function (graph, paths) {
        let ref = []
        for (let i = 0; i < paths.length; i++) {
            if (paths[i] != 0) {
                ref.push({ node: graph[i], weight: paths[i] })
            }
        }
        this.ref = ref
    }
}

function findPaths(start, finish, paths, count) {
    if (start === finish || start.walked) {
        return
    }
    let path = start.getPath(finish)
    if (path > 0) {
        paths.push(path + count)
    }
    start.walked = true
    if (start.ref.length === 0) {
        return
    }
    start.ref.forEach(element => {
        findPaths(element.node, finish, paths, element.weight + count)
    })
}

function shortestPath(mat, s, f) {
    var graph = []
    for (let i = 0; i < mat.length; i++) {
        graph.push(new NodeGraph(i))
    }

    for (let i = 0; i < mat.length; i++) {
        graph[i].createPaths(graph, mat[i])
    }
    var paths = []
    findPaths(graph[s], graph[f], paths, 0)// encontrar el valor minimo de paths
    if (!paths[0]) {
        return -1
    }
    let minpath = paths[0]
    paths.forEach(element => {
        if (element < minpath) minpath = element
    })
    return minpath
}

var mat = [
    [0, 10, 5, 0],
    [0, 0, 0, 3],
    [0, 4, 0, 6],
    [0, 0, 0, 0]
]
console.log(shortestPath(mat, 0, 3));// 11
console.log(shortestPath(mat, 2, 0));// -1