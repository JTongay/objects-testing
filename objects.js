module.exports = {
    check: function() {
        return "hello"
    },

    showFirst: function(arr) {
        return arr[0];
    },

    showThird: function(arr) {
        return arr[2];
    },

    songLoop: function(arr) {
        for (var i = 0; i < arr.length; i++) {
            return arr[i];
        }
    },

    combineLoop: function(arr1, arr2) {
        for (var i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
            return arr1[i] + " drives a " + arr2[j];
        }
    },

    printAll: function(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                return arr[i][j];
            }
        }

    },

    printLast: function(arr) {
        for (var i = 0; i < arr.length; i++) {
            var lastMovie = arr[i].pop();
            return lastMovie;
        }

    },

    printFirst: function(arr) {
        // for (var i = 0; i < arr.length; i++) {
        //     var firstMovie = arr[i].reverse().pop();
        //     return firstMovie;
        // }
        for (var i = 0; i < arr.length; i++) {
            return arr[i][0]
        }

    }
}
