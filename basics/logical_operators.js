let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan)   {
    console.log('Here is a list of vegan dishes')
}
else if (isGuestOneVegan || isGuestTwoVegan)  {
    console.log('Here are some of the vegan dishes')
}
else {
    console.log('Here is the menu')
}