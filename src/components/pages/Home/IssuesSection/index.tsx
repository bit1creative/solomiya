import { useIssueMatch } from 'Hooks/useIssueMatch';

import { IssueTextImage } from './IssueTextImage';

export const IssuesSection = () => {
  const isFirstIssue = useIssueMatch('1');
  const isSecondIssue = useIssueMatch('2');
  const isThirdIssue = useIssueMatch('3');

  return (
    <section className="snap-start px-4 text-center font-nice-regular text-3xl md:px-10 lg:px-20 lg:text-5xl xl:text-6xl">
      {isFirstIssue && (
        <>
          In Solomiya&apos;s very first issue, you will encounter some of those who grew up in an independent Ukraine
          and are paying a huge price for the European integration they seek. We invite you to meet young creatives from
          Kyiv and elsewhere who write <IssueTextImage image="sm1_andrii" />
          <IssueTextImage image="sm1_vsevolod" />, create <IssueTextImage image="sm1_christina" />
          <IssueTextImage image="sm1_sonya" /> and don&rsquo;t stop self-expressing their identities through their
          fashion <IssueTextImage image="sm1_portraits" />. Further, we show for the first time brandnew works by Sasha
          Kurmaz <IssueTextImage image="sm1_kurmaz" />, who also created the cover motif{' '}
          <IssueTextImage image="sm1_cover" />. While Mykola Ridnyi&apos;s iconic series ”Blindspot”{' '}
          <IssueTextImage image="sm1_ridnyi" /> recalls the beginning of the Russian invasion of Ukraine in 2014, a
          protocol traces the lives of two young inhabitants from Bucha who survived the Russian occupation in 2022{' '}
          <IssueTextImage image="sm1_bucha" />.
        </>
      )}
      {isSecondIssue && (
        <>
          Having established a distinct voice with the first issue of Solomiya, we continue to showcase the works of
          talented artists who reflect on the complexity and the of the Ukrainian context{' '}
          <IssueTextImage image="sm2_vsevolod" /> <IssueTextImage image="sm2_dima_tolkachov" />
          <IssueTextImage image="sm2_dmytro" />. In the magazine&rsquo;s second issue, we invite you to appreciate
          artworks that were created in Kherson despite the russian occupation <IssueTextImage image="sm2_kherart" />;
          to read the stories of Ukrainians who had to flee the war twice — in 2014 and 2022{' '}
          <IssueTextImage image="sm2_occupation" />; to engage in conversations that explore the concept of the heroic{' '}
          <IssueTextImage image="sm2_hero" /> and the language of witnessing; and to highlight perspectives of Crimean
          Tatars <IssueTextImage image="sm2_ziyatdinova_crimea" /> that russia has been attempting to silence for many
          years. This issue brings together texts, artworks, and photographs from Daniil Russov{' '}
          <IssueTextImage image="sm2_daniil" />, Oleksii (Lesha) Berezovskiy{' '}
          <IssueTextImage image="sm2_lesha_berezovskiy" />, Livyj Bereh <IssueTextImage image="sm2_liviy_bereh" />,
          Alevtina Kakhidze <IssueTextImage image="sm2_alevtina" />, Max Tsukan, Oleksandr Naselenko, Oleksandra
          Kalinichenko and others. This issue created in Kyiv and designed in Berlin, is a testament to resistance
          through the means of art.
        </>
      )}
      {isThirdIssue && (
        <>
          Time flies by. Russia&apos;s war against Ukraine enters its 10th year next spring. The persistent cruelty
          makes us increasingly averse to the unspeakable violence that seems to be growing globally. ”The war put
          Ukraine on the map” was the resolute refrain that echoed in the language of the international community during
          the nascent stages of the war, but the question remains: for how long? The seemingly endless nature of the
          ongoing bloodshed poses a very real threat for Ukraine to once again “disappear from the map” and be shadowed
          by indifference. Will we ever see the world beyond this horror? Amidst all the uncertainty, we come to you
          with some auspicious news: Solomiya&apos;s third issue is soon to be released. Between Kyiv and Berlin, we
          embark on a quest for artistic reflection voicing new perspectives on Ukraine and beyond. Our exploration
          delves into the burgeoning Ukrainian exile community that is shaping Berlin&apos;s cultural scene; we unravel
          the threads connecting war to the reinvigoration of masculinity; and we examine the prism of Western
          post-colonial perceptions of Ukraine. Through a kaleidoscope of photography, visual arts, interviews and
          essays, we contest the terrors of imperial oppression without losing sight of fragility, beauty, subjectivity
          and nativity. Please join us on this journey! From now on, you can already pre-order your copy of
          Solomiya&apos;s third issue for €20 and even become our micro-sponsor. We offer two Solomiya micro-sponsorship
          options. By supporting the magazine with either €100 or €200, you will receive a copy of our latest issue as
          well as an honorary mention on the magazine&apos;s supporter&apos;s board. In addition, for a €200 support,
          you will receive a unique piece of garment: a khustka <IssueTextImage image="sm3_khustka" />, produced in
          collaboration with the Kyiv-based grafitti-duo @SOC.I.A. Each khustka is one of a kind, and the number of
          pieces is limited to 23.
        </>
      )}
    </section>
  );
};
