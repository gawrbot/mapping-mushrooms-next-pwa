import { Accordion } from 'flowbite-react';
import { GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Article, getAllArticles } from '../../database/articles';

type Props = { errors: string } | { articles: Article[] };

export default function Articles(props: Props) {
  if ('errors' in props) {
    return (
      <h1 className="text-2xl mt-8 mb-10 font-bold">
        Sorry, something went wrong
      </h1>
    );
  } else if ('articles' in props) {
    return (
      <>
        <h1 className="text-2xl mt-8 mb-10 font-bold">Lexicon </h1>
        <Accordion alwaysOpen={true} className="w-screen">
          <Accordion.Panel>
            <Accordion.Title>Mushrooms</Accordion.Title>
            <Accordion.Content>
              <div>
                <h2 className="mb-2 text-gray-500 dark:text-gray-400">Intro</h2>
                <p>
                  Mushrooms come in many different shapes and sizes. There are
                  currently about 14,000 species of mushrooms described. Some of
                  these are incredibly distinctive, while others are very
                  generic and similar. Unfortunately, it can be these
                  similarities that make mushrooms quite dangerous. That is why
                  we separate some of the most common edible mushrooms from the
                  poisonous ones.
                </p>
                <h3>The Classification of Mushrooms</h3>
                <p>
                  A mushroom is the fleshy body of a fungus. It bears spores,
                  which are essentially the fruit and seeds of the mushroom.
                  They can grow on the ground, in soil bags, or anywhere with a
                  food source. Many people think of mushrooms as a plant.
                  However, they are entirely separate from plants going all the
                  way to the top of the classification system. Mushrooms fall
                  into the fungi kingdom and are then separated from there. From
                  that point, all mushrooms share the same Phylum called
                  Basidiomycota. The Basidiomycota phylum is one of two
                  subdivisions of the subkingdom Dikarya. These divisions make
                  up what is often called the ‘higher fungi’ of the Fungi
                  kingdom. All members of this phylum are called Basidiomycetes.
                  The Basidiomycetes phylum falls into 14 groups.
                </p>
                <p>These include:</p>
                <ul>
                  <li>Toadstools</li>
                  <li>Puffballs</li>
                  <li>Stinkhorns</li>
                  <li>Polypores</li>
                  <li>Jelly Fungi</li>
                  <li>Boletes</li>
                  <li>Chanterelles</li>
                  <li>Earthstars</li>
                  <li>Smuts</li>
                  <li>Bunts</li>
                  <li>Rusts</li>
                  <li>Mirror yeasts</li>
                  <li>Cryptococcus</li>
                </ul>
                <p>
                  Some of these groups will contain the edible and poisonous
                  mushroom species we cover below. Others are not mushrooms but
                  can be pests or signs of disease and decay. Still others, such
                  as the yeast Cryptococcus, is a human pathogenic yeast,
                  meaning it can cause various infections and diseases in
                  humans. We will focus on the mushroom or toadstool group.
                  Fungi such as mushrooms are separated from the Plant kingdom
                  because of how they reproduce and function. For example,
                  mushrooms don’t have seeds. Instead, they develop using
                  spores. A spore is a minute, one or two-celled reproductive
                  unit. It grows in the fruiting structure of fungi, which is
                  the actual mushroom. Mushrooms grow from underground stands of
                  mycelium that eventually bear fruit. Then, once the mushroom
                  matures, it disperses the spores through slits and tubes that
                  run underneath the cap to the exterior. Another distinguishing
                  factor of mushrooms is that they don’t have chlorophyll. That
                  means they cannot photosynthesize and must get their energy
                  from breaking down organic matter. This process is why
                  mushrooms are called saprophytes, or a fungus that lives on
                  dead and decaying organic matter. These decaying matter will
                  often be old plant matter or small particles left in the soil
                  above where the mushroom grows. However, you should be careful
                  since some mushrooms can grow and absorb nutrients from a
                  potentially harmful substance.
                </p>
                <h3>Types of Mushrooms: Edible and Poisonous Varieties</h3>
                <p>
                  As we dig deeper into mushroom species, we will start with the
                  characteristics of edible mushrooms and continue into
                  poisonous species. Some fall into a grey area. For example,
                  some of these aren’t necessarily edible or poisonous. Instead,
                  when appropriately prepared, they can have characteristics
                  useful in the medical field, or people can harness that for
                  drug-related uses. We won’t cover these later species since
                  they vary, and many of their applications have not been
                  confirmed.
                </p>
                <h4>🍴 Types of Edible Mushrooms</h4>
                <p>
                  Before we get into some of the edible mushrooms, we need to
                  develop a better understanding of what we mean by edible.
                  There is a ranking system used to classify the edibility of
                  mushrooms since it’s not always straightforward. The edibility
                  status ranges from E1 to U. E1 means ‘edibility confirmed.’ E2
                  stands for ‘edible but with conditions.’ These conditions
                  almost always signify the degree of preparation you need to
                  give a mushroom before eating it. For example, you will often
                  need to cook the mushrooms on the stove or in a baked dish
                  before the toxins in it break down to a point where they are
                  no longer harmful. That is why there are some regions where
                  the mushroom Gyromitra esculenta or False Morel is eaten and
                  others where it is warned of as poisonous. The mushrooms are
                  commonly eaten and even sold as a canned good in Poland,
                  Finland, Sweden, and Estonia, among others. Yet, field guides
                  put out heavy warnings about the mushroom in Spain and Italy.
                  There have been deaths because of the mushroom, but it is
                  infrequent since quick, proper preparation is all you need to
                  make it edible. The other ratings for mushrooms are E3,
                  ‘edibility uncertain,’ P for ‘poisonous, and U for
                  ‘unconfirmed.’ If a mushroom falls into any of these latter
                  three categories, it is best if you avoid it. All the edible
                  mushrooms in the list below are either E1 or E2 mushrooms,
                  most of them being E1 species.
                </p>
                <h4>☠️ Types of Poisonous Mushrooms</h4>
                <p>
                  Certain toxic mushrooms will only cause digestive discomfort
                  when consumed. However, others can be fatal if you consume
                  them, even in small amounts. Typically poisonous mushrooms are
                  separated into six categories based on the toxic compounds.
                  Amatoxins are the most dangerous, likely killing you if you
                  consume them. Mushrooms in this category almost all have
                  common names that give you a clue to their poisonous
                  tendencies. They include Destroying Angel, Deadly Parasol, and
                  Fool’s mushroom. Gyromitrin toxins often cause digestive
                  distress. However, they can cause enough damage to your
                  kidneys and liver to kill you if consumed in large quantities.
                  Gastrointestinal irritants are the largest group of toxic
                  mushrooms. They are much less likely to kill you or send you
                  to the hospital. However, they will cause gastrointestinal
                  distress until they are expelled from your body. Muscarine
                  messes with both your digestive system and your
                  parasympathetic nervous system. It can cause tears, heavy
                  sweating, and salvation, along with a drop in blood pressure.
                  The symptoms will fade over 24 hours. It is rare for death by
                  consuming these mushrooms, but not impossible. Mushrooms with
                  the compound ‘coprine’ are not toxic themselves. It is only
                  when you eat them and consume alcohol that they can cause
                  discomfort. Recovery happens within 24 hours. Finally,
                  ibotenic acid is a psychoactive compound. It often has
                  psychedelic effects combined with confusion, loss of muscle
                  coordination, sweating, chills, and hallucinations. It is
                  typical to completely lose your memory of the experience with
                  the mushroom after sleeping it off.
                </p>
                <p>
                  Thank you for the content to outforia! Further reading here:{' '}
                  <Link href="https://outforia.com/types-of-mushrooms/">
                    Outforia
                  </Link>
                </p>
              </div>
              <h2>Articles on Edible and Poisonous Mushrooms</h2>
              <ul>
                {props.articles.map((article) => {
                  if (article.type === 'mushroom') {
                    return (
                      <li key={article.id}>
                        <h2>{article.title}</h2>

                        <Link
                          href={`/lexicon/${article.slug}`}
                          key={article.title}
                        >
                          <Image
                            alt={article.title}
                            src={article.imagePreview}
                            width={100}
                            height={100}
                          />
                        </Link>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Crows</Accordion.Title>
            <Accordion.Content>
              <h2 className="mb-2 text-gray-500 dark:text-gray-400">Intro</h2>
              <p>
                Intelligence runs in the crow family, a diverse group of more
                than 120 bird species. And, as with most geniuses, crows and
                their relatives tend to be misunderstood. Known as corvids, this
                family of birds includes not just crows, but also ravens, rooks,
                jays, jackdaws, magpies, treepies, nutcrackers, and choughs.
                They range from the 1-ounce dwarf jay, a small forest bird found
                only in Mexico, to the 3-pound common raven, a wily opportunist
                found across the Northern Hemisphere. Corvids are incredibly
                clever overall, with the largest brain-to-body-size ratios of
                any birds, but those in the genus Corvus tend to be especially
                brainy. This genus includes the crows, ravens, rooks, and
                jackdaws, accounting for about a third of all corvid species.
                Many of these have a brain-to-body-size ratio (or
                "encephalization quotient") you'd expect from an ape, not a
                bird. In fact, according to a study published in the journal
                Current Biology, "the crow brain is the same relative size as
                the chimpanzee brain." Humans have long recognized the
                craftiness of crows and ravens, as seen in centuries of folklore
                casting the birds as thieves, tricksters, problem solvers, wise
                advisors to gods, or even deities themselves. Yet we also tend
                to stereotype these birds, overlooking many of their
                complexities to brand them as spooky, troublesome, or outright
                nefarious. Fortunately, our appreciation of their intelligence
                has soared in recent years, thanks to research exploring what
                corvids can do with all that brainpower. Below is just a
                sampling of what we've learned about their mental and social
                lives, focusing mainly on crows but also including ravens and
                other relatives:
              </p>
              <h3>Some Facts about Crows</h3>
              <ul>
                <li>
                  <h4>Crows Have Shrewd Ways to Get Food</h4>
                  <p>
                    Crows tend to be opportunistic and creative, commonly
                    exploiting new food sources or adopting new feeding
                    strategies to make their lives easier. The American crow is
                    known to catch its own fish, for example, in some cases even
                    using bread or other food as bait to lure fish closer, as
                    captured in the video below. At the same time, this species
                    often steals food from other animals, sometimes even
                    secretly following victims back to their nests or food
                    caches. In one case, a group of American crows was seen
                    distracting a river otter so they could steal its fish,
                    according to the Cornell Lab of Ornithology, while another
                    group followed common mergansers to intercept minnows the
                    ducks had been chasing into shallow water. Many crows also
                    drop snails and hard-shelled nuts from the air while flying,
                    using gravity and the ground to do the hard work for them.
                    This is done by other birds, too, but some crows seem to
                    have taken this a few steps further. Crows in Japan, for
                    instance, place walnuts on roads so cars will crush the
                    shells, then wait for the traffic light to change so they
                    can safely collect the opened nut.
                  </p>
                </li>
                <li>
                  <h4>Crows Don't Just Use Tools; They Also Make Them</h4>
                  <p>
                    In the early 1960s, primatologist Jane Goodall shocked the
                    world with her discovery that wild chimpanzees use twigs as
                    tools to catch termites, debunking the idea that humans are
                    the only tool-using species. Tool use does require a certain
                    level of cognitive sophistication, but we now know lots of
                    other animals also use tools in the wild, and not just our
                    fellow primates. In fact, one of the most studied examples
                    of non-primate tool use comes from a corvid: the New
                    Caledonian crow. Many corvids use tools, but New Caledonian
                    crows are especially advanced. Like chimps, they use sticks
                    or other plant matter to fish insects out of crevices. That
                    alone is impressive, especially without hands, but it's just
                    one of many tricks up their sleeves. In addition to choosing
                    tools that are naturally well-shaped for a particular task,
                    New Caledonian crows also manufacture tools in the wild,
                    which is much rarer than just using found objects. This
                    ranges from trimming the leaves off a stick to creating
                    their own hook-shaped tools from twigs, leaves, and thorns.
                    In controlled experiments, New Caledonian crows have also
                    bent pliable materials into hooked tools, and even shown
                    spontaneous "metatool use" — the ability to use one tool on
                    another. Great apes like chimps and orangutans can solve
                    metatool tasks, researchers noted in one study, but even
                    monkeys are known to struggle with them. These crows have
                    used a short stick to reach a longer stick that can reach a
                    reward, for example, but have also made new compound tools
                    from two or more otherwise non-functional elements. As one
                    of the study's authors told the BBC, that requires imagining
                    what a tool will do before it exists — despite having never
                    seen such a tool before — then making it exist and using it.
                  </p>
                </li>
                <li>
                  <h4>Crows Can Solve Puzzles on Par with Human Kids</h4>
                  <p>
                    In Aesop's Fable "The Crow and the Pitcher," a thirsty crow
                    encounters a pitcher with a little water in it, but is
                    initially thwarted by the low water level and the bottle's
                    narrow neck. Then the crow starts dropping pebbles into the
                    pitcher, however, eventually raising the water level high
                    enough for it to drink. Not only has research verified that
                    crows can do this, but it shows they can pass the
                    water-displacement test at a level similar to human children
                    between the ages of 5 and 7. Crows have conquered a variety
                    of other convoluted tests, too. The broadcasting company BBC
                    even showed a crow solving an eight-step puzzle in its
                    series Inside the Animal Mind. Crows can also plan their
                    tool use, according to one study in the journal Current
                    Biology, which found crows could solve a metatool problem
                    when each step was out of sight of the others, planning
                    ahead three behaviors into the future. The birds showed an
                    ability to "mentally represent the goals and sub-goals of
                    metatool problems," the researchers wrote, and even
                    successfully ignored an extra tool that was planted in their
                    path to distract them.
                  </p>
                </li>
                <li>
                  <h4>Crows Hold Funerals for Their Dead</h4>
                  <p>
                    Crows are famous for holding "funerals" when one of their
                    kind has died. It might be a lone individual or a group of
                    crows — known as a murder, of course — and it may be
                    solemnly quiet or cacophonous. In some cases the crows may
                    keep a vigil over the fallen bird for days on end. Could
                    they really be mourning? Maybe, explains Kaeli Swift, a
                    postdoctoral researcher and corvid expert at the University
                    of Washington. As Swift writes on her blog, although she
                    holds "little doubt that they have emotional intelligence,"
                    testing this possibility remains scientifically problematic,
                    since "there's still no way we can truly know what's
                    happening on an emotional level in an animal's head." So,
                    without necessarily ruling out grief, Swift and other
                    researchers have focused more on "danger learning" as a
                    likely motivator for corvid funerals. "If I were to find a
                    dead person in the woods I might be feeling sad, but I'd
                    also be alarmed and likely looking for the cause of death to
                    make sure I'm not next," Swift writes. "Perhaps the crows
                    are doing the same thing, looking for the source of danger
                    and remembering key elements of the experience that will
                    help keep them safe in the future."
                  </p>
                </li>
                <li>
                  <h4>Crows Gossip, Hold Grudges, and Know Who You Are</h4>
                  <p>
                    Several kinds of corvids have demonstrated a knack for
                    recognizing human faces. Magpies and ravens, for example,
                    are both known to scold specific researchers who have gotten
                    too close to their nests in the past, regardless of what the
                    researchers wear. Some of the best evidence of this ability
                    comes from crows in Washington state, where Swift and her
                    colleagues have done extensive testing on the birds'
                    reactions to human faces they've learned to distrust. Led by
                    John Marzluff, a professor of wildlife science at the
                    University of Washington, the testing was born from the
                    realization that crows seem to hold grudges against specific
                    people who'd netted and banded them for research.
                    Researchers began wearing a rubber caveman mask when they
                    did this, which revealed how the crows were identifying
                    their enemies. Crows scolded and mobbed anyone who wore the
                    caveman mask, regardless of who was actually underneath. In
                    later tests, researchers achieved a similar effect by
                    wearing masks while holding a dead (taxidermied) crow, which
                    resulted in crows pestering future wearers of those same
                    masks. "The interesting part was that not a whole lot
                    mattered except the face," Marzluff told the National
                    Wildlife Federation (NWF). Lots of other animals can also
                    recognize human faces, but crows still stand apart, both for
                    the length of their memories and for how they share
                    information among themselves. Years after the study began,
                    crows "continue to harangue the banding mask," the NWF
                    explains, "even though they see it only twice a year for a
                    few hours at a time." But this animosity isn't just from
                    crows who saw the original banding event. The percentage of
                    birds scolding and mobbing the caveman mask grew over time,
                    roughly doubling within seven years, even though most had
                    never been banded and were unlikely to have personally
                    witnessed the mask doing anything offensive. Some were even
                    young crows not born yet when the grudge began. The crows
                    are apparently transmitting important information — the
                    identity of a seemingly dangerous person — to their families
                    and companions. As Kat McGowan wrote for Audubon Magazine in
                    2016, nearly all the birds originally trapped by the caveman
                    are probably dead by now, yet "the legend of Seattle's Great
                    Crow Satan still grows." Learning to identify humans could
                    be a valuable skill for urban crows, since some of us are
                    dangerous, some neutral, and some helpful. Wild crows seem
                    largely indifferent to the faces of people who haven't
                    wronged them, and can also form positive relationships with
                    us — like the girl in Seattle who famously received a
                    collection of trinkets from the crows she'd been feeding.
                  </p>
                </li>
                <li>
                  <h4>Crows Have Shrewd Ways to Get Food</h4>
                  <p>
                    Crows tend to be opportunistic and creative, commonly
                    exploiting new food sources or adopting new feeding
                    strategies to make their lives easier. The American crow is
                    known to catch its own fish, for example, in some cases even
                    using bread or other food as bait to lure fish closer, as
                    captured in the video below. At the same time, this species
                    often steals food from other animals, sometimes even
                    secretly following victims back to their nests or food
                    caches. In one case, a group of American crows was seen
                    distracting a river otter so they could steal its fish,
                    according to the Cornell Lab of Ornithology, while another
                    group followed common mergansers to intercept minnows the
                    ducks had been chasing into shallow water. Many crows also
                    drop snails and hard-shelled nuts from the air while flying,
                    using gravity and the ground to do the hard work for them.
                    This is done by other birds, too, but some crows seem to
                    have taken this a few steps further. Crows in Japan, for
                    instance, place walnuts on roads so cars will crush the
                    shells, then wait for the traffic light to change so they
                    can safely collect the opened nut.
                  </p>
                </li>
                <li>
                  <h4>Crows Mate for Life, but They're also 'Monogamish'</h4>
                  <p>
                    Crows are not only social birds, but also more
                    family-oriented than many people realize. They mate for
                    life, meaning a mated pair will typically stay together for
                    the rest of their lives, but their family lives may also be
                    a little more complicated than that suggests. Crows are
                    "monogamish," Swift writes, adding a more scientific
                    clarification that they're considered "socially monogamous
                    but genetically promiscuous." This means they generally stay
                    with one partner for life, but genetic analyses show that
                    male crows only father about 80% of their family's
                    offspring. Some crows also lead a "double life," according
                    to the Cornell Lab of Ornithology, splitting time between
                    their families and big communal roosts. American crows
                    maintain a territory year-round, for example, where the
                    entire extended family lives and forages together. "But
                    during much of the year, individual crows leave the home
                    territory to join large flocks at dumps and agricultural
                    fields, and to sleep in large roosts in winter. Family
                    members go together to the flocks, but do not stay together
                    in the crowd. A crow may spend part of the day at home with
                    its family in town and the rest with a flock feeding on
                    waste grain out in the country."
                  </p>
                </li>
                <li>
                  <h4>
                    Young Crows May Stay Home for a While to Serve as 'Helpers'
                  </h4>
                  <p>
                    American crows start to nest in early spring, building their
                    nests from sticks and lining them with soft materials like
                    grass, fur, or feathers. (They may also build decoy nests if
                    they think someone suspicious is watching them.) Young crows
                    will remain dependent on their parents for a couple months
                    after they fledge, but they also tend to stay near their
                    family for a while longer, even after moving out of the
                    nest. These chicks are still fiercely defended by their
                    parents, Swift writes, creating a sort of extended
                    adolescence that allows them time and energy for play
                    behaviors, which might be important for their development
                    and cultural learning. Young crows will eventually start
                    spending less time with their parents and more time with
                    larger flocks, and face a decision as fall and winter set
                    in. "They can either take off to 'float' before finding a
                    mate and establishing a territory of their own," Swift
                    writes, "or remain on their home turf and act as a 'helper'
                    for next year's brood." The latter is known as cooperative
                    breeding, in which more than two individuals help take care
                    of offspring in a single brood. In most American crow
                    populations, older offspring continue to help their parents
                    raise new chicks for a few years, according to the Cornell
                    Lab. A crow family may include as many as 15 individuals,
                    with offspring from five different years all pitching in to
                    help. It's unclear why this evolved, Swift writes, but it
                    may help delay the dispersal of young crows when there isn't
                    enough open territory nearby for them to claim. ("See," she
                    adds, "millennials are just doing what comes naturally.")
                  </p>
                </li>
                <li>
                  <h4>Crows Are Intelligent, but Not Invincible</h4>
                  <p>
                    It's common for people to vilify crows, often focusing on
                    unwanted behavior but overlooking more relatable or
                    redeeming qualities. The American crow, for one, has been
                    the subject of extermination attempts in the past, including
                    the use of dynamite on large winter roosts. Those efforts
                    ultimately failed, however, and thanks largely to its
                    intelligence and adaptability, the American crow is now more
                    common than ever across a range of habitats, including
                    farms, towns, and big cities. Other corvids have similarly
                    adjusted to or even capitalized on civilization, but being
                    intelligent is no guarantee these birds are safe from us.
                    The Hawaiian crow, for instance, is a smart corvid with a
                    penchant for tool use, yet it was declared extinct in the
                    wild in 2002 after being wiped out by a combo of disease,
                    invasive predators, habitat loss, and human persecution.
                    Fortunately, scientists saved enough of the birds to start a
                    successful captive-breeding program, and reintroduced the
                    species into the wild. Crows do sometimes raid farms and
                    gardens, but any damage they cause may be offset by
                    ecological benefits like seed dispersal and eating pest
                    insects. Plus, while any species has an inherent right to
                    exist, we're especially lucky to have brainiacs like corvids
                    living among us. They can help us learn more about our own
                    intelligence, but also remind us how much we still have in
                    common with the wildlife all around us.
                  </p>
                </li>
              </ul>
              <h2>Articles on the 6 common crows in Austria</h2>
              <ul>
                {props.articles.map((article) => {
                  if (article.type === 'crow') {
                    return (
                      <li key={article.id}>
                        <h2>{article.title}</h2>

                        <Link
                          href={`/lexicon/${article.slug}`}
                          key={article.title}
                        >
                          <Image
                            alt={article.title}
                            src={article.imagePreview}
                            width={100}
                            height={100}
                          />
                        </Link>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </>
    );
  }
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  const articles = await getAllArticles();

  if (typeof articles === 'undefined') {
    return {
      props: {
        errors: '400 - Bad request',
      },
    };
  }

  return {
    props: { articles: articles },
  };
}
