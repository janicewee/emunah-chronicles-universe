// Book interface and data for Emunah Chronicles Universe - v5 (Triggering redeploy)
export interface Book {
  id: string;
  title: string;
  readingOrder: number;
  author: string;
  synopsis: string;
  excerpt: string;
  coverUrl: string;
  videoCoverUrl?: string;
  links: {
    books2read?: string;
    amazon: string;
    barnesNoble: string;
    kobo: string;
    hoopla?: string;
    fable: string;
    everand: string;
    freePdf?: string;
  };
  videos: { id: string; title: string; description: string }[];
  series: string;
}

export const books: Book[] = [
  {
    id: "disturbing-dreams",
    title: "Disturbing Dreams",
    readingOrder: 1,
    author: "Janice Wee",
    series: "Emunah Chronicles #1",
    synopsis:
      "Emunah and Leo stumble on a corporate conspiracy with eerie implications. Beast Corp delves deeply into AI, cloning, surveillance technology and DNA manipulation but to what end? Their investigations lead to alien encounters linked to the occult. Emunah's dreams grow more disturbing and she is not the only one affected. Are these nightmares products of overactive imaginations or are they prophetic? This speculative sci-fi tale dances around bible prophecy and may very well freak you out.",
    excerpt: `"Logan. They saw me." Emunah's voice wobbled, emanating sheer terror.
"Who saw you?" Himself still recovering from his nightmare, he asked as softly, as calmly as he could.
"Evil creatures. Filthy supernatural beings. Aliens," she whispered.
"What do you mean?" He couldn't shake of a lingering sense of foreboding. "Tell me what happened."
Emunah related her story.
That was the last he would ever hear from her.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1-1760411021422.jpg",
      links: {
        books2read: "https://books2read.com/u/4A2rGp",
        amazon: "https://www.amazon.com/dp/B0C87Y2VLC",
        barnesNoble:
          "https://www.barnesandnoble.com/w/disturbing-dreams-janice-wee/1143658446",
        kobo: "https://www.kobo.com/sg/en/ebook/disturbing-dreams",
        hoopla: "https://www.hoopladigital.com/title/16326913",
        fable: "https://fable.co/book/x-9798215364949",
        everand:
          "https://www.everand.com/book/674768037/Disturbing-Dreams-Emunah-Chronicles-1",
        freePdf: "https://www.janicewee.com/books/disturbing-dreams-free-ebook.pdf",
      },
    videos: [
      {
        id: "DM5IRa4QSfc",
        title: "Disturbing Dreams Book Trailer",
        description:
          "Emunah's nightmare. Is it a prophecy of things to come?",
      },
      {
        id: "3qYv8rvklaE",
        title: "Emunah Chronicles Book 1",
        description:
          "Eerie science and supernatural encounters drive Emunah and her friends down a rabbit hole.",
      },
    ],
  },
  {
    id: "abigail",
    title: "Abigail",
    readingOrder: 2,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Abigail is late, but a hunky stranger comes to her rescue, sheltering and carrying her to the office. They meet again and she falls hard for him while he falls for her friend Penelope who ran into the pair over their lunch date. As she nurses her broken heart, her sweet neighbour and long time friend, Aaron comforts her. When Ben gets wind of Aaron's grounding presence in her life, Ben shows up to lure her away. Who would Abigail choose?",
    excerpt: `"Ben," Abigail took her date's arm. "We've got to go."
"Penelope," Ben's voice oozed so much tenderness, Abigail cringed. "Join us."
"I can't," she frowned. "I'm still waiting for my date. You guys go ahead," her eyes met Abigail's. "Oh, hi Abigail," she shot a saccharine smile. "I didn't know you were here. You two go ahead and enjoy the show." Playfully, Penelope shoved the big guy towards Abigail.
Ben walked in silence, leading Abigail to their seats. Though physically present, his mind was elsewhere.
Bouncing his leg as he sat, he mumbled. "Abigail, wait here," he stood up.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book1abigail-1760404534946.jpg",
    links: {
      books2read: "https://books2read.com/u/bPwEYr",
      amazon:
        "https://www.amazon.com/Abigail-Emunah-Short-Stories-Janice/dp/B0D4SYB3NF",
      barnesNoble:
        "https://www.barnesandnoble.com/w/abigail-janice-wee/1145575901",
      kobo: "https://www.kobo.com/sg/en/ebook/abigail-47",
      hoopla:
        "https://www.hoopladigital.com/ebook/before-harpazo-janice-wee/17234783",
      fable: "https://fable.co/book/x-9798224596621",
      everand:
        "https://www.everand.com/book/756478990/Before-Harpazo-Emunah-Short-StoryCollection-1",
    },
    videos: [
      {
        id: "PiBxmQxxSUY",
        title: "Abigail. Emunah Short Stories Book 1",
        description:
          "It's a tragedy when we fail to realise that what we longed for, has been with us all along…. Until it's too late. Such is the story of Abigail Applewood.",
      },
    ],
  },
  {
    id: "oliver",
    title: "Oliver",
    readingOrder: 3,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Oliver's family home is haunted. His sister Lydia, is obsessed with a cursed box believed to hold their late parents' ashes. Then Oliver discovers their father did not die but was living in exile. When he brings his father home, Lydia rejects their dad. His friend gets thrown out of his home. Penelope is killed in an accident and it's all his fault. Or is it?",
    excerpt: `A viral video made its way to his news feed. A savage with a metal spear saved a teenager from a wild boar. The camera focused on the bearded man for a split second, before the man escaped into the woods.
Oliver replayed the video, freezing it to examine the wild man's face. He knew those eyes. That's his father. His dad's death was a sham!`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2oliver-1760404534983.jpg",
    links: {
      books2read: "https://books2read.com/u/bP8zod",
      amazon:
        "https://www.amazon.com/Oliver-Emunah-Short-Stories-Janice/dp/B0D6Q65HHG",
      barnesNoble:
        "https://www.barnesandnoble.com/w/oliver-janice-wee/1145730081",
      kobo: "https://www.kobo.com/sg/en/ebook/oliver-47",
      hoopla:
        "https://www.hoopladigital.com/ebook/before-harpazo-janice-wee/17234783",
      fable: "https://fable.co/book/x-9798227805324",
      everand:
        "https://www.everand.com/book/756478990/Before-Harpazo-Emunah-Short-StoryCollection-1",
    },
    videos: [
      {
        id: "3keYVfUeJTY",
        title: "Oliver. Emunah Short Stories Book 2",
        description:
          "Something sinister lurks in the corners of his sight, an unseen entity with malevolent intent. Is it a figment of his imagination, or is Oliver truly being watched by an ancient evil which seeks to destroy him?",
      },
    ],
  },
  {
    id: "emunah",
    title: "Emunah",
    readingOrder: 4,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Emunah won a scholarship and moved to the west for her studies. When she fell through thin ice on her first day, Jayden rescued her. He was the school's football star. Their relationship blossomed in campus, at times blurring the fine line between friendship and romance. After graduation, Emunah remained close to Ava, Emma and Penelope her study group in college. Jayden and Emunah remained best of friends. Jayden offered to matchmake Emunah but the guy he picked for her was her housemate, Oliver. That double date led to a stronger platonic friendship between the housemates rather than romance. Through Oliver, Emunah meets Lydia and helps their father break the curse that bound Oliver's sister. Still single, Emunah bought an A.I. boyfriend from Beast Corp, which led Emunah and her friends down a rabbit hole, exploring the strange going ons in Beast Corp. At the same time, Emma's obsession with aliens influenced Emunah. One thing led to another and Emunah gained an extraterrestrial stalker. Things get stranger and then without warning, poof.",
    excerpt: `Were we a couple?
I don't know.
He never kissed or even held my hand when we went out. We'd walk side by side, laughing, commiserating, enjoying each other's company. He behaved more like a best friend than a lover.
How do I feel about him?
He's so incredibly sexy, every hot-blooded woman is crushing on him. I'm no exception.
Did I just say I have a crush on him. I take that back. I like him very, very good friend.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3emunah-1760404534743.jpg",
    links: {
      books2read: "https://books2read.com/u/4A1eyA",
      amazon:
        "https://www.amazon.com/Emunah-Short-Stories-Janice-Wee/dp/B0D7QR9CBJ",
      barnesNoble:
        "https://www.barnesandnoble.com/w/emunah-janice-wee/1145849359",
      kobo: "https://www.kobo.com/sg/en/ebook/emunah-2",
      hoopla:
        "https://www.hoopladigital.com/ebook/before-harpazo-janice-wee/17234783",
      fable: "https://fable.co/book/x-9798227556059",
      everand:
        "https://www.everand.com/book/756478990/Before-Harpazo-Emunah-Short-StoryCollection-1",
    },
    videos: [
      {
        id: "nmUIBfMc_tg",
        title: "Christian Speculative Fiction : Emunah by Janice Wee",
        description:
          "Emunah's story set in the end times promises a thrilling journey of friendship, love, and supernatural encounters. It highlights deception in these last days.",
      },
      {
        id: "Wy4r5MvOd-o",
        title: "Emunah's love life, friendships and strange encounters.",
        description:
          "Forbidden love. Aliens. Ghosts and more in this third instalment in Janice wee's new series.",
      },
      {
        id: "G0oqaVH7PFQ",
        title: "Do beings from other realities exist?",
        description: "Emunah vs Emma. Is it the Rapture or are aliens involved?",
      },
    ],
  },
  {
    id: "john",
    title: "John",
    readingOrder: 5,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "John a frail Yeshiva student encounters bullies and vows to transform himself into a strong man like Samson. He befriends a trainer, Eli, who helps him meet his goals. John's father passed away and Rabbi Caleb stole their inheritance, while pressuring his mom for money. As the widow's health was failing, John was determined to seek medical help for her, eyeing the prize money from a weight lifting competition to pay the bills.",
    excerpt: `The aroma of lentil soup and grilled beef wafted from the kitchen.
As they sat at the table for a quiet meal, the doorbell rang.
"Shalom, Sarah." The nasal voice made John's stomach turn. It's Rabbi Caleb.
"Shalom, Rabbi," John's mom paled as she opened the door.
"I hope you are managing well under the circumstances." A sharp smile graced the Rabbi's face, giving him the appearance of a compassionate shark.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book4john-1760404535976.jpg",
    links: {
      books2read: "https://books2read.com/u/bagXL6",
      amazon:
        "https://www.amazon.com/John-Emunah-Short-Stories-Janice/dp/B0DB6DNSL4",
      barnesNoble:
        "https://www.barnesandnoble.com/w/john-janice-wee/1146057067",
      kobo: "https://www.kobo.com/sg/en/ebook/john-127",
      hoopla:
        "https://www.hoopladigital.com/ebook/before-harpazo-janice-wee/17234783",
      fable: "https://fable.co/book/x-9798227159359",
      everand:
        "https://www.everand.com/book/756478990/Before-Harpazo-Emunah-Short-StoryCollection-1",
    },
    videos: [
      {
        id: "W0K1CUGwgw8",
        title: "John's Journey: An Inspiring Sports Fiction",
        description:
          "From weakling to weightlifting champ, to save his mother's life.",
      },
    ],
  },
  {
    id: "the-beasts-mark",
    title: "The Beast's Mark",
    readingOrder: 6,
    author: "Janice Wee",
    series: "Emunah Chronicles #2",
    synopsis:
      "Emunah and all Born Again Christians vanished. Those left behind were confounded. Some said the Christians were Raptured while others blamed it on an alien abduction. From the chaos, a charismatic global leader emerged. His name was Beast. Is he the saviour of humanity, or the Devil in disguise?",
    excerpt: `"Jayden, what do you think you are doing?" Leo hollered. "You brought her to The Ark?" The resident geek and paranoid protector of the underground city stormed up to Jayden. As architect of the underground base, Leo reserved the right to name it after Noah's Ark.
"I rescued a fellow believer from the gulag," Jayden retorted. "What did you expect me to do? Let those monsters take her?"
"She," Leo jabbed his finger at Ava's forehead, "is not one of us." His head snapped back as he glared at Jayden. "Or have you forgotten?"
"That was the past. She's changed," Jayden replied.
"She is one of Jezebel's disciples. By bringing her here, you have compromised this base," Leo's face matched his crimson shirt as the vein on his temple popped up. "Send. Her. Back."`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book2-1760411038422.jpg",
    links: {
      books2read: "https://books2read.com/u/38Wwjr",
      amazon:
        "https://www.amazon.com.au/Beasts-Mark-2-Janice-Wee/dp/B0CB2DDH1W",
      barnesNoble:
        "https://www.barnesandnoble.com/w/the-beasts-mark-janice-wee/1143737088",
      kobo: "https://www.kobo.com/sg/en/ebook/the-beast-s-mark",
      fable: "https://fable.co/book/x-9798223989080",
      everand: "",
    },
    videos: [],
  },
  {
    id: "mei",
    title: "Mei",
    readingOrder: 7,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Former employee of Beast Corp flees the country when she realises the truth behind The Immortality Project. She meets a little girl on a plane, then the child vanishes with others in The Rapture. She meets the child's grieving father Boris, who offers her free lodging in his home when she loses access to all her bank accounts. She returns to her family in her East, but is thrown out because of her recent conversion to Christianity and joins the underground church. After a near death experience, she meets Boris once more, and this time, he agrees to train her to be a rescue pilot. Her past as a clone handler returns to haunt her, when in her new life, she encounters her former subject, a super powered clone on a killing spree.",
    excerpt: `Flaming green eyes seared the recesses of her mind.
Green fire radiating heat more intense than a furnace, danced in the palms of her supervisor's hands.
"You're dispensable," inhuman eyes bore through her, death being the only means of exiting Beast Corp.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book5mei-1760410829482.jpg",
    links: {
      books2read: "https://books2read.com/u/mq5ZzO",
      amazon: "https://www.amazon.com/Mei-5-Janice-Wee/dp/B0DGDFTP31",
      barnesNoble:
        "https://www.barnesandnoble.com/w/mei-janice-wee/1146253390",
      kobo: "https://www.kobo.com/sg/en/ebook/mei-7",
      hoopla:
        "https://www.hoopladigital.com/ebook/the-mark-and-the-martyr-janice-wee/18017937",
      fable: "https://fable.co/book/x-9798227256447",
      everand:
        "https://www.everand.com/book/766036071/Mei-Emunah-Short-Stories-5",
    },
    videos: [
      {
        id: "bpASpLyaPj4",
        title: "Beast Corps' Clone Handler. Now Rescue Pilot",
        description: "She knows too much. They want her dead.",
      },
    ],
  },
  {
    id: "liams-dark-secrets",
    title: "Liam's Dark Secrets",
    readingOrder: 8,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Sue trusted her husband Liam and her best friend Emma, completely. When she catches Liam and Emma in their affair, her world crumbles. Liam sees no reason why he can't keep both women. He stops seeing Emma briefly to appease Sue, before resuming his affair. As long as Sue's kept in the dark, he can have it all. When Emma flaunts their affair to Sue, she confronts him. As Sue forgives Liam, Sue vanishes. Realising the Rapture just happened, Liam turns over a new leaf. He breaks off with Emma but it's too late. He continues funding The Ark with his businesses, refusing to go underground with the other new believers. The problem is, Liam's business partner and the reason behind his trillion dollar fortune just happens to be the Antichrist. Can Liam dance with the devil and emerge unscathed?",
    excerpt: `Is it possible to love someone too much?
The more you love a person, the more power he has to hurt you.
The more you trust someone, the greater the pain of betrayal.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book6liam-1760410829493.jpg",
    links: {
      books2read: "https://books2read.com/u/4j7O8Y",
      amazon:
        "https://www.amazon.com/Liams-Dark-Secrets-Janice-Wee/dp/B0DJRXQCV4",
      barnesNoble:
        "https://www.barnesandnoble.com/w/liams-dark-secrets-janice-wee/1146394455?ean=9798227661562",
      kobo: "https://www.kobo.com/sg/en/ebook/liam-s-dark-secrets",
      hoopla:
        "https://www.hoopladigital.com/ebook/the-mark-and-the-martyr-janice-wee/18017937",
      fable: "https://fable.co/book/x-9798227020956",
      everand:
        "https://www.everand.com/book/777662079/Liam-s-Dark-Secrets-Emunah-ShortStories-6",
    },
    videos: [
      {
        id: "PJ1EiNOuFUU",
        title: "The pain of betrayal",
        description:
          "Is it possible to love someone too much? The more you love a person, the more power he has to hurt you. The more you trust someone, the greater the pain of betrayal. Liam's Dark Secrets. By Janice Wee",
      },
      {
        id: "daPAMt-N-YA",
        title: "Left behind",
        description:
          "Sue's mysterious disappearance is the first domino to fall. Liam's secrets darken as the pit deepens.",
      },
    ],
  },
  {
    id: "lydias-12-christmases",
    title: "Lydia's 12 Christmases",
    readingOrder: 9,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Lydia was born on Christmas Day. She hated Christmas because people celebrated Christmas and forgot her birthday. Follow Lydia's journey through life from her pampered childhood, through love and losses. Experience her growth into a true hero across 12 Christmases that define her life.",
    excerpt: `"I hate Christmas," Lydia scowled as she slammed the phone.
"What happened?" Abigail asked the birthday girl.
"Joey said he'd come, but had to back out last minute because his grandma wouldn't let him skip their family Christmas party." Lydia slumped forward. Her eyes glistened with unshed tears. The girl had a crush on Joey since she was twelve; she'd turn beetroot-red when he talked to her in church, but the moron was totally oblivious to her feelings for him.
"Hey, I'm here," Abigail gave her old pal a big bear hug. "Troy's coming and he's way hotter than Joey."`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book7lydia-1760410829051.jpg",
    links: {
      books2read: "https://books2read.com/u/3nkE2o",
      amazon:
        "https://www.amazon.com/Lydias-12-Christmases-Janice-Wee/dp/B0DN3QDCWJ",
      barnesNoble:
        "https://www.barnesandnoble.com/w/lydias-12-christmases-janice-wee/1146520842",
      kobo: "https://www.kobo.com/sg/en/ebook/lydia-s-12-christmases",
      hoopla:
        "https://www.hoopladigital.com/ebook/the-mark-and-the-martyr-janice-wee/18017937",
      fable: "https://fable.co/book/x-9798227708984",
      everand:
        "https://www.everand.com/book/791178867/Lydia-s-12-Christmases-Emunah-ShortStories-7",
    },
    videos: [
      {
        id: "dvH0nguzr5w",
        title: "Lydia's 12 Christmases",
        description:
          "This poignant tale spans from the joyous chaos of her birth on a snowy Christmas Day, through the tender years of childhood, into the complexities of teenage love, and beyond into a world transformed by unimaginable events.",
      },
    ],
  },
  {
    id: "marys-flight",
    title: "Mary's Flight",
    readingOrder: 10,
    author: "Janice Wee",
    series: "Emunah Short Stories",
    synopsis:
      "Samantha rescued Mary from a lynching mob and sheltered the young Jewish woman in her home. Mary decided to make Aliyah and with the help of Barry, started a new life in Israel. With Barry as her landlord, Leah and Jim as fellow tenants, Mary found a new family. The southern border was invaded and Leah and her boyfriend who were attending a music festival died with the other victims there. War broke out. Then there was peace and security. Life resumed normalcy for a season. Without warning, Christians all over the world vanished in The Rapture, including Samantha and Jim. Barry and Mary were the only ones left in Barry's apartment. In the chaos that followed, a new leader emerged to unite the world. His name was Beast. Barry and Mary fell in love as they leaned on each other to survive when nature itself turned against humanity. Their trust in Beast was shattered when Mei, Barry's new friend and Beast's former employee exposed Beast for what he truly was. Two witnesses sent by God preached every day while performing miracles. Barry and Mary joined the community that grew around their teachings. Beast desecrated the temple and those who stood against him were slaughtered. To flee the relentless persecution, Barry, Mary and other Jewish believers fled to a city built in the rock, that was prepared for them. A promise of great hope to their people was about to be fulfilled. It involved a woman who was given eagle's wings.",
    excerpt: `Then Beast's army stormed the village, burning cottages, beheading anyone they could lay their hands on who did not have Beast's mark.
"Gotcha!" A soldier with soul-less eyes caught Billy.
The boy trembled like a leaf, his wide eyes betraying utter terror as the soldier pressed a dagger against the tiny child's throat.
A pomelo, large and heavy, fell from the branch directly above them, hitting the soldier's head, knocking him out.
Billy wiggled out of the unconscious man's grasp and ran into Mei's arms.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book8mary-1760410829856.jpg",
    links: {
      books2read: "https://books2read.com/u/4NNakJ",
      amazon:
        "https://www.amazon.com/Marys-Flight-8-Janice-Wee/dp/B0DSK1X348",
      barnesNoble:
        "https://www.barnesandnoble.com/w/marys-flight-janice-wee/1146790785",
      kobo: "https://www.kobo.com/sg/en/ebook/mary-s-flight",
      hoopla:
        "https://www.hoopladigital.com/ebook/the-mark-and-the-martyr-janice-wee/18017937",
      fable: "https://fable.co/book/x-9798230826545",
      everand:
        "https://www.everand.com/book/812073909/Mary-s-Flight-Emunah-Short-Stories-8",
    },
    videos: [
      {
        id: "Gw-E2VA-TSE",
        title: "Mary's Flight",
        description:
          "Fleeing from a mob, Mary finds true love in a new land. But all is not what it seems. Mary's Flight is the grand finale of Emunah Short Stories, but can be read as a stand alone novel.",
      },
    ],
  },
  {
    id: "billy-the-lion-boy",
    title: "Billy The Lion Boy",
    readingOrder: 11,
    author: "Janice Wee",
    series: "The Adventures of Billy Lionheart #1",
    synopsis:
      "Billy runs away from his foster home to find his real parents. Leonard, his lion nanny tags alone. When the pair gets hopelessly lost, they settle in Kangaroo land where Leonard meets the lioness Lina who becomes his mate. The lion couple adopt Billy as their human cub, raising him with their lion cubs. Billy finds a lead as to his parents whereabouts and leads his lion family in a merry hunt searching for his biological parents.",
    excerpt: `"Shall we get a room?" Leonard chuffed.
"Yes!" Lina and Billy chirped in unison.
"Okay," Leonard stood tall, his head held high and chest out, asserting his position as the head of their household. "Billy, as the sole human in our family, you will get a room for us."
"Yes, sir!" Billy roared, delighted at his important status from his human birth.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billylionheart-1760404534476.jpg",
    links: {
      books2read: "https://books2read.com/u/mdxKd5",
      amazon:
        "https://www.amazon.com/Billy-Lion-Boy-Adventures-Lionheart/dp/B0F1X3BX9S/",
      barnesNoble:
        "https://www.barnesandnoble.com/w/billy-the-lion-boy-janice-wee/1147124637",
      kobo: "https://www.kobo.com/sg/en/ebook/billy-the-lion-boy",
      hoopla: "https://www.hoopladigital.com/title/18055006",
      fable: "https://fable.co/book/x-9798230757245",
      everand:
        "https://www.everand.com/book/838262768/Billy-The-Lion-Boy-The-Adventures-ofBilly-Lionheart-1",
    },
    videos: [
      {
        id: "1tr8mrQuQf8",
        title: "Billy The Lion Boy Chapter 1",
        description:
          "Billy's an escape artist who gives his lion guardian and babysitter, perpetual nightmares. Having discovered that his real parents are alive, Billy runs away from home, in order to find them.",
      },
      {
        id: "1eAlI2Vnbqg",
        title: "Billy The Lion Boy Chapter 2",
        description:
          "Billy's an escape artist who gives his lion guardian and babysitter, perpetual nightmares. After several attempts, Billy escapes his foster home, but at a price.",
      },
      {
        id: "rjkZTe1RwhE",
        title: "Billy Lion-napped",
        description:
          "Billy's lion bros were kidnapped. Can Papa Lion, Leonard and Billy save them?",
      },
    ],
  },
  {
    id: "billy-bluma-double-trouble",
    title: "Billy & Bluma: Double Trouble",
    readingOrder: 12,
    author: "Janice Wee",
    series: "The Adventures of Billy Lionheart #2",
    synopsis:
      "In trying to cure Leonard Lion's toothache, best friends Billy and Bluma discover a treasure map with a gold coin. Mathilda's image on the coin convinces the kids that the map would lead them to their resurrected nanny. After outsmarting the headmaster and sending Leonard on a wild goose chase, Billy and Bluma sneak out of St Lydia's Academy to search for Aunt Mathilda. Squabbling, making up, getting chased by a grizzly bear who had enough of their antics, driving each other up the wall until they arrive at the blue-flower tree. There was no sign of Mathilda. Instead they met the charismatic Junta who hosted them in Carnival City. Bluma discovered a forbidden book in their hotel room, which raised red flags. Upon tracking the pair down, Leonard confirmed the children's suspicions. But he was too late.",
    excerpt: `It dawned on Leonard that his abductors dropped him on a small island, in the middle of nowhere.
The lion had a brilliant idea.
In old movies, a man stranded on an island would build a fire and send smoke signals to planes flying overhead. Then someone would notice the signals and rescue him.
Now, how can a lion without opposing thumbs, start a fire?`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billybluma-1760404534699.jpg",
    links: {
      books2read: "https://books2read.com/u/mYeeQP",
      amazon:
        "https://www.amazon.com/Bluma-Double-Trouble-Adventures-Lionheart/dp/B0F62CH8F4/",
      barnesNoble:
        "https://www.barnesandnoble.com/s/billy bluma double trouble janice wee",
      kobo: "https://www.kobo.com/sg/en/ebook/billy-bluma-double-trouble",
      fable: "https://fable.co/book/x-9798230168522",
      everand:
        "https://www.everand.com/book/852082166/Billy-Bluma-Double-Trouble-TheAdventures-of-Billy-Lionheart-2",
    },
    videos: [
      {
        id: "KXufmLKZva8",
        title: "Billy & Bluma Chapter 1",
        description:
          "Meet Cha Cha, Billy, Bluma and Leonard in Billy & Bluma. Double Trouble. This is how the fiasco of a fantasy adventure, all begins.",
      },
      {
        id: "MfRjEy6pyg4",
        title: "Junta's Trap!",
        description:
          "The treasure map that's supposed to lead Billy and Bluma to their resurrected nanny",
      },
    ],
  },
  {
    id: "secret-hero-flying-lion",
    title: "Secret Hero & His Flying Lion",
    readingOrder: 13,
    author: "Janice Wee",
    series: "The Adventures of Billy Lionheart #3",
    synopsis:
      "Billy returns with superhuman strength when he starts his freshman year with Bluma in St Lydia's Academy. King Jayden personally delivers upgraded paw mitts to grand Leonard the ability to fly. As the school term starts, the shenanigans begin. A tug of war reveals Billy's hidden strength to their gym teacher, Samson, whom Billy suspects is an immortal. His new friends, who were mentored by Samson disagree. The school goes on a field trip to Celestial City. While pets were allowed to accompany the students on the trip, lions were not considered pets, and Leonard was turned away. Overhearing a crisis that the school trip might be cancelled because they were short of one chaperone, opportunistic lion, Leonard, masqueraded as a human to take on a chaperone's role. When the cave collapsed with Billy and his friends in it, Billy revealed his strength, saving the day. But that wasn't the only mishap. Leonard Lion returned from the trip poisoned. Billy and his friends suspect foul play.",
    excerpt: `"Good Morning, Professor Abel," Leonard spoke through his translator, with a posh, aristocratic accent. "I heard that you are short of chaperones for the International School Trip."
Startled, the Professor craned his neck, looking up at Leonard's towering form. Standing on his hind legs, poised like a human man, Leonard prided himself for his authoritative vibe.
"I'm the Chief Executive Officer and co-founder of Billy's Secret Recipe and Emissary of King Jayden."
The headmaster's mouth fell open as he gaped at the lion who carried himself like a high ranking man.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/billyhero-1760404535888.jpg",
    links: {
      books2read: "https://books2read.com/u/bpgDOX",
      amazon:
        "https://www.amazon.com/Secret-Flying-Adventures-Billy-Lionheart/dp/B0FB17DNHS/",
      barnesNoble:
        "https://www.barnesandnoble.com/w/secret-hero-his-flying-lion-janice-wee/1147464475",
      kobo: "https://www.kobo.com/sg/en/ebook/secret-hero-his-flying-lion",
      fable: "https://fable.co/book/x-9798231549245",
      everand:
        "https://www.everand.com/book/865955978/Secret-Hero-His-Flying-Lion-TheAdventures-of-Billy-Lionheart-3",
    },
    videos: [
      {
        id: "_25vtHegnl4",
        title: "Super Powers Gone Wild",
        description:
          "Billy just got a power boost. Leonard received new gadgets. What happens when their powers spin out of control? Secret Hero & His Flying Lion.",
      },
      {
        id: "reZdAGNZs9I",
        title: "Who poisoned the lion",
        description:
          "Billy's lion guardian returns from the school field trip sick. Someone poisoned Leonard Lion. But who? Why?",
      },
      {
        id: "-al7PtfQ0pk",
        title: "Billy & Bluma Besties or more?",
        description:
          "How Bluma brought chaos into Billy's life. The evolution of their relationship from toddlerhood to their teenage years.",
      },
    ],
  },
  {
    id: "dragon-unbound",
    title: "Dragon Unbound",
    readingOrder: 14,
    author: "Janice Wee",
    series: "Emunah Chronicles",
    synopsis:
      "The 7 Year Tribulation concluded with the defeat of the Unholy Trinity. Dragon was imprisoned for a thousand years. Billy and Bluma, children born during the Tribulation who entered the Millennial kingdom are now grown up. Billy proposes marriage which Bluma accepts. Together, they start a family which grows into a nation. Having received supernatural strength, Billy helps the immortals save lives and keep the peace. Leonard Lion plays nanny to Billy's descendants. Billy and Bluma, madly in love, steal time together in spite of their growing responsibilities. All is good until the thousand years are up and Dragon sows the seeds of deception, turning loved ones against one another and stirring up the final rebellion. This is a riveting epic fantasy novel with powerful spiritual themes. It's a must read for anyone who loves Christian fiction.",
    excerpt: `"Let's celebrate our baby to be!" Bluma suggested.
As they walked down the street to their favourite restaurant, a van skidded out of control, towards an oncoming car.
There was no way the car could avoid it.
He may be super strong but he was not invulnerable.
But he couldn't let those people die.
"Billy, no!" Bluma whisper-yelled at him.
Billy lunged between the vehicles.
He had to time this right.
BAM!`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/81268eda-35d8-4cc1-9a2d-ad62e11509a4/dragonunbound-1768352449933.jpg?width=8000&height=8000&resize=contain",
    links: {
      books2read: "https://books2read.com/u/4NJ9p9",
      amazon:
        "https://www.amazon.com/Dragon-Unbound-Janice-Wee/dp/B0FGGHY6GS",
      barnesNoble:
        "https://www.barnesandnoble.com/w/dragon-unbound-janice-wee/1147756040",
      kobo: "https://www.kobo.com/sg/en/ebook/dragon-unbound-1",
      hoopla: "https://www.hoopladigital.com/title/18664798",
      fable: "https://fable.co/book/x-9798231368747",
      everand:
        "https://www.everand.com/book/883124950/Dragon-Unbound",
    },
    videos: [
      {
        id: "tU4LnnpnbUQ",
        title: "Dragon Unbound",
        description:
          "A fantasy epic saga by Janice Wee. Dragon, the Great Deceiver, is bound for a thousand years. Mortals walk with immortals, lions run free and babysit humans. Until...",
      },
      {
        id: "--zUPERLPfY",
        title: "The Dragon's Spell",
        description:
          "After a thousand years of plotting, Dragon executes his revenge. YA epic fantasy novel by Janice Wee, with provocative faith and family themes.",
      },
      {
        id: "3qYv8rvklaE",
        title: "A father's heartbreak",
        description:
          "To me, this is the most painful moment in Dragon Unbound. Billy, with all his power and good intentions could not be everything to everyone. He was never there for Leia. With so many children and descendants, he didn't even know his own daughter's name, until it was too late. Read the full epic fantasy novel, Dragon Unbound. By Janice Wee.",
      },
    ],
  },
  {
    id: "the-quest-for-immortality",
    title: "The Quest for Immortality",
    readingOrder: 15,
    author: "Janice Wee",
    series: "Emunah Chronicles Novel",
    synopsis:
      "Emunah and her friends uncover a corporate conspiracy revolving around Beast Corp. Investigations expose Emunah and her friends to the occult and to murder attempts by those who want them silenced. With the death of Penelope, Jezebel enters their circle, splitting the gang. A group of born again Christians warn their friends about end times bible prophecies, and the upcoming Rapture of the Church. These are brushed aside as loonies, though Leo, a staunch atheist builds an underground bunker to shelter himself and his friends should his predictions about an upcoming world war, or an apocalypse resulting from the abuse of technology come to pass. During one of Jayden's wild parties, the Rapture of the Church happens, shaking those in the group who are left behind. The remaining friends are splintered into two groups one loyal to Jezebel who is Beast's ally, and the other of new Christian converts who go underground with Leo. The second act of the story takes you through the events in Revelation, fleshing out the seven seals, seven trumpets and seven bowl judgement and the Battle of Armageddon. The final act begins with the defeat of the unholy trinity and the imprisoning of the Great Deceiver, Dragon. A time of peace and happiness on earth where immortals walk among mortals is disrupted by the release of Dragon who leads the final rebellion. The novel blends the convergence of technology and current events with Bible Prophecy for an earth shaking read.",
    excerpt: `Ben followed her supervisor into the room. Just before the door closed, she slipped in and ducked into a nearby closet. Even for her petite frame, it was a tight fit.
She could sense Ben's excitement as he stepped into the transference cylinder. After this, his mind would leave his mortal body and enter the immortal, super-powered clone carefully cultivated for him. Her heart pounded with anticipation as she watched in silence.
Something didn't seem right. Ben's face paled. The terror on his face freaked her out. What did he see? What's going on?
"Let me out! I changed my mind," Ben's voice resonated through the room as he thrashed the cylinder.`,
    coverUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/book3k-1760074872135.jpg",
    links: {
      amazon:
        "https://www.amazon.com/Quest-Immortality-Emunah-Chronicles-Novel-ebook/dp/B0CPBZ6W12",
      barnesNoble:
        "https://www.barnesandnoble.com/w/the-quest-for-immortality-janice-wee/1144267520?ean=9798223665823",
      kobo: "https://www.kobo.com/sg/en/ebook/the-quest-for-immortality-2?sId=d4a67167-60ea-4c01-a8c9-74e8f5963ca1&ssId=j-VLNfpKfeT-kFOMI9AeN",
      fable: "https://fable.co/book/x-9798223312659",
      everand:
        "https://www.everand.com/book/694567955/The-Quest-For-Immortality-EmunahChronicles-1",
      freePdf:
        "https://www.janicewee.com/books/the-quest-for-immortality-full.pdf",
    },
    videos: [
      {
        id: "WWMFpSRllzQ",
        title: "Can Science Beat Death?",
        description:
          "Mei explores Beast Corp's immortality solution through cloning, stumbling on an eerie corporate conspiracy. The Quest for Immortality, a speculative science fiction fantasy thriller by Janice Wee is available now!",
      },
      {
        id: "2Vw-ctRMXHk",
        title: "Hope in the midst of darkness.",
        description:
          "The Chronicles of Emunah a speculative, science fiction fantasy series set in the end times. Of disturbing technology, prophetic dreams, and two possible futures.",
      },
    ],
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getBooksByReadingOrder(): Book[] {
  return [...books].sort((a, b) => a.readingOrder - b.readingOrder);
}

export function getBookIdByTitle(title: string): string | undefined {
  return books.find((b) => b.title.toLowerCase() === title.toLowerCase())?.id;
}
