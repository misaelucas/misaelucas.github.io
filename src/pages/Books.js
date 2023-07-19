import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

function Books() {
  // Array of book objects
  const booksData = [
    {
      author: "Dião Crisóstomo",
      title: "The Sixty-eighth Discourse: On Opinion",
      text: `Most men in all their pursuits and interests follow them in utter ignorance of what the nature of each is or even what practical value each has; instead, they are drawn to them by opinion or pleasure or habit.

      Nor, on the other hand, in the case of those pursuits and interests from which they abstain and which they avoid engaging in, do they abstain because they know which are harmful or what is the nature of the harm which they entail; instead, in these matters too, whatever they observe that their neighbours avoid or things which it has become their custom to avoid or which they suppose will be unpleasant for themselves and are reputed to be accompanied by some pain, these things they generally view with misgiving.

      Moreover, while the sensations of pleasure and of pain are common to all men — though some are enslaved by them to a smaller and some to a greater degree — the matter of opinion varies and is not the same for all. Thus it happens that some praise or blame this and some that, frequently acting at variance in this regard.

      For example, pain is experienced by both the Indian and the Spartan when they are wounded or burnt, as well as by the Phrygian and the Lydian; yet while the Indian and the Spartan refuse to flinch because they have been hardened to it, the Phrygian and the Lydian do flinch, because they are weak and not hardened. Again, while pleasure inevitably is experienced in sexual relations and in food and drink which are pleasurable, not only by the Ionian but also by the Thessalian, the Italian Greek, the Getan, the Indian, and the Spartan, yet some give no thought at all to such gratifications and do not seek to know any of them in the least, while the others would accept death as the price of obtaining a little more pleasure.

      Now apparently the matter of opinion is of every conceivable kind and the differences to be found in this matter are very numerous and very great. And it is because of this fact that in no breed of animals would one find so great dissension, nor would one find any breed so at variance with itself — take, for example, horses or dogs or lions or cattle or deer; on the contrary, animals that are alike behave alike in feeding, in begetting, and in rearing their young, and they have the same appetites and the same aversions. The reason is that in general they follow only what is pleasant and shun what is painful.

      But the human race, which by nature partakes of wisdom, though it falls short of it through bad judgement and indifference, is inwardly full of opinion and self-deception. Moreover, men differ with one another in everything — in dress and apparel, in food and sexual pleasures, in honour and dishonour — according to nations and cities. And similarly also with the city, each one has his own individual ambition — one to obtain as much land as possible, another silver, another slaves, another all these things together, another to be admired for his eloquence and by this means to have greater power than his fellows, another strives merely to be clever and to achieve experience in politics, another to have influence for some other reason, another to indulge in luxury to the fullest extent.

      Now, as I was saying, in no one of these pursuits, in all likelihood, would even those who are reputed to be best in their line carry it on successfully. For, not knowing what is better or what is worse or what is advantageous, they exercise no choice at all. But he who has desired wisdom and has given thought to how he should look after himself and what education he should receive in order to become a good man and superior to the masses, he, I say, has been blessed with a good character and with a corresponding fortune besides. For there is hope that, if he investigates and receives instruction, he will discover what is required and with what aim and purpose he should carry on and regulate all else.

      But he who understands this would from that moment be successful in all things, both those which are thought to be more important and those which are thought to be less; and whether he were to follow horse-racing or to devote himself to music or to agriculture, or if he should wish to be a general or to hold the other offices or to conduct the other public business in his city, he will do everything well and would make no mistakes in anything. However, without this understanding, while in each of his labours he might sometimes seem both to himself and to his neighbours to be successful — for instance, if as a farmer he were to be fortunate with his crops, or if he were to have more than ordinary acquaintance with the handling of horses, or if he were to have fairly good knowledge of music, or if in athletic contests he could overcome his competitors — still on the whole he would fail, since he would be working at these things to no good end nor in such a way as to derive benefit.

      Therefore he is incapable of being prosperous, just as one cannot make a successful voyage if one does not know whither he is sailing, being carried along aimlessly on the sea, his ship at one moment sailing a straight course, should fortune so decree, but the next moment yawing, at one moment with the wind astern, the next with it dead ahead. Nay, just as with the lyre musicians first set the middle string and then tune the others to harmonize with that — otherwise they will never achieve any harmony at all — so with life, men should first come to understand best and then, having made this their goal, they should do everything else with reference to this; otherwise their life will be out of harmony and out of tune in all likelihood.`,
    },
  ];

  return (
    <>
      <Header />
      <div className="text-white font-mono mx-auto max-w-3xl mt-8">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="py-8 border-t border-white border-opacity-25 last:border-b text-center"
          >
            <h2 className="text-4xl mb-4">{book.author}</h2>
            <h3 className="text-3xl mb-2">{book.title}</h3>
            {book.text.split("\n\n").map((paragraph, pIndex) => (
              <p className="text-lg mb-4" key={pIndex}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Books;
