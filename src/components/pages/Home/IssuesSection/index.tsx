import { useIssueMatch } from 'Hooks/useIssueMatch';

import { IssueTextImage } from './IssueTextImage';

export const IssuesSection = () => {
  const isFirstIssue = useIssueMatch('1');
  const isSecondIssue = useIssueMatch('2');

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
          <IssueTextImage image="sm1_cover" />. While Mykola Ridnyi&apos;s iconic series &quot;Blindspot&quot;{' '}
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
    </section>
  );
};
