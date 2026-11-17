/* ═══════════════════════════════════════════════════════
   ANIMAL ADAPTATIONS — REVIEW QUESTION BANKS (built 2026-11-17)
   Written new for this year's class (Marcos 10/21: never last year's test or review).
   The review and the test cover the same words and the same parts of the article
   with different sentences and stems. Pages 100–103 (100 = the photo + Essential Question).
   Marcos 11/17: all 29 vocab words (List 1: 12, List 2: 17) on every form; test Fri 11/20.
     VOCAB_BANK  29 items, each word once: 15 Used Right + 14 Endings, the Dollars and Sense kinds
                 (Marcos 11/3: "Make 24 of Used Right and 24 Endings. Split those for Review 1 and Review 2.").
                 Set 2 asks each word the other kind. A word keeps one id on every form (V01 = predator
                 as Used Right, V31 = glands as Endings: id = word number, +29 for the words Set 1 asks as
                 Endings), so the dashboard's skill report counts any try the same way. Same level as the test.
     COMP_BANK   P01–P10 article details (in the article's own words) · P11–P20 Part A / Part B pairs
     CLOZE_BANK  C01–C29 (same word per id on every form; new sentence)
   answer = index into choices (choices are shuffled at run time).
   page = the article page (100–103) the story panel opens to.
   lvl / trap (comprehension), the CLOZE choices and the vocabulary's kinds are what
   adaptations-unit-test/tools/check-banks.js compares with the test, item by item: they must match.
   The teacher dashboard reads this file (REVIEW_FILES) — keep ids stable.
═══════════════════════════════════════════════════════ */

/* Vocabulary: the Vocab Practice's two kinds, with four choices. Used Right: four sentences, one uses the
   word the right way. Endings: the start of a sentence with the word underlined, and four endings, one
   that fits what the word means. */
function aaUsedRight(word) { return `Which sentence uses <b>${word}</b> the right way?`; }
function aaEnding(stem, word) {
  const underlined = stem.replace(new RegExp('\\b' + word + '\\b', 'i'), m => `<u>${m}</u>`);
  // the hidden period: the voice stops after the blank before "Which ending…" (Marcos 11/3, Dollars and Sense);
  // the question sits on its own line with space above it
  return `${underlined} __________<span class="say-stop" style="display:none">.</span> <span class="end-ask" style="display:block;margin-top:0.75em">Which ending makes the most sense?</span>`;
}

window.VOCAB_BANK = [
  /* ── USED RIGHT: WHICH SENTENCE USES THE WORD THE RIGHT WAY? (the 15 odd-numbered words) ── */
  { id:"V01", q:aaUsedRight("predator"), choices:["A predator is a soft blanket that keeps a baby warm.", "Our barn cat, a sneaky predator, creeps up on the chipmunks under the porch.", "Our class predator is the bell that rings for lunch.", "A predator is a fruit that grows on tall vines."], answer:1 },
  { id:"V03", q:aaUsedRight("adaptation"), choices:["My adaptation for lunch was a turkey sandwich.", "The adaptation rang loudly when Grandpa knocked.", "Strong back legs, an adaptation of the kangaroo, let it hop far and fast.", "We bought new sneakers at the adaptation downtown."], answer:2 },
  { id:"V05", q:aaUsedRight("poisonous"), choices:["The poisonous water from the clean tap was safe for everyone to drink.", "The poisonous cookies were the best treat at the bake sale.", "We ate the poisonous soup because it was so healthy.", "Dad wore thick gloves because the plant by the fence was poisonous to touch."], answer:3 },
  { id:"V07", q:aaUsedRight("behavioral trait"), choices:["Pigs roll in the mud to stay cool, which is one behavioral trait they share.", "A horse's brown coat is one behavioral trait you can see.", "A behavioral trait is a bone inside a fish.", "The behavioral trait was a hat Kayla wore to school."], answer:0 },
  { id:"V09", q:aaUsedRight("harsh"), choices:["The harsh breeze was gentle and warm on our faces.", "The harsh, freezing wind made the mail carrier's cheeks sting.", "The harsh afternoon was mild, gentle, and lovely.", "The harsh bubble bath was cozy and relaxing."], answer:1 },
  { id:"V11", q:aaUsedRight("annual"), choices:["The annual school photo day happens every single hour.", "An annual sneeze happens many times a minute.", "Our town's annual kite festival comes around once each spring.", "The annual cookie was gone in one bite."], answer:2 },
  { id:"V13", q:aaUsedRight("tundra"), choices:["We built sandcastles on the hot tundra beside the palm trees.", "We planted tall oak trees all over the tundra in our backyard.", "The tundra is a warm drink made with milk.", "Musk oxen graze across the frozen tundra near the Arctic Ocean."], answer:3 },
  { id:"V15", q:aaUsedRight("lichen"), choices:["Pale green lichen coated the rocks along the mountain trail.", "Lichen is a loud bird that sings at night.", "We poured lichen on our pancakes for breakfast.", "My lichen is a pair of red mittens."], answer:0 },
  { id:"V17", q:aaUsedRight("sources"), choices:["Sources are the shoelaces on my sneakers.", "Wells and streams were the village's main sources of water.", "The sources barked at the mail truck.", "Sources are a kind of soup with noodles."], answer:1 },
  { id:"V19", q:aaUsedRight("dribbles"), choices:["The puppy dribbles loudly at the mail carrier.", "A huge, powerful blast of water dribbles from the fire hose.", "Water dribbles from the melting icicle onto the porch, drop by drop.", "My sister dribbles her homework into a neat folder."], answer:2 },
  { id:"V21", q:aaUsedRight("nocturnal"), choices:["The nocturnal squirrel gathers acorns in the noon sun and sleeps all night.", "The nocturnal rooster crows at sunrise every morning.", "My nocturnal sandwich has peanut butter and jam.", "Nocturnal moths flutter around the porch light after dark."], answer:3 },
  { id:"V23", q:aaUsedRight("brutal"), choices:["The brutal heat wave left the farm's corn dry and brown.", "The brutal breeze felt soft and pleasant.", "Our brutal picnic was calm and relaxing.", "A brutal kitten is fluffy and sleepy."], answer:0 },
  { id:"V25", q:aaUsedRight("marsh"), choices:["The marsh is the top shelf of our bookcase.", "Red-winged blackbirds perched on the reeds in the soggy marsh.", "We dried our wet towels in the marsh.", "A marsh is a sweet candy made of sugar."], answer:1 },
  { id:"V27", q:aaUsedRight("benefit"), choices:["Gardens benefit from stomping, which crushes all the flowers.", "We benefit our shoes before going outside.", "Gardens benefit from worms because worms loosen the soil.", "The cat will benefit the yarn into a ball."], answer:2 },
  { id:"V29", q:aaUsedRight("pounce"), choices:["Please pounce your name on your paper.", "Stars pounce in the sky at night.", "The heron will pounce slowly into a long nap.", "The bobcat hid behind the rock, then leaped out to pounce on the rabbit."], answer:3 },
  /* ── ENDINGS: WHICH ENDING MAKES THE MOST SENSE? (the 14 even-numbered words) ── */
  { id:"V31", q:aaEnding("When the runner crossed the finish line, the glands in his skin", "glands"), choices:["made him laugh out loud.", "turned his shoes bright red.", "covered his forehead with sweat.", "grew a long, curly tail."], answer:2 },
  { id:"V33", q:aaEnding("A toucan's huge, colorful bill counts as a physical trait, since it is", "physical trait"), choices:["found on the toucan's own body.", "a song the toucan sings at dawn.", "a trick the toucan learned from its parents.", "a place where the toucan likes to nap."], answer:0 },
  { id:"V35", q:aaEnding("When the subway train roared under the street, we felt vibrations", "vibrations"), choices:["in a dream we had last year.", "in the sidewalk under our sneakers.", "inside a letter we mailed.", "on the moon far away."], answer:1 },
  { id:"V37", q:aaEnding("Each autumn, the sandhill cranes migrate, so they", "migrate"), choices:["stay in the same frozen field all winter.", "build a nest in our mailbox.", "fly hundreds of miles south to warmer land.", "forget how to fly."], answer:2 },
  { id:"V39", q:aaEnding("The average watermelon at the farm weighed 15 pounds, so most watermelons there were", "average"), choices:["as heavy as a car.", "as light as a feather.", "made of plastic.", "about 15 pounds."], answer:3 },
  { id:"V41", q:aaEnding("The circus act was extraordinary, so the crowd", "extraordinary"), choices:["gasped and cheered for a long time.", "yawned and looked at the floor.", "left before it started.", "said it was the same as all the others."], answer:0 },
  { id:"V43", q:aaEnding("The camper chose a compact stove because it", "compact"), choices:["was as big as a refrigerator.", "fit easily into her small backpack.", "needed three people to carry it.", "filled the whole tent."], answer:1 },
  { id:"V45", q:aaEnding("The old pyramid had hidden chambers, so explorers found", "chambers"), choices:["only a flat, empty field.", "no walls at all.", "hidden spaces tucked deep within it.", "a swimming pool on top."], answer:2 },
  { id:"V47", q:aaEnding("When the cold weather came, ice cream sales started to decline, which means the truck sold", "decline"), choices:["more cones than ever.", "cones to penguins.", "nothing but soup.", "fewer cones each day."], answer:3 },
  { id:"V49", q:aaEnding("In the sunny woods, the spotted fawn stayed camouflaged, so the hikers", "camouflaged"), choices:["did not notice it until it moved.", "spotted it from far away.", "heard it singing loudly.", "saw its bright orange fur."], answer:0 },
  { id:"V51", q:aaEnding("In the river ecosystem, the trout, otters, and water plants", "ecosystem"), choices:["never touch the water.", "all depend on one another.", "get along with no help from one another.", "live on the moon."], answer:1 },
  { id:"V53", q:aaEnding("Because the snowy conditions on the mountain were getting worse, the skiers", "conditions"), choices:["put on swimsuits.", "started a picnic.", "headed down early to stay safe.", "took off their jackets."], answer:2 },
  { id:"V55", q:aaEnding("Because the house was built right on bedrock, it", "bedrock"), choices:["sank into the mud.", "floated down the river.", "was made of paper.", "stayed steady and strong for years."], answer:3 },
  { id:"V57", q:aaEnding("Big bass hunt minnows as prey, so the minnows", "prey"), choices:["hide among the weeds when the bass swims by.", "chase the bass around the lake.", "eat the bass for lunch.", "teach the bass to swim."], answer:0 },
];

window.COMP_BANK = [
  /* ── PART I: ARTICLE DETAILS (the article's own words) ──────────── */
  { id:"P01", page:101, lvl:1, trap:3, q:"What do skunks blast at a predator? (page 101)", choices:["a horrible-smelling spray","their two layers of fur","a log-shaped body","bright colors and markings"], answer:0 },
  { id:"P02", page:101, lvl:1, trap:3, q:"What word does the article use for the special ways that animals have to survive? (page 101)", choices:["adaptations","chambers","ecosystems","muzzles"], answer:0 },
  { id:"P03", page:101, lvl:1, trap:2, q:"The article gives birds as an example of a behavioral trait. What do these birds do? (page 101)", choices:["migrate south every winter to avoid harsh temperatures","spray predators with a horrible smell","grow a thick layer of fat","sing loudly at sunrise"], answer:0 },
  { id:"P04", page:101, lvl:1, trap:3, q:"What two things do caribou have that help them stay warm? (page 101)", choices:["two layers of fur and a thick layer of fat","a stomach with four chambers","feet and snouts for clearing dirt","colors that change to blend in"], answer:0 },
  { id:"P05", page:101, lvl:1, trap:2, q:"What is the tip of the caribou’s nose and mouth called? (page 101)", choices:["a muzzle","a snout","a gland","a beak"], answer:0 },
  { id:"P06", page:102, lvl:1, trap:3, q:"A caribou eats lichen every day. How much does it eat? (page 102)", choices:["over six pounds","over 500 pounds","up to 10 feet","a few times each month"], answer:0 },
  { id:"P07", page:102, lvl:1, trap:2, q:"What makes the large forest area a good place for caribou in the coldest part of winter? (page 102)", choices:["Food is easier to find there.","It has water holes in the bedrock.","It is dark there all day and night.","The twigs help caribou blend in."], answer:0 },
  { id:"P08", page:102, lvl:1, trap:2, q:"Phasmids are hard to see because of how they look. What do they look like? (page 102)", choices:["leaves or twigs","logs floating in the water","bright colors and markings","small round pebbles"], answer:0 },
  { id:"P09", page:103, lvl:1, trap:3, q:"Which body parts do alligators use to dig out their water holes? (page 103)", choices:["their feet and snouts","their two layers of fur","the glands under their tails","their compact bodies"], answer:0 },
  { id:"P10", page:103, lvl:1, trap:2, q:"According to page 103, how many times do alligators eat each month? (page 103)", choices:["only a few times","over six pounds a day","every winter","three times a day"], answer:0 },
  /* ── PART II: PART A / PART B ────────────────────────────────────── */
  { id:"P11", page:101, lvl:3, trap:0, q:"Part A: What is the main idea of the first two paragraphs on page 101? (page 101)", choices:["Animals have special ways, called adaptations, that help them survive.","Skunks are the only animals that can protect themselves.","Every animal migrates south in the winter.","Animals with bright colors are always safe to touch."], answer:0 },
  { id:"P12", page:101, lvl:2, trap:3, q:"Part B: Which sentence from page 101 best supports the answer to Part A?", choices:["“The special ways that animals have to survive are called adaptations.”","“If you knew anything about skunks, you would run in the opposite direction!”","“Only 4 or 5 feet long, caribou can weigh over 500 pounds.”","“It is covered in short hair.”"], answer:0 },
  { id:"P13", page:101, lvl:3, trap:0, q:"Part A: What can the reader infer about why caribou can live in the Arctic tundra? (page 101)", choices:["Their bodies are built to hold in heat.","They like to swim in warm water.","They do not need to eat in the winter.","Their bright colors warn predators away."], answer:0 },
  { id:"P14", page:101, lvl:2, trap:3, q:"Part B: Which sentence from page 101 best supports the answer to Part A?", choices:["“To stay warm, caribou have two layers of fur and a thick layer of fat.”","“Some animals can sense the smallest vibrations in the ground.”","“The special ways that animals have to survive are called adaptations.”","“Skunks have a built-in survival system.”"], answer:0 },
  { id:"P15", page:102, lvl:3, trap:0, q:"Part A: Why do caribou move from place to place during the year? (page 102)", choices:["They go where they can find food.","They want to see new places for fun.","They are running away from alligators.","They need water holes in the bedrock."], answer:0 },
  { id:"P16", page:102, lvl:3, trap:3, q:"Part B: Which sentence from page 102 best supports the answer to Part A?", choices:["“That’s why they travel from the tundra to a large forest area, where food is easier to find.”","“Every day, a caribou eats over six pounds of lichen!”","“Look closely at the photo of the tree branch.”","“It is a phasmid.”"], answer:0 },
  { id:"P17", page:102, lvl:3, trap:0, q:"Part A: How does looking like leaves or twigs help phasmids survive? (page 102)", choices:["Predators have a hard time seeing them.","It helps them find water in the dry season.","It keeps them warm in the snow.","It makes them easy for birds to spot."], answer:0 },
  { id:"P18", page:102, lvl:3, trap:3, q:"Part B: Which sentence from page 102 best supports the answer to Part A?", choices:["“In this way, they are camouflaged from predators.”","“Look closely at the photo of the tree branch.”","“It is a phasmid.”","“That’s why they travel from the tundra to a large forest area, where food is easier to find.”"], answer:0 },
  { id:"P19", page:103, lvl:3, trap:0, q:"Part A: What can the reader conclude about visiting an alligator hole? (page 103)", choices:["It can be dangerous for other animals.","It is always safe for other animals.","Only alligators ever go there.","It is filled with snow in the winter."], answer:0 },
  { id:"P20", page:103, lvl:3, trap:3, q:"Part B: Which sentence from page 103 best supports the answer to Part A?", choices:["“However, the animals that visit alligator holes become easy prey.”","“Plants grow there.”","“They use their feet and snouts to clear dirt from holes in the limestone bedrock.”","“In Florida’s vast Everglades ecosystem, the dry season is brutal for many plants and animals.”"], answer:0 },
];

window.COMP_PAIRS = [['P11','P12'], ['P13','P14'], ['P15','P16'], ['P17','P18'], ['P19','P20']];

window.CLOZE_BANK = [
  { id:"C01", q:"The hungry __________ watched the zebras from behind a bush, waiting for one to wander off.", choices:["predator","marsh","chambers"], answer:0 },
  { id:"C02", q:"Special __________ in a honeybee’s body make the wax it uses to build its home.", choices:["sources","glands","conditions"], answer:1 },
  { id:"C03", q:"A seal’s thick blubber is one __________ that keeps it warm in icy water.", choices:["ecosystem","tundra","adaptation"], answer:2 },
  { id:"C04", q:"The flamingo’s long, skinny legs are a __________ you can easily see.", choices:["physical trait","behavioral trait","prey"], answer:0 },
  { id:"C05", q:"The label on the bug spray warns that it is __________ if someone swallows it.", choices:["compact","poisonous","nocturnal"], answer:1 },
  { id:"C06", q:"The __________ from the earthquake shook the dishes off the shelf.", choices:["sources","chambers","vibrations"], answer:2 },
  { id:"C07", q:"Spinning a new web each night is a __________ of the garden spider.", choices:["behavioral trait","physical trait","predator"], answer:0 },
  { id:"C08", q:"Each spring, the swallows __________ back to the same barn where they nested last year.", choices:["pounce","migrate","decline"], answer:1 },
  { id:"C09", q:"Few plants can grow in the __________ weather at the top of the windy mountain.", choices:["average","annual","harsh"], answer:2 },
  { id:"C10", q:"My __________ grade on spelling tests this year is 90, so most of my scores are close to 90.", choices:["average","extraordinary","compact"], answer:0 },
  { id:"C11", q:"The museum’s __________ dinosaur show comes back every July.", choices:["brutal","annual","camouflaged"], answer:1 },
  { id:"C12", q:"The tightrope walker did something __________: she crossed a canyon on a thin wire!", choices:["average","harsh","extraordinary"], answer:2 },
  { id:"C13", q:"In the short Arctic summer, tiny flowers bloom all over the __________.", choices:["tundra","bedrock","glands"], answer:0 },
  { id:"C14", q:"Mia’s __________ camera is small enough to slip into her jacket pocket.", choices:["poisonous","compact","harsh"], answer:1 },
  { id:"C15", q:"The rocks along the cold seashore were spotted with crusty orange __________.", choices:["prey","vibrations","lichen"], answer:2 },
  { id:"C16", q:"The nautilus shell is divided into many __________, and the animal lives in the biggest one.", choices:["chambers","conditions","sources"], answer:0 },
  { id:"C17", q:"Beans, eggs, and fish are good __________ of protein.", choices:["chambers","sources","marsh"], answer:1 },
  { id:"C18", q:"As the sun set, the temperature began to __________, so we put on our jackets.", choices:["migrate","benefit","decline"], answer:2 },
  { id:"C19", q:"Melted wax __________ down the candle and makes a little puddle.", choices:["dribbles","benefit","pounce"], answer:0 },
  { id:"C20", q:"The brown owl was __________ against the tree bark, so I didn’t see it until it blinked.", choices:["compact","camouflaged","annual"], answer:1 },
  { id:"C21", q:"Because the kiwi bird is __________, it sleeps in a burrow all day and hunts for worms at night.", choices:["harsh","extraordinary","nocturnal"], answer:2 },
  { id:"C22", q:"A healthy ocean __________ needs clean water, seaweed, fish, and sharks.", choices:["ecosystem","bedrock","tundra"], answer:0 },
  { id:"C23", q:"The __________ windstorm blew down fences all over the neighborhood.", choices:["average","brutal","compact"], answer:1 },
  { id:"C24", q:"The weather __________ at the ski hill were perfect: fresh snow and sunshine.", choices:["sources","glands","conditions"], answer:2 },
  { id:"C25", q:"Salt water flows into the __________ at high tide and floods the tall grasses.", choices:["marsh","tundra","prey"], answer:0 },
  { id:"C26", q:"The tall skyscraper is anchored deep in the solid __________ under the city.", choices:["lichen","bedrock","vibrations"], answer:1 },
  { id:"C27", q:"The whole neighborhood will __________ from the new park, because kids will have a safe place to play.", choices:["decline","migrate","benefit"], answer:2 },
  { id:"C28", q:"Small fish are __________ for the pelicans that dive into the bay.", choices:["prey","adaptation","ecosystem"], answer:0 },
  { id:"C29", q:"The snowy owl swooped down to __________ on a lemming in the snow.", choices:["dribbles","pounce","benefit"], answer:1 },
];
