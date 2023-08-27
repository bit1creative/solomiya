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
      previewImage: 'sm1_andrii-preview.jpg',
      images: ['sm1_andrii.jpg']
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
      previewImage: 'sm1_vsevolod-preview.jpg',
      images: ['sm1_vsevolod1.jpg', 'sm1_vsevolod2.jpg']
    },
    sm1_christina: {
      descriptionHtml: (
        <div>
          With the beginning of Russia’s invasion of Ukraine, Odesa-born multimedia artist Christina Erturk started to
          feel an unbearable longing for returning home. Although she has made Warsaw her home after 5 years of living
          and starting a career there, Christina’s connection with her homeland only became stronger as the war came to
          her country. In an interview with her close friend Andrii Ushytskyi, Christina meditates on how her vision of
          Ukraine evolved since February 24 and speaks on expressing her feelings through the art project titled 33
          letters for Ukraine. With all the emotional weight she bears, Christina illustrated each letter of the
          Ukrainian alphabet by implementing deliberate details that allow her to ultimately showcase the real senses
          behind her works and search for ways to emotional healing.
        </div>
      ),
      title: 'P Is For Victory',
      author: 'by Christina Erturk',
      comments: 'Interview by Andrii Ushytskyi',
      previewImage: 'sm1_christina-preview.jpg',
      images: ['sm1_christina1.jpg', 'sm1_christina2.jpg', 'sm1_christina3.jpg']
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
      previewImage: 'sm1_sonya-preview.jpg',
      images: ['sm1_sonya.jpg']
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
      previewImage: 'sm1_portraits-preview.jpg',
      images: [
        'sm1_portraits1.jpg',
        'sm1_portraits2.jpg',
        'sm1_portraits3.jpg',
        'sm1_portraits4.jpg',
        'sm1_portraits5.jpg'
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
      previewImage: 'sm1_kurmaz-preview.jpg',
      images: ['sm1_kurmaz1.jpg', 'sm1_kurmaz2.jpg', 'sm1_kurmaz3.jpg', 'sm1_kurmaz4.jpg']
    },
    sm1_cover: {
      descriptionHtml: (
        <div>
          Living With The Fear of Being Harmed by Other Humans (2020-2021) is a series of silkscreen prints consisting
          of images of mutilated human bodies. With it, Sasha Kurmaz attempts to create a body of work that resists the
          violence of people against people. “I believe that it is possible to wage an individual struggle against the
          current state of affairs,” says the artist, reflecting on the fact that all throughout history humans have
          inflicted pain and suffering onto each other. Images from this series have been used to envelope the first
          issue of.
        </div>
      ),
      title: 'Living With The Fear of Being Harmed by Other Humans',
      author: 'by Sasha Kurmaz',
      previewImage: 'sm1_cover-preview.jpg',
      images: ['sm1_cover1.jpg', 'sm1_cover2.jpg']
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
      previewImage: 'sm1_ridnyi-preview.jpg',
      images: ['sm1_ridnyi1.jpg', 'sm1_ridnyi2.jpg']
    },
    sm1_bucha: {
      descriptionHtml: (
        <div>
          As Russian forces faltered in reaching Kyiv, they transformed Bucha from an once-coveted commuter suburb into
          a landscape of terror, killing unsuspicious civilians who carried out their everyday activities. Vsevolod
          Kazarin and Sebastian Wells protocol what two young residents from Bucha, Christina and Artem, endured during
          the city’s occupation and while escaping it.
        </div>
      ),
      title: 'Surviving Bucha',
      author: 'by Vsevolod Kazarin & Sebastian Wells',
      previewImage: 'sm1_bucha-preview.jpg',
      images: ['sm1_bucha1.jpg', 'sm1_bucha2.jpg', 'sm1_bucha3.jpg', 'sm1_bucha4.jpg']
    }
  }
};
