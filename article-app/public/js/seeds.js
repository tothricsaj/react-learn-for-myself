window.Seeds = (function() {
    function generateClickCount() {
        return Math.floor((Math.random() * 50) + 5)
    }

    const articles = [
        {
            id: 1,
            title: 'Cat jumps and falls onto the couch purrs',
            lead: 'Tuxedo cats always looking dapper ooooh feather moving feather! so purrrrrr. Meow meow, i tell my human poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds',
            image: 'images/evil_cat.jpg',
            author: 'Foo Bar',
            clickCount: generateClickCount(),
            text: 'Get video posted to internet for chasing red dot stinky cat but jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back so swipe at owner\'s legs yet somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock, or behind the couch i am the best. Stare at the wall, play with food and get confused by dust flop over, so chase ball of string, hopped up on catnip spit up on light gray carpet instead of adjacent linoleum'
        },
        {
            id: 2,
            title: 'Chase laser hopped up on catnip groom forever',
            lead: 'Stretch tongue and leave it slightly out, blep eat a rug and furry furry hairs everywhere oh no human coming lie on counter don\'t get off counter or meow meow yet',
            image: 'images/blue_mountains.jpeg',
            author: 'Kitty Wink',
            clickCount: generateClickCount(),
            text: ' Hate dog pet me pet me pet me pet me, bite, scratch, why are you petting me so meow meow but i show my fluffy belly but it\'s a trap! if you pet it i will tear up your hand sleeps on my head scratch at the door then walk away so miaow then turn around and show you my bum. Chase laser hopped up on catnip groom forever, stretch tongue and leave it slightly out, blep eat a rug and furry furry hairs everywhere oh no human coming lie on counter don\'t get off counter or meow meow yet i cry and cry and cry unless you pet me, and then maybe i cry just for fun'
        },
        {
            id: 3,
            title: 'Trip on catnip sit on human',
            lead: 'dismember a mouse and then regurgitate parts of it on the family room floor, love you, then bite you so terrorize',
            image: 'images/meet.jpg',
            author: 'Foo Bar',
            clickCount: generateClickCount(),
            text: 'Eat fish on floor mewl for food at 4am. Play time get my claw stuck in the dog\'s ear so warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats but jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor'
        },
        {
            id: 4,
            title: 'Cats are the world refuse to drink water',
            lead: 'this is the day so thinking longingly about tuna brine yowling nonstop the whole night side-eyes your "jerk" other hand while being petted',
            image: 'images/nature-forest-trees-fog.jpeg',
            author: 'Smile Sam',
            clickCount: generateClickCount(),
            text: 'Hack up furballs. Chase red laser dot. I love cats i am one wake up scratch humans leg for food then purr then i have a and relax. Enslave the hooman poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls, sit on human they not getting up ever meoooow found somthing move i bite it tail kitty scratches couch bad kitty'
        },
        {
            id: 5,
            title: 'Good morning sunshine',
            lead: 'My cat stared at me he was sipping his tea, too stick butt in face, yet cat slap dog in face',
            image: 'images/adventure-beautiful-cliff-1659434.jpg',
            author: 'Lenhardt Laugh',
            clickCount: generateClickCount(),
            text: 'Poop in litter box, scratch the walls miaow then turn around and show you my bum, and throwup on your pillow making sure that fluff gets into the owner\'s eyes and cats are the world i’m so hungry i’m so hungry but ew not for that . Purr like an angel asdflkjaertvlkjasntvkjn (sits on keyboard). Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock eat fish on floor but litter box is life, meow meow hack.'
        },

    ]

    return {articles: articles}

}())