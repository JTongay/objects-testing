var chai = require('chai');
var expect = chai.expect;
var objects = require('../objects');
var data = require('../data')

describe('objects', function() {
    describe('#check', function() {
        it('should freaking work', function() {
            var result = objects.check();
            var expectedResult = "hello"
            expect(result).to.equal(expectedResult);
        })
    })

    describe('#showFirst', function() {
        it('should log the first element in array', function() {
            // var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];
            var books = data.books;
            var result = objects.showFirst(books);
            var expectedResult = "The Hobbit"
            expect(result).to.equal(expectedResult)
        })
    })

    describe('#showThird', function() {
        it('should log the third element in array', function() {
            var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

            var result = objects.showThird(books);
            var expectedResult = "The Universe in a Nutshell"
            expect(result).to.equal(expectedResult)
        })
    })

    describe('#songLoop', function() {
        it('should return all elements in given array', function() {
            var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"]

            var result = objects.songLoop(songs)
            var expectedResult = "Call Me Maybe"
            "Pacabel's Cannon in D"
            "Smells Like Teen Spirit"

            expect(result).to.deep.equal(expectedResult)
        })
    })

    describe('#combineLoop', function() {
        it('should add given characters to strings in arrays', function() {
            var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"]

            var riders = ["Kelley", "Steve", "Georgio", "Fabio"]
            var result = objects.combineLoop(riders, cars)
            var expectedResult = "Kelley drives a Chevy Tahoe"
            "Steve drives a Ford Fiesta"
            "Georgio drives a Toyota Yaris"
            "Fabio drives a Honda Fit"
            expect(result).to.deep.equal(expectedResult)

        })
    })

    describe('#printAll', function() {
        it('should print out all movies', function() {
            var trilogies = [
                ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
                ["The Empire Strikes Back", "Return of the Jedi", "A New Hope"],
                ["Back to the Future", "Back to the Future II", "Back to the Future III"],
                ["The Hunger Games", "Catching Fire", "Mockingjay"],
                ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
                ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
                ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "And Another Thing..."]
            ]


            var result = objects.printAll(trilogies)
            var expectedResult =
                "The Fellowship of the Ring"
            "The Two Towers"
            "The Return of the King"
            "The Empire Strikes Back"
            "Return of the Jedi"
            "A New Hope"
            "Back to the Future"
            "Back to the Future II"
            "Back to the Future III"
            "The Hunger Games"
            "Catching Fire"
            "Mockingjay"
            "The Matrix"
            "The Matrix Reloaded"
            "The Matrix Revolutions"
            "Harry Potter and the Sorcerer's Stone"
            "Harry Potter and the Chamber of Secrets"
            "Harry Potter and the Prisoner of Askaban"
            "Harry Potter and the Goblet of Fire"
            "Harry Potter and the Half Blood Prince"
            "Harry Potter and the Order of the Phoenix"
            "Harry Potter and the Deathly Hollows"
            "The Hitchhiker's Guide to the Galaxy"
            "The Restaurant at the End of the Universe"
            "Life, the Universe and Everything"
            "So Long, and Thanks for All the Fish"
            "Mostly Harmless"
            "And Another Thing..."
            expect(result).to.deep.equal(expectedResult);

        })
    })
    describe('#printLast', function() {
        it('should print only last movies in given array', function() {
            var trilogies = [
                ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
                ["The Empire Strikes Back", "Return of the Jedi", "A New Hope"],
                ["Back to the Future", "Back to the Future II", "Back to the Future III"],
                ["The Hunger Games", "Catching Fire", "Mockingjay"],
                ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
                ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
                ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "And Another Thing..."]
            ]


            var result = objects.printLast(trilogies);
            var expectedResult = "The Return of the King"
            "A New Hope"
            "Back to the Future III"
            "Mockingjay"
            "The Matrix Revolutions"
            "Harry Potter and the Deathly Hollows"
            "And Another Thing..."
            expect(result).to.deep.equal(expectedResult)
        })
    })

    describe('#printFirst', function() {
        it('should print first movie in each trilogy', function() {
            var trilogies = [
                ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
                ["The Empire Strikes Back", "Return of the Jedi", "A New Hope"],
                ["Back to the Future", "Back to the Future II", "Back to the Future III"],
                ["The Hunger Games", "Catching Fire", "Mockingjay"],
                ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
                ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
                ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "And Another Thing..."]
            ]
            var result = objects.printFirst(trilogies)
            var expectedResult = "The Fellowship of the Ring"
            "The Empire Strikes Back"
            "Back to the Future"
            "The Hunger Games"
            "The Matrix"
            "Harry Potter and the Sorcerer's Stone"
            "The Hitchhiker's Guide to the Galaxy"
            expect(result).to.deep.equal(expectedResult)
        })
    })
})
