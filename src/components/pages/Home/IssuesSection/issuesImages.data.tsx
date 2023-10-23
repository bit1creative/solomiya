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
          When Vsevolod Kazarin, a fashion photographer, and Sebastian Wells, a documentary photographer, met in Kyiv,
          they decided to team up and combine their skills. Being both interested in the young generation of creatives
          in Kyiv, they started to work on a series of portraits that focuses on young people that don’t stop
          self-expressing their identities through their fashion. While using the means of documentary photography and
          portraying the protagonists out of the situation and in their respective environment, are a witness of a
          historical moment. 
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
          With the beginning of Russia&apos;s invasion of Ukraine, Odesa-born multimedia artist Christina Erturk started
          to feel an unbearable longing for returning home. Although she has made Warsaw her home after 5 years of
          living and starting a career there, Christina&apos;s connection with her homeland only became stronger as the
          war came to her country. In an interview with her close friend Andrii Ushytskyi, Christina meditates on how
          her vision of Ukraine evolved since February 24 and speaks on expressing her feelings through the art project
          titled 33 letters for Ukraine. With all the emotional weight she bears, Christina illustrated each letter of
          the Ukrainian alphabet by implementing deliberate details that allow her to ultimately showcase the real
          senses behind her works and search for ways to emotional healing.
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
          <span className="italic">Excerpt from the essay: </span>It is the time when you ask questions, like “Who am
          I?” “What can I give?” “Which values hold my world together?” And also you make lots and lots of mistakes. And
          I have to say that my grandpa was right. Somehow, he always is. I am 22, and I am going through all of this
          now, but this time, those phases are exacerbated by the war. As I discussed this with auntie Olha, she said
          that the war does not really instill the new qualities in you, but rather amplifies those that have been
          hiding deep down in your soul. The equation is simple: the shitheads will be even bigger shitheads, and those
          who took responsibility and helped others will be the true heroes of this war. And I agree with her.
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
          Ivano-Frankivsk he found himself in the “Working Room” (ukr. «Робоча кімната») together with a group of
          artists who, like him, were looking for a safe place. Together they tried to understand through artistic
          practice what was happening. Untitled yet (2022, work in progress) is a series of collages that were inspired
          by some of the banners made for the anti-Russia protests taking place throughout Europe. Similar to those DIY
          protest banners which combined different images along with text, Sasha works on his collages by using
          photographs and images he finds in the media, gluing them onto cardboard, and writing over them.
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
          “people&apos;s republics” in the cities of Donetsk and Luhansk in 2014. Over 13,000 people had already died by
          the time the full-scale war began. The artist Mykola Ridnyi was already looking for an answer to the war and
          its images back then. His work The Blind Spot is named after the epony-mous part of the retina, which is
          actually blind, but whose missing visual information is filled in to form a complete image in the brain. Under
          this title, Mykola assembles a series of photographs from media reports on the war in the Donbas in order to
          almost completely destroy them with black ink. Similar to the Blind Spot syndrome, only the outer-most or
          innermost circle of the image remains visible — the rest is subject to the viewer&apos;s imagina-tion. For
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
          the city&apos;s occupation and while escaping it.
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
          It was one of their last December missile attacks on Kyiv that caused major interruptions in the city’s water
          supply and broke our boiler. For the twelve residents of our co-living space, the topic of the broken boiler
          became the central theme of our gatherings and discussions. The apartment owner, who was contacted numerous
          times, promised to call plumbers, but weeks passed, and neither the owner nor the plumbers were anywhere to be
          seen. We tried to fix the boiler ourselves since Max, one of the apartment residents, works in a plumbing
          company. But even his professional knowledge and experience were not enough to get the hot water running again
          in our place.
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
          of war. You can&apos;t escape it. The simple picture of a flower made during the war will have an enormous
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
          breakthrough and containment of the russian army took place. I came here to help to reconstruct my wife&apos;s
          grandparents&apos; house, which was partly damaged after the battle. The missile smashed an old bookshelf —
          novels by Dostoevsky, Tolstoy, Fadeev, Ostrovsky spilled out. All of them, of which millions of copies were
          published during the Soviet era, lie mixed with dust after the explosion. It is difficult to breathe here
          because of fiberglass particles in the air. I carefully gather these books and put them in boxes, wiping the
          dust from them. Apparently, this is how hegemony collapses.
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
          suddenly you&apos;re forced to start your life from zero.” Encounters with young people from Kyiv who grew up
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
          having been able to visit her home since 2014. Emine Ziyatdinova&apos;s photographs accompany the interview,
          and tell the story of the photographer&apos;s family — who like so many other Crimean Tatars were deported to
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
          Since May, Livyj Bereh&apos;s small crew has sent 25 vehicles, including a bus, to the military, which have
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
          For Solomiya&apos;s second issue, the artist Alevtina Kakhidze designed an exclusive cover for us - with
          drawings that speak for themselves.
        </div>
      ),
      title: 'Our Hands Became More Skilful During the War - The Cover',
      author: 'by Alevtina Kakhidze',
      previewImage: 'issue2/sm2_alevtina-preview.jpg',
      images: ['issue2/sm2_alevtina1.jpg', 'issue2/sm2_alevtina2.jpg', 'issue2/sm2_alevtina3.jpg']
    }
  }
};
