const articles = [
  {
    title: '🪶 Carrion Crow',
    slug: 'carrion-crow',
    image_preview: '/carrion-crow.jpg',
    type: 'crow',
    content:
      'The Carrion crow a medium-sized black bird with a green or purple sheen. The bill, legs, and feet are also black. Juvenile Carrion crows can be identified by their brownish plumage and blue eyes, both of which darken to black and brown as they grow older.',
  },
  {
    title: '🪶 Hooded Crow',
    slug: 'hooded-crow',
    image_preview: '/hooded-crow.jpg',
    type: 'crow',
    content:
      'The Hooded crow is an ashy grey bird with black head, throat, wings, tail, and thigh feathers, as well as a black bill, eyes, and feet. Like other corvids, it is an omnivorous and opportunistic forager and feeder.',
  },
  {
    title: '🪶 Rook',
    slug: 'rook',
    image_preview: '/rook.jpg',
    type: 'crow',
    content:
      'The Rook is characterized by black feathers that shine blue or bluish-purple sheen in bright sunlight, black legs and feet, dense and silky feathers on the head and neck, and the bill in front of the eyes have bare gray-white skin around its base. Their strong bill supports them probing the ground to feed on earthworms and insects.',
  },
  {
    title: '🪶 Western Jackdaw',
    slug: 'western-jackdaw',
    image_preview: '/jackdaw.jpg',
    type: 'crow',
    content:
      'The Western jackdaw is a passerine bird that belongs to the crow family. Most of its plumage is a shiny black, with a purple or blue sheen on the crown, forehead, and secondaries, and a green-blue sheen on the throat, primaries, and tail. The cheeks, nape, and neck are light grey to greyish-silver, and the underparts are slate-grey. The legs are black, as is the short stout bill. The irises of adults are greyish or silvery-white while those of juveniles are light blue, becoming brownish before whitening at around one year of age. The sexes look alike, though the head and neck plumage of male birds fades more with age and wear, particularly just before moulting.',
  },
  {
    title: '🪶 Alpine Chough',
    slug: 'alpine-chough',
    image_preview: '/alpine-chough.jpg',
    type: 'crow',
    content:
      'The Alpine chough is a unique member of the crow family that may nest at a higher altitude than any other bird. The males and the females of this species are identical in appearance although the male averages slightly larger than the female. Young birds are duller than adults with a dull yellow bill and brownish legs. The flight of Alpine choughs is swift and acrobatic with loose deep wing beats. Their high maneuverability is accomplished by fanning the tail, folding their wings, and soaring in the updraughts at cliff faces.',
  },
  {
    title: '🪶 Common Raven',
    slug: 'common-raven',
    image_preview: '/raven.jpg',
    type: 'crow',
    content:
      'The Common raven is the most widely distributed member of the crow family. Some notable feats of problem-solving provide evidence that this bird is unusually intelligent. Over the centuries, it has been the subject of mythology, folklore, art, and literature. In many cultures, including the indigenous cultures of Scandinavia, ancient Ireland, and Wales, Bhutan, the northwest coast of North America, and Siberia and northeast Asia, the Common raven has been revered as a spiritual figure or godlike creature.',
  },
  {
    title: '🍔 Button Mushrooms (Agaricus bisporus)',
    slug: 'button-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-4-122221.jpg',
    type: 'mushroom',
    content:
      'Button mushrooms are some of the most commonly eaten mushrooms around the world. Button mushrooms can be white and brown. The color is the state of immature mushrooms, along with brown. When they are white, they are often simply called button mushrooms. When they are brown, they are often sold as chestnut mushrooms. Once they are mature, they are actually marketed as Portobello mushrooms. Their cap will have enlarged quite a bit and range between 4 to 6 inches (10 to 15 centimeters) in size in this state. This mushroom has a particularly complicated taxonomic history compared to other fungi. It has been in the Agaricus genus since 1946. Be careful when foraging these mushrooms since they have deadly look-alikes. For example, the Destroying Angel mushroom in the Amanita genus looks similar to button mushrooms. You can tell the difference by opening up the mushroom. The button mushroom should have pinkish or brown gills, while the Destroying Angel has pure white gills. China produces the vast majority of these mushrooms that supply the world’s kitchens. It grew 8.94 million tons in 2019. Compare that to the United States, which only grew 0.38 million tons in the same time frame.',
  },
  {
    title: '🍔 Oyster Mushrooms (Pleurotus ostreatus)',
    slug: 'oyster-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Oyster-Mushrooms-122221.jpg',
    type: 'mushroom',
    content:
      'Oyster mushrooms are some of the easiest mushrooms for home growers to produce. They have an interesting appearance compared to the more familiar button mushrooms. Their shape is where they got their name since they are shaped like the interior of an oyster. Don’t worry, though. They don’t taste like it. Oyster mushrooms have a mild flavor that some think is slightly sweet. They also have a unique texture since their gills grow on their exterior under their cap instead of protected. Specific industries also utilize oyster mushrooms in mycoremediation of polluted areas. The genus of the oyster mushrooms translates to mean ‘side ear’ because of their shape. They often grow in decaying hardwood trees. Another factor that makes them unusual is their capacity to be a weak parasite of living herbaceous plants. They are also nematophagous fungi, meaning they can catch and ingest nematodes by paralyzing them with toxins.',
  },
  {
    title: '🍔 Hedgehog Mushroom (Hydnum repandum)',
    slug: 'hedgehog-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Hedgehog-Mushroom-122221-1.jpg',
    type: 'mushroom',
    content:
      'The Hedgehog or Sweet Tooth mushroom is a golden mushroom. Its gills look more like quills. This trait makes them easier to identify and gives them their common name. These mushrooms are a popular edible variety because they have an engaging flavor profile. Hedgehog mushrooms have a peppery flavor like chanterelles but with even smokier undertones. Their texture is slightly crunchier than most mushrooms, even after being sauteed. If you have harvested your mushrooms later in the year, they might have a slightly bitter taste. However, enough heat during preparation gets rid of this. Hedgehog mushrooms are safe to harvest since they don’t have any poisonous look-alikes that could deceive you.',
  },
  {
    title: '🍔 Enoki Mushrooms (Flammulina velutipes)',
    slug: 'enoki-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Enoki-Mushrooms-122221-1.jpg',
    type: 'mushroom',
    content:
      'Enoki mushrooms have recently become more popular in the Western world. They originally come from Asian cuisine and also have the name Enokitake. The mushrooms tend to be white or brown. Wild-grown Enoki mushrooms are often darker and shorter. These mushrooms have long stems. They grow in tight bunches around each other and end with small caps. They suit Asian dishes quite well since they have been adapted around each other for hundreds of years. The mushrooms are slightly slimy, best in soups and noodle dishes. You have to practice some care when harvesting Enoki mushrooms in the wild. They look pretty similar to Deadly Galerina or Autumn Skullcup. We cover this poisonous species later in the article.',
  },
  {
    title: '🍔 Gypsy Mushroom (Cortinarius caperatus)',
    slug: 'gypsy-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Gypsy-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'The Gypsy mushroom isn’t quite as common as what we have covered previously. Part of the reason for this is they only naturally grow in the world’s northern latitudes. For example, they are commercially available in countries like Finland. In other countries along a similar line of latitude, you have to wild-harvest them. Gypsy mushrooms don’t have a great taste when eaten raw. They will often be bitter until you cook them. After cooking, the mushrooms will have a mild flavor. It is uncommon to find enough gypsy mushrooms together for an entire serving. However, their mild flavor goes well with an assortment of other mushrooms to bulk out a dish.',
  },
  {
    title: '🍔 Chanterelle Mushroom (Cantharellus cibarius)',
    slug: 'chanterelle-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Chanterelle-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'Chanterelle mushrooms are another very popular mushroom species. The most well-known chanterelles are those that have a bright yellow color. These mushrooms have a distinctive flavor that makes them globally sought after in the world of cuisine. This popularity puts the mushrooms up there with truffles as a culinary delicacy. Their flavor profile somehow lies between peppery and fruity. They are often cooked in fat such as butter to bring out their rich flavor. Be careful when harvesting chanterelles. Two mushrooms have a very similar appearance – the Jack O’Lantern mushroom and False Chanterelle. However, they are rarely toxic enough to cause a fatality. Instead, they will cause severe cramps and diarrhea.',
  },
  {
    title: '🍔 Lion’s Mane (Hericium erinaceus)',
    slug: 'lions-mane',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Lions-Mane-122221.jpg',
    type: 'mushroom',
    content:
      'The Lion’s Mane mushroom has a distinctive growth pattern that sets it apart from almost any other mushroom. First, its gills become long and teeth-like until they become quite a large “hairy” lump. They have some of the most well-known medicinal effects in the world. They are said to boost focus, mood, keep your brain healthy, and support your immune system. They also decrease inflammation in your body. These properties primarily come from their phytochemicals. These mushrooms have a distinctive lobster-like flavor. This unique palate has made them increasingly popular with chefs, particularly in American culinary schools.',
  },
  {
    title: '🍔 Chicken of the Woods (Laetiporus sulphureus)',
    slug: 'chicken-of-the-woods',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Chicken-of-the-Woods-122221.jpg',
    type: 'mushroom',
    content:
      'The mushroom Chicken of the Woods appears like something out of a fantasy novel. These mushrooms resemble more of the uncontrolled growth of fungus than a mushroom. Yet they are genuinely a mushroom and one of the more interesting ones to boot. As you might guess from the name, this mushroom tastes like chicken. Others think it tastes more like lobster. Although not everyone agrees with the flavor profile, its similar appearance to meat once cooked is almost irrefutable. As a result, it often makes an excellent meat substitute for vegetarians and vegans. Chicken of the Woods has an easily identified appearance. It is often ringed with bright yellow on the exterior. The closer to the central part of the mushroom usually is bright orange.',
  },
  {
    title: '🍔 Shimeji or White Beech Mushroom (Hypsizygus marmoreus)',
    slug: 'shimeji-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Shimeji-122221.jpg',
    type: 'mushroom',
    content:
      'Shimeji mushrooms are more challenging to distinguish while foraging since they can come in a wide variety of forms. They often grow in clumps similar to Enoki mushrooms. However, they will have a bigger cap and wider stems than Enoki. These mushrooms need to be cooked before eating. They are E2 mushrooms that can cause digestive issues when eaten raw. Once they have been thoroughly cooked, the bitterness of the mushrooms recedes, and a nutty, umami flavor is what is left. Their texture stays firm and crunchy even after cooking. These mushrooms are most commonly grown and used in East Asian countries. For example, they are often used in Japanese dishes because they taste like umami.',
  },
  {
    title: '🍔 Porcini Mushrooms (Boletus edulis)',
    slug: 'porcini-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Porcini-Mushrooms-122221.jpg',
    type: 'mushroom',
    content:
      'You might also know Porcini mushrooms by the Bay Bolete or Penny Bun mushroom. These have a wide distribution throughout the Northern Hemisphere, making them a widely-known and popular mushroom globally. These mushrooms commonly grow in forests and tree plantations since they need to form symbiotic associations with tree root tissue to survive. The mushroom fruiting body develops in the summer through autumn months. These mushrooms have a mild flavor that can be dried, eaten raw, or cooked in any form. They are commonly added to pasta, risotto, and soups. It is also one of the few fungi in the world sold pickled.',
  },
  {
    title: '🍔 Shiitake Mushrooms (Lentinula edodes)',
    slug: 'shiitake-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Shiitake-Mushrooms-122221.jpg',
    type: 'mushroom',
    content:
      'Shiitake mushrooms have long been cultivated in China and the rest of East Asia. However, they have only more recently become a commonality in Western kitchens. The mushrooms have an umami flavor and a velvety texture once cooked. These mushrooms are mostly sold dried. The stems of these mushrooms are tougher than the mushroom cap. That is why they are often discarded. However, if you don’t want to waste them, you can cook them longer than the caps. Then, they will develop a chewier texture. The Shiitake mushroom is also a medicinal mushroom in Asian traditional mushrooms. Shiitake mushrooms grow on deciduous trees in moist climates. These have quite a few look-alikes in the mushroom world.',
  },
  {
    title: '🍔 Maitake Mushroom (Grifola frondosa)',
    slug: 'maitake-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Maitake-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'Maitake mushrooms have a strange shape. They develop in ribbony stacks around the base of trees. They are prevalent around oak trees. We have had chicken-of-the-woods. Now, this mushroom’s common name is Hen-of-the-Wood. You can often find them in late summer through early autumn. Maitake has quite a tender texture even when eaten raw. They have a structure similar to a leaf along the primary body of the mushroom. These mushrooms are safe to eat raw and are also good when cooked. In Japanese culture, Maitake is often served as tempura. They have no toxic look-alikes. Some closely related species look similar, such as Meripilus sumstinei. These have more of a rubber texture, and they stain black. However, they are still edible.',
  },
  {
    title: '🍔 Black Trumpet Mushrooms (Craterellus cornucopioides)',
    slug: 'black-trumpet-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Black-Trumpet-Mushrooms-122221.jpg',
    type: 'mushroom',
    content:
      'The Black Trumpet mushroom goes by Black Chanterelle and the Horn of Plenty. It does have a trumpet-like shape similar to a standard chanterelle. Their inky black color makes them easy to identify. It also gave rise to the name ‘trumpet of the dead’ since they look like tiny trumpets sprouting from the underworld. The distribution of this mushroom is quite broad. It grows naturally in woodlands throughout Europe, North America, Japan, and Korea. They prefer to grow under broad-leaved trees like beech and oak in moist spots. They also prefer calcareous soil. They fruit in June through November. These mushrooms are a delicacy. You can eat them raw and cooked, although they are most often dried. When they are dried, their flavor profile takes on black truffle notes. They are also packed with beneficial fatty acids and protein.',
  },
  {
    title: '🍔 Reishi Mushrooms (Ganoderma lingzhi)',
    slug: 'reishi-mushrooms',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Reishi-Mushrooms-122221.jpg',
    type: 'mushroom',
    content:
      'Reishi mushrooms grow out from the trunk of a tree, generally within two to three feet of the ground. They are edible in any form and life stage. However, they are traditionally used as a supplement as a powder. That is because traditional Chinese medicine believed that these mushrooms helped promote memory and could even allow immortal life. Modern medicine is less enchanted with this mushroom. However, scientists have found that the reishi mushroom can supplement cancer patients during treatment periods. This is because they contain essential phytochemicals that work to support your overall health. The Reishi mushrooms have a fan-like shape that curves around the base of the tree trunk. They have a bright orange color that often starts the brightest close to the tree. After that, it progressively fades to yellow the closer to the edge you get. Finally, they dry into a deep orange-brown color.',
  },
  {
    title: '🍔 Wood Blewit (Clitocybe nuda)',
    slug: 'wood-blewit',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Wood-Blewit-122221.jpg',
    type: 'mushroom',
    content:
      'The Wood Blewit mushrooms are edible, but they are E2 mushrooms since they can cause allergic reactions in certain people. As a result, these mushrooms are not widely cultivated other than in certain European countries. The allergic reactions most often occur if you eat the mushroom raw. However, they can cause reactions even after they have been cooked. Therefore, if you intend to eat them, we recommend starting with small quantities.',
  },
  {
    title: '🍔 Morel Mushroom (Morchella esculenta)',
    slug: 'morel-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Morel-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'Morel mushrooms are one of the most prized edible mushrooms. They are tough to grow in cultivation, so they must be wild-harvested. Foragers make very good money providing high-end restaurants with morels. Families of mushroom hunters will often have secret ‘morel spots’ that they go back to each year to harvest these mushrooms. Morels have a well-regarded flavor and texture. Their flavor profile is nutty and earthy. Once cooked, they have a tender, meaty texture. They have a unique appearance as well. The mushroom cap almost looks like a wrinkled honeycomb or a spongy reef.',
  },
  {
    title: '🍔 Matsutake (Tricholoma matsutake)',
    slug: 'matsutake',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Matsutake-122221.jpg',
    type: 'mushroom',
    content:
      'Matsutake mushrooms might look like another typical mushroom. However, they are actually another prized mushroom species that is quite rare. They most frequently grow in Eastern countries. They have a thick, tall stem and an undersized cap. You can identify these mushrooms by their slightly spicy aroma. The Matsutake mushroom has become even more valuable in recent years. They form symbiotic relationships with conifers in woodland areas. Unfortunately, pine parasites and continued deforestation make it harder than ever to find these mushrooms in the wild.',
  },
  {
    title: '🍔 Cauliflower Mushroom (Sparassis crispa)',
    slug: 'cauliflower-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Cauliflower-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'The Cauliflower Mushroom is one of the mushrooms that make it difficult to describe the form of a mushroom. As their name would suggest, they look like cauliflower instead of mushrooms. In addition, they can get quite large and have deep crevices that make them difficult to clean. Even though they might be a chore, they have a flavor that makes them worth it. They have a sweet smell and a flavor similar to hazelnut. They often grow at the base of pine trees and can sometimes grow to attain several kilograms in weight.',
  },
  {
    title: '🍔 Charcoal Burner Mushroom (Russula cyanoxantha)',
    slug: 'charcoal-burner-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Charcoal-Burner-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'This mushroom looks like a charcoal burner, hence its common name. These grow in plenty throughout most of Europe, which is why they are one of the most common wild-harvested mushrooms on the continent. The mushroom is quite versatile since its cap is soft and has a crumbly texture once it’s cooked. In addition, it has a mild, nutty flavor that makes it easy to cook with a wide variety of dishes.',
  },
  {
    title: '🍔 Giant Puffball (Calvatia gigantea)',
    slug: 'giant-puffball',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Giant-Puffball-122221.jpg',
    type: 'mushroom',
    content:
      'The Giant Puffball mushroom has an inordinate amount of uses and has an almost instantly recognizable appearance. They are bright white and round like balls. They can get large, growing up to 44 pounds (20 kg). They have been used to dress wounds since they contain mucoprotein and calvacin. Although the mushroom is edible, you can only eat it when it is in an immature state. The entire mushroom needs to be white. The mushroom’s spores turn toxic when the flesh changes from white to yellow and brown. That is why the smaller mushrooms are more frequently used for culinary purposes.',
  },
  {
    title: '🍔 Crab Brittlegill (Russula xerampelina)',
    slug: 'crab-brittlegill',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Crab-Brittlegill-122221.jpg',
    type: 'mushroom',
    content:
      'The crab brittlegill is one of the most common edible mushrooms in the Russula genus. It earned its common name from the seafood odor that it produces before and after cooking it. Its flavor is relatively mild, but its odor can limit it to use in only certain dishes. The mushroom grows in coniferous woodlands throughout North America and Europe. The mushroom has a standard shape with a broad, slightly rounded cap and a thick stem. The upper side of their cap is a bright red and deep burgundy with white gills and stems.',
  },
  {
    title: '🍔 Dryad’s Saddle (Cerioporus squamosus)',
    slug: 'dryads-saddle',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Dryads-Saddle-122221.jpg',
    type: 'mushroom',
    content:
      'Dryad’s saddle is another trunk-dwelling mushroom. It grows throughout North America, Europe, and even Australia. They usually need to be wild-harvested, but they are not as difficult to find as mushrooms like morels. They have a cucumber scent with a lemony flavor in an immature form. Mature specimens of the dryad’s saddle aren’t toxic. However, they are much less frequently used in culinary dishes because they are tough. They also tend to contain maggots as they age. The mushrooms have a cupped, saddle-like shape with speckles of cream and brown.',
  },
  {
    title: '🍔 Honey Fungus (Armillaria mellea)',
    slug: 'honey-fungus',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Honey-Fungus-122221.jpg',
    type: 'mushroom',
    content:
      'The Honey Fungus is another highly sought-after wild mushroom. They are difficult to find in the wild throughout the Northern Hemisphere. They are also unique as one of the few parasitic mushrooms. They grow around the base of sick trees and feed on the dying tree. These mushrooms have a honey-like color and often grow in clumps. They are edible as an E2 mushroom. These are poisonous in their raw form. They can cause even more problems if you consume them with alcohol. However, if you prepare them just the right way, they have a rich, nutty flavor.',
  },
  {
    title: '🚫 Death Cap (Amanita phalloides)',
    slug: 'death-cap',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Death-Cap-122221.jpg',
    type: 'mushroom',
    content:
      'The Death Cap is one of the most poisonous mushrooms in the world. So much as half of the mushroom can be called a full-grown adult. Yet, it has a very mild appearance. They have white stems, gills, and a cap that ranges from white to light green. These mushrooms tend to grow throughout Europe in oak forests. It is now found in North America thanks to the cultivation of European tree species.',
  },
  {
    title: '🚫 False Parasol (Chlorophyllum molybdites)',
    slug: 'false-parasol',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-False-Parasol-122221.jpg',
    type: 'mushroom',
    content:
      'This mushroom is one of the most frequently ingested poisonous mushrooms. They look similar to the edible Parasol Mushroom and grow in manicured lawns. Thankfully, they are not deadly. Instead, they cause gastrointestinal distress like vomiting and diarrhea. The mushroom has a parasol-like shape when fully developed. It is primarily off-white with a scattering of tan spots across the top. It is also called the Green-spored Lepiota because of the unique color of its spores.',
  },
  {
    title: '🚫 Brown Roll-Rim (Paxillus involuts)',
    slug: 'brown-roll',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Brown-Common-Rollrims-122221.jpg',
    type: 'mushroom',
    content:
      'The Brown Roll-Rim mushroom appears as the name would suggest. The stem is usually creamy-white, and the mushroom cap is brown. Up until 1944, these mushrooms were thought to be an E2 mushrooms. People knew they caused gastric distress when eaten raw but didn’t feel anything negative after eating them cooked. However, more recently, they have been found to cause possibly fatal autoimmune hemolysis. In other words, it causes your immune system to attack and rupture its red blood cells. You can eat this mushroom for years and not realize the damage its done. Eventually, it causes acute kidney failure, respiratory failure, and physical shock.',
  },
  {
    title: '🚫 Deadly Conocybe (Conocybe filaris)',
    slug: 'deadly-conocybe',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Conocybe-122221.jpg',
    type: 'mushroom',
    content:
      'Deadly Conocybe is an innocent-looking mushroom, if there ever was one. It has a long, thin stem topped with a delicate-looking cap. It has a ring that forms about halfway up the stem, which helps identify it. These mushrooms are a common lawn mushroom, particularly in the Pacific Northwest. Although innocent in appearance, these belong to the same group of poisonous mushrooms that the Death Cap mushroom is in. They most closely resemble mushrooms in the Psilocybe genus because of a similar cap. The latter are psychedelic mushrooms and rarely harmful long-term.',
  },
  {
    title: '🚫 Elfin Saddle (Gyromitra infula)',
    slug: 'elfin-saddle',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Elfin-Saddle-122221-1.jpg',
    type: 'mushroom',
    content:
      'The Elfin Saddle mushroom was thought to be edible after cooking for many years. However, that has been proven untrue in recent years. Its toxins don’t break down even after getting cooked. Instead, they wreak long-term damage that is difficult to notice until years later. The mushroom gets its name from the saddle shape that the mushroom has once it matures. It has an orange-brown cap with a thick, white stem. Because of its shape when immature, it is also called hooded false morel.',
  },
  {
    title: '🚫 Destroying Angel (Amanita bisporigera)',
    slug: 'destroying-angel',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Destroying-Angel-122221.jpg',
    type: 'mushroom',
    content:
      'The Destroying Angel mushroom is bright white from cap to stem. Several mushrooms might be known by this name. However, A. bisporigera is the one most commonly called the Destroying Angel. These mushrooms are considered one of the most toxic species in the world. They grow in both woodlands and grassy meadows. They can easily be mistaken for Button Mushroom, Horse Mushroom, and the Meadow Mushroom, all of which are edible.',
  },
  {
    title: '🚫 Scaly Vase Chanterelle (Turbinellus floccosus)',
    slug: 'scaly-vase-chanterelle',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Scaly-Vase-Chanterelle-122221.jpg',
    type: 'mushroom',
    content:
      'Unlike the other highly sought-after mushrooms known as chanterelles, this is toxic. It is an E3 mushroom since it is regularly harvested, cooked, and consumed in certain countries like Nepal and Mexico. If they aren’t prepared quite right, and sometimes even if they are, they cause gastrointestinal issues like diarrhea and vomiting. These mushrooms have bright orange caps and long, creamy gills. It is the inverted shape of the mushroom that makes it look like a vase. The long scales that grow down the stem make it seem scaly.',
  },
  {
    title: '🚫 Yellow Stainer (Agaricus xanthodermus)',
    slug: 'yellow-stainer',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Yellow-Stainer-122221.jpg',
    type: 'mushroom',
    content:
      'The best way to identify and avoid this mushroom is to cut it open or pluck it from its base. When you do this, the yellow color will appear on the injured part of the mushroom. Cooking the mushroom will cause the entire mushroom to turn yellow. It also develops a strong odor. The Yellow Stainer mushroom is not one of the more harmful ones. Some people will not react to it, and others will have digestive irritation. It looks similar to button mushrooms until you see the yellow color.',
  },
  {
    title: '🚫 Satan’s Bolete (Rubroboletus satanas)',
    slug: 'satans-bolete',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Satans-Bolete-122221.jpg',
    type: 'mushroom',
    content:
      'Satan’s Bolete has a physical appearance that seems to deserve the name. It has a bright red stem and then a distorted creamy cap. If that isn’t enough to identify it, it turns blue when you cut into it. These squat mushrooms are poisonous but not one of the more common ones that cause poisoning because of their appearance. They can cause violent vomiting and diarrhea, but rarely death.',
  },
  {
    title: '🚫 Jack O’Lantern (Omphalotus illudens)',
    slug: 'jack-olantern',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Jack-OLantern-122221.jpg',
    type: 'mushroom',
    content:
      'The Jack O’Lantern mushroom is large, orange, and often found growing around the base of hardwood trees. It looks very similar to Chicken-in-the-Woods. You can distinguish it by its fleshier appearance and tendency to grow in larger clusters. They rarely kill when consumed but cause diarrhea, cramps, and vomiting.',
  },
  {
    title: '🚫 Ivory Funnel (Clitocybe dealbata)',
    slug: 'ivory-funnel',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Ivory-Funnel-122221.jpg',
    type: 'mushroom',
    content:
      'The Ivory Funnel is primarily white, and the cap is shaped like a funnel. They commonly grow in grassy areas like lawns and meadows throughout most of Europe and North America. They are also called the Sweating mushroom because of their sweating when consumed. These mushrooms are somewhat deadly due to the level of the toxin muscarine. Usually, the main symptoms are salivation and sweating. In worse cases, you could feel abdominal pain and further digestive issues. If you overeat, it can cause death.',
  },
  {
    title: '🚫 Autumn Skullcap (Galerina marginata)',
    slug: 'autumn-skullcap',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Autumn-Skullcap-122221.jpg',
    type: 'mushroom',
    content:
      'The Autumn Skullcap has a brown cap. It starts rounded in stereotypical mushroom fashion. As it matures, it flattens out. It has creamy gills and a deep brown stem. They grow during the fall season and mimic the Sheathed Woodtuft and Honey Fungus. Both of the latter two are edible. Another name for this mushroom is Funeral Bell because of the dangerous levels of amatoxin. It will often cause liver failure if the poisoning isn’t treated.',
  },
  {
    title: '🚫 Inky Cap (Coprinopsis atramentaria)',
    slug: 'inky-cap',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Inky-Cap-122221.jpg',
    type: 'mushroom',
    content:
      'The Inky Cap mushroom is debatably as toxic as an E2 mushroom. You should never consume this mushroom with alcohol. It is a perfectly edible mushroom outside of situations in which you would consume alcohol. With alcohol, it causes increased heart rate, digestive discomfort, and a tingling sensation in the limbs. Because of this, it is sometimes given as a treatment for alcohol. That is why another common name for the mushroom is Tippler’s Bane.',
  },
  {
    title: '🚫 False Champignon (Clitocybe rivulosa)',
    slug: 'false-champignon',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-False-Champignon-122221.jpg',
    type: 'mushroom',
    content:
      'This Clitocybe mushroom is another dangerous mushroom in this family. It looks similar to the Ivory Tunnel, another toxic mushroom. However, it can also get mistaken for the Fairy Ring Champignon, an edible mushroom. It even forms fairy rings in grassy meadows as the edible mushroom does. Luckily, the ingestion of the mushroom rarely causes death. However, it does cause sweating and salivation when consumed.',
  },
  {
    title: '🚫 Deadly Webcap (Cortinarius rubellus)',
    slug: 'deadly-webcap',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Deady-Webcap-122221.jpg',
    type: 'mushroom',
    content:
      'Deadly Webcap or Fool’s Webcap are very poisonous. The most common symptom of poisoning from this mushroom is kidney failure. If the mushroom is consumed in too high of a quantity, it will require a kidney transplant. These mushrooms have golden brown caps with brown, speckled brown stems with a ring around the middle and a concave shape. They appear somewhat similar to the Funnel Chanterelle and Waxy Cap, both edible.',
  },
  {
    title: '🚫 Brain Mushroom (Gyromitra esculenta)',
    slug: 'brain-mushroom',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Brain-Mushroom-122221.jpg',
    type: 'mushroom',
    content:
      'The Brain Mushroom is also called False Morel since they look pretty similar. Interestingly, the kind of toxin in this mushroom makes it fatally toxic when eaten raw but a delicacy after cooking. When poisoned, the symptoms include vomiting and diarrhea. This will be followed by a coma and sometimes death in extreme cases.',
  },
  {
    title: '🚫 Lilac Bonnet (Mycena pura)',
    slug: 'lilac-bonnet',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Lilac-Bonnet-122221.jpg',
    type: 'mushroom',
    content:
      'The Lilac Bonnet is unique because of its light purple color in the cap and stem. The gills are often creamy white. The mushrooms have a broad cap and exhibit bioluminescence in certain situations. While they are known to contain toxins, the effects when eaten are still relatively unknown. They appear similar to the Wood Blewit mushroom.',
  },
  {
    title: '🚫 Angel Wing (Pleurocybella porrigens)',
    slug: 'angel-wing',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Angel-Wing-122221.jpg',
    type: 'mushroom',
    content:
      'If there were such a thing as a beautiful mushroom, it would be the Angel Wing mushroom. They grow off the base of trees with a thin, flat cap that slowly dips as it matures. They are almost pure white. As the mushroom matures, it might change to have a faint yellow color. This mushroom is sneaky with its toxins. It is still unclear exactly what makes it toxic, and not everybody suffers from poisoning when they eat it. However, in particular people with pre-existing conditions, it can cause fatal encephalopathy. They look similar to edible Oyster mushrooms, so be careful when foraging.',
  },
  {
    title: '🚫 Sulfur Tuft (Hypholoma fasciculare)',
    slug: 'sulfur-tuft',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Sulfur-Tuft-122221.jpg',
    type: 'mushroom',
    content:
      'Sulfur Tuft gets its name for the shade of yellow over the mushroom cap. As the mushroom matures, its gills change from yellow to green. The toxicity of this mushroom is only a medium since it usually only causes digestive distress. However, it is capable of causing impaired vision and even paralysis in severe cases.',
  },
  {
    title: '🚫 Emetic Russula (Russula fragrantissima)',
    slug: 'emetic-russula',
    image_preview:
      'https://outforia.com/wp-content/uploads/2021/12/Types-of-Mushrooms-Emetic-Russula-122221.jpg',
    type: 'mushroom',
    content:
      'The other common name for this mushroom is more visually descriptive: the Pigskin Poison Puffball. The mushroom’s exterior looks like a pig’s skin, and the shape of the mushroom resembles a puffball mushroom. The mushroom can cause digestive issues. Even cutting it open so it releases its spores can be problematic since the spores can irritate your mouth, nose, and eyes on contact.',
  },
];

export async function up(sql) {
  await sql`
  INSERT INTO articles ${sql(
    articles,
    'title',
    'slug',
    'image_preview',
    'type',
    'content',
  )}`;
}

export async function down(sql) {
  await sql`
    DELETE FROM articles
  `;
}
