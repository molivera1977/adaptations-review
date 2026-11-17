/* ═══════════════════════════════════════════════════════
   ANIMAL ADAPTATIONS — REVIEW SET 2 (built 2026-11-17)
   Same design as Dollars and Sense (Marcos 11/3: "Since the reviews can be done multiple times, can the
   kids get different questions?"). Each part of the review has 2 tries (more with the Teacher PIN):
   try 1 is Set 1 (data/banks.js), try 2 is this set, a PIN-allowed try 3 is Set 1 again, and so on
   (reviewSet() in script.js). Same level as the test at every item (adaptations-unit-test/tools/check-banks.js):
     VOCAB_BANK_2  every word asked THE OTHER KIND from Set 1: the 15 words Set 1 asks as Used Right are
                   Endings here, and the 14 it asks as Endings are Used Right. Each word keeps Set 1's id
                   (V31 = glands on both sets), so the dashboard's skill report counts any try the same way.
     COMP_BANK_2   P01–P10 the same article details as Set 1, asked a new way · P11–P20 new Part A / Part B
                   pairs (same skill and page as Set 1's pair), each Part B with a different right sentence
     CLOZE_BANK_2  C01–C29, same word per id, new sentences
   Loaded after data/banks.js (uses its aaUsedRight() and aaEnding()). Same answer rules: answer = index into choices.
═══════════════════════════════════════════════════════ */

window.VOCAB_BANK_2 = [
  /* ── USED RIGHT: WHICH SENTENCE USES THE WORD THE RIGHT WAY? (the 14 even-numbered words) ── */
  { id:"V31", q:aaUsedRight("glands"), choices:["Glands are the laces on your sneakers.", "Glands inside a mother cow make the milk her calf drinks.", "We bought a bag of glands at the bakery.", "Glands are the stripes painted on the road."], answer:1 },
  { id:"V33", q:aaUsedRight("physical trait"), choices:["A physical trait is a dance a bird does.", "A physical trait is a bus ride to school.", "Long eyelashes, a physical trait of camels, keep sand out of their eyes.", "A physical trait is a bedtime story."], answer:2 },
  { id:"V35", q:aaUsedRight("vibrations"), choices:["Vibrations are the colors in a rainbow.", "The vibrations tasted like strawberries.", "We wore vibrations on our feet in the snow.", "We felt vibrations through the bleachers when the crowd stomped their feet."], answer:3 },
  { id:"V37", q:aaUsedRight("migrate"), choices:["Every fall, the bats in our town migrate to warmer caves far to the south.", "Our house plans to migrate across town tonight.", "Dad will migrate the salad for dinner.", "The rocks migrate around the garden every hour."], answer:0 },
  { id:"V39", q:aaUsedRight("average"), choices:["The average puppy at the shelter is the biggest dog in the world.", "The average bus ride to school is 15 minutes, so most of our rides take about that long.", "An average day is the strangest day of the whole year.", "The average apple is purple and as big as a car."], answer:1 },
  { id:"V41", q:aaUsedRight("extraordinary"), choices:["The extraordinary painting was dull and plain, the same as all the rest.", "The extraordinary meal was plain toast that no one noticed.", "An ant has extraordinary strength for its size and can lift things much heavier than itself.", "Our extraordinary trip was a boring walk to the mailbox."], answer:2 },
  { id:"V43", q:aaUsedRight("compact"), choices:["The compact couch takes up the entire living room.", "The compact truck is longer than a school bus.", "The compact house has fifty bedrooms.", "Grandma packed a compact sewing kit that fits in her pocket."], answer:3 },
  { id:"V45", q:aaUsedRight("chambers"), choices:["The ship had many chambers below its deck for sleeping and storing food.", "The chambers are the strings on my guitar.", "Chambers are the clouds in the sky.", "We ate chambers with syrup."], answer:0 },
  { id:"V47", q:aaUsedRight("decline"), choices:["Our class grew bigger, so the number of students began to decline.", "After the new crosswalk was built, the number of accidents on Main Street began to decline.", "The balloon began to decline as we blew more air into it.", "We will decline to the beach in the car."], answer:1 },
  { id:"V49", q:aaUsedRight("camouflaged"), choices:["Against the green grass, the bright pink flamingo was camouflaged.", "The camouflaged firetruck was easy to spot on the road.", "The snowshoe hare's white fur keeps it camouflaged in the winter snow.", "Floating in the blue sky, the red balloon stayed perfectly camouflaged."], answer:2 },
  { id:"V51", q:aaUsedRight("ecosystem"), choices:["An ecosystem is a pencil sharpener on my desk.", "Our ecosystem is the bus driver's name.", "An ecosystem is a game of checkers.", "A rotting log in the woods makes its own small ecosystem of beetles, worms, and moss."], answer:3 },
  { id:"V53", q:aaUsedRight("conditions"), choices:["The dry, windy conditions made it dangerous to light a campfire.", "Conditions are the buttons on my coat.", "We ate conditions for breakfast.", "The conditions sang a song at the concert."], answer:0 },
  { id:"V55", q:aaUsedRight("bedrock"), choices:["The bedrock was as soft as a marshmallow.", "The well diggers went through the soil and then into the hard bedrock.", "Bedrock is the top layer of fluffy clouds.", "We sprinkled bedrock on our ice cream."], answer:1 },
  { id:"V57", q:aaUsedRight("prey"), choices:["The prey chased the lion across the field.", "Prey is a kind of song birds sing.", "Swallows swoop over the field to catch insects, their favorite prey.", "My prey is the blanket on my bed."], answer:2 },
  /* ── ENDINGS: WHICH ENDING MAKES THE MOST SENSE? (the 15 odd-numbered words) ── */
  { id:"V01", q:aaEnding("When the predator crept close to the pond, the ducks", "predator"), choices:["swam closer to make friends.", "flapped their wings and flew away fast.", "fell asleep on the shore.", "invited it to swim with them."], answer:1 },
  { id:"V03", q:aaEnding("A woodpecker has a thick skull. Because of this adaptation, it can", "adaptation"), choices:["sing all night.", "swim under the ice.", "pound on trees without getting hurt.", "change colors like a rainbow."], answer:2 },
  { id:"V05", q:aaEnding("Because the bright yellow frog is poisonous, the hungry snake", "poisonous"), choices:["gobbled it up right away.", "asked it to play tag.", "gave it a hug.", "left it alone and looked for other food."], answer:3 },
  { id:"V07", q:aaEnding("A happy dog wags its tail. This behavioral trait tells us", "behavioral trait"), choices:["how the dog acts.", "what color the dog's fur is.", "how big the dog's paws are.", "where the dog buries its bone."], answer:0 },
  { id:"V09", q:aaEnding("The harsh winter winds on the island made the people", "harsh"), choices:["wear swimsuits all year.", "stay inside next to the fire.", "plant flowers in January.", "have picnics every day."], answer:1 },
  { id:"V11", q:aaEnding("The swim team's annual awards night takes place", "annual"), choices:["every single morning.", "twice an hour.", "just once a year.", "never at all."], answer:2 },
  { id:"V13", q:aaEnding("Because the tundra is so cold and windy, the plants that grow there are", "tundra"), choices:["tall palm trees.", "giant sunflowers.", "banana trees.", "tiny and low to the ground."], answer:3 },
  { id:"V15", q:aaEnding("High on the cold mountain, crusty lichen covered", "lichen"), choices:["the bare gray rocks.", "the inside of the hot oven.", "the hikers' lunch boxes.", "the clouds in the sky."], answer:0 },
  { id:"V17", q:aaEnding("Encyclopedias and museum guides are sources of facts, so they are", "sources"), choices:["kinds of pets.", "places where you can find information.", "snacks you eat.", "songs on the radio."], answer:1 },
  { id:"V19", q:aaEnding("When the ice cream melts in the sun, it dribbles", "dribbles"), choices:["straight upward like a rocket.", "into a huge wave.", "slowly down the cone in sticky drops.", "into the freezer by itself."], answer:2 },
  { id:"V21", q:aaEnding("Because the hedgehog is nocturnal, it", "nocturnal"), choices:["plays soccer at lunchtime.", "never sleeps at all.", "only wakes up at noon.", "sleeps in the day and searches for food at night."], answer:3 },
  { id:"V23", q:aaEnding("After the brutal climb up the steep cliff, the climbers", "brutal"), choices:["were sore, tired, and out of breath.", "felt rested and full of energy.", "had taken a short, easy walk.", "fell asleep before they started."], answer:0 },
  { id:"V25", q:aaEnding("We wore tall rubber boots to explore the marsh because", "marsh"), choices:["it was a hot desert.", "the ground was wet and squishy.", "the ground was dry and dusty.", "it was full of sand dunes."], answer:1 },
  { id:"V27", q:aaEnding("Kids benefit from brushing their teeth because it", "benefit"), choices:["makes their teeth fall out.", "turns their teeth green.", "keeps their teeth healthy and strong.", "makes their mouth hurt."], answer:2 },
  { id:"V29", q:aaEnding("The puppy flattened its belly on the floor to pounce, and a moment later it", "pounce"), choices:["fell asleep on the rug.", "walked slowly away from the ball.", "read a book quietly.", "jumped on the bouncing ball."], answer:3 },
];

window.COMP_BANK_2 = [
  /* ── PART I: ARTICLE DETAILS — the same details as Set 1, asked a new way ── */
  { id:"P01", page:101, lvl:1, trap:3, q:"Where are the glands that make a skunk’s horrible-smelling spray? (page 101)", choices:["under their tails","on the tip of their nose and mouth","in the limestone bedrock","on the tree branch"], answer:0 },
  { id:"P02", page:101, lvl:1, trap:3, q:"According to page 101, what are the special ways that animals have to survive? (page 101)", choices:["adaptations","conditions","food sources","chambers"], answer:0 },
  { id:"P03", page:101, lvl:1, trap:2, q:"Birds that migrate south every winter are an example of what? (page 101)", choices:["a behavioral trait","a physical trait","a muzzle","a holiday"], answer:0 },
  { id:"P04", page:101, lvl:1, trap:3, q:"Caribou have two layers of something that helps them stay warm. What is it? (page 101)", choices:["fur","lichen","limestone","leaves"], answer:0 },
  { id:"P05", page:101, lvl:1, trap:2, q:"What covers the caribou’s muzzle? (page 101)", choices:["short hair","feathers","melting snow","lichen"], answer:0 },
  { id:"P06", page:102, lvl:1, trap:3, q:"Every day, a caribou eats over six pounds of something. What is it? (page 102)", choices:["lichen","twigs","leaves","dirt"], answer:0 },
  { id:"P07", page:102, lvl:1, trap:2, q:"Where do caribou go when their food sources decline in the coldest part of winter? (page 102)", choices:["to a large forest area","to Florida’s Everglades","to the freshwater marshes","to the top of a mountain"], answer:0 },
  { id:"P08", page:102, lvl:1, trap:2, q:"What are some phasmids known as? (page 102)", choices:["leaf insects, or walking sticks","predators","caribou","butterflies"], answer:0 },
  { id:"P09", page:103, lvl:1, trap:3, q:"Alligators clear dirt out of holes to make water holes. What kind of rock are the holes in? (page 103)", choices:["limestone bedrock","a large forest area","a tree branch","the Arctic tundra"], answer:0 },
  { id:"P10", page:103, lvl:1, trap:2, q:"Page 103 says alligators eat only once in a while. How often is that? (page 103)", choices:["a few times each month","every winter","every day","once a year"], answer:0 },
  /* ── PART II: PART A / PART B — same skill and page as Set 1, a different right Part B ── */
  { id:"P11", page:101, lvl:3, trap:0, q:"Part A: What does page 101 teach about adaptations? (page 101)", choices:["They can be physical traits or behavioral traits.","They are always the color of an animal’s fur.","Only birds have them.","They are places where animals sleep."], answer:0 },
  { id:"P12", page:101, lvl:2, trap:3, q:"Part B: Which sentence from page 101 best supports the answer to Part A?", choices:["“An adaptation can also be a behavioral trait.”","“What would you do if you saw a skunk raise its tail?”","“Others hear sounds from miles away.”","“Welcome to the Arctic tundra of Alaska, Canada, Greenland, and Russia, home of the caribou.”"], answer:0 },
  { id:"P13", page:101, lvl:3, trap:0, q:"Part A: How does the caribou’s muzzle help it in the cold? (page 101)", choices:["Its short hair warms the air before the caribou breathes it in.","It helps the caribou smell water holes.","It changes color to hide the caribou.","It sprays a bad smell at predators."], answer:0 },
  { id:"P14", page:101, lvl:2, trap:3, q:"Part B: Which sentence from page 101 best supports the answer to Part A?", choices:["“This hair helps to warm the air before they inhale it into their lungs.”","“The tip of the caribou’s nose and mouth is called a muzzle.”","“They also have compact bodies.”","“Skunks have a built-in survival system.”"], answer:0 },
  { id:"P15", page:102, lvl:3, trap:0, q:"Part A: What tells caribou that it is time to go back up north? (page 102)", choices:["The snow begins to melt.","The lichen starts to taste bad.","The alligators come to the forest.","The phasmids change colors."], answer:0 },
  { id:"P16", page:102, lvl:3, trap:3, q:"Part B: Which sentence from page 102 best supports the answer to Part A?", choices:["“When the melting snow dribbles into streams, they know that it is time to return up north.”","“Every day, a caribou eats over six pounds of lichen!”","“Caribou have unusual stomachs.”","“Phasmids look like leaves or twigs.”"], answer:0 },
  { id:"P17", page:102, lvl:3, trap:0, q:"Part A: Why is being nocturnal helpful to phasmids? (page 102)", choices:["It is even harder for predators to see them in the dark.","They can find more lichen at night.","They can stay warm at night.","They can drink from water holes at night."], answer:0 },
  { id:"P18", page:102, lvl:3, trap:3, q:"Part B: Which sentence from page 102 best supports the answer to Part A?", choices:["“It’s hard to spot these insects in daylight, let alone at night.”","“Can you spot the insect?”","“Some phasmids are known as leaf insects, or walking sticks.”","“Caribou have unusual stomachs.”"], answer:0 },
  { id:"P19", page:103, lvl:3, trap:0, q:"Part A: What can the reader conclude about why animals come to alligator holes? (page 103)", choices:["The holes still have water when the ground is dry.","Alligators invite the animals to visit.","The holes are full of snow to drink.","The holes are the safest place to sleep."], answer:0 },
  { id:"P20", page:103, lvl:3, trap:3, q:"Part B: Which sentence from page 103 best supports the answer to Part A?", choices:["“When the ground dries up, the alligators can drink from their water holes.”","“The normally motionless alligator may pounce on them without warning.”","“But luckily, alligators eat only a few times each month.”","“In the end, it’s all about survival!”"], answer:0 },
];

window.CLOZE_BANK_2 = [
  { id:"C01", q:"The cheetah is a fast __________ that chases antelope across the grasslands.", choices:["predator","tundra","conditions"], answer:0 },
  { id:"C02", q:"Tiny __________ in your eyelids make oil that keeps your eyes from drying out.", choices:["chambers","glands","sources"], answer:1 },
  { id:"C03", q:"A chameleon’s long, sticky tongue is one __________ that helps it catch insects.", choices:["marsh","lichen","adaptation"], answer:2 },
  { id:"C04", q:"A cheetah’s spotted coat is a __________ you can see on its body.", choices:["physical trait","behavioral trait","bedrock"], answer:0 },
  { id:"C05", q:"Rattlesnake bites are __________, so hikers watch where they step.", choices:["annual","poisonous","average"], answer:1 },
  { id:"C06", q:"The __________ from the passing train made the glasses in the cupboard clink.", choices:["glands","sources","vibrations"], answer:2 },
  { id:"C07", q:"Doing a waggle dance to show other bees where the flowers are is a __________ of honeybees.", choices:["behavioral trait","physical trait","ecosystem"], answer:0 },
  { id:"C08", q:"Each winter, the elk __________ down the mountain to find grass in the valleys.", choices:["benefit","migrate","pounce"], answer:1 },
  { id:"C09", q:"Only the toughest plants can live in the __________, dry desert.", choices:["annual","compact","harsh"], answer:2 },
  { id:"C10", q:"The __________ height of the kids in our class is about four and a half feet.", choices:["average","nocturnal","poisonous"], answer:0 },
  { id:"C11", q:"Our school’s __________ science fair is held every March.", choices:["camouflaged","annual","brutal"], answer:1 },
  { id:"C12", q:"Climbing the tallest mountain in the world is an __________ thing to do.", choices:["average","annual","extraordinary"], answer:2 },
  { id:"C13", q:"Arctic hares hop across the frozen __________, where no trees grow.", choices:["tundra","marsh","ecosystem"], answer:0 },
  { id:"C14", q:"The __________ flashlight is tiny enough to hang on my keychain.", choices:["harsh","compact","extraordinary"], answer:1 },
  { id:"C15", q:"On the windy mountaintop, the only living things on the bare rocks were patches of __________.", choices:["chambers","conditions","lichen"], answer:2 },
  { id:"C16", q:"The mole digs a home with several underground __________ for sleeping and storing food.", choices:["chambers","sources","glands"], answer:0 },
  { id:"C17", q:"The ocean and the lake are the town’s two main __________ of fish.", choices:["chambers","sources","prey"], answer:1 },
  { id:"C18", q:"After the storm passed, the river’s water level started to __________.", choices:["pounce","migrate","decline"], answer:2 },
  { id:"C19", q:"Rainwater __________ off the edge of the umbrella and onto Ana’s shoes.", choices:["dribbles","benefit","migrate"], answer:0 },
  { id:"C20", q:"In its white winter coat, the arctic fox is __________ in the snow.", choices:["average","camouflaged","harsh"], answer:1 },
  { id:"C21", q:"Many desert animals are __________, so they come out after the hot sun has set.", choices:["compact","poisonous","nocturnal"], answer:2 },
  { id:"C22", q:"A wetland __________ includes cattails, frogs, turtles, and birds that all depend on each other.", choices:["ecosystem","bedrock","lichen"], answer:0 },
  { id:"C23", q:"The __________ cold made the hikers’ water bottles freeze solid.", choices:["annual","brutal","nocturnal"], answer:1 },
  { id:"C24", q:"Windy __________ on the lake made it unsafe to go sailing.", choices:["chambers","sources","conditions"], answer:2 },
  { id:"C25", q:"Turtles sunned themselves on logs in the soggy __________.", choices:["marsh","tundra","bedrock"], answer:0 },
  { id:"C26", q:"The farmers dug through the soil and into the __________ to make a deep well.", choices:["lichen","bedrock","glands"], answer:1 },
  { id:"C27", q:"Young trees __________ from extra water during a dry summer.", choices:["decline","pounce","benefit"], answer:2 },
  { id:"C28", q:"Grasshoppers and crickets are __________ for the hungry toad.", choices:["prey","chambers","sources"], answer:0 },
  { id:"C29", q:"The leopard hid in the tree, waiting to __________ on an antelope below.", choices:["migrate","pounce","decline"], answer:1 },
];
