import { AnimatedLink } from 'Src/components/common/AnimatedLink';

export interface IssueImageData {
  descriptionHtml: JSX.Element;
  title: string;
  author: string;
  comments?: string;
  previewImage: string;
  images: string[];
}

export const issuesImagesData: { [k: string]: { [k: string]: IssueImageData } } = {
  issue1: {
    sm1_andrii: {
      descriptionHtml: (
        <div>
          <span className="italic">Excerpt from the essay: </span>It is the time when you ask questions, like “Who am
          I?” “What can I give?” “Which values hold my world together?” And also you make lots and lots of mistakes. And
          I have to say that my grandpa was right. Somehow, he always is. I am 22, and I am going through all of this
          now, but this time, those phases are exacerbated by the war. As I discussed this with auntie Olha, she said
          that the war does not really instill the new qualities in you, but rather amplifies those that have been
          hiding deep down in your soul. The equation is simple: the shitheads will be even bigger shitheads, and those
          who took responsibility and helped others will be the true heroes of this war. And I agree with her.
        </div>
      ),
      title: 'Something I Will Keep In Me Forever',
      author: 'by Andrii Ushytskyi',
      previewImage: 'issue1/sm1_andrii-preview.jpg',
      images: ['issue1/sm1_andrii.jpg']
    },
    sm1_vsevolod: {
      descriptionHtml: (
        <div>
          <span className="italic">Excerpt from the essay: </span>Spring of 2022. I sit by the window of the Japanese
          library in Kyiv. Opposite is the old building of one of the Kyiv Polytechnic Institute campuses, built at the
          end of the 19th century. It has a frail, slightly dilapidated appearance with a cracked facade constructed out
          of already darkened bricks. With time, some of them fell off. The lawn around is strewn with the white petals
          of an already blooming apri-cot tree, while the new stalks of green grass sprout from the concrete walk
          leading towards the entrance. The strong gusts of wind rocked the trees and bushes, giving the scene a dynamic
          effect. And life. All of this is accompanied by a loud howl of an air raid siren. During the war, time feels
          differently. I would say that it is its finiteness that is felt, rather than time itself. In Japanese, there
          is a particular term for the elevated, bittersweet feeling that arises from contemplating the transience of
          life and the realization that nothing around can be eternal —もののあはれ [mono no aware]. This term, which is
          often translated as “the sad charm of things”, in fact, has no English equivalent. Such aesthetic principle
          appeals to the search for beauty in the ephemeral and the impermanent — to the desire of the soul to grasp and
          realize the elusive essence of things.
        </div>
      ),
      title: 'Mono-No-Aware',
      author: 'by Vsevolod Kazarin',
      comments: 'Photographs by Vsevolod Kazarin & Sebastian Wells',
      previewImage: 'issue1/sm1_vsevolod-preview.jpg',
      images: ['issue1/sm1_vsevolod1.jpg', 'issue1/sm1_vsevolod2.jpg']
    },
    sm1_christina: {
      descriptionHtml: (
        <div>
          With the beginning of Russia&rsquo;s invasion of Ukraine, Odesa-born multimedia artist Christina Erturk
          started to feel an unbearable longing for returning home. Although she has made Warsaw her home after 5 years
          of living and starting a career there, Christina&rsquo;s connection with her homeland only became stronger as
          the war came to her country. In an interview with her close friend Andrii Ushytskyi, Christina meditates on
          how her vision of Ukraine evolved since February 24 and speaks on expressing her feelings through the art
          project titled 33 letters for Ukraine. With all the emotional weight she bears, Christina illustrated each
          letter of the Ukrainian alphabet by implementing deliberate details that allow her to ultimately showcase the
          real senses behind her works and search for ways to emotional healing.
        </div>
      ),
      title: 'P Is For Victory',
      author: 'by Christina Erturk',
      comments: 'Interview by Andrii Ushytskyi',
      previewImage: 'issue1/sm1_christina-preview.jpg',
      images: ['issue1/sm1_christina1.jpg', 'issue1/sm1_christina2.jpg', 'issue1/sm1_christina3.jpg']
    },
    sm1_sonya: {
      descriptionHtml: (
        <div>
          Mother, a 1932 painting by Alexander Deinka, forms the basis for this illustration and raises questions about
          the role of Russian mothers in the war while establishing an ambiguous reference to the popular term Mother
          Russia — a common national maternal personification of Russia.
        </div>
      ),
      title: 'Realities',
      author: 'by Sonya Marian',
      previewImage: 'issue1/sm1_sonya-preview.jpg',
      images: ['issue1/sm1_sonya.jpg']
    },
    sm1_portraits: {
      descriptionHtml: (
        <div>
          When Vsevolod Kazarin, a fashion photographer, and Sebastian Wells, a documentary photographer, met in Kyiv,
          they decided to team up and combine their skills. Being both interested in the young generation of creatives
          in Kyiv, they started to work on a series of portraits that focuses on young people that don&rsquo;t stop
          self-expressing their identities through their fashion. While using the means of documentary photography and
          portraying the protagonists out of the situation and in their respective environment, the photographs are also
          a witness of a historical moment.
        </div>
      ),
      title: '32 Young People Photographed in Kyiv, Ukraine, April & May 2022',
      author: 'by Vsevolod Kazarin & Sebastian Wells',
      previewImage: 'issue1/sm1_portraits-preview.jpg',
      images: [
        'issue1/sm1_portraits1.jpg',
        'issue1/sm1_portraits2.jpg',
        'issue1/sm1_portraits3.jpg',
        'issue1/sm1_portraits4.jpg',
        'issue1/sm1_portraits5.jpg'
      ]
    },
    sm1_kurmaz: {
      descriptionHtml: (
        <div>
          Shortly after the outbreak of the full-scale war Sasha Kurmaz had to leave his hometown Kyiv. In
          Ivano-Frankivsk he found himself in the “Working Room” (ukr. Робоча кімната) together with a group of artists
          who, like him, were looking for a safe place. Together they tried to understand through artistic practice what
          was happening. Untitled yet (2022, work in progress) is a series of collages that were inspired by some of the
          banners made for the anti-Russia protests taking place throughout Europe. Similar to those DIY protest banners
          which combined different images along with text, Sasha works on his collages by using photographs and images
          he finds in the media, gluing them onto cardboard, and writing over them.
        </div>
      ),
      title: 'Untitled (yet)',
      author: 'by Sasha Kurmaz',
      previewImage: 'issue1/sm1_kurmaz-preview.jpg',
      images: ['issue1/sm1_kurmaz1.jpg', 'issue1/sm1_kurmaz2.jpg', 'issue1/sm1_kurmaz3.jpg', 'issue1/sm1_kurmaz4.jpg']
    },
    sm1_cover: {
      descriptionHtml: (
        <div>
          Living With The Fear of Being Harmed by Other Humans (2020-2021) is a series of silkscreen prints consisting
          of images of mutilated human bodies. With it, Sasha Kurmaz attempts to create a body of work that resists the
          violence of people against people. “I believe that it is possible to wage an individual struggle against the
          current state of affairs,” says the artist, reflecting on the fact that all throughout history humans have
          inflicted pain and suffering onto each other. Images from this series have been used to envelope the first
          issue.
        </div>
      ),
      title: 'Living With The Fear of Being Harmed by Other Humans',
      author: 'by Sasha Kurmaz',
      previewImage: 'issue1/sm1_cover-preview.jpg',
      images: ['issue1/sm1_cover1.jpg', 'issue1/sm1_cover2.jpg']
    },
    sm1_ridnyi: {
      descriptionHtml: (
        <div>
          Fighting has been going on in the Donbass eversince separatists in eastern Ukraine declared the so-called
          “people&rsquo;s republics” in the cities of Donetsk and Luhansk in 2014. Over 13,000 people had already died
          by the time the full-scale war began. The artist Mykola Ridnyi was already looking for an answer to the war
          and its images back then. His work The Blind Spot is named after the epony-mous part of the retina, which is
          actually blind, but whose missing visual information is filled in to form a complete image in the brain. Under
          this title, Mykola assembles a series of photographs from media reports on the war in the Donbas in order to
          almost completely destroy them with black ink. Similar to the Blind Spot syndrome, only the outer-most or
          innermost circle of the image remains visible — the rest is subject to the viewer&rsquo;s imagina-tion. For
          Mykola, the disease is an apt metaphor for the propaganda-induced social blindness in times of war, which
          creates a polarized view of reality and divides society into us and them, ours and theirs.
        </div>
      ),
      title: 'The Blind Spot',
      author: 'by Mykola Ridnyi',
      previewImage: 'issue1/sm1_ridnyi-preview.jpg',
      images: ['issue1/sm1_ridnyi1.jpg', 'issue1/sm1_ridnyi2.jpg']
    },
    sm1_bucha: {
      descriptionHtml: (
        <div>
          As Russian forces faltered in reaching Kyiv, they transformed Bucha from an once-coveted commuter suburb into
          a landscape of terror, killing unsuspicious civilians who carried out their everyday activities. Vsevolod
          Kazarin and Sebastian Wells protocol what two young residents from Bucha, Christina and Artem, endured during
          the city&rsquo;s occupation and while escaping it.
        </div>
      ),
      title: 'Surviving Bucha',
      author: 'by Vsevolod Kazarin & Sebastian Wells',
      previewImage: 'issue1/sm1_bucha-preview.jpg',
      images: ['issue1/sm1_bucha1.jpg', 'issue1/sm1_bucha2.jpg', 'issue1/sm1_bucha3.jpg', 'issue1/sm1_bucha4.jpg']
    }
  },
  issue2: {
    sm2_vsevolod: {
      descriptionHtml: (
        <div>
          <span className="italic">Essay excerpt: </span>
          It was one of their last December missile attacks on Kyiv that caused major interruptions in the city&rsquo;s
          water supply and broke our boiler. For the twelve residents of our co-living space, the topic of the broken
          boiler became the central theme of our gatherings and discussions. The apartment owner, who was contacted
          numerous times, promised to call plumbers, but weeks passed, and neither the owner nor the plumbers were
          anywhere to be seen. We tried to fix the boiler ourselves since Max, one of the apartment residents, works in
          a plumbing company. But even his professional knowledge and experience were not enough to get the hot water
          running again in our place.
        </div>
      ),
      title: 'Russians Stole My Hot Water or the Last Day of the Year',
      author: 'by Vsevolod Kazarin',
      previewImage: 'issue2/sm2_vsevolod-preview.png',
      images: ['issue2/sm2_vsevolod.png']
    },
    sm2_dima_tolkachov: {
      descriptionHtml: (
        <div>
          <span className="italic">Essay excerpt: </span>
          To understand something, you must be able to picture it yourself. In order to understand what is going on in
          Ukraine, we should allow ourselves to imagine it. The term &lsquo;imagination&lsquo; implies the ability to
          create a narrative from an image or photograph, filling the void of space where the picture has been taken.
          [...] Talking about open wounds in the middle of the tragedy, every Ukrainian artist is chained to the context
          of war. You can&rsquo;t escape it. The simple picture of a flower made during the war will have an enormous
          semantic load. Images survived despite everything and hence require a major effort of imagination to be
          received and assimilated.
        </div>
      ),
      title: 'Neither Pure Illusion Nor All of the Truth',
      author: 'by Dima Tolkachov',
      comments: 'Text by Ivanna Kozachenko',
      previewImage: 'issue2/sm2_dima_tolkachov-preview.jpg',
      images: ['issue2/sm2_dima_tolkachov1.jpg', 'issue2/sm2_dima_tolkachov2.jpg']
    },
    sm2_dmytro: {
      descriptionHtml: (
        <div>
          <span className="italic">Essay excerpt: </span>During the russian full-scale invasion of Ukraine, I visited
          the village of Moshchun during April and May 2022 on the Irpin River, the place near Kyiv where a key
          breakthrough and containment of the russian army took place. I came here to help to reconstruct my
          wife&rsquo;s grandparents&rsquo; house, which was partly damaged after the battle. The missile smashed an old
          bookshelf — novels by Dostoevsky, Tolstoy, Fadeev, Ostrovsky spilled out. All of them, of which millions of
          copies were published during the Soviet era, lie mixed with dust after the explosion. It is difficult to
          breathe here because of fiberglass particles in the air. I carefully gather these books and put them in boxes,
          wiping the dust from them. Apparently, this is how hegemony collapses.
        </div>
      ),
      title: 'Unpacking My Library',
      author: 'by Dmytro Chepurnyi',
      previewImage: 'issue2/sm2_dmytro-preview.png',
      images: ['issue2/sm2_dmytro.png']
    },
    sm2_kherart: {
      descriptionHtml: (
        <div>
          Under the constant pressure of searches by russian soldiers, threats of detention and interrogation, six
          artists met secretly in a basement studio in the occupied Ukrainian city of Kherson.
        </div>
      ),
      title: 'Art in a Time Capsule',
      author: 'Text by Yuliia Manukian',
      previewImage: 'issue2/sm2_kherart-preview.jpg',
      images: ['issue2/sm2_kherart1.jpg', 'issue2/sm2_kherart2.jpg']
    },
    sm2_occupation: {
      descriptionHtml: (
        <div>
          “For people living in occupied territories, life is a matter of merely existing. However, moving away is no
          easy task. Imagine your family, and generations preceding it, had lived in the Donbas all their life, and
          suddenly you&rsquo;re forced to start your life from zero.” Encounters with young people from Kyiv who grew up
          in the now occupied territories in the south and east of Ukraine.
        </div>
      ),
      title: 'Unstable Equilibrium',
      author: 'by Vsevolod Kazarin and Sebastian Wells',
      previewImage: 'issue2/sm2_occupation-preview.jpg',
      images: [
        'issue2/sm2_occupation1.jpg',
        'issue2/sm2_occupation2.jpg',
        'issue2/sm2_occupation3.jpg',
        'issue2/sm2_occupation4.jpg',
        'issue2/sm2_occupation5.jpg'
      ]
    },
    sm2_hero: {
      descriptionHtml: (
        <div>
          Born in Germany, Sebastian Wells grew up in a country where heroes were associated with the past, and with
          some among these so-called heroes having eradicated the lives of millions in the religious fervor of National
          Socialism. If anything, heroes belonged in American television series, sportscasting, or museums. In the
          Ukrainian art world however, he encounters heroes around every corner. What role do heroes play in
          contemporary Ukrainian art? And how do they appear from a German perspective?
        </div>
      ),
      title: 'герой·їня',
      author: 'Text by Sebastian Wells',
      previewImage: 'issue2/sm2_hero-preview.jpg',
      images: ['issue2/sm2_hero1.jpg', 'issue2/sm2_hero2.jpg']
    },
    sm2_ziyatdinova_crimea: {
      descriptionHtml: (
        <div>
          As the russian full-scale invasion of Ukraine began, Lia Motrechko, a 20-year-old Ukrainian-Crimean activist,
          immediately established herself as one of the leading voices of the Crimean Tatar nation. In an interview with
          Andrii Ushytskyi, Lia reflects on the importance of re-examining the Crimean Tatar history to combat russian
          imperialism, speaks about the power of language, and shares her experiences of being an activist while not
          having been able to visit her home since 2014. Emine Ziyatdinova&rsquo;s photographs accompany the interview,
          and tell the story of the photographer&rsquo;s family — who like so many other Crimean Tatars were deported to
          Uzbekistan in 1944 — and at the same time that of an entire population group, whose past and present are full
          of humiliations that have never been properly addressed.
        </div>
      ),
      title: 'I am Ukrainian, but I Am Also Qirimli',
      author: 'by Emine Ziyatdinova',
      comments: `Interview by Andrii Ushytskyi`,
      previewImage: 'issue2/sm2_ziyatdinova_crimea-preview.jpg',
      images: ['issue2/sm2_ziyatdinova_crimea1.jpg', 'issue2/sm2_ziyatdinova_crimea2.jpg']
    },
    sm2_daniil: {
      descriptionHtml: (
        <div>
          The second issue of Solomiya opens with photographs taken by Daniil Russov, who captured the Ukrainian wartime
          realities. Those images do not leave the viewer indifferent — they catch our attention and leave us at a loss
          for words, offering space for the heavy silence to take over.
        </div>
      ),
      title: 'Minute of Silence',
      author: 'by Daniil Russov',
      previewImage: 'issue2/sm2_daniil-preview.jpg',
      images: ['issue2/sm2_daniil1.jpg', 'issue2/sm2_daniil2.jpg']
    },
    sm2_lesha_berezovskiy: {
      descriptionHtml: (
        <div>
          Over the last year, Berezovskiy has been working on the series War Knocked on My Door Again on countless trips
          through Ukraine. His thoughts often circle around his family in Luhansk, who now live in territory occupied by
          russia. He would love to visit his grandparents in Aidar, who struggle with severe health problems and only
          receive treatment in a hospital mainly used by russian soldiers. An inhuman choice between never seeing each
          other again — or probably never being able to return. His pictures tell of the war — and of this unbearable
          division.
        </div>
      ),
      title: 'War Knocked on My Door Again',
      author: 'by Lesha Berezovskyi',
      previewImage: 'issue2/sm2_lesha_berezovskiy-preview.jpg',
      images: [
        'issue2/sm2_lesha_berezovskiy1.jpg',
        'issue2/sm2_lesha_berezovskiy2.jpg',
        'issue2/sm2_lesha_berezovskiy3.jpg'
      ]
    },
    sm2_liviy_bereh: {
      descriptionHtml: (
        <div>
          The volunteer group Livyj Bereh is most active in the villages in Kyiv, Chernihiv and now Kharkiv regions.
          Since May, Livyj Bereh&rsquo;s small crew has sent 25 vehicles, including a bus, to the military, which have
          done their part to liberate the deoccupied territories in the Ukraine, and rebuilt countless homes and
          schools. With the financial support of its benefactors, Livyj Bereh has recently been able to repair more than
          90 house roofs in the Kharkiv region alone. An art of its own. Support Livyj Bereh{' '}
          <a href="https://linktr.ee/livyj_bereh" target="_blank" rel="noopener noreferrer" className="hover:underline">
            here.
          </a>
        </div>
      ),
      title: 'Livyj Bereh',
      author: '',
      previewImage: 'issue2/sm2_livyj_bereh-preview.jpg',
      images: ['issue2/sm2_livyj_bereh1.jpg', 'issue2/sm2_livyj_bereh2.jpg', 'issue2/sm2_livyj_bereh3.jpg']
    },
    sm2_alevtina: {
      descriptionHtml: (
        <div>
          For Solomiya&rsquo;s second issue, the artist Alevtina Kakhidze designed an exclusive cover for us - with
          drawings that speak for themselves.
        </div>
      ),
      title: 'Our Hands Became More Skilful During the War - The Cover',
      author: 'by Alevtina Kakhidze',
      previewImage: 'issue2/sm2_alevtina-preview.jpg',
      images: ['issue2/sm2_alevtina1.jpg', 'issue2/sm2_alevtina2.jpg', 'issue2/sm2_alevtina3.jpg']
    }
  },
  issue3: {
    sm3_khustka: {
      descriptionHtml: (
        <div>
          Introducing the “khustka” — a traditional Ukrainian garment that translates to “handkerchief” or “scarf” in
          English. Throughout Ukrainian history, khustkas were primarily worn by women to cover their heads, necks, or
          shoulders and held both traditional and symbolic meaning. Passed down from mothers to daughters, they were
          believed to offer protection against the evil eye.
          <br />
          <br />
          In present-day Ukraine, khustkas have taken on various forms, yet their cultural significance remains present.
          In collaboration with the SOC.I.A collective, we are delighted to present our khustka edition, which serves as
          both a garment and an art object.
          <br />
          <br />
          With 23 pieces available, each khustka is a unique part of a large-scale SOC.I.A painting-performance on
          chiffon and exclusive to our micro sponsors, who chose the €200 pre-order option. Don&rsquo;t miss out on
          reserving your very own khustka before they fly off the shelves, and decorate your home or outfit with it!
          <br />
          <br />
          <div className="w-max">
            <AnimatedLink to="https://www.instagram.com/soc.i.a/" target="_blank" rel="noopener noreferrer">
              About SOC.I.A:
            </AnimatedLink>
          </div>
          The members of SOC.I.A - Arthur and Igor Spaskyi - focus on finding the balance between spray culture brush
          technique and experimental tools, depending on sound, music and its representation in a gallery or public
          space. In their performative videos, they materialize sound through the combination of dance movements,
          painting, and carefully selected or composed music. Acting as conductors of musical and sound waves, they
          experience complete freedom and pleasure in a meditative process.
        </div>
      ),
      title: 'Khustka - Limited Edition',
      author: 'By SOC.I.A & Solomiya Magazine',
      previewImage: 'issue3/sm3_khustka-preview.jpg',
      images: [
        'issue3/sm3_khustka1.jpg',
        'issue3/sm3_khustka2.jpg',
        'issue3/sm3_khustka3.jpg',
        'issue3/sm3_khustka4.jpg',
        'issue3/sm3_khustka5.jpg',
        'issue3/sm3_khustka6.jpg'
      ]
    },
    sm3_polovinko: {
      descriptionHtml: (
        <div>
          Margaryta Polovinko channels her deep sensitivity to wartime events and loss into her art. She uses her own
          blood in her art to represent ongoing trauma, symbolizing the physical manifestation of inner pain and the
          changing colors of blood mirroring emotional pain.
        </div>
      ),
      title: 'Painting From Wounds',
      author: 'Margarita Polovinko',
      previewImage: 'issue3/sm3_polovinko-preview.jpg',
      images: ['issue3/sm3_polovinko1.jpg', 'issue3/sm3_polovinko2.jpg', 'issue3/sm3_polovinko3.jpg']
    },
    sm3_war_dreams: {
      descriptionHtml: (
        <div>
          In Pisky, a small town near the Donetsk airport, a holiday campground for children has been transformed into a
          training ground for a paramilitary militia. Young and old, most of whom had never held a weapon in their hands
          before, are now learning how to kill. While the full-scale war is still in the distant future, the invasion of
          Donbas by Russian separatists has been going on for a year already. Two Italian photographers, Jean-Marc Caimi
          and Valentina Piccinni spent over a week with these soon-to-be soldiers. Most of them are eager to have their
          portraits taken. In their work War Dreams (2015), Caimi and Piccinni approach their subjects with what they
          call a “psychoanalytic therapy session,” asking them to pause, close their eyes, and reflect on their
          thoughts. After taking the photograph, the soldiers open their eyes again and jot down what they saw while
          having their eyes shut. Shortly after, they head out to battle. For many of them, this would be the last
          photograph of their lives.
        </div>
      ),
      title: 'War Dreams',
      author: 'Jean-Marc Caimi and Valentina Piccinni',
      previewImage: 'issue3/sm3_war_dreams-preview.jpg',
      images: [
        'issue3/sm3_war_dreams1.jpg',
        'issue3/sm3_war_dreams2.jpg',
        'issue3/sm3_war_dreams3.jpg',
        'issue3/sm3_war_dreams4.jpg',
        'issue3/sm3_war_dreams5.jpg'
      ]
    },
    sm3_vsevolod: {
      descriptionHtml: (
        <div>
          <span className="italic">What happens if Ukraine loses? What makes me a man? Am I useful?</span> Article 65 of
          the Constitution of Ukraine states that the defense of the Fatherland, independence, and territorial integrity
          of Ukraine, as well as respect for its state symbols, are the duties of Ukrainian citizens - a duty, which is
          exemplified by the story of Denys, a young volunteer who died defending his country against Russian troops.
          The war in Ukraine has led to the mobilization of hundreds of thousands of men, subordinating their bodies to
          the demands of the conflict. As the conflict continues, the boundaries of individual identity are blurred, and
          bodies become interchangeable, serving as resources for the war effort. With questions and photographs,
          Vsevolod Kazarin reflects on the impact of war on individuals and society, raising questions about the nature
          of human existence in times of conflict.
        </div>
      ),
      title: 'Article 65',
      author: 'Vsevolod Kazarin',
      previewImage: 'issue3/sm3_vsevolod-preview.jpg',
      images: [
        'issue3/sm3_vsevolod1.jpg',
        'issue3/sm3_vsevolod2.jpg',
        'issue3/sm3_vsevolod3.jpg',
        'issue3/sm3_vsevolod4.jpg'
      ]
    },
    sm3_mashtaler: {
      descriptionHtml: (
        <div>
          <span className="italic">Alex Mashtaler</span> captures the vibrant and diverse world around him through his
          lens, showcasing a range of motifs oscillating between street photography and post-industrial subculture. His
          deeply personal touch is evident in every photograph, offering a glimpse into his own soul. Growing up in
          difficult circumstances, Alex&rsquo;s journey to become a photographer was one of resilience and
          determination. Through his photography, Alex challenges conventional notions of beauty and perfection, instead
          opting for raw and honest images that reflect the harshness of reality. Solomiya&rsquo;s third issue dedicates
          its cover and an extensive portfolio of yet unpublished works to the young photographer.
        </div>
      ),
      title: 'The World of Alex Mashtaler',
      author: 'Alex Mashtaler',
      previewImage: 'issue3/sm3_mashtaler-preview.jpg',
      images: [
        'issue3/sm3_mashtaler1.jpg',
        'issue3/sm3_mashtaler2.jpg',
        'issue3/sm3_mashtaler3.jpg',
        'issue3/sm3_mashtaler4.jpg',
        'issue3/sm3_mashtaler5.jpg'
      ]
    },
    sm3_bazdyrieva: {
      descriptionHtml: (
        <div>
          What do Western European, well-intentioned efforts to address climate change have to do with Russia&rsquo;s
          war in Ukraine? A lot, says Asia Bazdyrieva in a conversation about unsustainable sustainability, partial
          perspectives and the colonial gaze.
        </div>
      ),
      title: 'So Here I Lend My Body',
      author: 'Asia Bazdyrieva in conversation with Sebastian Wells',
      previewImage: 'issue3/sm3_bazdyrieva-preview.jpg',
      images: ['issue3/sm3_bazdyrieva.jpg']
    },
    sm3_dondyuk: {
      descriptionHtml: (
        <div>
          Maxim Dondyuk&rsquo;s photographs are extraordinary documents of contemporary Ukrainian history. His immersive
          images of the Ukrainian Revolution of Dignity in 2014 brought him worldwide fame. In conversation with
          Solomiya, Maxim shares his personal journey as an artist and photojournalist, gives insights into the evolving
          landscape of war journalism, and discusses the challenges posed by propaganda. The interview unfolds as a
          compelling exploration of the complexities inherent in conveying the emotional depth of war, and of the
          intricate relationship between art and documentation.
        </div>
      ),
      title: 'War Through The Looking Glass or When Salt Looks Like Sugar',
      author: 'Maxim Dondyuk in conversation with Andrii Ushytskyi',
      previewImage: 'issue3/sm3_dondyuk-preview.jpg',
      images: [
        'issue3/sm3_dondyuk1.jpg',
        'issue3/sm3_dondyuk2.jpg',
        'issue3/sm3_dondyuk3.jpg',
        'issue3/sm3_dondyuk4.jpg'
      ]
    },
    sm3_naumann: {
      descriptionHtml: (
        <div>
          Strongly influenced by her upbringing in the former GDR, <span className="italic">Henrike Naumann</span> is
          best known for creating large-scale installations using second-hand furniture. Invited to showcase her work at
          the Ivano-Frankivsk Drama Theater for the 2023 edition of the Kyiv Biennial, the show&rsquo;s final outcome
          was different from her usual practice. A dialog about the differences between Eastern and Western
          perspectives, German and Ukrainian socialist legacies, and a toy rabbit from Naumann&rsquo;s childhood that
          became a soldier.
        </div>
      ),
      title: 'Making Memories. The Dangers of Nostalgia.',
      author: 'Henrike Naumann in conversation with Ivanna Kozachenko, Photo by Polina Polikarpova/ArtsLooker',
      previewImage: 'issue3/sm3_naumann-preview.jpg',
      images: ['issue3/sm3_naumann.jpg']
    },
    sm3_cpa: {
      descriptionHtml: (
        <div>
          The Russian invasion of Ukraine is not only a means of seizing new territory. Extensive architectural and
          infrastructural projects highlight how the occupiers transform space to shape social interactions and the
          memories of its inhabitants. While Ivanna Kozachenko provides insights into such violent transformations under
          occupation, Commercial Public Art illustrated the article exclusively for Solomiya, referring to the biography
          of the collective, whose members grew up in Crimea.
        </div>
      ),
      title: 'Architecture of Occupation',
      author: 'Ivanna Kozachenko and Commercial Public Art',
      previewImage: 'issue3/sm3_cpa-preview.jpg',
      images: ['issue3/sm3_cpa.jpg']
    },
    sm3_zoria: {
      descriptionHtml: (
        <div>
          Excerpt from the Essay: When I travel to visit them, I dress up for the airport after my all-night and all-day
          trains. At times, I play up my American accent, obtained during childhood, to remain invisible. Code-switching
          as a method of camouflage. It&rsquo;s easier to play the tired westerner than bearing the preconceptions of
          the war-battered Ukrainian woman. That I never seem to meet.
          <br />
          <br />
          “Where are you from?”
          <br />
          <br />
          The ultimate bummer.
          <br />
          <br />
          “Are you Spanish?” I get asked, rather bewilderingly, by a Polish man on an airplane. For a moment, I am
          intrigued by the mental image of a Spanish woman of this man, and how I could possibly fit it. Of course, I
          could not. I decide to take the gesture as it is - a friendly, if not clumsy attempt to establish a
          connection. I weigh the implications of revealing myself, the conversation playing out in my head, from
          awkward beginning to prescient end.
          <br />
          <br />
          “No.” I smile, but draw the conversation to a close.
        </div>
      ),
      title: 'A Stalled Traveler&rsquo;s Account',
      author: 'Lucy Zoria',
      previewImage: 'issue3/sm3_zoria-preview.jpg',
      images: ['issue3/sm3_zoria.jpg']
    },
    sm3_wells: {
      descriptionHtml: (
        <div>
          Millions of Ukrainians fled the country with the outbreak of full-scale war, and tens of thousands of them
          sought refuge in Berlin. The city had a profound impact on them, and they, in turn, left their mark on the
          city. In exile in Berlin and other European cities, they ask themselves: Who are we? On a question of
          perspective on a tightrope walk between two worlds.
        </div>
      ),
      title: 'Here, Elsewhere, Everywhere',
      author: 'Sebastian Wells',
      previewImage: 'issue3/sm3_wells-preview.jpg',
      images: [
        'issue3/sm3_wells1.jpg',
        'issue3/sm3_wells2.jpg',
        'issue3/sm3_wells3.jpg',
        'issue3/sm3_wells4.jpg',
        'issue3/sm3_wells5.jpg',
        'issue3/sm3_wells6.jpg'
      ]
    }
  }
};
