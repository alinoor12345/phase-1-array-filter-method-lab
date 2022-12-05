// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Bobby', 'Sarah']
const findMatching = (a,b) => a.filter(a => a.toLowerCase() === b.toLowerCase())

//returns a driver if the beginning provided letters match
const fuzzyMatch = (p, q) => p.filter(p => p.charAt(0)=== q.charAt(0))

//access the data structure to check if name matches
const matchName = (p,q) => p.filter(p => p.name === q)